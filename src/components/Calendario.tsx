import React, { useState, useMemo } from 'react';
import {
  Calendar as CalendarIcon,
  Search,
  CheckCircle2,
  BellRing,
  Download,
  Filter,
  FileSpreadsheet,
  Info,
  ArrowRight
} from 'lucide-react';

const WHATSAPP_NUMBER = '595993535291';

// Mapping of last digit to standard DNIT base due day
const BASE_DUE_DAYS: Record<number, number> = {
  0: 7,
  1: 9,
  2: 11,
  3: 13,
  4: 15,
  5: 17,
  6: 19,
  7: 21,
  8: 23,
  9: 25,
};

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const DAY_NAMES = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
];

// Approximate national holidays in Paraguay (fixed dates)
const PARAGUAY_HOLIDAYS_FIXED = [
  '01-01', // Año Nuevo
  '03-01', // Día de los Héroes
  '05-01', // Día del Trabajador
  '05-14', // Independencia Nacional
  '05-15', // Independencia Nacional
  '06-12', // Paz del Chaco
  '08-15', // Fundación de Asunción
  '09-29', // Victoria de Boquerón
  '12-08', // Virgen de Caacupé
  '12-25', // Navidad
];

function isHoliday(date: Date): boolean {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return PARAGUAY_HOLIDAYS_FIXED.includes(`${mm}-${dd}`);
}

// Adjusts date if it falls on Saturday, Sunday or Holiday
function getNextBusinessDay(year: number, monthIndex: number, baseDay: number): Date {
  const target = new Date(year, monthIndex, baseDay);
  while (target.getDay() === 0 || target.getDay() === 6 || isHoliday(target)) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

export type TaxRubro = 'all' | 'iva' | 'rg90' | 'ire' | 'irp' | 'retenciones';

export interface CalendarioProps {
  initialDigit?: number;
  showHero?: boolean;
}

export default function Calendario({ initialDigit = 7, showHero = true }: CalendarioProps) {
  const [rucInput, setRucInput] = useState(initialDigit !== undefined ? `1234567-${initialDigit}` : '1234567-8');
  const [selectedDigit, setSelectedDigit] = useState<number>(initialDigit);
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedRubro, setSelectedRubro] = useState<TaxRubro>('all');

  // Extract last digit before verification dash or last character of number
  const handleRucChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setRucInput(val);

    const match = val.match(/(\d+)(?:-\d+)?$/);
    if (match && match[1]) {
      const numbersOnly = match[1];
      const last = parseInt(numbersOnly[numbersOnly.length - 1], 10);
      if (!isNaN(last) && last >= 0 && last <= 9) {
        setSelectedDigit(last);
      }
    } else {
      const allDigits = val.replace(/\D/g, '');
      if (allDigits.length > 0) {
        const last = parseInt(allDigits[allDigits.length - 1], 10);
        if (!isNaN(last)) setSelectedDigit(last);
      }
    }
  };

  const handleSelectDigit = (digit: number) => {
    setSelectedDigit(digit);
    setRucInput((prev) => {
      const parts = prev.split('-');
      if (parts.length > 1) {
        const base = parts[0].slice(0, -1) + digit;
        return `${base}-${parts[1]}`;
      }
      return `${digit}`;
    });
  };

  const baseDay = BASE_DUE_DAYS[selectedDigit] ?? 21;

  const exactDueDate = useMemo(() => {
    return getNextBusinessDay(selectedYear, selectedMonth, baseDay);
  }, [selectedYear, selectedMonth, baseDay]);

  const upcomingDueDates = useMemo(() => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      let m = selectedMonth + i;
      let y = selectedYear;
      if (m > 11) {
        m = m - 12;
        y = y + 1;
      }
      const due = getNextBusinessDay(y, m, baseDay);
      list.push({
        periodMonth: MONTH_NAMES[(m + 11) % 12],
        declarationMonth: MONTH_NAMES[m],
        day: due.getDate(),
        monthShort: MONTH_NAMES[m].slice(0, 3),
        dayName: DAY_NAMES[due.getDay()],
        year: y,
        fullDateStr: `${DAY_NAMES[due.getDay()]}, ${due.getDate()} de ${MONTH_NAMES[m]} de ${y}`
      });
    }
    return list;
  }, [selectedMonth, selectedYear, baseDay]);

  const annualSchedule = useMemo(() => {
    const months = [];
    for (let m = 0; m < 12; m++) {
      const due = getNextBusinessDay(selectedYear, m, baseDay);
      const periodIndex = (m + 11) % 12;
      const periodYear = m === 0 ? selectedYear - 1 : selectedYear;

      months.push({
        monthIndex: m,
        periodLabel: `${MONTH_NAMES[periodIndex]} ${periodYear}`,
        declarationLabel: `${MONTH_NAMES[m]} ${selectedYear}`,
        dueDate: due,
        dayName: DAY_NAMES[due.getDay()],
        dateFormatted: `${due.getDate()} de ${MONTH_NAMES[m]}`,
        taxes: [
          { name: 'IVA (F-120)', required: true },
          { name: 'RG 90', required: true },
          ...(m === 2 ? [{ name: 'IRP Serv. Personales', required: false }] : []),
          ...(m === 1 ? [{ name: 'IRE Resimple', required: false }] : [])
        ]
      });
    }
    return months;
  }, [selectedYear, baseDay]);

  const handleExportCSV = () => {
    const headers = ['Periodo Fiscal', 'Mes Presentacion', 'Dia Base', 'Fecha Limite Exacta', 'Dia de la Semana'];
    const rows = annualSchedule.map((item) => {
      return [
        `"${item.periodLabel}"`,
        `"${item.declarationLabel}"`,
        baseDay,
        `"${item.dateFormatted}"`,
        `"${item.dayName}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Calendario_DNIT_${selectedYear}_RUC_termina_${selectedDigit}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappReminderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Estudio Cáceres, acabo de consultar mi Calendario de Vencimiento.\n\n` +
    `Mi RUC termina en *${selectedDigit}*.\n` +
    `Mi vencimiento de IVA mensual es el día *${baseDay}* de cada mes.\n` +
    `Me gustaría recibir un recordatorio e información sobre sus planes de liquidación mensual de impuestos para profesionales y PYMEs.`
  )}`;

  return (
    <div id="vencimientos" className="w-full bg-[#E9E6E0] text-[#213C2F] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        {showHero && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#B8955E]/15 border border-[#B8955E]/30 text-[#213C2F] px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase">
              <CalendarIcon className="w-3.5 h-3.5 text-[#B8955E]" />
              <span>Herramienta Oficial DNIT Paraguay 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#213C2F] tracking-tight">
              Calendario Perpetuo de Vencimientos DNIT
            </h1>
            <p className="text-base sm:text-lg text-[#213C2F]/80 leading-relaxed font-sans">
              En Paraguay, las declaraciones de IVA, IRP, IRE y RG 90 vencen según el último dígito del RUC antes del guion. 
              Consultá con exactitud tu fecha límite, exportá tus calendarios a Excel y programá recordatorios para operar sin multas.
            </p>
          </div>
        )}

        {/* Main Grid: Control Panel (Left) & Result Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form & Filters */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#C6C3BE] shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#C6C3BE]/50 pb-4">
              <h2 className="text-lg font-bold font-heading text-[#213C2F] flex items-center gap-2">
                <Search className="w-5 h-5 text-[#B8955E]" />
                <span>Paso 1: Ingresá tu RUC o CI</span>
              </h2>
              <span className="text-xs font-mono font-bold text-[#213C2F]/70 bg-[#E9E6E0] px-2.5 py-1 rounded-md">
                DNIT Res. 2026
              </span>
            </div>

            {/* RUC Input with auto detection */}
            <div>
              <label htmlFor="ruc-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-2">
                Escribí tu RUC o Cédula de Identidad:
              </label>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#213C2F]/40">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  id="ruc-input"
                  type="text"
                  value={rucInput}
                  onChange={handleRucChange}
                  placeholder="Ej: 1458932-3 o 2548971"
                  className="block w-full pl-11 pr-32 py-3.5 bg-[#E9E6E0]/40 border border-[#C6C3BE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8955E] focus:border-transparent rounded-xl text-base font-semibold text-[#213C2F] font-mono transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs font-mono font-bold bg-[#213C2F] text-white px-2.5 py-1 rounded-lg border border-[#B8955E]/40">
                    Termina en: <strong className="text-[#B8955E]">{selectedDigit}</strong>
                  </span>
                </div>
              </div>
              <p className="mt-2 text-xs text-[#213C2F]/70 flex items-center gap-1.5 font-sans">
                <Info className="h-3.5 w-3.5 text-[#B8955E] shrink-0" />
                <span>La DNIT toma el último número antes del guion de control.</span>
              </p>
            </div>

            {/* Direct Digit Selector Buttons (0 to 9) */}
            <div>
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-3">
                O hacé clic en tu número final de RUC:
              </span>
              <div className="grid grid-cols-5 gap-2">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => {
                  const isSelected = selectedDigit === digit;
                  return (
                    <button
                      key={digit}
                      type="button"
                      onClick={() => handleSelectDigit(digit)}
                      className={`h-11 rounded-xl font-mono text-base font-bold flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#213C2F] text-white shadow-md scale-105 border-2 border-[#B8955E]'
                          : 'bg-white text-[#213C2F] hover:bg-[#E9E6E0] border border-[#C6C3BE]'
                      }`}
                    >
                      {digit}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Month and Year Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="select-month" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-2">
                  Mes de Presentación:
                </label>
                <select
                  id="select-month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
                  className="block w-full py-3 pl-3 pr-8 bg-white border border-[#C6C3BE] rounded-xl font-medium text-[#213C2F] focus:outline-none focus:ring-2 focus:ring-[#B8955E] transition-all text-sm"
                >
                  {MONTH_NAMES.map((name, idx) => (
                    <option key={idx} value={idx}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="select-year" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-2">
                  Año Fiscal:
                </label>
                <select
                  id="select-year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                  className="block w-full py-3 pl-3 pr-8 bg-white border border-[#C6C3BE] rounded-xl font-medium text-[#213C2F] focus:outline-none focus:ring-2 focus:ring-[#B8955E] transition-all text-sm"
                >
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                  <option value={2028}>2028</option>
                </select>
              </div>
            </div>

            {/* Tax / Rubro Filter */}
            <div>
              <label htmlFor="select-rubro" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-2 flex items-center justify-between">
                <span>Filtrar por Impuesto:</span>
                <Filter className="w-3.5 h-3.5 text-[#B8955E]" />
              </label>
              <select
                id="select-rubro"
                value={selectedRubro}
                onChange={(e) => setSelectedRubro(e.target.value as TaxRubro)}
                className="block w-full py-3 pl-3 pr-8 bg-white border border-[#C6C3BE] rounded-xl font-medium text-[#213C2F] focus:outline-none focus:ring-2 focus:ring-[#B8955E] transition-all text-sm"
              >
                <option value="all">Todos los impuestos aplicables</option>
                <option value="iva">IVA General (Formulario 120 Mensual)</option>
                <option value="rg90">Registro de Comprobantes (RG 90)</option>
                <option value="ire">IRE Resimple (Declaración Anual)</option>
                <option value="irp">IRP Servicios Personales (Declaración Anual)</option>
                <option value="retenciones">Retenciones IVA / IRE (Formulario 122)</option>
              </select>
            </div>

            {/* Note alert */}
            <div className="p-4 bg-[#E9E6E0]/60 border border-[#C6C3BE] rounded-xl text-xs text-[#213C2F] leading-relaxed flex gap-3">
              <Info className="w-4 h-4 text-[#B8955E] shrink-0 mt-0.5" />
              <div>
                <strong>Regla de prórroga DNIT:</strong> Si el día cae en sábado, domingo o feriado oficial nacional, el vencimiento se traslada automáticamente al <strong>primer día hábil siguiente</strong>.
              </div>
            </div>
          </div>

          {/* Right Column: Result Card & Upcoming Dates */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#213C2F] text-white rounded-2xl shadow-xl overflow-hidden border border-[#C6C3BE]/30">
              {/* Header result */}
              <div className="bg-gradient-to-r from-[#213C2F] via-[#274737] to-[#213C2F] p-6 sm:p-7 border-b border-white/10 text-left">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#B8955E] bg-white/10 px-3 py-1 rounded-full border border-[#B8955E]/30">
                    Resultado Oficial para Dígito {selectedDigit}
                  </span>
                  <span className="text-xs text-white/70 font-mono">
                    Período: {MONTH_NAMES[(selectedMonth + 11) % 12]} {selectedMonth === 0 ? selectedYear - 1 : selectedYear}
                  </span>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold flex items-baseline gap-2">
                    Vence el día: <span className="text-[#B8955E] text-4xl sm:text-5xl">{baseDay}</span>
                  </h3>
                  <span className="text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-md">
                    Día base establecido por el calendario perpetuo
                  </span>
                </div>
              </div>

              {/* Exact deadline box */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex items-start gap-4">
                  <div className="p-3 bg-[#B8955E]/20 text-[#B8955E] rounded-xl border border-[#B8955E]/30 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 font-mono uppercase tracking-wider block">
                      Fecha Límite Exacta en {MONTH_NAMES[selectedMonth]} {selectedYear}:
                    </span>
                    <strong className="text-xl sm:text-2xl font-bold font-heading text-white block mt-1">
                      {DAY_NAMES[exactDueDate.getDay()]}, {exactDueDate.getDate()} de {MONTH_NAMES[selectedMonth]} de {selectedYear}
                    </strong>
                    {exactDueDate.getDate() !== baseDay && (
                      <span className="text-xs text-[#B8955E] font-semibold mt-1 inline-block">
                        * Prorrogado por fin de semana o feriado (fecha original: {baseDay})
                      </span>
                    )}
                  </div>
                </div>

                {/* Next 3 due dates */}
                <div>
                  <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-3.5">
                    Próximas 3 Fechas de Vencimiento:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {upcomingDueDates.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#B8955E]/40 transition-all flex flex-col text-left"
                      >
                        <span className="text-xs text-[#B8955E] font-semibold font-mono">
                          Periodo: {item.periodMonth}
                        </span>
                        <span className="text-xl font-heading font-extrabold text-white mt-1">
                          {item.day}
                          <span className="text-xs text-white/70 font-sans ml-1">{item.monthShort}</span>
                        </span>
                        <span className="text-xs text-white/60 font-medium font-sans mt-0.5">
                          {item.dayName} · {item.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons: Export CSV & WhatsApp Alert */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleExportCSV}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#B8955E]" />
                    <span>Descargar Calendario Anual (.CSV / Excel)</span>
                  </button>

                  <a
                    href={whatsappReminderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#B8955E] hover:bg-[#a3824e] text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md transition-all uppercase tracking-wider"
                  >
                    <BellRing className="w-4 h-4 text-white" />
                    <span>Agendar Recordatorio WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Consultation Banner */}
            <div className="p-5 rounded-2xl bg-white border border-[#C6C3BE] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <h4 className="font-bold font-heading text-[#213C2F] text-base">
                  ¿Querés delegar la liquidación y evitar multas?
                </h4>
                <p className="text-xs text-[#213C2F]/80">
                  En Estudio Cáceres presentamos tu IVA y RG 90 cada mes con reporte anticipado y respaldo técnico.
                </p>
              </div>
              <a
                href={whatsappReminderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#213C2F] text-white hover:bg-[#16271f] font-bold text-xs shrink-0 transition-colors border border-[#B8955E]/40"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8955E]" />
              </a>
            </div>
          </div>
        </div>

        {/* Full Annual Table */}
        <div className="bg-white rounded-2xl border border-[#C6C3BE] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#C6C3BE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-heading text-[#213C2F]">
                Cronograma Anual de Vencimientos DNIT ({selectedYear})
              </h3>
              <p className="text-xs sm:text-sm text-[#213C2F]/70 mt-0.5">
                Fechas exactas para contribuyentes con RUC terminado en <strong>{selectedDigit}</strong>.
              </p>
            </div>
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E9E6E0] hover:bg-[#C6C3BE] text-[#213C2F] font-bold text-xs transition-colors self-start sm:self-auto cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#B8955E]" />
              <span>Exportar a Excel</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9E6E0]/60 text-[#213C2F] font-mono text-xs uppercase tracking-wider border-b border-[#C6C3BE]">
                  <th className="py-3.5 px-4 sm:px-6">Periodo Fiscal</th>
                  <th className="py-3.5 px-4 sm:px-6">Mes de Presentación</th>
                  <th className="py-3.5 px-4 sm:px-6">Fecha Límite Exacta</th>
                  <th className="py-3.5 px-4 sm:px-6">Día</th>
                  <th className="py-3.5 px-4 sm:px-6">Obligaciones Aplicables</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C6C3BE]/40 font-sans">
                {annualSchedule.map((item, idx) => {
                  const isCurrent = item.monthIndex === selectedMonth;
                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-[#E9E6E0]/40 transition-colors ${
                        isCurrent ? 'bg-[#B8955E]/15 font-semibold' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 sm:px-6 text-[#213C2F] font-medium">
                        {item.periodLabel}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#213C2F]/80">
                        {item.declarationLabel}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="font-heading font-bold text-[#213C2F]">
                          {item.dateFormatted}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#213C2F]/70 font-mono text-xs">
                        {item.dayName}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex flex-wrap gap-1.5">
                          {item.taxes.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                                t.required
                                  ? 'bg-[#213C2F]/10 text-[#213C2F] border border-[#213C2F]/20'
                                  : 'bg-[#E9E6E0] text-[#213C2F]/70'
                              }`}
                            >
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right">
                        <a
                          href={whatsappReminderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#B8955E] hover:text-[#213C2F] transition-colors"
                        >
                          Recordarme
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
