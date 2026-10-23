import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  BookOpen,
  MessageCircle,
  ShieldCheck,
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
  PhoneCall,
  Send,
  Star,
  Quote,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import logoImgLocal from '../assets/images/logo_estudio_caceres_1792072395305.jpg';

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
      q: '¿Cómo puedo adquirir el Manual de Contabilidad DNIT 2026?',
      a: 'El manual cuenta con acceso digital inmediato en formato PDF con plantillas editables en Word y Excel. Podés abonar de forma 100% segura mediante transferencias bancarias (SIPAP), pagos vía QR, tarjetas de crédito o débito y billeteras locales.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION: "Contabilidad simple, tributación al día"        */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-gradient-to-b from-[#0F2438] via-[#12283e] to-[#0F2438] text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C98A2C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-[#C98A2C]/15 border border-[#C98A2C]/35 px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-[#C98A2C]">
              <ShieldCheck className="w-4 h-4 text-[#C98A2C]" />
              <span>Estudio Cáceres · Asesoría Contable & Tributaria en Paraguay</span>
            </div>

            {/* Requested Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Contabilidad simple, <br className="hidden sm:inline" />
              <span className="text-[#C98A2C]">tributación al día</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              Acompañamos a profesionales independientes, emprendedores, estudiantes y auxiliares con asesoramiento tributario integral, herramientas de vencimiento DNIT y capacitación técnica de vanguardia.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C98A2C]" /> IVA, IRP e IRE al día
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C98A2C]" /> Atención 100% digital y personalizada
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C98A2C]" /> Respaldado por contadores matriculados
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* PASO 4: TRES TARJETAS DE ACCESO RÁPIDO                      */}
          {/* ----------------------------------------------------------- */}
          <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Tarjeta 1: 📅 Calendario de vencimientos */}
            <Link
              to="/calendario"
              className="group relative p-7 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C98A2C]/60 transition-all duration-300 flex flex-col justify-between text-left shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C98A2C]/20 border border-[#C98A2C]/40 text-[#C98A2C] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C98A2C] font-bold block">
                    Herramienta gratuita nuestra
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#C98A2C] transition-colors">
                    Calendario de vencimientos
                  </h3>
                </div>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  Calculá al instante la fecha exacta de vencimiento mensual para tu RUC, filtrá por impuestos y descargá tu cronograma anual en Excel.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm font-bold text-[#C98A2C] group-hover:translate-x-1 transition-transform">
                <span>Ingresar al simulador</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Tarjeta 2: 📘 Manual DNIT 2026 */}
            <Link
              to="/manual"
              className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#183959] to-[#0F2438] border-2 border-[#C98A2C] hover:border-[#e2a443] transition-all duration-300 flex flex-col justify-between text-left shadow-2xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-[#C98A2C] text-[#0F2438] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Lanzamiento 2026
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C98A2C] text-[#0F2438] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-md">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                    Material práctico exclusivo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#C98A2C] transition-colors">
                    Manual DNIT 2026
                  </h3>
                </div>
                <p className="text-sm text-slate-200 font-sans leading-relaxed">
                  Compendio práctico con liquidaciones reales de IVA (Formulario 120 V.4), asientos contables, prorrateo y plantillas editables.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                <span className="text-[#C98A2C]">Ver vista previa y casos</span>
                <ArrowRight className="w-4 h-4 text-[#C98A2C]" />
              </div>
            </Link>

            {/* Tarjeta 3: 💬 Asesoría tributaria */}
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera solicitar una asesoría tributaria sobre mis impuestos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-7 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between text-left shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-[#25D366] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    Contacto directo (+595 993 535291)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-emerald-300 transition-colors">
                    Asesoría tributaria
                  </h3>
                </div>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  Delegá la apertura de tu RUC, la carga mensual de RG 90 o la liquidación de IVA con atención directa y presupuesto a medida.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Escribir por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BENEFICIOS: ¿Por qué elegir Estudio Cáceres?                  */}
      {/* ------------------------------------------------------------- */}
      <section id="beneficios" className="py-16 sm:py-24 bg-white text-[#1C242B] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C98A2C] bg-[#C98A2C]/10 px-3.5 py-1.5 rounded-full inline-block">
              Ventajas Clave
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] tracking-tight">
              ¿Por qué elegir Estudio Cáceres?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Brindamos tranquilidad técnica y cumplimiento normativo para que te enfoques en crecer sin miedo a sanciones o fiscalizaciones de la DNIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#C98A2C]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2438]">Atención personalizada</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Nos adaptamos a las necesidades específicas de tu profesión o rubro comercial. Trato directo sin intermediarios.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#C98A2C]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2438]">Cumplimiento tributario al día</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Evitá multas y notificaciones de la DNIT. Monitoreamos los plazos de presentación con reportes oportunos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#C98A2C]">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2438]">Ahorro de tiempo y dinero</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Optimizá tus deducciones fiscales de manera 100% legal y transparente según las normativas vigentes en Paraguay.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#C98A2C]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2438]">Asesoramiento práctico</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Explicaciones claras y sencillas sin lenguaje técnico indescifrable, para que comprendas el estado real de tu contabilidad.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#C98A2C]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2438]">Respuesta ágil por WhatsApp</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Canal directo de comunicación sin esperas interminables para resolver dudas puntuales de timbrados, comprobantes o impuestos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#C98A2C]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2438]">Dominio de IVA, IRP e IRE</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Criterio riguroso fundamentado en años de práctica y auditoría externa para liquidaciones precisas en el Marangatu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICIOS PROFESIONALES                                       */}
      {/* ------------------------------------------------------------- */}
      <section id="servicios" className="py-16 sm:py-24 bg-[#F7F8F9] text-[#1C242B] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F2438] bg-slate-200 px-3.5 py-1.5 rounded-full inline-block">
                Nuestra Especialidad
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] tracking-tight">
                Servicios Profesionales de Contabilidad
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Trabajamos de manera digital en todo Paraguay con procesos transparentes y seguimiento continuo.
              </p>
            </div>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera solicitar un presupuesto de servicios contables.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#0F2438] text-sm font-bold text-[#0F2438] transition-all shadow-xs self-start md:self-auto"
            >
              <span>Pedir propuesta personalizada</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1: Gestión de RUC */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2438]/5 text-[#0F2438] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#C98A2C]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0F2438] bg-slate-100 px-2.5 py-1 rounded-md">
                    DNIT / Marangatu
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">Gestión y Apertura de RUC</h3>
                  <span className="text-xs font-mono font-bold text-[#C98A2C] uppercase tracking-wide block mt-0.5">
                    Trámites administrativos y alta fiscal
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Formalizá tu actividad laboral o emprendimiento sin complicaciones. Te asesoramos sobre las obligaciones tributarias exactas que te corresponden.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Inscripción y apertura para personas físicas y unipersonales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Reactivación de RUC suspendido o bloqueado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Actualización de datos y actividades económicas</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa el servicio de Apertura o Gestión de RUC.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors"
              >
                Consultar por trámite de RUC
              </a>
            </div>

            {/* Service 2: Presentación Mensual de IVA */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2438]/5 text-[#0F2438] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#C98A2C]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0F2438] bg-slate-100 px-2.5 py-1 rounded-md">
                    Formulario 120 V.4
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">Presentación Mensual de IVA</h3>
                  <span className="text-xs font-mono font-bold text-[#C98A2C] uppercase tracking-wide block mt-0.5">
                    Liquidación continua y cálculo de impuestos
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Cumplí con tus obligaciones mensuales a tiempo. Analizamos tus comprobantes deducibles y evitamos cualquier saldo u omisión impositiva.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Declaración mensual de IVA Formulario 120 V.4</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Control estricto de fechas de vencimiento por terminación de RUC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Informe mensual de compras deducibles y saldo fiscal</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa el servicio de Presentación Mensual de IVA.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors"
              >
                Consultar por liquidación de IVA
              </a>
            </div>

            {/* Service 3: Gestión RG 90 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2438]/5 text-[#0F2438] flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#C98A2C]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0F2438] bg-slate-100 px-2.5 py-1 rounded-md">
                    SIFEN / RG 90
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">Carga y Registro RG 90</h3>
                  <span className="text-xs font-mono font-bold text-[#C98A2C] uppercase tracking-wide block mt-0.5">
                    Comprobantes electrónicos y registro obligatorio
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Procesamos tus comprobantes de ventas y compras en el sistema Marangatu cumpliendo con las exigencias formales de la Resolución General 90.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Carga mensual de facturas electrónicas y virtuales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Generación y confirmación del talón de presentación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Validación cruzada con declaraciones de IVA e IRE</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa la Gestión y Carga de RG 90.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors"
              >
                Consultar por RG 90
              </a>
            </div>

            {/* Service 4: Clases Prácticas */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2438]/5 text-[#0F2438] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#C98A2C]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0F2438] bg-slate-100 px-2.5 py-1 rounded-md">
                    Capacitación 1 a 1
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">Clases Prácticas de Contabilidad</h3>
                  <span className="text-xs font-mono font-bold text-[#C98A2C] uppercase tracking-wide block mt-0.5">
                    Tutoría para estudiantes y auxiliares
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Aprendé con casos del día a día laboral: asientos contables, balance de sumas y saldos, conciliaciones y liquidación de tributos en Paraguay.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Contabilidad básica e intermedia con papeles de trabajo reales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Tutoría para exámenes, tesis y preparación profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Modalidad virtual interactiva con material descargable</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera consultar sobre las Clases Prácticas de Contabilidad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors"
              >
                Consultar disponibilidad de clases
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TESTIMONIOS                                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white text-[#1C242B] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C98A2C] bg-[#C98A2C]/10 px-3.5 py-1.5 rounded-full inline-block">
              Opiniones de Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] tracking-tight">
              Clientes que confían en Estudio Cáceres
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Testimonios de profesionales y emprendedores que gestionan sus obligaciones tributarias con nuestro acompañamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C98A2C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-sans">
                  "Estudio Cáceres me facilitó completamente la vida con mis impuestos mensuales. Antes vivía con miedo a las multas de la SET; ahora presento mi IVA sin presiones y 100% digital."
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="font-bold font-heading text-sm text-[#0F2438] block">Ing. Marcelo Duarte</span>
                <span className="text-xs text-slate-500 font-sans">Desarrollador Software Freelance · Asunción</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C98A2C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-sans">
                  "Excelente atención personalizada. Abrieron mi RUC en menos de 24 horas y me guiaron con exactitud sobre las compras que puedo deducir para IVA y régimen Resimple."
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="font-bold font-heading text-sm text-[#0F2438] block">Andrea Benítez</span>
                <span className="text-xs text-slate-500 font-sans">Comercio E-commerce · Ciudad del Este</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-7 rounded-2xl bg-[#F7F8F9] border border-slate-200/80 shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C98A2C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-sans">
                  "Las clases de contabilidad práctica fueron de enorme ayuda para mis exámenes y para mi primer trabajo de auxiliar. Explican con casos del día a día, sin rodeos teóricos."
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="font-bold font-heading text-sm text-[#0F2438] block">Lic. Esteban Ayala</span>
                <span className="text-xs text-slate-500 font-sans">Consultor Comercial Independiente · San Lorenzo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SOLICITUD DE ASESORÍA / FORMULARIO RÁPIDO                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#0F2438] text-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-[#1C242B] rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column Information */}
            <div className="lg:col-span-5 bg-[#0F2438] text-white p-8 sm:p-10 flex flex-col justify-between text-left space-y-6 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C98A2C] font-bold bg-white/10 px-3 py-1 rounded-full inline-block">
                  Propuesta sujeta a análisis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
                  Dejá tu contabilidad en manos de especialistas
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Escribinos para evaluar la situación de tu RUC o recibir una propuesta ajustada al volumen de tus comprobantes.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C98A2C]" />
                  <span>Atención directa vía WhatsApp (+595 993 535291)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C98A2C]" />
                  <span>Presupuesto sin compromiso de contratación</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C98A2C]" />
                  <span>Cobertura para todo el territorio paraguayo</span>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 text-left">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h4 className="text-xl font-bold font-heading text-[#0F2438]">
                  Solicitá tu asesoría contable
                </h4>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Nombre o Razón Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Ej: Marcelo Cáceres"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    placeholder="Ej: 0981 123 456"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Perfil Contribuyente
                    </label>
                    <select
                      value={leadForm.clientType}
                      onChange={(e) => setLeadForm({ ...leadForm, clientType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm bg-white"
                    >
                      <option value="Profesional Independiente">Profesional Independiente</option>
                      <option value="Emprendedor / Pequeño Negocio">Emprendedor / PYME</option>
                      <option value="Estudiante de Contabilidad">Estudiante de Contabilidad</option>
                      <option value="Sociedad Comercial (S.A./S.R.L./E.A.S.)">Sociedad Comercial</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Servicio de Interés
                    </label>
                    <select
                      value={leadForm.service}
                      onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm bg-white"
                    >
                      <option value="Presentación Mensual de IVA">Presentación Mensual de IVA</option>
                      <option value="Gestión de RUC">Apertura o Gestión de RUC</option>
                      <option value="Gestión de Comprobantes RG 90">Carga de Comprobantes RG 90</option>
                      <option value="Clases Prácticas de Contabilidad">Clases Prácticas</option>
                      <option value="Manual de Contabilidad DNIT 2026">Manual de Contabilidad DNIT</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Mensaje o Consulta (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={leadForm.details}
                    onChange={(e) => setLeadForm({ ...leadForm, details: e.target.value })}
                    placeholder="Contanos brevemente tu rubro o inquietud..."
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#0F2438] hover:bg-[#163350] text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#C98A2C]" />
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
      <section className="py-16 sm:py-24 bg-[#F7F8F9] text-[#1C242B]">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C98A2C]">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#0F2438]">
              Resolución de dudas sobre nuestros servicios
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-2xl px-6 shadow-xs">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#0F2438] hover:text-[#C98A2C] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-[#C98A2C]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-slate-600 leading-relaxed font-sans pr-6">
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
