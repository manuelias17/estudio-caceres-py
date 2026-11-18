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
    <div id="vencimientos" className="w-full bg-[#F5F0E6] text-[#2C2C2C] font-sans">
      {/* Section Header in Navy #1E3A5F */}
      {showHero && (
        <section className="w-full bg-[#1E3A5F] text-[#F5F0E6] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8DCC4]/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#4A7C59] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              <CalendarIcon className="w-3.5 h-3.5 text-white" />
              <span>Herramienta Oficial DNIT Paraguay 2026</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F0E6] tracking-tight text-balance">
              Calendario Perpetuo de Vencimientos DNIT
            </h1>
            <p className="text-base sm:text-lg text-[#F5F0E6]/85 leading-relaxed font-sans">
              En Paraguay, las declaraciones de IVA, IRP, IRE y RG 90 vencen según el último dígito del RUC antes del guion. 
              Consultá con exactitud tu fecha límite, exportá tus calendarios a Excel y programá recordatorios para operar sin multas.
            </p>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid: Control Panel (Left) & Result Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form & Filters */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#1E3A5F]/15 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1E3A5F]/10 pb-4">
              <h2 className="text-lg font-bold font-heading text-[#1E3A5F] flex items-center gap-2">
                <Search className="w-5 h-5 text-[#1E3A5F]" />
                <span>Paso 1: Ingresá tu RUC o CI</span>
              </h2>
              <span className="text-xs font-semibold text-[#1E3A5F] bg-[#E8DCC4] px-2.5 py-1 rounded-md">
                DNIT Res. 2026
              </span>
            </div>

            {/* RUC Input with auto detection */}
            <div>
              <label htmlFor="ruc-input" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                Escribí tu RUC o Cédula de Identidad:
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1E3A5F]/40">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  id="ruc-input"
                  type="text"
                  value={rucInput}
                  onChange={handleRucChange}
                  placeholder="Ej: 1458932-3 o 2548971"
                  className="block w-full pl-11 pr-32 py-3.5 bg-[#F5F0E6]/60 border border-[#1E3A5F]/20 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent rounded-xl text-base font-semibold text-[#1E3A5F] tabular-nums transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs font-bold bg-[#1E3A5F] text-[#F5F0E6] px-2.5 py-1 rounded-lg tabular-nums">
                    Termina en: <strong className="text-[#E8DCC4]">{selectedDigit}</strong>
                  </span>
                </div>
              </div>
              <p className="mt-2 text-xs text-[#2C2C2C]/80 flex items-center gap-1.5 font-sans">
                <Info className="h-3.5 w-3.5 text-[#1E3A5F] shrink-0" />
                <span>La DNIT toma el último número antes del guion de control.</span>
              </p>
            </div>

            {/* Direct Digit Selector Buttons (0 to 9) */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-3">
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
                      className={`h-11 rounded-xl text-base font-bold flex items-center justify-center tabular-nums transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#1E3A5F] text-[#F5F0E6] border-2 border-[#1E3A5F]'
                          : 'bg-white text-[#1E3A5F] hover:bg-[#E8DCC4]/60 border border-[#1E3A5F]/20'
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
                <label htmlFor="select-month" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                  Mes de Presentación:
                </label>
                <select
                  id="select-month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
                  className="block w-full py-3 pl-3 pr-8 bg-white border border-[#1E3A5F]/20 rounded-xl font-medium text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] transition-all text-sm"
                >
                  {MONTH_NAMES.map((name, idx) => (
                    <option key={idx} value={idx}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="select-year" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2">
                  Año Fiscal:
                </label>
                <select
                  id="select-year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                  className="block w-full py-3 pl-3 pr-8 bg-white border border-[#1E3A5F]/20 rounded-xl font-medium text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] transition-all text-sm"
                >
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                  <option value={2028}>2028</option>
                </select>
              </div>
            </div>

            {/* Tax / Rubro Filter */}
            <div>
              <label htmlFor="select-rubro" className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-2 flex items-center justify-between">
                <span>Filtrar por Impuesto:</span>
                <Filter className="w-3.5 h-3.5 text-[#1E3A5F]" />
              </label>
              <select
                id="select-rubro"
                value={selectedRubro}
                onChange={(e) => setSelectedRubro(e.target.value as TaxRubro)}
                className="block w-full py-3 pl-3 pr-8 bg-white border border-[#1E3A5F]/20 rounded-xl font-medium text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] transition-all text-sm"
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
            <div className="p-4 bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 rounded-xl text-xs text-[#2C2C2C] leading-relaxed flex gap-3">
              <Info className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
              <div>
                <strong>Regla de prórroga DNIT:</strong> Si el día cae en sábado, domingo o feriado oficial nacional, el vencimiento se traslada automáticamente al <strong>primer día hábil siguiente</strong>.
              </div>
            </div>
          </div>

          {/* Right Column: Result Card & Upcoming Dates */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#1E3A5F] text-[#F5F0E6] rounded-2xl overflow-hidden border border-[#1E3A5F]">
              {/* Header result */}
              <div className="p-6 sm:p-7 border-b border-[#F5F0E6]/15 text-left">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-[#1E3A5F] bg-[#E8DCC4] px-3 py-1 rounded-full tabular-nums">
                    Resultado Oficial para Dígito {selectedDigit}
                  </span>
                  <span className="text-xs text-[#F5F0E6]/80 tabular-nums">
                    Período: {MONTH_NAMES[(selectedMonth + 11) % 12]} {selectedMonth === 0 ? selectedYear - 1 : selectedYear}
                  </span>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-3xl sm:text-4xl font-heading font-bold flex items-baseline gap-2 text-[#F5F0E6]">
                    Vence el día: <span className="text-[#E8DCC4] text-4xl sm:text-5xl tabular-nums">{baseDay}</span>
                  </h3>
                  <span className="text-xs text-[#F5F0E6]/85 bg-[#F5F0E6]/10 px-2.5 py-1 rounded-md">
                    Día base establecido por el calendario perpetuo
                  </span>
                </div>
              </div>

              {/* Exact deadline box */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <div className="bg-[#F5F0E6]/5 rounded-2xl p-5 border border-[#F5F0E6]/15 flex items-start gap-4">
                  <div className="p-3 bg-[#4A7C59] text-white rounded-xl shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E8DCC4] uppercase tracking-wider block font-semibold">
                      Fecha Límite Exacta en {MONTH_NAMES[selectedMonth]} {selectedYear}:
                    </span>
                    <strong className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E6] block mt-1 tabular-nums">
                      {DAY_NAMES[exactDueDate.getDay()]}, {exactDueDate.getDate()} de {MONTH_NAMES[selectedMonth]} de {selectedYear}
                    </strong>
                    {exactDueDate.getDate() !== baseDay && (
                      <span className="text-xs text-[#E8DCC4] font-semibold mt-1 inline-block tabular-nums">
                        * Prorrogado por fin de semana o feriado (fecha original: {baseDay})
                      </span>
                    )}
                  </div>
                </div>

                {/* Next 3 due dates */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#E8DCC4] mb-3.5">
                    Próximas 3 Fechas de Vencimiento:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {upcomingDueDates.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F5F0E6]/5 p-4 rounded-xl border border-[#F5F0E6]/15 hover:border-[#E8DCC4]/50 transition-colors flex flex-col text-left"
                      >
                        <span className="text-xs text-[#E8DCC4] font-semibold">
                          Periodo: {item.periodMonth}
                        </span>
                        <span className="text-xl font-heading font-bold text-[#F5F0E6] mt-1 tabular-nums">
                          {item.day}
                          <span className="text-xs text-[#F5F0E6]/80 font-sans ml-1">{item.monthShort}</span>
                        </span>
                        <span className="text-xs text-[#F5F0E6]/75 font-medium font-sans mt-0.5 tabular-nums">
                          {item.dayName} · {item.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons: Export CSV & WhatsApp Alert */}
                <div className="pt-4 border-t border-[#F5F0E6]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleExportCSV}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F5F0E6]/10 hover:bg-[#F5F0E6]/20 text-[#F5F0E6] font-semibold text-xs border border-[#F5F0E6]/25 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#E8DCC4]" />
                    <span>Descargar Calendario Anual (.CSV / Excel)</span>
                  </button>

                  <a
                    href={whatsappReminderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#E8DCC4] hover:bg-[#F5F0E6] text-[#1E3A5F] font-bold text-xs py-3 px-6 rounded-full transition-colors uppercase tracking-wider"
                  >
                    <BellRing className="w-4 h-4" />
                    <span>Agendar Recordatorio WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Consultation Banner */}
            <div className="p-5 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <h4 className="font-bold font-heading text-[#1E3A5F] text-base">
                  ¿Querés delegar la liquidación y evitar multas?
                </h4>
                <p className="text-xs text-[#2C2C2C]">
                  En Estudio Cáceres presentamos tu IVA y RG 90 cada mes con reporte anticipado y respaldo técnico.
                </p>
              </div>
              <a
                href={whatsappReminderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] font-semibold text-xs shrink-0 transition-colors"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8DCC4]" />
              </a>
            </div>
          </div>
        </div>

        {/* Full Annual Table */}
        <div className="bg-white rounded-2xl border border-[#1E3A5F]/15 overflow-hidden">
          <div className="p-6 border-b border-[#1E3A5F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-heading text-[#1E3A5F] tabular-nums">
                Cronograma Anual de Vencimientos DNIT ({selectedYear})
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2C2C]/80 mt-0.5 tabular-nums">
                Fechas exactas para contribuyentes con RUC terminado en <strong>{selectedDigit}</strong>.
              </p>
            </div>
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8DCC4] hover:bg-[#dcd0b6] text-[#1E3A5F] font-bold text-xs transition-colors self-start sm:self-auto cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#1E3A5F]" />
              <span>Exportar a Excel</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm tabular-nums">
              <thead>
                <tr className="bg-[#E8DCC4]/60 text-[#1E3A5F] text-xs uppercase tracking-wider border-b border-[#1E3A5F]/15">
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Periodo Fiscal</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Mes de Presentación</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Fecha Límite Exacta</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Día</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Obligaciones Aplicables</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right font-bold">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E3A5F]/10 font-sans">
                {annualSchedule.map((item, idx) => {
                  const isCurrent = item.monthIndex === selectedMonth;
                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-[#F5F0E6]/60 transition-colors ${
                        isCurrent ? 'bg-[#E8DCC4]/40 font-semibold' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 sm:px-6 text-[#1E3A5F] font-medium">
                        {item.periodLabel}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#2C2C2C]">
                        {item.declarationLabel}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="font-heading font-bold text-[#1E3A5F]">
                          {item.dateFormatted}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-[#2C2C2C]/80 text-xs">
                        {item.dayName}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex flex-wrap gap-1.5">
                          {item.taxes.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${
                                t.required
                                  ? 'bg-[#4A7C59]/15 text-[#4A7C59] border border-[#4A7C59]/30'
                                  : 'bg-[#E8DCC4] text-[#1E3A5F]'
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
                          className="text-xs font-bold text-[#1E3A5F] hover:underline underline-offset-4 transition-colors"
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
