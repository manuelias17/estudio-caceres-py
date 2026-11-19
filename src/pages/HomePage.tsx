import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  BookOpen,
  MessageCircle,
  Check,
  CheckCircle2,
  Clock,
  PiggyBank,
  Award,
  Zap,
  ArrowRight,
  UserCheck,
  GraduationCap,
  FileText,
  Database,
  ChevronRight,
  Send,
  ChevronDown
} from 'lucide-react';
import capturaEntregaImg from '../assets/images/captura_entrega_whatsapp_real.jpg';

const WHATSAPP_NUMBER = '595993535291';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    clientType: 'Profesional Independiente',
    service: 'Presentación Mensual de IVA',
    details: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Estudio Cáceres, quisiera solicitar una propuesta:\n\n` +
      `*Nombre:* ${leadForm.name}\n` +
      `*WhatsApp:* ${leadForm.phone}\n` +
      `*Perfil:* ${leadForm.clientType}\n` +
      `*Servicio de Interés:* ${leadForm.service}\n` +
      (leadForm.details ? `*Detalles:* ${leadForm.details}\n` : '');

    window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const homeFaqs = [
    {
      q: '¿Qué necesito para abrir mi RUC en Paraguay?',
      a: 'Para abrir tu RUC como persona física necesitás tu Cédula de Identidad Civil vigente (ambos lados escaneados), una factura de servicios básicos (ANDE, ESSAP o COPACO) para certificar tu domicilio fiscal, y definir tu rubro u ocupación profesional. Nosotros gestionamos todo el trámite digital ante la DNIT.'
    },
    {
      q: '¿Cómo funciona la presentación mensual del IVA?',
      a: 'Cada mes recibimos tus comprobantes de compras y ventas antes de tu fecha límite, registramos las operaciones bajo la RG 90, calculamos el débito y crédito fiscal en el Formulario 120 V.4 y te enviamos el extracto de liquidación para tu conformidad antes de la presentación final.'
    },
    {
      q: '¿Puedo consultar sobre vencimientos de impuestos de forma gratuita?',
      a: 'Sí, contás con nuestro Calendario Perpetuo interactivo dentro de esta plataforma para verificar la fecha exacta de vencimiento según la terminación de tu RUC en cualquier mes del año.'
    },
    {
      q: '¿Cómo puedo adquirir el Manual de Contabilidad Aplicada?',
      a: 'El compendio está disponible en versión física impresa premium (anillado profesional y tapa a color). Incluye el Tomo I (Fundamentos + Asientos de la liquidación del IVA) a Gs. 135.000, el Ejercitario Práctico a Gs. 55.000 o el Combo Completo recomendado a Gs. 170.000 (incluye delivery en Asunción y Gran Asunción). Enfocado en Contabilidad Aplicada con criterio de auditor externo, no en instructivos de presentación.'
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      {/* ------------------------------------------------------------- */}
      {/* HERO: Fondo azul noche #1E3A5F, titular Source Serif crema    */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#1E3A5F] text-[#F5F0E6] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8DCC4]/20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className="text-xs font-bold tracking-wider uppercase text-[#E8DCC4]">
              Estudio Cáceres · Asesoría Contable & Tributaria en Paraguay
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#F5F0E6] tracking-tight leading-tight text-balance">
              Contabilidad simple, <br className="hidden sm:inline" />
              <span className="text-[#E8DCC4]">tributación al día</span>
            </h1>

            <p className="text-base sm:text-lg text-[#F5F0E6]/85 leading-relaxed font-sans max-w-2xl mx-auto">
              Acompañamos a profesionales independientes, emprendedores, estudiantes y auxiliares con asesoramiento tributario integral, herramientas de vencimiento DNIT y capacitación técnica de vanguardia.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-[#F5F0E6]/90 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#4A7C59]" /> IVA, IRP e IRE al día
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#4A7C59]" /> Atención 100% digital y personalizada
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#4A7C59]" /> Respaldado por contadores matriculados
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* TRES TARJETAS DE ACCESO RÁPIDO                             */}
          {/* ----------------------------------------------------------- */}
          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Tarjeta 1: Calendario de vencimientos */}
            <Link
              to="/calendario"
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#F5F0E6] text-[#2C2C2C] border border-[#E8DCC4] hover:border-white transition-colors duration-200 flex flex-col justify-between text-left"
            >
              <div className="absolute top-4 right-4 bg-[#4A7C59] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                100% Gratuito
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#4A7C59] font-bold block">
                    Herramienta exclusiva
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] group-hover:underline underline-offset-4 leading-snug">
                    Calendario de vencimientos
                  </h3>
                </div>

                <p className="text-sm text-[#2C2C2C] font-sans leading-relaxed">
                  Calculá al instante la fecha exacta de vencimiento mensual para tu RUC, evitá sanciones de la DNIT y descargá tu cronograma para Excel.
                </p>

                <div className="pt-3 space-y-1.5 text-xs text-[#2C2C2C] border-t border-[#1E3A5F]/15">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59] shrink-0" />
                    <span>Fechas para dígitos 0 al 9 en los 12 meses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59] shrink-0" />
                    <span>Exportación libre en formato planilla Excel</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E3A5F]/15 flex items-center justify-between">
                <span className="text-xs text-[#2C2C2C]/80 font-semibold">Acceso libre inmediato</span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1E3A5F] text-[#F5F0E6] text-xs font-semibold group-hover:bg-[#162d4a] transition-colors">
                  <span>Calcular ahora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Tarjeta 2: Manual Contable Práctico (Badge LANZAMIENTO 2026 en #4A7C59) */}
            <Link
              to="/manual"
              className="group relative p-7 sm:p-8 rounded-2xl bg-white text-[#2C2C2C] border-2 border-[#E8DCC4] hover:border-white transition-colors duration-200 flex flex-col justify-between text-left"
            >
              <div className="absolute top-4 right-4 bg-[#4A7C59] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Lanzamiento 2026
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#4A7C59] font-bold block">
                    Material práctico exclusivo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] group-hover:underline underline-offset-4">
                    Manual Contable Práctico
                  </h3>
                </div>
                <p className="text-sm text-[#2C2C2C] font-sans leading-relaxed">
                  Contabilidad Aplicada con criterio de auditor externo: papeles de trabajo, asientos de la liquidación del IVA, prorrateo y ejercitario de 100 casos resueltos.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E3A5F]/15 flex items-center justify-between text-sm font-bold text-[#1E3A5F]">
                <span className="group-hover:underline underline-offset-4">Ver opciones de compra</span>
                <ArrowRight className="w-4 h-4 text-[#1E3A5F] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tarjeta 3: Asesoría tributaria */}
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera solicitar una asesoría tributaria sobre mis impuestos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#E8DCC4] text-[#2C2C2C] border border-[#E8DCC4] hover:border-white transition-colors duration-200 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#1E3A5F]/80 font-bold block tabular-nums">
                    Contacto directo (+595 993 535291)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] group-hover:underline underline-offset-4">
                    Asesoría tributaria
                  </h3>
                </div>
                <p className="text-sm text-[#2C2C2C] font-sans leading-relaxed">
                  Delegá la apertura de tu RUC, la carga mensual de RG 90 o la liquidación de IVA con atención directa y presupuesto a medida.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E3A5F]/15 flex items-center justify-between text-sm font-bold text-[#1E3A5F]">
                <span className="group-hover:underline underline-offset-4">Escribir por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#1E3A5F] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BENEFICIOS: ¿Por qué elegir Estudio Cáceres?                  */}
      {/* ------------------------------------------------------------- */}
      <section id="beneficios" className="py-16 sm:py-24 bg-[#F5F0E6] text-[#2C2C2C] border-b border-[#1E3A5F]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] block">
              Ventajas Clave
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              ¿Por qué elegir Estudio Cáceres?
            </h2>
            <p className="text-base text-[#2C2C2C] leading-relaxed font-sans">
              Brindamos tranquilidad técnica y cumplimiento normativo para que te enfoques en crecer sin miedo a sanciones o fiscalizaciones de la DNIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-white border border-[#1E3A5F]/15 text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 flex items-center justify-center text-[#1E3A5F]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">Atención personalizada</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                Nos adaptamos a las necesidades específicas de tu profesión o rubro comercial. Trato directo sin intermediarios.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-white border border-[#1E3A5F]/15 text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 flex items-center justify-center text-[#1E3A5F]">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">Cumplimiento tributario al día</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                Evitá multas y notificaciones de la DNIT. Monitoreamos los plazos de presentación con reportes oportunos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-white border border-[#1E3A5F]/15 text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 flex items-center justify-center text-[#1E3A5F]">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">Ahorro de tiempo y dinero</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                Optimizá tus deducciones fiscales de manera 100% legal y transparente según las normativas vigentes en Paraguay.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-white border border-[#1E3A5F]/15 text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 flex items-center justify-center text-[#1E3A5F]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">Asesoramiento práctico</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                Explicaciones claras y sencillas sin lenguaje técnico indescifrable, para que comprendas el estado real de tu contabilidad.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-white border border-[#1E3A5F]/15 text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 flex items-center justify-center text-[#1E3A5F]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">Respuesta ágil por WhatsApp</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                Canal directo de comunicación sin esperas interminables para resolver dudas puntuales de timbrados, comprobantes o impuestos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-white border border-[#1E3A5F]/15 text-left space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#E8DCC4]/60 border border-[#1E3A5F]/15 flex items-center justify-center text-[#1E3A5F]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">Dominio de IVA, IRP e IRE</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                Criterio riguroso fundamentado en años de práctica y auditoría externa para liquidaciones precisas en el Marangatu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICIOS PROFESIONALES: Fondo arena cálida #E8DCC4           */}
      {/* ------------------------------------------------------------- */}
      <section id="servicios" className="py-16 sm:py-24 bg-[#E8DCC4] text-[#2C2C2C] border-b border-[#1E3A5F]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A5F] block">
                Nuestra Especialidad
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
                Servicios Profesionales de Contabilidad
              </h2>
              <p className="text-sm sm:text-base text-[#2C2C2C] font-sans">
                Trabajamos de manera digital en todo Paraguay con procesos transparentes y seguimiento continuo.
              </p>
            </div>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera solicitar un presupuesto de servicios contables.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F0E6] border border-[#1E3A5F]/20 hover:underline text-sm font-semibold text-[#1E3A5F] transition-colors self-start md:self-auto"
            >
              <span>Pedir propuesta personalizada</span>
              <ChevronRight className="w-4 h-4 text-[#1E3A5F]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1: Gestión de RUC */}
            <div className="p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/15 text-[#1E3A5F] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#1E3A5F]">
                    DNIT / Marangatu
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">Gestión y Apertura de RUC</h3>
                  <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wide block mt-0.5">
                    Trámites administrativos y alta fiscal
                  </span>
                </div>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Formalizá tu actividad laboral o emprendimiento sin complicaciones. Te asesoramos sobre las obligaciones tributarias exactas que te corresponden.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2C2C2C] pt-3 border-t border-[#1E3A5F]/10">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Inscripción y apertura para personas físicas y unipersonales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Reactivación de RUC suspendido o bloqueado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Actualización de datos y actividades económicas</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa el servicio de Apertura o Gestión de RUC.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-center text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors"
              >
                Consultar por trámite de RUC
              </a>
            </div>

            {/* Service 2: Presentación Mensual de IVA */}
            <div className="p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/15 text-[#1E3A5F] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#1E3A5F]">
                    Formulario 120 V.4
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">Presentación Mensual de IVA</h3>
                  <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wide block mt-0.5">
                    Liquidación continua y cálculo de impuestos
                  </span>
                </div>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Cumplí con tus obligaciones mensuales a tiempo. Analizamos tus comprobantes deducibles y evitamos cualquier saldo u omisión impositiva.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2C2C2C] pt-3 border-t border-[#1E3A5F]/10">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Declaración mensual de IVA Formulario 120 V.4</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Control estricto de fechas de vencimiento por terminación de RUC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Informe mensual de compras deducibles y saldo fiscal</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa el servicio de Presentación Mensual de IVA.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-center text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors"
              >
                Consultar por liquidación de IVA
              </a>
            </div>

            {/* Service 3: Gestión RG 90 */}
            <div className="p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/15 text-[#1E3A5F] flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#1E3A5F]">
                    SIFEN / RG 90
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">Carga y Registro RG 90</h3>
                  <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wide block mt-0.5">
                    Comprobantes electrónicos y registro obligatorio
                  </span>
                </div>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Procesamos tus comprobantes de ventas y compras en el sistema Marangatu cumpliendo con las exigencias formales de la Resolución General 90.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2C2C2C] pt-3 border-t border-[#1E3A5F]/10">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Carga mensual de facturas electrónicas y virtuales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Generación y confirmación del talón de presentación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Validación cruzada con declaraciones de IVA e IRE</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa la Gestión y Carga de RG 90.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-center text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors"
              >
                Consultar por RG 90
              </a>
            </div>

            {/* Service 4: Clases Prácticas */}
            <div className="p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/15 text-[#1E3A5F] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#1E3A5F]">
                    Capacitación 1 a 1
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">Clases Prácticas de Contabilidad</h3>
                  <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wide block mt-0.5">
                    Tutoría para estudiantes y auxiliares
                  </span>
                </div>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Aprendé con casos del día a día laboral: asientos contables, balance de sumas y saldos, conciliaciones y liquidación de tributos en Paraguay.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2C2C2C] pt-3 border-t border-[#1E3A5F]/10">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Contabilidad básica e intermedia con papeles de trabajo reales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Tutoría para exámenes, tesis y preparación profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                    <span>Modalidad virtual interactiva con material descargable</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera consultar sobre las Clases Prácticas de Contabilidad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-center text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors"
              >
                Consultar disponibilidad de clases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TESTIMONIOS REALES / CAPTURA REAL DE ENTREGA                  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#F5F0E6] text-[#2C2C2C] border-b border-[#1E3A5F]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] block">
              Testimonios reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight">
              Así funciona después de comprar
            </h2>
            <p className="text-base sm:text-lg text-[#2C2C2C] leading-relaxed font-sans">
              Atención directa y despacho seguro para cada lector del manual
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
            {/* Imagen */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[500px] rounded-2xl overflow-hidden border border-[#1E3A5F]/20 bg-[#1E3A5F] mx-auto">
                <img
                  src={capturaEntregaImg}
                  alt="Chat real de entrega y coordinación por WhatsApp"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  width={500}
                  height={880}
                />
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F]">
                <span>Coordinación y entrega vía WhatsApp · Estudio Cáceres</span>
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#4A7C59] text-white flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>

                <p className="text-lg sm:text-xl font-heading font-bold text-[#1E3A5F] leading-snug">
                  Hacé como Fabián y afianzate en el mundo contable con nuestro manual.
                </p>

                <p className="text-sm sm:text-base text-[#2C2C2C] leading-relaxed font-sans">
                  Ejemplares impresos con tapa full color y anillado profesional para estudio continuo.
                </p>

                <div className="pt-3 border-t border-[#1E3A5F]/10 space-y-2.5 text-xs sm:text-sm text-[#2C2C2C]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Entrega transparente y directa vía WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Material físico impreso con encuadernación de alta durabilidad</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Acompañamiento profesional y soporte ante dudas</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/manual"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#E8DCC4]" />
                  <span>Conocer el Manual Contable</span>
                  <ArrowRight className="w-4 h-4 text-[#E8DCC4]" />
                </Link>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Estudio Cáceres, vi los testimonios del manual y quiero consultar sobre el ejemplar impreso.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1E3A5F] bg-white border border-[#1E3A5F]/25 hover:underline transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#1E3A5F]" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SOLICITUD DE ASESORÍA / FORMULARIO RÁPIDO                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#1E3A5F] text-[#F5F0E6]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-[#2C2C2C] rounded-2xl border border-[#E8DCC4] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column Information */}
            <div className="lg:col-span-5 bg-[#1E3A5F] text-[#F5F0E6] p-8 sm:p-10 flex flex-col justify-between text-left space-y-6 border-b lg:border-b-0 lg:border-r border-[#F5F0E6]/15">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#E8DCC4] font-bold block">
                  Propuesta sujeta a análisis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F0E6] leading-tight">
                  Dejá tu contabilidad en manos de especialistas
                </h3>
                <p className="text-sm text-[#F5F0E6]/85 leading-relaxed font-sans">
                  Escribinos para evaluar la situación de tu RUC o recibir una propuesta ajustada al volumen de tus comprobantes.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#F5F0E6]/15 text-xs sm:text-sm text-[#F5F0E6]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
                  <span className="tabular-nums">Atención directa vía WhatsApp (+595 993 535291)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
                  <span>Presupuesto sin compromiso de contratación</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
                  <span>Cobertura para todo el territorio paraguayo</span>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 text-left bg-[#F5F0E6]">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h4 className="text-xl font-bold font-heading text-[#1E3A5F]">
                  Solicitá tu asesoría contable
                </h4>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-1">
                    Nombre o Razón Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Ej: Marcelo Cáceres"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1E3A5F]/20 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] text-sm text-[#2C2C2C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-1">
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    placeholder="Ej: 0981 123 456"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1E3A5F]/20 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] text-sm text-[#2C2C2C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-1">
                      Perfil Contribuyente
                    </label>
                    <select
                      value={leadForm.clientType}
                      onChange={(e) => setLeadForm({ ...leadForm, clientType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#1E3A5F]/20 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] text-sm bg-white text-[#2C2C2C]"
                    >
                      <option value="Profesional Independiente">Profesional Independiente</option>
                      <option value="Emprendedor / Pequeño Negocio">Emprendedor / PYME</option>
                      <option value="Estudiante de Contabilidad">Estudiante de Contabilidad</option>
                      <option value="Sociedad Comercial (S.A./S.R.L./E.A.S.)">Sociedad Comercial</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-1">
                      Servicio de Interés
                    </label>
                    <select
                      value={leadForm.service}
                      onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#1E3A5F]/20 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] text-sm bg-white text-[#2C2C2C]"
                    >
                      <option value="Presentación Mensual de IVA">Presentación Mensual de IVA</option>
                      <option value="Gestión de RUC">Apertura o Gestión de RUC</option>
                      <option value="Gestión de Comprobantes RG 90">Carga de Comprobantes RG 90</option>
                      <option value="Clases Prácticas de Contabilidad">Clases Prácticas</option>
                      <option value="Manual de Contabilidad Aplicada">Manual de Contabilidad Aplicada</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A5F] mb-1">
                    Mensaje o Consulta (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={leadForm.details}
                    onChange={(e) => setLeadForm({ ...leadForm, details: e.target.value })}
                    placeholder="Contanos brevemente tu rubro o inquietud..."
                    className="w-full px-4 py-2 rounded-xl bg-white border border-[#1E3A5F]/20 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] text-sm resize-none text-[#2C2C2C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#1E3A5F] hover:bg-[#162d4a] text-[#F5F0E6] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E8DCC4]" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FAQ INSTITUCIONAL                                             */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#E8DCC4] text-[#2C2C2C]">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A5F]">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#1E3A5F]">
              Resolución de dudas sobre nuestros servicios
            </h2>
          </div>

          <div className="divide-y divide-[#1E3A5F]/10 border border-[#1E3A5F]/15 bg-white rounded-2xl px-6">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#1E3A5F] hover:underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1E3A5F] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-[#2C2C2C] leading-relaxed font-sans pr-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
