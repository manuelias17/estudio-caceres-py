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
  Send,
  ChevronDown,
  Sparkles
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
      {/* HERO SECTION: "Contabilidad simple, tributación al día"        */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-gradient-to-b from-[#213C2F] via-[#1a3026] to-[#213C2F] text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B8955E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B8955E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-[#B8955E]/15 border border-[#B8955E]/35 px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-[#B8955E]">
              <ShieldCheck className="w-4 h-4 text-[#B8955E]" />
              <span>Estudio Cáceres · Asesoría Contable & Tributaria en Paraguay</span>
            </div>

            {/* Requested Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Contabilidad simple, <br className="hidden sm:inline" />
              <span className="text-[#B8955E]">tributación al día</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans max-w-2xl mx-auto">
              Acompañamos a profesionales independientes, emprendedores, estudiantes y auxiliares con asesoramiento tributario integral, herramientas de vencimiento DNIT y capacitación técnica de vanguardia.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8955E]" /> IVA, IRP e IRE al día
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8955E]" /> Atención 100% digital y personalizada
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8955E]" /> Respaldado por contadores matriculados
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* TRES TARJETAS DE ACCESO RÁPIDO                             */}
          {/* ----------------------------------------------------------- */}
          <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Tarjeta 1: Calendario de vencimientos */}
            <Link
              to="/calendario"
              className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#274737] via-[#213C2F] to-[#16271f] border-2 border-[#B8955E]/80 hover:border-[#B8955E] transition-all duration-300 flex flex-col justify-between text-left shadow-2xl hover:-translate-y-1.5 overflow-hidden ring-1 ring-white/10 hover:shadow-[0_20px_40px_rgba(184,149,94,0.25)]"
            >
              <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 bg-[#B8955E]/20 border border-[#B8955E]/50 text-[#B8955E] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8955E] animate-ping" />
                <span>100% Gratuito</span>
              </div>

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B8955E]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#B8955E]/25 transition-colors" />

              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#B8955E] text-[#213C2F] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-md">
                  <Calendar className="w-7 h-7" />
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8955E] font-extrabold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#B8955E]" />
                    Herramienta exclusiva
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#B8955E] transition-colors leading-snug">
                    Calendario de vencimientos
                  </h3>
                </div>

                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  Calculá al instante la fecha exacta de vencimiento mensual para tu RUC, evitá sanciones de la DNIT y descargá tu cronograma para Excel.
                </p>

                <div className="pt-2 space-y-1.5 text-xs text-white/70 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8955E] shrink-0" />
                    <span>Fechas para dígitos 0 al 9 en los 12 meses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8955E] shrink-0" />
                    <span>Exportación libre en formato planilla Excel</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono text-white/70 font-semibold">Acceso libre inmediato</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#B8955E] text-[#213C2F] text-xs font-black group-hover:bg-[#a3824e] group-hover:text-white transition-all shadow-sm group-hover:translate-x-1">
                  <span>Calcular ahora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Tarjeta 2: Manual Contable Práctico */}
            <Link
              to="/manual"
              className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#274737] to-[#213C2F] border-2 border-[#B8955E] hover:border-[#a3824e] transition-all duration-300 flex flex-col justify-between text-left shadow-2xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-[#B8955E] text-[#213C2F] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold">
                Lanzamiento 2026
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#B8955E] text-[#213C2F] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-md">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8955E] font-bold block">
                    Material práctico exclusivo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#B8955E] transition-colors">
                    Manual Contable Práctico
                  </h3>
                </div>
                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  Contabilidad Aplicada con criterio de auditor externo: papeles de trabajo, asientos de la liquidación del IVA, prorrateo y ejercitario de 100 casos resueltos.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                <span className="text-[#B8955E]">Ver opciones y casos</span>
                <ArrowRight className="w-4 h-4 text-[#B8955E]" />
              </div>
            </Link>

            {/* Tarjeta 3: Asesoría tributaria */}
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera solicitar una asesoría tributaria sobre mis impuestos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-7 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#B8955E]/60 transition-all duration-300 flex flex-col justify-between text-left shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#B8955E]/20 border border-[#B8955E]/40 text-[#B8955E] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8955E] font-bold block">
                    Contacto directo (+595 993 535291)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#B8955E] transition-colors">
                    Asesoría tributaria
                  </h3>
                </div>
                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  Delegá la apertura de tu RUC, la carga mensual de RG 90 o la liquidación de IVA con atención directa y presupuesto a medida.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm font-bold text-[#B8955E] group-hover:translate-x-1 transition-transform">
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
      <section id="beneficios" className="py-16 sm:py-24 bg-white text-[#213C2F] border-b border-[#C6C3BE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8955E] bg-[#B8955E]/10 px-3.5 py-1.5 rounded-full inline-block">
              Ventajas Clave
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#213C2F] tracking-tight">
              ¿Por qué elegir Estudio Cáceres?
            </h2>
            <p className="text-base text-[#213C2F]/80 leading-relaxed font-sans">
              Brindamos tranquilidad técnica y cumplimiento normativo para que te enfoques en crecer sin miedo a sanciones o fiscalizaciones de la DNIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] hover:border-[#213C2F] shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C6C3BE] flex items-center justify-center text-[#B8955E]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#213C2F]">Atención personalizada</h3>
              <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                Nos adaptamos a las necesidades específicas de tu profesión o rubro comercial. Trato directo sin intermediarios.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] hover:border-[#213C2F] shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C6C3BE] flex items-center justify-center text-[#B8955E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#213C2F]">Cumplimiento tributario al día</h3>
              <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                Evitá multas y notificaciones de la DNIT. Monitoreamos los plazos de presentación con reportes oportunos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] hover:border-[#213C2F] shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C6C3BE] flex items-center justify-center text-[#B8955E]">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#213C2F]">Ahorro de tiempo y dinero</h3>
              <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                Optimizá tus deducciones fiscales de manera 100% legal y transparente según las normativas vigentes en Paraguay.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] hover:border-[#213C2F] shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C6C3BE] flex items-center justify-center text-[#B8955E]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#213C2F]">Asesoramiento práctico</h3>
              <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                Explicaciones claras y sencillas sin lenguaje técnico indescifrable, para que comprendas el estado real de tu contabilidad.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] hover:border-[#213C2F] shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C6C3BE] flex items-center justify-center text-[#B8955E]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#213C2F]">Respuesta ágil por WhatsApp</h3>
              <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                Canal directo de comunicación sin esperas interminables para resolver dudas puntuales de timbrados, comprobantes o impuestos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] hover:border-[#213C2F] shadow-xs hover:shadow-md transition-all text-left space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C6C3BE] flex items-center justify-center text-[#B8955E]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#213C2F]">Dominio de IVA, IRP e IRE</h3>
              <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                Criterio riguroso fundamentado en años de práctica y auditoría externa para liquidaciones precisas en el Marangatu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICIOS PROFESIONALES                                       */}
      {/* ------------------------------------------------------------- */}
      <section id="servicios" className="py-16 sm:py-24 bg-[#E9E6E0] text-[#213C2F] border-b border-[#C6C3BE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#213C2F] bg-white px-3.5 py-1.5 rounded-full inline-block border border-[#C6C3BE]">
                Nuestra Especialidad
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#213C2F] tracking-tight">
                Servicios Profesionales de Contabilidad
              </h2>
              <p className="text-sm sm:text-base text-[#213C2F]/80 font-sans">
                Trabajamos de manera digital en todo Paraguay con procesos transparentes y seguimiento continuo.
              </p>
            </div>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera solicitar un presupuesto de servicios contables.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C6C3BE] hover:border-[#213C2F] text-sm font-bold text-[#213C2F] transition-all shadow-xs self-start md:self-auto"
            >
              <span>Pedir propuesta personalizada</span>
              <ChevronRight className="w-4 h-4 text-[#B8955E]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1: Gestión de RUC */}
            <div className="p-8 rounded-2xl bg-white border border-[#C6C3BE] shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#213C2F]/5 text-[#213C2F] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#B8955E]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#213C2F] bg-[#E9E6E0] px-2.5 py-1 rounded-md">
                    DNIT / Marangatu
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#213C2F]">Gestión y Apertura de RUC</h3>
                  <span className="text-xs font-mono font-bold text-[#B8955E] uppercase tracking-wide block mt-0.5">
                    Trámites administrativos y alta fiscal
                  </span>
                </div>
                <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                  Formalizá tu actividad laboral o emprendimiento sin complicaciones. Te asesoramos sobre las obligaciones tributarias exactas que te corresponden.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#213C2F]/85 pt-2 border-t border-[#C6C3BE]/40">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Inscripción y apertura para personas físicas y unipersonales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Reactivación de RUC suspendido o bloqueado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Actualización de datos y actividades económicas</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa el servicio de Apertura o Gestión de RUC.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#213C2F] text-white hover:bg-[#16271f] transition-colors border border-[#B8955E]/40"
              >
                Consultar por trámite de RUC
              </a>
            </div>

            {/* Service 2: Presentación Mensual de IVA */}
            <div className="p-8 rounded-2xl bg-white border border-[#C6C3BE] shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#213C2F]/5 text-[#213C2F] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#B8955E]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#213C2F] bg-[#E9E6E0] px-2.5 py-1 rounded-md">
                    Formulario 120 V.4
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#213C2F]">Presentación Mensual de IVA</h3>
                  <span className="text-xs font-mono font-bold text-[#B8955E] uppercase tracking-wide block mt-0.5">
                    Liquidación continua y cálculo de impuestos
                  </span>
                </div>
                <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                  Cumplí con tus obligaciones mensuales a tiempo. Analizamos tus comprobantes deducibles y evitamos cualquier saldo u omisión impositiva.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#213C2F]/85 pt-2 border-t border-[#C6C3BE]/40">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Declaración mensual de IVA Formulario 120 V.4</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Control estricto de fechas de vencimiento por terminación de RUC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Informe mensual de compras deducibles y saldo fiscal</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa el servicio de Presentación Mensual de IVA.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#213C2F] text-white hover:bg-[#16271f] transition-colors border border-[#B8955E]/40"
              >
                Consultar por liquidación de IVA
              </a>
            </div>

            {/* Service 3: Gestión RG 90 */}
            <div className="p-8 rounded-2xl bg-white border border-[#C6C3BE] shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#213C2F]/5 text-[#213C2F] flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#B8955E]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#213C2F] bg-[#E9E6E0] px-2.5 py-1 rounded-md">
                    SIFEN / RG 90
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#213C2F]">Carga y Registro RG 90</h3>
                  <span className="text-xs font-mono font-bold text-[#B8955E] uppercase tracking-wide block mt-0.5">
                    Comprobantes electrónicos y registro obligatorio
                  </span>
                </div>
                <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                  Procesamos tus comprobantes de ventas y compras en el sistema Marangatu cumpliendo con las exigencias formales de la Resolución General 90.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#213C2F]/85 pt-2 border-t border-[#C6C3BE]/40">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Carga mensual de facturas electrónicas y virtuales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Generación y confirmación del talón de presentación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Validación cruzada con declaraciones de IVA e IRE</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, me interesa la Gestión y Carga de RG 90.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#213C2F] text-white hover:bg-[#16271f] transition-colors border border-[#B8955E]/40"
              >
                Consultar por RG 90
              </a>
            </div>

            {/* Service 4: Clases Prácticas */}
            <div className="p-8 rounded-2xl bg-white border border-[#C6C3BE] shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#213C2F]/5 text-[#213C2F] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#B8955E]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#213C2F] bg-[#E9E6E0] px-2.5 py-1 rounded-md">
                    Capacitación 1 a 1
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#213C2F]">Clases Prácticas de Contabilidad</h3>
                  <span className="text-xs font-mono font-bold text-[#B8955E] uppercase tracking-wide block mt-0.5">
                    Tutoría para estudiantes y auxiliares
                  </span>
                </div>
                <p className="text-sm text-[#213C2F]/80 leading-relaxed font-sans">
                  Aprendé con casos del día a día laboral: asientos contables, balance de sumas y saldos, conciliaciones y liquidación de tributos en Paraguay.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#213C2F]/85 pt-2 border-t border-[#C6C3BE]/40">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Contabilidad básica e intermedia con papeles de trabajo reales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Tutoría para exámenes, tesis y preparación profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0" />
                    <span>Modalidad virtual interactiva con material descargable</span>
                  </li>
                </ul>
              </div>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera consultar sobre las Clases Prácticas de Contabilidad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-[#213C2F] text-white hover:bg-[#16271f] transition-colors border border-[#B8955E]/40"
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
      <section className="py-16 sm:py-24 bg-white text-[#213C2F] border-b border-[#C6C3BE]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8955E] bg-[#B8955E]/10 px-3.5 py-1.5 rounded-full inline-block">
              Testimonios reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#213C2F] tracking-tight">
              Así funciona después de comprar
            </h2>
            <p className="text-base sm:text-lg text-[#213C2F]/80 leading-relaxed font-sans">
              Atención directa y despacho seguro para cada lector del manual
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
            {/* Imagen */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C6C3BE] shadow-md bg-[#213C2F] mx-auto">
                <img
                  src={capturaEntregaImg}
                  alt="Chat real de entrega y coordinación por WhatsApp"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  width={500}
                  height={880}
                />
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E9E6E0] border border-[#C6C3BE] text-xs font-medium text-[#213C2F] shadow-xs">
                <span>📱 Coordinación y entrega vía WhatsApp — Estudio Cáceres</span>
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#E9E6E0]/50 border border-[#C6C3BE] shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#B8955E]/20 text-[#B8955E] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#B8955E]" />
                </div>

                <p className="text-lg sm:text-xl font-heading font-bold text-[#213C2F] leading-snug">
                  Hacé como Fabián y afianzate en el mundo contable con nuestro manual.
                </p>

                <p className="text-sm sm:text-base text-[#213C2F]/80 leading-relaxed font-sans">
                  Ejemplares impresos con tapa full color y anillado profesional para estudio continuo.
                </p>

                <div className="pt-3 border-t border-[#C6C3BE]/50 space-y-2.5 text-xs sm:text-sm text-[#213C2F]/85">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0 mt-0.5" />
                    <span>Entrega transparente y directa vía WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0 mt-0.5" />
                    <span>Material físico impreso con encuadernación de alta durabilidad</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8955E] shrink-0 mt-0.5" />
                    <span>Acompañamiento profesional y soporte ante dudas</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/manual"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#213C2F] text-white hover:bg-[#16271f] transition-colors shadow-sm border border-[#B8955E]/40"
                >
                  <BookOpen className="w-4 h-4 text-[#B8955E]" />
                  <span>Conocer el Manual Contable</span>
                  <ArrowRight className="w-4 h-4 text-[#B8955E]" />
                </Link>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Estudio Cáceres, vi los testimonios del manual y quiero consultar sobre el ejemplar impreso.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#213C2F] bg-white border border-[#C6C3BE] hover:bg-[#E9E6E0] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#B8955E]" />
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
      <section className="py-16 sm:py-24 bg-[#213C2F] text-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-[#213C2F] rounded-3xl border border-[#C6C3BE] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column Information */}
            <div className="lg:col-span-5 bg-[#213C2F] text-white p-8 sm:p-10 flex flex-col justify-between text-left space-y-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B8955E] font-bold bg-white/10 px-3 py-1 rounded-full inline-block border border-[#B8955E]/30">
                  Propuesta sujeta a análisis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
                  Dejá tu contabilidad en manos de especialistas
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-sans">
                  Escribinos para evaluar la situación de tu RUC o recibir una propuesta ajustada al volumen de tus comprobantes.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8955E]" />
                  <span>Atención directa vía WhatsApp (+595 993 535291)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8955E]" />
                  <span>Presupuesto sin compromiso de contratación</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8955E]" />
                  <span>Cobertura para todo el territorio paraguayo</span>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 text-left bg-white">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h4 className="text-xl font-bold font-heading text-[#213C2F]">
                  Solicitá tu asesoría contable
                </h4>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-1">
                    Nombre o Razón Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Ej: Marcelo Cáceres"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C6C3BE] focus:outline-none focus:ring-2 focus:ring-[#B8955E] text-sm text-[#213C2F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-1">
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    placeholder="Ej: 0981 123 456"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C6C3BE] focus:outline-none focus:ring-2 focus:ring-[#B8955E] text-sm text-[#213C2F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-1">
                      Perfil Contribuyente
                    </label>
                    <select
                      value={leadForm.clientType}
                      onChange={(e) => setLeadForm({ ...leadForm, clientType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#C6C3BE] focus:outline-none focus:ring-2 focus:ring-[#B8955E] text-sm bg-white text-[#213C2F]"
                    >
                      <option value="Profesional Independiente">Profesional Independiente</option>
                      <option value="Emprendedor / Pequeño Negocio">Emprendedor / PYME</option>
                      <option value="Estudiante de Contabilidad">Estudiante de Contabilidad</option>
                      <option value="Sociedad Comercial (S.A./S.R.L./E.A.S.)">Sociedad Comercial</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-1">
                      Servicio de Interés
                    </label>
                    <select
                      value={leadForm.service}
                      onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#C6C3BE] focus:outline-none focus:ring-2 focus:ring-[#B8955E] text-sm bg-white text-[#213C2F]"
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
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#213C2F]/80 mb-1">
                    Mensaje o Consulta (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={leadForm.details}
                    onChange={(e) => setLeadForm({ ...leadForm, details: e.target.value })}
                    placeholder="Contanos brevemente tu rubro o inquietud..."
                    className="w-full px-4 py-2 rounded-xl border border-[#C6C3BE] focus:outline-none focus:ring-2 focus:ring-[#B8955E] text-sm resize-none text-[#213C2F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#213C2F] hover:bg-[#16271f] text-white flex items-center justify-center gap-2 transition-colors shadow-sm border border-[#B8955E]/40"
                >
                  <Send className="w-4 h-4 text-[#B8955E]" />
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
      <section className="py-16 sm:py-24 bg-[#E9E6E0] text-[#213C2F]">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8955E]">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#213C2F]">
              Resolución de dudas sobre nuestros servicios
            </h2>
          </div>

          <div className="divide-y divide-[#C6C3BE] border-y border-[#C6C3BE] bg-white rounded-2xl px-6 shadow-xs">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#213C2F] hover:text-[#B8955E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#213C2F]/50 transition-transform ${
                        isOpen ? 'rotate-180 text-[#B8955E]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-[#213C2F]/80 leading-relaxed font-sans pr-6">
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
