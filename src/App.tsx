import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Check,
  ShieldCheck,
  Download,
  CreditCard,
  Building2,
  Smartphone,
  Lock,
  CheckCircle2,
  FileText,
  MessageCircle,
  ExternalLink,
  Eye
} from 'lucide-react';

import heroTabletImg from './assets/images/hero_tablet_formulario120_1792156674072.jpg';
import balanceSumasSaldosImg from './assets/images/balance_sumas_saldos_1792161555547.jpg';
import logoImgLocal from './assets/images/logo_estudio_caceres_1792072395305.jpg';
import page1Svg from './assets/images/muestras_manual_contabilidad.svg';
import page2Svg from './assets/images/muestras_manual_contabilidad2.svg';
import page3Svg from './assets/images/muestras_manual_contabilidad3.svg';

const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/Y108013354Q';
const WHATSAPP_NUMBER = '595993535291';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Estudio Cáceres, deseo más información sobre el Manual de Contabilidad DNIT 2026.')}`;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<{ src: string; title: string; caption: string } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'sipap' | 'wallet'>('card');
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    ruc: '',
    telefono: '',
  });

  // Close mobile menu or modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setPurchaseModalOpen(false);
        setPreviewDoc(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (purchaseModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [purchaseModalOpen]);

  const handleOpenPurchase = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setPurchaseSuccess(false);
    setDownloadStarted(false);
    setPurchaseModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchaseSuccess(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      q: '¿El manual contempla las disposiciones para 2026?',
      a: 'Sí, el compendio integra las disposiciones normativas de la DNIT y las regulaciones vinculadas a SIFEN proyectadas para el ejercicio.'
    },
    {
      q: '¿En qué formato se entregan los modelos de registro?',
      a: 'Los modelos de trabajo se facilitan en archivos .docx editables para permitir su adaptación rápida a cada cliente.'
    },
    {
      q: '¿Qué medios de pago se encuentran disponibles?',
      a: 'La transacción se gestiona mediante dLocal, aceptando tarjetas emitidas en Paraguay, transferencias y billeteras electrónicas.'
    },
    {
      q: '¿Sirve para estudiantes y recién egresados?',
      a: 'El contenido está formulado para brindar criterio práctico y seguridad técnica a quienes inician su actividad independiente.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F9] text-[#1C242B] font-sans selection:bg-[#C98A2C]/25 selection:text-[#0F2438]">
      {/* ------------------------------------------------------------- */}
      {/* STICKY PROMO BANNER                                           */}
      {/* ------------------------------------------------------------- */}
      <aside
        aria-label="Aviso de promoción por cupos limitados"
        className="sticky top-0 z-50 w-full bg-[#C98A2C] text-[#0F2438] py-2 px-3 sm:px-4 shadow-sm"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between sm:justify-center gap-3 text-center">
          <p className="text-xs sm:text-[13px] font-bold leading-tight mx-auto sm:mx-0">
            <span role="img" aria-label="Fuego" className="mr-1">🔥</span>
            <span>Cupos limitados:</span>{' '}
            <span className="font-extrabold underline decoration-[#0F2438]/40 underline-offset-2">
              10 unidades al precio actual
            </span>{' '}
            <span>— luego 220.000 Gs. (precio normal)</span>
          </p>
          {/* Action button: visible on desktop, hidden on small mobile screens to prevent clutter */}
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors shrink-0 shadow-xs"
          >
            <span>Aprovechar</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* HEADER / NAVIGATION                                          */}
      {/* ------------------------------------------------------------- */}
      <header
        id="cabecalho"
        className="sticky top-[34px] sm:top-[37px] z-40 w-full transition-all duration-200 py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 bg-[#F7F8F9]/90 backdrop-blur-md"
      >
        <div className="max-w-[1280px] mx-auto">
          <nav
            aria-label="Navegación principal"
            className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full sm:rounded-[26px] bg-white/95 border border-slate-900/10 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
          >
            {/* Brand Logo / Wordmark */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('inicio');
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C98A2C] rounded-lg"
            >
              <img
                src={logoImgLocal}
                alt="Logo Estudio Cáceres"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#C98A2C]/40 shadow-xs group-hover:scale-105 transition-transform shrink-0"
              />
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-[#0F2438] group-hover:opacity-90 transition-opacity whitespace-nowrap">
                Estudio Cáceres
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-slate-700">
              <a
                href="#contenido"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contenido');
                }}
                className="hover:text-[#0F2438] transition-colors whitespace-nowrap"
              >
                Material incluido
              </a>
              <a
                href="#pasos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pasos');
                }}
                className="hover:text-[#0F2438] transition-colors whitespace-nowrap"
              >
                Ruta de aplicación
              </a>
              <a
                href="#ejemplos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('ejemplos');
                }}
                className="hover:text-[#0F2438] transition-colors whitespace-nowrap text-[#C98A2C] font-bold"
              >
                Casos reales
              </a>
              <a
                href="#comparativa"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('comparativa');
                }}
                className="hover:text-[#0F2438] transition-colors whitespace-nowrap"
              >
                Evolución profesional
              </a>
              <a
                href="#preguntas"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('preguntas');
                }}
                className="hover:text-[#0F2438] transition-colors whitespace-nowrap"
              >
                Resolución de dudas
              </a>
            </div>

            {/* Desktop Action Button */}
            <div className="hidden sm:flex items-center">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
              >
                Comprar el manual ahora
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="lg:hidden p-2 rounded-xl text-[#0F2438] hover:bg-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C98A2C]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Navigation Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white border border-slate-900/10 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
                <a
                  href="#contenido"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contenido');
                  }}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#0F2438] transition-colors"
                >
                  Material incluido
                </a>
                <a
                  href="#pasos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pasos');
                  }}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#0F2438] transition-colors"
                >
                  Ruta de aplicación
                </a>
                <a
                  href="#ejemplos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('ejemplos');
                  }}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-50 text-[#C98A2C] font-bold transition-colors"
                >
                  Casos reales (Vista previa)
                </a>
                <a
                  href="#comparativa"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('comparativa');
                  }}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#0F2438] transition-colors"
                >
                  Evolución profesional
                </a>
                <a
                  href="#preguntas"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('preguntas');
                  }}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#0F2438] transition-colors"
                >
                  Resolución de dudas
                </a>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors"
                >
                  Comprar el manual ahora
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#15803d] bg-emerald-50 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Consultar por WhatsApp (+595 993 535291)</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* ------------------------------------------------------------- */}
        {/* HERO SECTION (#inicio)                                        */}
        {/* ------------------------------------------------------------- */}
        <section
          id="inicio"
          className="w-full bg-[#0F2438] text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          {/* Subtle architectural ambient gradient */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C98A2C] via-transparent to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                {/* Clean unboxed kicker metadata with brand seal */}
                <div className="flex items-center gap-2.5">
                  <img
                    src={logoImgLocal}
                    alt="Sello Estudio Cáceres"
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-[#C98A2C]/60 shrink-0"
                  />
                  <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-[#dbe4f0]">
                    Normativa DNIT y SIFEN 2026
                  </div>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-heading leading-[1.08] tracking-tight text-balance">
                  Evite multas tributarias con{' '}
                  <span className="text-[#C98A2C]">criterio contable certero</span>
                </h1>

                {/* Body Copy */}
                <p className="text-base sm:text-lg text-[#dbe4f0] leading-relaxed max-w-2xl">
                  Proteja a sus clientes y su reputación profesional. Domine la liquidación de IVA y el
                  armado de libros obligatorios con el Manual de Contabilidad Aplicada preparado para el
                  ejercicio vigente en Paraguay.
                </p>

                {/* CTA Button & Urgency Callout */}
                <div className="pt-2 sm:pt-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                    <a
                      href={HOTMART_CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-xl text-base font-extrabold text-[#0F2438] bg-[#C98A2C] hover:bg-[#d99732] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(15,23,42,0.18)] text-center shrink-0"
                    >
                      Conseguir el manual ahora
                    </a>

                    {/* Urgency Badge next to Hero CTA */}
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 border border-[#C98A2C]/50 backdrop-blur-xs text-xs sm:text-sm text-[#dbe4f0]">
                      <span className="text-base shrink-0" role="img" aria-label="Fuego">🔥</span>
                      <div className="leading-tight">
                        <span className="font-extrabold text-white">Cupos limitados:</span>{' '}
                        <span className="text-[#C98A2C] font-extrabold">10 unidades al precio actual</span>{' '}
                        <span className="text-[#dbe4f0]/75 block sm:inline">— luego 220.000 Gs. (precio normal)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#dbe4f0]/80">
                    <ShieldCheck className="w-4 h-4 text-[#C98A2C] shrink-0" />
                    <span>Pago Seguro vía Hotmart · Acceso Inmediato a todos los recursos</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset (Formulario 120 V.4 Tablet Mockup) */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 aspect-[16/9] lg:aspect-[4/3] group">
                  <img
                    src={heroTabletImg}
                    width={1280}
                    height={720}
                    alt="Tablet digital con el Formulario 120 V.4 de Liquidación de IVA DNIT"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-[#dbe4f0] flex items-center justify-between border border-white/10">
                    <span className="font-semibold text-white truncate">Formulario 120 V.4 · Marangatú</span>
                    <span className="text-[#C98A2C] font-bold shrink-0 ml-2">Casos Reales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION: MATERIAL INCLUIDO (#contenido)                       */}
        {/* ------------------------------------------------------------- */}
        <section
          id="contenido"
          className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
        >
          <div className="max-w-[1240px] mx-auto space-y-10 sm:space-y-14">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
                  Recursos de <span className="text-[#0F2438]">aplicación práctica</span> para el trabajo
                  diario
                </h2>
              </div>
              <div className="shrink-0">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm"
                >
                  Acceder a las plantillas
                </a>
              </div>
            </div>

            {/* Grid with 4 Resource Columns + Side Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* 4 Feature Columns */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Item 1 */}
                <div className="pt-4 border-t border-[#0F2438] space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                    Plantillas editables
                  </h3>
                  <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                    Archivos en formato .docx y modelos de registros contables listos para personalizar
                    según cada empresa.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="pt-4 border-t border-[#0F2438] space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                    Guía de control interno
                  </h3>
                  <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                    Procedimientos metódicos para detectar inconsistencias antes de la presentación
                    formal ante la DNIT.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="pt-4 border-t border-[#0F2438] space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                    Glosario tributario local
                  </h3>
                  <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                    Definiciones normativas y términos técnicos específicos del régimen impositivo
                    paraguayo.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="pt-4 border-t border-[#0F2438] space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                    Seguridad en libros contables
                  </h3>
                  <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                    Estructuras de registro que respaldan operaciones complejas y garantizan trazabilidad
                    documental.
                  </p>
                </div>
              </div>

              {/* Mockup Pila de Páginas: Real PDF Pages Superposed */}
              <div className="lg:col-span-5 w-full">
                <div className="relative h-[380px] sm:h-[430px] lg:h-[460px] flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-slate-100/70 to-slate-200/50 rounded-2xl border border-slate-200 shadow-inner overflow-hidden group">
                  {/* Subtle decorative background glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent pointer-events-none" />

                  {/* Page 3 (Back left layer: -4deg) */}
                  <div
                    onClick={() => setPreviewDoc({ src: page3Svg, title: 'CASO 5: Prorrateo de IVA Crédito (Ventas Mixtas)', caption: 'Prorrateo de IVA crédito en ventas mixtas' })}
                    className="absolute w-[68%] sm:w-[72%] max-w-[320px] -rotate-4 -translate-x-5 -translate-y-2 origin-bottom shadow-lg rounded-xl border border-slate-300 bg-white overflow-hidden transition-all duration-300 group-hover:-rotate-6 group-hover:-translate-x-7 cursor-pointer z-10 hover:z-40"
                    title="Clic para ver página completa: Caso 5 Prorrateo"
                  >
                    <img
                      src={page3Svg}
                      width={800}
                      height={1020}
                      alt="Página del manual Caso 5: Prorrateo de IVA Crédito en ventas mixtas"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover select-none pointer-events-none"
                    />
                  </div>

                  {/* Page 2 (Back right layer: 3deg) */}
                  <div
                    onClick={() => setPreviewDoc({ src: page2Svg, title: 'CASO 2: Saldo a Favor del Fisco (Impuesto Determinado a Pagar)', caption: 'Saldo a favor del fisco con asiento contable' })}
                    className="absolute w-[68%] sm:w-[72%] max-w-[320px] rotate-3 translate-x-5 translate-y-2 origin-bottom shadow-lg rounded-xl border border-slate-300 bg-white overflow-hidden transition-all duration-300 group-hover:rotate-6 group-hover:translate-x-7 cursor-pointer z-20 hover:z-40"
                    title="Clic para ver página completa: Caso 2 Asientos Contables"
                  >
                    <img
                      src={page2Svg}
                      width={800}
                      height={1020}
                      alt="Página del manual Caso 2: Saldo a favor del fisco con asiento contable"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover select-none pointer-events-none"
                    />
                  </div>

                  {/* Page 1 (Front center layer: 0deg) */}
                  <div
                    onClick={() => setPreviewDoc({ src: page1Svg, title: 'Portada e Introducción al Mecanismo de Liquidación de IVA', caption: 'Estructura del mecanismo de liquidación' })}
                    className="relative w-[70%] sm:w-[74%] max-w-[335px] rotate-0 shadow-2xl rounded-xl border border-slate-400/80 bg-white overflow-hidden transition-all duration-300 group-hover:scale-105 cursor-pointer z-30"
                    title="Clic para ver página completa: Portada y Estructura"
                  >
                    <img
                      src={page1Svg}
                      width={800}
                      height={1020}
                      alt="Portada del manual práctico de contabilidad y liquidación de IVA DNIT"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover select-none pointer-events-none"
                    />
                  </div>

                  {/* Floating click indicator badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 bg-[#0F2438]/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <span>📄 Contenido real del manual PDF</span>
                    <span className="text-[#C98A2C] hidden sm:inline">(clic para ampliar)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Insight Note */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F9] border border-slate-200/80 text-sm sm:text-base text-[#566173] leading-relaxed">
              Herramientas desarrolladas para resolver casos concretos en el escritorio, reduciendo
              tiempos de cálculo y eliminando el riesgo de discrepancias con el fisco.
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION: RUTA DE APLICACIÓN (#pasos)                          */}
        {/* ------------------------------------------------------------- */}
        <section
          id="pasos"
          className="w-full bg-[radial-gradient(60%_55%_at_12%_0%,rgba(15,36,56,0.06),transparent_70%),#ffffff] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
        >
          <div className="max-w-[1180px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Context, Image & CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-[#0F2438]">
                  Ruta de aplicación
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
                  De la revisión normativa a la{' '}
                  <span className="text-[#0F2438]">liquidación sin errores</span>
                </h2>
                <p className="text-base text-[#566173] leading-relaxed">
                  Un orden claro para estudiar, preparar y asentar los balances de sus empresas sin dudas
                  operativas.
                </p>

                {/* Balance de Sumas y Saldos - Caso Práctico DNIT */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-100 group relative">
                  <img
                    src={balanceSumasSaldosImg}
                    width={800}
                    height={600}
                    alt="Caso Comercial Paraguay: Balance de Sumas y Saldos y Libro Mayor en tablet sobre escritorio de oficina"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div>
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm"
                  >
                    Revisar el contenido completo
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Numbered Steps */}
              <div className="lg:col-span-7 divide-y divide-slate-200">
                {/* Step 01 */}
                <div className="py-6 first:pt-0 grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-6 items-start">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] leading-none pt-1">
                    01
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                      Diagnóstico de obligaciones
                    </h3>
                    <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                      Identifique el encuadre exacto de la entidad bajo el régimen DNIT y los requerimientos
                      SIFEN aplicables.
                    </p>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="py-6 grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-6 items-start">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] leading-none pt-1">
                    02
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                      Parametrización con plantillas
                    </h3>
                    <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                      Adapte los modelos en formato .docx a la estructura operativa de compras y ventas de
                      su cliente.
                    </p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="py-6 grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-6 items-start">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] leading-none pt-1">
                    03
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                      Cotejo de control interno
                    </h3>
                    <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                      Aplique la lista de verificación para corroborar retenciones, créditos fiscales y
                      respaldos documentales.
                    </p>
                  </div>
                </div>

                {/* Step 04 */}
                <div className="py-6 last:pb-0 grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-6 items-start">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-[#0F2438] leading-none pt-1">
                    04
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                      Cierre de libros formales
                    </h3>
                    <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                      Asiente los saldos definitivos con la tranquilidad de haber cumplido cada exigencia
                      legal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION: VISTA PREVIA / CASOS REALES (#ejemplos)              */}
        {/* ------------------------------------------------------------- */}
        <section
          id="ejemplos"
          className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
        >
          <div className="max-w-[1240px] mx-auto space-y-10 sm:space-y-14">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-[#C98A2C]">
                Material Verificado del Manual
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
                Vista previa: casos reales del manual
              </h2>
              <p className="text-base sm:text-lg text-[#566173] leading-relaxed">
                Extractos reales del capítulo de Liquidación de IVA (Formulario 120 V.4).
              </p>
            </div>

            {/* 3-Column Responsive Grid on Desktop, 1 Column on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Portada */}
              <div
                onClick={() =>
                  setPreviewDoc({
                    src: page1Svg,
                    title: 'Portada e Introducción al Mecanismo de Liquidación de IVA',
                    caption: 'Estructura del mecanismo de liquidación'
                  })
                }
                className="group flex flex-col rounded-2xl border border-slate-200 bg-[#F7F8F9] hover:bg-white hover:border-[#0F2438]/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="p-4 sm:p-5 pb-0 flex items-center justify-center bg-slate-100/60 overflow-hidden">
                  <div className="w-full max-w-[280px] rounded-lg shadow-md border border-slate-300 bg-white overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={page1Svg}
                      width={800}
                      height={1020}
                      alt="Estructura del mecanismo de liquidación - Portada del manual práctico"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C98A2C] block">
                      Portada
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B] group-hover:text-[#0F2438] transition-colors">
                      Estructura del mecanismo de liquidación
                    </h3>
                    <p className="text-xs sm:text-sm text-[#566173] mt-1 leading-relaxed">
                      Diferenciación entre saldo técnico y saldo financiero con la regla de oro de los asientos de IVA.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0F2438] group-hover:text-[#C98A2C] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver página completa</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Caso 2 */}
              <div
                onClick={() =>
                  setPreviewDoc({
                    src: page2Svg,
                    title: 'CASO 2: Saldo a Favor del Fisco (Impuesto Determinado a Pagar)',
                    caption: 'Saldo a favor del fisco con asiento contable'
                  })
                }
                className="group flex flex-col rounded-2xl border border-slate-200 bg-[#F7F8F9] hover:bg-white hover:border-[#0F2438]/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="p-4 sm:p-5 pb-0 flex items-center justify-center bg-slate-100/60 overflow-hidden">
                  <div className="w-full max-w-[280px] rounded-lg shadow-md border border-slate-300 bg-white overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={page2Svg}
                      width={800}
                      height={1020}
                      alt="Saldo a favor del fisco con asiento contable - Caso 2 del manual de contabilidad"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C98A2C] block">
                      Caso 2
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B] group-hover:text-[#0F2438] transition-colors">
                      Saldo a favor del fisco con asiento contable
                    </h3>
                    <p className="text-xs sm:text-sm text-[#566173] mt-1 leading-relaxed">
                      Llenado exacto de casillas en el Formulario 120 V.4 y asientos de cancelación de IVA Débito contra Crédito y Pago en Banco.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0F2438] group-hover:text-[#C98A2C] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver página completa</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Caso 5 */}
              <div
                onClick={() =>
                  setPreviewDoc({
                    src: page3Svg,
                    title: 'CASO 5: Prorrateo o Proporcionalidad de IVA Crédito (Ventas Mixtas)',
                    caption: 'Prorrateo de IVA crédito en ventas mixtas'
                  })
                }
                className="group flex flex-col rounded-2xl border border-slate-200 bg-[#F7F8F9] hover:bg-white hover:border-[#0F2438]/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="p-4 sm:p-5 pb-0 flex items-center justify-center bg-slate-100/60 overflow-hidden">
                  <div className="w-full max-w-[280px] rounded-lg shadow-md border border-slate-300 bg-white overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={page3Svg}
                      width={800}
                      height={1020}
                      alt="Prorrateo de IVA crédito en ventas mixtas - Caso 5 del manual de contabilidad"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C98A2C] block">
                      Caso 5
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B] group-hover:text-[#0F2438] transition-colors">
                      Prorrateo de IVA crédito en ventas mixtas
                    </h3>
                    <p className="text-xs sm:text-sm text-[#566173] mt-1 leading-relaxed">
                      Fórmula de coeficiente semestral (71,42857%), distribución a Casilla 164 y asiento de costo/gasto no deducible en IRE (Casilla 64).
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0F2438] group-hover:text-[#C98A2C] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver página completa</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action strip */}
            <div className="p-6 rounded-2xl bg-[#0F2438] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-heading font-bold text-base sm:text-lg text-white">
                  ¿Desea dominar todos los casos del Formulario 120 V.4?
                </div>
                <div className="text-xs sm:text-sm text-[#dbe4f0]/80">
                  El manual incluye todos los casos prácticos resueltos, tablas de rubros y asientos contables listos.
                </div>
              </div>
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-extrabold bg-[#C98A2C] text-[#0F2438] hover:bg-[#d99732] active:scale-[0.98] transition-all shadow-md shrink-0 whitespace-nowrap"
              >
                Adquirir el manual completo
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION: EVOLUCIÓN PROFESIONAL / COMPARATIVA (#comparativa)   */}
        {/* ------------------------------------------------------------- */}
        <section
          id="comparativa"
          className="w-full bg-[#f6f7f9] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
        >
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
                  El salto de la incertidumbre al control documentado
                </h2>
                <p className="text-base text-[#566173] leading-relaxed">
                  La diferencia entre temer una fiscalización o responder con solvencia técnica ante
                  cualquier requerimiento formal.
                </p>
                <div className="pt-2">
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm"
                  >
                    Asegurar mi práctica profesional
                  </a>
                </div>
              </div>

              {/* Right Column: Comparison Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Before: Dudas operativas */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
                    !
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                    Gestión con dudas operativas
                  </h3>
                  <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                    Riesgo constante de omisiones involuntarias, cálculo errático de retenciones y temor a
                    inspecciones sorpresa.
                  </p>
                </div>

                {/* After: Respaldo técnico */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#0F2438]/20 shadow-md space-y-3 relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                    Práctica con respaldo técnico
                  </h3>
                  <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                    Papeles de trabajo estructurados, criterios claros de liquidación y comprobantes
                    debidamente justificados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION: RESOLUCIÓN DE DUDAS / FAQ (#preguntas)               */}
        {/* ------------------------------------------------------------- */}
        <section
          id="preguntas"
          className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
        >
          <div className="max-w-[1180px] mx-auto space-y-8 sm:space-y-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
                Respuestas técnicas sobre el material y su uso
              </h2>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqItems.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="py-4 sm:py-5">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#1C242B] hover:text-[#0F2438] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C98A2C]"
                    >
                      <span>{item.q}</span>
                      <span
                        className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-slate-200' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-3 text-sm sm:text-base text-[#566173] leading-relaxed pr-6 animate-in fade-in duration-150">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-sm sm:text-base text-slate-500">
              Todo lo que necesita saber sobre el formato, la vigencia legal y la metodología de entrega
              del manual.
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION: FINAL CTA / OBTENER (#obtener)                       */}
        {/* ------------------------------------------------------------- */}
        <section
          id="obtener"
          className="w-full bg-[radial-gradient(60%_55%_at_50%_0%,rgba(15,36,56,0.06),transparent_70%),#ffffff] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="max-w-[880px] mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#1C242B] tracking-tight">
              Inicie hoy su gestión contable con total respaldo
            </h2>

            <div className="w-16 h-0.5 bg-slate-300 mx-auto" />

            <p className="text-base sm:text-lg text-[#566173] max-w-2xl mx-auto leading-relaxed">
              Consiga el Manual de Contabilidad Aplicada con sus tres paquetes de recursos adicionales y
              trabaje con la calma de estar al día.
            </p>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left py-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="font-heading font-bold text-sm sm:text-base text-[#0F2438]">
                  Plataforma Segura Hotmart
                </div>
                <div className="text-xs sm:text-sm text-[#566173]">
                  Operación cifrada con soporte de medios locales e internacionales de pago.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="font-heading font-bold text-sm sm:text-base text-[#0F2438]">
                  Actualización tributaria
                </div>
                <div className="text-xs sm:text-sm text-[#566173]">
                  Alineado a las resoluciones de la DNIT para el ejercicio 2026.
                </div>
              </div>
            </div>

            {/* Price Badge with Launch Offer */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/10 border border-[#C98A2C]/40 text-[#0F2438] mx-auto">
              <span className="text-sm font-bold flex items-center gap-1.5">
                <span role="img" aria-label="Fuego">🔥</span>
                <span><strong>₲ 59.900 aprox.</strong></span>
              </span>
              <span className="text-xs text-slate-600">
                Precio de lanzamiento · Solo para los primeros 10
              </span>
            </div>

            {/* Main Action Button */}
            <div className="pt-2 flex flex-col items-center">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base sm:text-lg font-extrabold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-xl text-center"
              >
                Comprar el manual ahora
              </a>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Pago seguro 100% garantizado en Hotmart · Acceso inmediato</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER (#footer)                                              */}
      {/* ------------------------------------------------------------- */}
      <footer id="footer" className="w-full bg-[#0F2438] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <div className="w-full border-t border-white/10 mb-6" />
          <div className="flex items-center justify-center gap-3">
            <img
              src={logoImgLocal}
              alt="Logo Estudio Cáceres"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#C98A2C]/50 shadow-md shrink-0"
            />
            <div className="text-lg sm:text-xl font-black text-[#dbe4f0]">Estudio Cáceres</div>
          </div>
          <p className="text-sm sm:text-base text-[#dbe4f0]/80 max-w-xl mx-auto leading-relaxed">
            Criterio normativo y respaldo técnico para la práctica contable en Paraguay.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#dbe4f0]/90">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: +595 993 535291</span>
            </a>
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C98A2C]/20 hover:bg-[#C98A2C]/30 text-[#e6b162] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Checkout Oficial Hotmart</span>
            </a>
          </div>
          <div className="pt-4 text-xs text-[#dbe4f0]/60">
            © {new Date().getFullYear()} Estudio Cáceres. Todos los derechos reservados. Asunción, Paraguay.
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* WHATSAPP FLOATING BADGE / BUTTON                              */}
      {/* ------------------------------------------------------------- */}
      <div
        id="fp-published-whatsapp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp al +595 993 535291"
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white border-2 border-white shadow-[0_12px_30px_rgba(13,94,45,0.32)] hover:scale-105 active:scale-95 transition-transform"
        >
          {/* Tooltip on hover */}
          <span className="hidden sm:block absolute right-[70px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
            WhatsApp: +595 993 535291
          </span>
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        </a>
      </div>


      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE PURCHASE & CHECKOUT MODAL                         */}
      {/* ------------------------------------------------------------- */}
      {purchaseModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setPurchaseModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            {!purchaseSuccess ? (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C98A2C]">
                    Acceso Digital Inmediato
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F2438] mt-1">
                    Manual de Contabilidad Aplicada DNIT 2026
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Incluye los 3 paquetes de plantillas .docx, lista de verificación y glosario.
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2438]">
                      ₲ 59.900 aprox.
                    </span>
                    <div className="text-xs text-slate-500 mt-1 font-medium">
                      Precio de lanzamiento · Solo para los primeros 10
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                    Edición Vigente
                  </span>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Método de Pago (vía dLocal)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-center text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#0F2438] bg-[#0F2438]/5 text-[#0F2438]'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Tarjetas</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('sipap')}
                      className={`p-3 rounded-xl border text-center text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        paymentMethod === 'sipap'
                          ? 'border-[#0F2438] bg-[#0F2438]/5 text-[#0F2438]'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>SIPAP</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wallet')}
                      className={`p-3 rounded-xl border text-center text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        paymentMethod === 'wallet'
                          ? 'border-[#0F2438] bg-[#0F2438]/5 text-[#0F2438]'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Billeteras</span>
                    </button>
                  </div>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Lic. Carlos Duarte"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo Electrónico (para envío de los archivos)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@estudio.com.py"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        RUC o Cédula
                      </label>
                      <input
                        type="text"
                        placeholder="80012345-6"
                        value={formData.ruc}
                        onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="0981 123 456"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C98A2C] text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <a
                      href={HOTMART_CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl text-base font-extrabold text-white bg-[#0F2438] hover:bg-[#163350] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 text-center"
                    >
                      <Lock className="w-4 h-4 text-[#C98A2C]" />
                      <span>Ir al Pago Directo en Hotmart</span>
                      <ExternalLink className="w-4 h-4 text-slate-300 ml-1" />
                    </a>
                    
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#15803d] bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>¿Dudas con el pago? Hablar al WhatsApp (+595 993 535291)</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-slate-400">
                    Transacción cifrada SSL de 256 bits procesada de manera 100% segura a través de Hotmart.
                  </p>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-4 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">
                    ¡Acceso Concedido!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Hemos confirmado la solicitud para{' '}
                    <strong className="text-slate-900">{formData.email || 'su correo'}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2 font-bold text-[#0F2438]">
                    <FileText className="w-4 h-4 text-[#C98A2C]" />
                    <span>Contenido listo para descarga inmediata:</span>
                  </div>
                  <ul className="space-y-1 pl-6 list-disc text-slate-600 text-xs">
                    <li>Manual de Contabilidad Aplicada DNIT 2026 (.PDF)</li>
                    <li>Pack de Plantillas de Registros Editables (.DOCX)</li>
                    <li>Lista de Chequeo y Control Interno Tributario (.XLSX/.DOCX)</li>
                    <li>Glosario de Términos Normativos SIFEN 2026</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  {downloadStarted ? (
                    <div className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-emerald-100 text-emerald-800 flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Descarga iniciada exitosamente</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDownloadStarted(true)}
                      className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-[#C98A2C] text-[#0F2438] hover:bg-[#d99732] transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Descargar Kit Completo Ahora</span>
                    </button>
                  )}
                  <button
                    onClick={() => setPurchaseModalOpen(false)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* DOCUMENT PAGE LIGHTBOX MODAL                                 */}
      {/* ------------------------------------------------------------- */}
      {previewDoc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="pr-4 min-w-0">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C98A2C] block">
                  {previewDoc.caption}
                </span>
                <h4 className="text-sm sm:text-base font-bold font-heading text-[#0F2438] truncate">
                  {previewDoc.title}
                </h4>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors shrink-0"
                aria-label="Cerrar vista previa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Document Image */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
              <div className="w-full max-w-lg rounded-lg shadow-xl border border-slate-300 bg-white overflow-hidden">
                <img
                  src={previewDoc.src}
                  width={800}
                  height={1020}
                  alt={previewDoc.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Extracto oficial del Manual de Contabilidad DNIT 2026
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cerrar
                </button>
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto px-5 py-2 text-xs font-extrabold bg-[#0F2438] text-white hover:bg-[#163350] rounded-lg transition-colors text-center whitespace-nowrap"
                >
                  Comprar manual
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
