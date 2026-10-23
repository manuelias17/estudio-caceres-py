import React, { useState, useEffect } from 'react';
import {
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
  Eye,
  X,
  QrCode,
  ChevronRight
} from 'lucide-react';

import heroTabletImg from '../assets/images/hero_tablet_formulario120_1792156674072.jpg';
import balanceSumasSaldosImg from '../assets/images/balance_sumas_saldos_1792161555547.jpg';
import logoImgLocal from '../assets/images/logo_estudio_caceres_1792072395305.jpg';
import page1Svg from '../assets/images/muestras_manual_contabilidad.svg';
import page2Svg from '../assets/images/muestras_manual_contabilidad2.svg';
import page3Svg from '../assets/images/muestras_manual_contabilidad3.svg';

const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/Y108013354Q?bid=1792156131415';
const WHATSAPP_NUMBER = '595993535291';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Estudio Cáceres, deseo más información sobre el Manual de Contabilidad DNIT 2026.')}`;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDateIso: string): TimeLeft {
  const calculate = (): TimeLeft => {
    const diff = Math.max(0, new Date(targetDateIso).getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDateIso]);

  return timeLeft;
}

export default function ManualLandingPage() {
  const bannerTimer = useCountdown('2026-10-31T23:59:59');
  const obtenerTimer = useCountdown('2026-10-31T23:59:59');

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<{ src: string; title: string; caption: string } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'sipap' | 'qr' | 'card' | 'wallet'>('sipap');
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    ruc: '',
    telefono: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
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
      a: 'Aceptamos transferencias bancarias directas (SIPAP a todos los bancos y cooperativas del país), pagos rápidos vía QR, tarjetas de crédito y débito, y billeteras electrónicas (Tigo Money, Personal Pay, Zimple). Una vez confirmado el pago, recibís acceso digital inmediato al compendio y a todas las plantillas.'
    },
    {
      q: '¿Sirve para estudiantes y recién egresados?',
      a: 'El contenido está formulado para brindar criterio práctico y seguridad técnica a quienes inician su actividad independiente.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ------------------------------------------------------------- */}
      {/* STICKY PROMO BANNER                                           */}
      {/* ------------------------------------------------------------- */}
      <aside
        aria-label="Aviso de promoción por precio de lanzamiento"
        className="sticky top-16 sm:top-20 z-30 w-full bg-[#C98A2C] text-[#0F2438] py-2 px-3 sm:px-4 shadow-sm"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between md:justify-center gap-2 md:gap-4 text-center">
          <p className="text-xs sm:text-[13px] font-bold leading-tight">
            <span role="img" aria-label="Fuego" className="mr-1">🔥</span>
            <span>Precio de lanzamiento: ₲ 60.000 — Luego 220.000 (precio normal)</span>
          </p>
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-[#0F2438]" aria-label="Tiempo restante de oferta">
            <span className="text-[10px] uppercase font-sans font-black tracking-wider text-[#0F2438]/85 mr-0.5">Termina en:</span>
            <span className="bg-[#0F2438] text-white px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums">{String(bannerTimer.days).padStart(2, '0')}d</span>
            <span className="text-[#0F2438] font-bold">:</span>
            <span className="bg-[#0F2438] text-white px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums">{String(bannerTimer.hours).padStart(2, '0')}h</span>
            <span className="text-[#0F2438] font-bold">:</span>
            <span className="bg-[#0F2438] text-white px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums">{String(bannerTimer.minutes).padStart(2, '0')}m</span>
            <span className="text-[#0F2438] font-bold">:</span>
            <span className="bg-[#0F2438] text-white px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums">{String(bannerTimer.seconds).padStart(2, '0')}s</span>
          </div>
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
      {/* SECTION: HERO (#inicio)                                       */}
      {/* ------------------------------------------------------------- */}
      <section
        id="inicio"
        className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-gradient-to-b from-white to-[#F7F8F9]"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#0F2438] text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C98A2C] animate-pulse" />
                Actualizado con Criterios Técnicos DNIT 2026
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2438] leading-[1.15] tracking-tight">
                Manual de Contabilidad Aplicada para la Práctica Profesional en Paraguay (DNIT 2026)
              </h1>

              <p className="text-base sm:text-lg text-[#566173] leading-relaxed max-w-2xl font-sans">
                Compendio técnico con casos prácticos resueltos paso a paso, análisis de comprobantes según la Ley N° 6380/19, modelos de asientos contables y liquidación en Formulario 120 V.4.
              </p>

              <div className="w-full pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-md group"
                >
                  <span>Obtener manual y plantillas</span>
                  <span className="text-[#C98A2C] group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('contenido')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-white text-[#1C242B] border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <Eye className="w-4 h-4 text-[#C98A2C]" />
                  <span>Explorar contenido incluido</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
                <span>🔥 Precio de lanzamiento hasta el 31/10/2026</span>
              </div>

              <div className="pt-4 border-t border-slate-200/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-[#566173]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C98A2C]" />
                  <span>Acceso digital inmediato</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#C98A2C]" />
                  <span>Plantillas en formato Word y Excel</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C98A2C]" />
                  <span>Criterio tributario verificado</span>
                </div>
              </div>
            </div>

            {/* Right Tablet Mockup Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] lg:max-w-none">
                <div className="relative mx-auto rounded-[32px] p-3 sm:p-4 bg-slate-900 border-4 border-slate-800 shadow-[0_25px_50px_-12px_rgba(15,36,56,0.25)]">
                  <div className="overflow-hidden rounded-[20px] border border-slate-700 bg-white aspect-[3/4] relative">
                    <img
                      src={heroTabletImg}
                      alt="Manual de Contabilidad DNIT 2026 en tablet con Formulario 120"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2438]/80 via-transparent to-transparent flex flex-col justify-end p-5 text-left text-white pointer-events-none">
                      <span className="text-[11px] font-mono tracking-widest text-[#C98A2C] uppercase font-bold">
                        Edición Profesional DNIT 2026
                      </span>
                      <p className="text-sm font-bold font-heading">
                        Papeles de trabajo y liquidación real del IVA Formulario 120
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg text-left max-w-[200px] hidden sm:block">
                  <span className="text-xs font-mono font-bold text-[#C98A2C] block">
                    100% PRÁCTICO
                  </span>
                  <span className="text-xs font-bold text-[#1C242B] block">
                    Sin teoría de relleno: casos y asientos directos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: CONTENIDO / MATERIAL INCLUIDO (#contenido)           */}
      {/* ------------------------------------------------------------- */}
      <section
        id="contenido"
        className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      >
        <div className="max-w-[1180px] mx-auto space-y-12 sm:space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C98A2C] font-heading">
              Material Incluido
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
              Herramientas de aplicación inmediata en el ejercicio diario
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Stacked Pages 3D Mockup */}
            <div className="lg:col-span-5 flex justify-center py-6">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <div
                  className="absolute inset-0 rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden transform -rotate-4 transition-transform hover:-rotate-6 duration-300"
                  style={{ transform: 'rotate(-4deg)' }}
                >
                  <img
                    src={page1Svg}
                    alt="Muestra de página del Manual de Contabilidad DNIT - Estructura del mecanismo de liquidación"
                    width={320}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute inset-0 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden transform rotate-0 transition-transform hover:scale-[1.02] duration-300"
                  style={{ transform: 'rotate(0deg)' }}
                >
                  <img
                    src={page2Svg}
                    alt="Muestra de página del Manual de Contabilidad DNIT - Saldo a favor del fisco con asiento contable"
                    width={320}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute inset-0 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden transform rotate-3 transition-transform hover:rotate-6 duration-300"
                  style={{ transform: 'rotate(3deg)' }}
                >
                  <img
                    src={page3Svg}
                    alt="Muestra de página del Manual de Contabilidad DNIT - Prorrateo de IVA crédito en ventas mixtas"
                    width={320}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded text-center">
                    Extracto real del PDF (Pág. 12)
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Components */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B]">
                  Manual Guía en PDF
                </h3>
                <p className="text-sm text-[#566173] leading-relaxed">
                  Desglose paso a paso de asientos contables y liquidación en Formulario 120 V.4.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B]">
                  Plantillas en Word Editables
                </h3>
                <p className="text-sm text-[#566173] leading-relaxed">
                  Modelos de papeles de trabajo listos para adaptar a cada cliente o empresa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B]">
                  Lista de Control Tributario
                </h3>
                <p className="text-sm text-[#566173] leading-relaxed">
                  Checklist de verificación de comprobantes y requisitos formales de deducibilidad.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B]">
                  Casos Prácticos Resueltos
                </h3>
                <p className="text-sm text-[#566173] leading-relaxed">
                  Ejemplos reales con números, asientos y casillas específicas del Formulario 120.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: PASOS / RUTA DE APLICACIÓN (#pasos)                  */}
      {/* ------------------------------------------------------------- */}
      <section
        id="pasos"
        className="w-full bg-[#F7F8F9] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      >
        <div className="max-w-[1180px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C98A2C] font-heading">
              Ruta de Aplicación
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
              Flujo ordenado del registro a la presentación fiscal
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Steps list */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F2438] text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-[#1C242B]">
                    Recepción y Análisis de Comprobantes
                  </h3>
                  <p className="text-sm text-[#566173] leading-relaxed">
                    Criterios de validez, timbrado vigente, comprobación en Marangatu y deducibilidad según rubro del contribuyente.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F2438] text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-[#1C242B]">
                    Asientos en Libro Diario y Mayor
                  </h3>
                  <p className="text-sm text-[#566173] leading-relaxed">
                    Imputación correcta de IVA Crédito 10%, 5% y compras exentas, con balance de comprobación cuadrado.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F2438] text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-[#1C242B]">
                    Liquidación en Formulario 120 V.4
                  </h3>
                  <p className="text-sm text-[#566173] leading-relaxed">
                    Traslado exacto a las casillas del formulario en Marangatu, determinación de saldo a favor o a pagar y generación de boleta.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps Visual preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-white p-3">
                <img
                  src={balanceSumasSaldosImg}
                  alt="Balance de Comprobación de Sumas y Saldos - Papel de trabajo contable en Paraguay"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <p className="text-xs text-slate-500 text-center mt-3 font-mono">
                  Papel de trabajo: Balance de Sumas y Saldos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: CASOS REALES / VISTA PREVIA (#ejemplos)              */}
      {/* ------------------------------------------------------------- */}
      <section
        id="ejemplos"
        className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      >
        <div className="max-w-[1180px] mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C98A2C] font-heading">
              Extractos Reales del Capítulo de Liquidación de IVA (Formulario 120 V.4)
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
              Vista previa: casos reales del manual
            </h2>
            <p className="text-sm sm:text-base text-[#566173] leading-relaxed font-sans">
              Hacé clic en cualquier captura para inspeccionar en detalle la estructura, asientos y notas técnicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Case Card 1: Portada */}
            <div
              onClick={() => setPreviewDoc({
                src: page1Svg,
                title: 'Estructura del mecanismo de liquidación',
                caption: 'Paso a paso de determinación del impuesto y casillas'
              })}
              className="group cursor-pointer rounded-2xl bg-[#F7F8F9] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#0F2438]/40 transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                <img
                  src={page1Svg}
                  alt="Portada del capítulo IVA - Estructura del mecanismo de liquidación"
                  width={380}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0F2438]/0 group-hover:bg-[#0F2438]/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-white text-[#0F2438] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#C98A2C]" />
                    <span>Ver captura ampliada</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C98A2C] font-bold block">
                  Portada del Capítulo
                </span>
                <h3 className="text-base font-bold font-heading text-[#0F2438] group-hover:text-[#C98A2C] transition-colors">
                  Estructura del mecanismo de liquidación
                </h3>
              </div>
            </div>

            {/* Case Card 2: Caso 2 */}
            <div
              onClick={() => setPreviewDoc({
                src: page2Svg,
                title: 'Saldo a favor del fisco con asiento contable',
                caption: 'Liquidación mensual con impuesto a pagar y boleta'
              })}
              className="group cursor-pointer rounded-2xl bg-[#F7F8F9] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#0F2438]/40 transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                <img
                  src={page2Svg}
                  alt="Caso 2 - Saldo a favor del fisco con asiento contable de liquidación y pago"
                  width={380}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0F2438]/0 group-hover:bg-[#0F2438]/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-white text-[#0F2438] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#C98A2C]" />
                    <span>Ver captura ampliada</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C98A2C] font-bold block">
                  Caso Práctico 2
                </span>
                <h3 className="text-base font-bold font-heading text-[#0F2438] group-hover:text-[#C98A2C] transition-colors">
                  Saldo a favor del fisco con asiento contable
                </h3>
              </div>
            </div>

            {/* Case Card 3: Caso 5 */}
            <div
              onClick={() => setPreviewDoc({
                src: page3Svg,
                title: 'Prorrateo de IVA crédito en ventas mixtas',
                caption: 'Cálculo del factor de proporcionalidad y registro'
              })}
              className="group cursor-pointer rounded-2xl bg-[#F7F8F9] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#0F2438]/40 transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                <img
                  src={page3Svg}
                  alt="Caso 5 - Prorrateo de IVA crédito fiscal en actividades con ventas gravadas y exentas"
                  width={380}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0F2438]/0 group-hover:bg-[#0F2438]/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-white text-[#0F2438] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#C98A2C]" />
                    <span>Ver captura ampliada</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C98A2C] font-bold block">
                  Caso Práctico 5
                </span>
                <h3 className="text-base font-bold font-heading text-[#0F2438] group-hover:text-[#C98A2C] transition-colors">
                  Prorrateo de IVA crédito en ventas mixtas
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: COMPARATIVA / EVOLUCIÓN (#comparativa)               */}
      {/* ------------------------------------------------------------- */}
      <section
        id="comparativa"
        className="w-full bg-[#F7F8F9] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      >
        <div className="max-w-[1180px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C98A2C] font-heading">
                Evolución Profesional
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
                La diferencia entre improvisar y liquidar con base técnica
              </h2>
              <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                El ejercicio profesional en Paraguay exige rigor ante las fiscalizaciones de la DNIT. Este material fue diseñado para eliminar la incertidumbre en cada cierre mensual.
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
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-left">
              {/* Before: Dudas operativas */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
                  !
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1C242B]">
                  Gestión con dudas operativas
                </h3>
                <p className="text-sm sm:text-base text-[#566173] leading-relaxed">
                  Riesgo constante de omisiones involuntarias, cálculo errático de retenciones y temor a inspecciones sorpresa.
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
                  Papeles de trabajo estructurados, criterios claros de liquidación y comprobantes debidamente justificados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: SOBRE EL AUTOR (#autor)                             */}
      {/* ------------------------------------------------------------- */}
      <section
        id="autor"
        className="w-full bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80"
      >
        <div className="max-w-[1180px] mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center lg:text-left mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C98A2C] font-heading">
              Perfil profesional
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#0F2438] tracking-tight mt-1">
              Sobre el autor
            </h2>
          </div>

          {/* Two-column layout in desktop (40% photo / 60% text), single column centered in mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column — Profile Photo (40% on desktop) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              {/* Contenedor circular de 220px con borde de 3px en #C98A2C, sombra suave y anillo exterior sutil */}
              <div className="relative w-[220px] h-[220px] rounded-full border-[3px] border-[#C98A2C] shadow-lg ring-4 ring-[#C98A2C]/20 overflow-hidden bg-slate-50 flex items-center justify-center">
                {/* TODO: reemplazar logo por foto de perfil real cuando esté disponible */}
                <img
                  src={logoImgLocal}
                  alt="Elías Cáceres - Técnico Contable, Desarrollador de Software y Fundador de Estudio Cáceres"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={220}
                  height={220}
                />
              </div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#0F2438', margin: '0.5rem 0 0.25rem' }}>
                Elías Cáceres
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#C98A2C', fontWeight: 600, margin: '0 0 0.5rem' }}>
                Técnico Contable y Desarrollador de Software · Fundador de Estudio Cáceres
              </p>
            </div>

            {/* Right Column — Content (60% on desktop) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* 1. Tres micro-stats en fila horizontal (flexbox, centrados) */}
              <div className="w-full max-w-[65ch] flex items-center justify-around sm:justify-start sm:gap-8 py-3.5 px-4 sm:px-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 shadow-xs">
                {/* Micro-stat 1 */}
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#0F2438] leading-none">
                    5+ años
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                    de experiencia
                  </span>
                </div>

                {/* Fine gold vertical divider */}
                <div className="w-px h-8 sm:h-10 bg-[#C98A2C]/40 shrink-0" aria-hidden="true" />

                {/* Micro-stat 2 */}
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#0F2438] leading-none">
                    Auditorías
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                    externas
                  </span>
                </div>

                {/* Fine gold vertical divider */}
                <div className="w-px h-8 sm:h-10 bg-[#C98A2C]/40 shrink-0" aria-hidden="true" />

                {/* Micro-stat 3 */}
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#0F2438] leading-none">
                    Casos reales
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                    del día a día
                  </span>
                </div>
              </div>

              {/* Paragraphs with max reading width ~65ch and key terms bolded */}
              <div className="space-y-4 max-w-[65ch] text-slate-700 font-sans text-base sm:text-lg leading-relaxed">
                <p>
                  Soy Elías Cáceres, Técnico Contable y desarrollador de software con más de <strong>5 años de experiencia en auditorías externas</strong> a empresas de distintos rubros.
                </p>
                <p>
                  En auditoría vi los mismos errores una y otra vez: comprobantes mal analizados, asientos mal imputados, controles internos débiles y liquidaciones de IVA armadas a ciegas.
                </p>
                <p>
                  Por eso creé Estudio Cáceres, para que estudiantes, recién egresados y auxiliares contables aprendan con <strong>casos reales</strong> y del día a día laboral. Este manual es exactamente lo que me hubiera gustado tener cuando empecé: sin teoría de sobra, con los formularios y asientos que se usan todos los meses.
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
        className="w-full bg-[#F7F8F9] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      >
        <div className="max-w-[1180px] mx-auto space-y-8 sm:space-y-12">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1C242B] tracking-tight">
              Respuestas técnicas sobre el material y su uso
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-2xl px-6 shadow-xs text-left">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#1C242B] hover:text-[#0F2438] transition-colors"
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

          <div className="text-sm sm:text-base text-slate-500 text-left">
            Todo lo que necesita saber sobre el formato, la vigencia legal y la metodología de entrega del manual.
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

          <p className="text-base sm:text-lg text-[#566173] leading-relaxed max-w-xl mx-auto">
            Acceda de forma inmediata al compendio completo en PDF y al paquete de plantillas editables en formato Word y Excel.
          </p>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border-2 border-[#0F2438]/15 shadow-xl space-y-6 max-w-md mx-auto relative overflow-hidden">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-[#C98A2C] font-extrabold block">
                Precio de lanzamiento
              </span>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-sm text-slate-400 line-through">Gs. 220.000</span>
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2438]">
                  Gs. 60.000
                </span>
              </div>
              <span className="text-xs text-slate-600 block pt-1 font-semibold">
                🔥 Válido hasta el 31 de octubre de 2026
              </span>
            </div>

            {/* Visual Countdown Timer */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                Tiempo restante de la oferta:
              </span>
              <div className="flex items-center justify-center gap-2 font-mono text-center">
                <div className="bg-[#0F2438] text-white p-1.5 rounded-lg min-w-[52px]">
                  <span className="text-base font-bold block leading-tight">{String(obtenerTimer.days).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 block">Días</span>
                </div>
                <span className="text-[#0F2438] font-bold">:</span>
                <div className="bg-[#0F2438] text-white p-1.5 rounded-lg min-w-[52px]">
                  <span className="text-base font-bold block leading-tight">{String(obtenerTimer.hours).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 block">Horas</span>
                </div>
                <span className="text-[#0F2438] font-bold">:</span>
                <div className="bg-[#0F2438] text-white p-1.5 rounded-lg min-w-[52px]">
                  <span className="text-base font-bold block leading-tight">{String(obtenerTimer.minutes).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 block">Min</span>
                </div>
                <span className="text-[#0F2438] font-bold">:</span>
                <div className="bg-[#0F2438] text-white p-1.5 rounded-lg min-w-[52px]">
                  <span className="text-base font-bold block leading-tight">{String(obtenerTimer.seconds).padStart(2, '0')}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 block">Seg</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleOpenPurchase}
                className="w-full py-4 px-6 rounded-xl text-base font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Obtener manual y plantillas — Gs. 60.000</span>
                <ChevronRight className="w-4 h-4 text-[#C98A2C] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0F2438] bg-white border border-slate-300 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#C98A2C]" />
                <span>Pagar con Tarjeta de Crédito / Débito en línea</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Medios de pago disponibles visuales */}
            <div className="pt-3 border-t border-slate-200/90 space-y-2 text-left">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 block text-center">
                Medios de pago habilitados:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <Building2 className="w-4 h-4 text-[#0F2438] shrink-0" />
                  <span className="truncate">Transferencia SIPAP</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <QrCode className="w-4 h-4 text-[#C98A2C] shrink-0" />
                  <span className="truncate">Pago vía QR</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <CreditCard className="w-4 h-4 text-[#0F2438] shrink-0" />
                  <span className="truncate">Tarjetas PY / Ext</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <Smartphone className="w-4 h-4 text-[#C98A2C] shrink-0" />
                  <span className="truncate">Billeteras locales</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 leading-tight">
              Pago 100% seguro. Aceptamos transferencias bancarias (SIPAP), pagos vía QR, tarjetas y billeteras electrónicas. Acceso digital inmediato sin costos de envío.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE PURCHASE & CHECKOUT MODAL                         */}
      {/* ------------------------------------------------------------- */}
      {purchaseModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPurchaseModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPurchaseModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!purchaseSuccess ? (
              <div className="space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C98A2C]">
                    Adquisición del Kit Digital
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F2438]">
                    Manual de Contabilidad DNIT 2026
                  </h3>
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2438]">
                      Gs. 60.000
                    </span>
                    <span className="text-xs text-slate-400 line-through">Gs. 220.000</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Seleccione su medio de pago preferido:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('sipap')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === 'sipap'
                          ? 'border-[#0F2438] bg-[#0F2438] text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>SIPAP / Bancos</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('qr')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === 'qr'
                          ? 'border-[#0F2438] bg-[#0F2438] text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Pago vía QR</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#0F2438] bg-[#0F2438] text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Tarjetas</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wallet')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === 'wallet'
                          ? 'border-[#0F2438] bg-[#0F2438] text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Billeteras PY</span>
                    </button>
                  </div>

                  {/* Dynamic Instructions box according to selected payment method */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                    {paymentMethod === 'sipap' && (
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-[#0F2438]">
                          <Building2 className="w-4 h-4 text-[#C98A2C]" />
                          <span>Transferencia Bancaria SIPAP (Gs. 60.000)</span>
                        </div>
                        <p className="mt-1 text-slate-600 leading-relaxed">
                          Habilitado para todos los bancos y cooperativas de Paraguay. Podés transferir y adjuntarnos tu comprobante para activación inmediata.
                        </p>
                      </div>
                    )}
                    {paymentMethod === 'qr' && (
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-[#0F2438]">
                          <QrCode className="w-4 h-4 text-[#C98A2C]" />
                          <span>Pago Inmediato con Código QR (Gs. 60.000)</span>
                        </div>
                        <p className="mt-1 text-slate-600 leading-relaxed">
                          Escaneá desde la app de tu banco (Itaú, Continental, Ueno, Familiar, BNF, Basa, Atlas, etc.) o billetera con lector QR.
                        </p>
                      </div>
                    )}
                    {paymentMethod === 'card' && (
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-[#0F2438]">
                          <CreditCard className="w-4 h-4 text-[#C98A2C]" />
                          <span>Tarjetas de Crédito y Débito (Gs. 60.000)</span>
                        </div>
                        <p className="mt-1 text-slate-600 leading-relaxed">
                          Pago online seguro con tarjetas de crédito o débito (Visa, Mastercard, American Express).
                        </p>
                      </div>
                    )}
                    {paymentMethod === 'wallet' && (
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-[#0F2438]">
                          <Smartphone className="w-4 h-4 text-[#C98A2C]" />
                          <span>Billeteras Electrónicas (Gs. 60.000)</span>
                        </div>
                        <p className="mt-1 text-slate-600 leading-relaxed">
                          Giros directos mediante Tigo Money, Personal Pay o Billetera Zimple al número <strong className="text-slate-900">+595 993 535291</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nombre completo o Razón Social *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Marcelo Cáceres"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C98A2C] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo electrónico de recepción del material *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tunombre@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C98A2C] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        RUC o CI
                      </label>
                      <input
                        type="text"
                        placeholder="1458932-3"
                        value={formData.ruc}
                        onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C98A2C] focus:border-transparent font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0981 123 456"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C98A2C] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    {paymentMethod === 'card' ? (
                      <a
                        href={HOTMART_CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors flex items-center justify-center gap-2 text-center"
                      >
                        <Lock className="w-4 h-4 text-[#C98A2C]" />
                        <span>Proceder al Pago Seguro con Tarjeta en Línea</span>
                      </a>
                    ) : (
                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors flex items-center justify-center gap-2 text-center cursor-pointer"
                      >
                        <Check className="w-4 h-4 text-[#C98A2C]" />
                        <span>
                          {paymentMethod === 'sipap'
                            ? 'Confirmar Registro y Datos para Transferencia SIPAP'
                            : paymentMethod === 'qr'
                            ? 'Confirmar Registro y Solicitar Código QR'
                            : 'Confirmar Registro y Datos de Billetera'}
                        </span>
                      </button>
                    )}
                    
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hola Estudio Cáceres, deseo adquirir el Manual Contable 2026 abonando mediante ${
                          paymentMethod === 'sipap'
                            ? 'Transferencia Bancaria (SIPAP)'
                            : paymentMethod === 'qr'
                            ? 'Pago vía QR'
                            : paymentMethod === 'card'
                            ? 'Tarjeta'
                            : 'Billetera Electrónica'
                        } (Gs. 60.000).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#15803d] bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Coordinar pago directo por WhatsApp (+595 993 535291)</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-slate-500">
                    Transacción segura con cifrado SSL de 256 bits. Aceptamos transferencias bancarias (SIPAP), pagos vía QR, tarjetas y billeteras electrónicas.
                  </p>
                </form>
              </div>
            ) : (
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

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors inline-block"
                  >
                    ¿Necesita asistencia técnica? Contáctenos por WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* DOCUMENT PREVIEW MODAL                                        */}
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
                  className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cerrar
                </button>
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0F2438] text-white text-xs font-bold hover:bg-[#163350] transition-colors whitespace-nowrap text-center"
                >
                  Adquirir Manual Completo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
