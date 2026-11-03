import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Check,
  ShieldCheck,
  Building2,
  Smartphone,
  CheckCircle2,
  FileText,
  MessageCircle,
  Eye,
  X,
  ChevronRight
} from 'lucide-react';

import heroTabletImg from '../assets/images/hero_tablet_formulario120_1792156674072.jpg';
import balanceSumasSaldosImg from '../assets/images/balance_sumas_saldos_1792161555547.jpg';
import fotoPerfilAutor from '../assets/images/foto_perfil_elias_caceres.jpg';
import page1Svg from '../assets/images/muestras_manual_contabilidad.svg';
import page2Svg from '../assets/images/muestras_manual_contabilidad2.svg';
import page3Svg from '../assets/images/muestras_manual_contabilidad3.svg';

const WHATSAPP_NUMBER = '595993535291';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Estudio Cáceres, deseo más información sobre el Manual de Contabilidad DNIT 2026.')}`;

// Constantes configurables para la versión impresa premium
const PRECIO_TOMO_1 = 'Gs. 135.000';
const PRECIO_EJERCITARIO = 'Gs. 55.000';
const PRECIO_COMBO = 'Gs. 170.000';

const WHATSAPP_TOMO_1_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero pedir el Tomo I del Manual Contable (Fundamentos + Asientos de liquidación del IVA) por Gs. 135.000.\n\n' +
  'Mi nombre:\n' +
  'Mi ciudad / dirección:\n' +
  'Forma de entrega preferida (Delivery / Retiro / Encomienda):'
)}`;

const WHATSAPP_EJERCITARIO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero pedir el Ejercitario Práctico del Manual Contable (100 cuentas + solucionario) por Gs. 55.000.\n\n' +
  'Mi nombre:\n' +
  'Mi ciudad / dirección:\n' +
  'Forma de entrega preferida (Delivery / Retiro / Encomienda):'
)}`;

const WHATSAPP_COMBO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero pedir el Combo Completo recomendado del Manual Contable (Tomo I + Ejercitario) por Gs. 170.000 con delivery incluido en Asunción / Gran Asunción.\n\n' +
  'Mi nombre:\n' +
  'Mi ciudad / dirección exacta:\n' +
  'Forma de entrega preferida (Delivery Asu y Gran Asu / Retiro / Encomienda interior):'
)}`;

export default function ManualLandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [previewDoc, setPreviewDoc] = useState<{ src: string; title: string; caption: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close preview modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewDoc(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when preview modal is open
  useEffect(() => {
    if (previewDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [previewDoc]);

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
      q: '¿Cómo se entrega el material impreso?',
      a: 'El material se entrega en formato físico con encuadernación anillada profesional de alta durabilidad y portadas a full color. El Combo Completo incluye delivery en Asunción y Gran Asunción sin costo adicional. Para el interior del país realizamos envíos seguros vía encomienda.'
    },
    {
      q: '¿Qué medios de pago se encuentran disponibles?',
      a: 'Aceptamos transferencias bancarias directas (SIPAP a todos los bancos y cooperativas del país), pagos rápidos vía QR, y giros por billeteras electrónicas (Tigo Money, Personal Pay, Zimple). Una vez coordinado el pedido por WhatsApp, te facilitamos los datos de pago y despachamos tu ejemplar.'
    },
    {
      q: '¿El manual contempla las disposiciones de la DNIT para 2026?',
      a: 'Sí, el compendio integra las disposiciones normativas actualizadas de la DNIT, criterios vigentes de la Ley N° 6380/19 y regulaciones vinculadas a SIFEN proyectadas para el ejercicio.'
    },
    {
      q: '¿Sirve para estudiantes y recién egresados?',
      a: 'Totalmente. El contenido fue diseñado por auditores externos para eliminar la brecha entre la teoría académica y la práctica real en oficinas contables, con 100 cuentas reales resueltas paso a paso.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ------------------------------------------------------------- */}
      {/* STICKY PROMO BANNER                                           */}
      {/* ------------------------------------------------------------- */}
      <aside
        aria-label="Aviso de material impreso premium"
        className="sticky top-16 sm:top-20 z-30 w-full bg-[#C98A2C] text-[#0F2438] py-2.5 px-3 sm:px-4 shadow-sm"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
          <button
            type="button"
            onClick={() => scrollToSection('opciones-compra')}
            className="text-xs sm:text-[13px] font-bold leading-tight hover:underline flex items-center justify-center gap-1.5 group cursor-pointer"
          >
            <span>Material impreso premium · Disponible ahora · Combo recomendado Gs. 170.000 (incluye delivery Asu y Gran Asunción)</span>
            <span className="font-extrabold group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
          </button>
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
                Edición Impresa · Normativa DNIT 2026
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2438] leading-[1.15] tracking-tight">
                Manual de Contabilidad Aplicada para la Práctica Profesional en Paraguay
              </h1>

              <p className="text-base sm:text-lg text-[#566173] leading-relaxed max-w-2xl font-sans">
                Compendio técnico impreso de máxima calidad con casos prácticos resueltos paso a paso, análisis de comprobantes según la Ley N° 6380/19, modelos de asientos contables y liquidación en Formulario 120 V.4. Material 100% práctico, con encuadernación anillada profesional y adaptado a la normativa DNIT vigente.
              </p>

              <div className="w-full pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('opciones-compra')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-md group cursor-pointer"
                >
                  <span>Ver opciones de compra</span>
                  <ChevronRight className="w-4 h-4 text-[#C98A2C] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contenido')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-white text-[#1C242B] border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#C98A2C]" />
                  <span>Explorar contenido incluido</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-[#566173]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C98A2C]" />
                  <span>Material impreso premium (anillado profesional)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#C98A2C]" />
                  <span>100% adaptado a la Ley 6380/19 y DNIT vigente</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#C98A2C]" />
                  <span>Casos reales y ejercitario de práctica</span>
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
                    Extracto real del Tomo I (Pág. 12)
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
                  Tomo I: Fundamentos y Liquidación
                </h3>
                <p className="text-sm text-[#566173] leading-relaxed">
                  Desglose paso a paso de asientos contables y liquidación en Formulario 120 V.4 con normativa DNIT 2026.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1C242B]">
                  Ejercitario Práctico de Casos
                </h3>
                <p className="text-sm text-[#566173] leading-relaxed">
                  100 cuentas reales con solucionario detallado y modelos de papeles de trabajo listos para ejercitar.
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
                <button
                  type="button"
                  onClick={() => scrollToSection('opciones-compra')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                >
                  Ver opciones de compra
                </button>
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
      {/* SECTION: OPCIONES DE COMPRA / PRECIOS (#opciones-compra)      */}
      {/* ------------------------------------------------------------- */}
      <section
        id="opciones-compra"
        className="w-full bg-[#F7F8F9] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 text-center scroll-mt-20"
      >
        <div id="obtener" className="max-w-[1240px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto space-y-3.5 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C98A2C] bg-[#C98A2C]/10 px-4 py-1.5 rounded-full inline-block">
              Edición Física Impresa · Disponible Ahora
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2438] tracking-tight">
              Elegí tu material y da el salto profesional definitivo
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
              Libros físicos con tapa full color, anillado profesional reforzado y papel de alto gramaje. Diseñados para tener abiertos sobre tu escritorio mientras liquidás impuestos reales.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6 text-left">
            {/* CARD 1: Tomo I */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C98A2C] block">
                    Volumen Principal
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">
                    Tomo I
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans min-h-[38px] leading-relaxed">
                    Fundamentos + asientos de liquidación del IVA
                  </p>
                </div>

                <div className="py-4 border-y border-slate-100 my-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2438]">
                      {PRECIO_TOMO_1}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    Ejemplar físico impreso anillado
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Tapa full color</strong> y anillado profesional de alta resistencia</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Liquidación paso a paso en <strong>Formulario 120 V.4</strong> en Marangatu</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Asientos contables de compras, ventas y <strong>prorrateo de IVA Crédito</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Análisis de comprobantes bajo la <strong>Ley N° 6380/19</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>100% adaptado</strong> a la normativa DNIT 2026</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_TOMO_1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Pedir Tomo I</span>
                </a>
              </div>
            </div>

            {/* CARD 2: Combo Completo (RECOMENDADO) */}
            <div className="relative p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#C98A2C] shadow-2xl flex flex-col justify-between ring-4 ring-[#C98A2C]/15 lg:-translate-y-3 hover:shadow-[0_25px_50px_rgba(201,138,44,0.2)] transition-all">
              {/* Badge Recomendado */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C98A2C] via-[#e2a443] to-[#C98A2C] text-[#0F2438] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5">
                <span>⭐ RECOMENDADO · MEJOR VALOR</span>
              </div>

              <div className="space-y-4 pt-1">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C98A2C] block">
                    Juego de 2 Volúmenes
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2438]">
                    Combo Completo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans min-h-[38px] leading-relaxed">
                    Tomo I (Fundamentos + IVA) + Ejercitario Práctico
                  </p>
                </div>

                <div className="py-4 border-y border-[#C98A2C]/30 my-2 bg-[#C98A2C]/5 -mx-7 sm:-mx-9 px-7 sm:px-9">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2438]">
                      {PRECIO_COMBO}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                      Ahorrás Gs. 20.000
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 font-medium block mt-1">
                    Juego físico completo: 2 tomos anillados
                  </span>
                </div>

                {/* Delivery Gratis Callout */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 font-bold flex items-center gap-2.5 shadow-2xs">
                  <span className="text-lg shrink-0">🚚</span>
                  <span>Delivery incluido</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Tomo I completo:</strong> Asientos, análisis y liquidación Formulario 120</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Ejercitario Práctico completo:</strong> 100 cuentas reales + solucionario</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Delivery a domicilio</strong> en Asunción y Gran Asunción sin costo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Tapas full color</strong> y anillado profesional reforzado en ambos tomos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Casos de <strong>control interno tributario</strong> y verificación legal</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Envíos rápidos por encomienda a todo el interior del país</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_COMBO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl font-black text-base bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white shadow-lg shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2.5 text-center group"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Pedir Combo Completo</span>
                </a>
              </div>
            </div>

            {/* CARD 3: Ejercitario Práctico */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C98A2C] block">
                    Práctica Intensiva
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#0F2438]">
                    Ejercitario Práctico
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans min-h-[38px] leading-relaxed">
                    100 cuentas + solucionario + casos de control interno
                  </p>
                </div>

                <div className="py-4 border-y border-slate-100 my-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2438]">
                      {PRECIO_EJERCITARIO}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    Ejemplar físico impreso anillado
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>100 cuentas contables</strong> reales para ejercitar y fijar criterio</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Solucionario completo</strong> paso a paso con fundamentación técnica</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Casos de <strong>control interno tributario</strong> y detección de fallas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span><strong>Tapa full color</strong> y anillado profesional para estudio cómodo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98A2C] shrink-0 mt-0.5" />
                    <span>Ideal para estudiantes, postulantes y auxiliares contables</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_EJERCITARIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Pedir Ejercitario</span>
                </a>
              </div>
            </div>
          </div>

          {/* Medios de pago y despacho */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 text-left">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Building2 className="w-5 h-5 text-[#C98A2C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F2438] block">Medios de pago disponibles:</span>
                  <p className="text-slate-600 mt-0.5">Transferencia SIPAP (todos los bancos y cooperativas), Pago vía QR y Billeteras (Tigo Money, Personal Pay, Zimple).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Smartphone className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F2438] block">Entregas y Envíos:</span>
                  <p className="text-slate-600 mt-0.5">Delivery rápido en Asunción y Gran Asunción (incluido en el Combo Completo) y encomienda a todo el interior del país.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-sans border-t border-slate-100 pt-3">
              ¿Tenés dudas antes de pedir? Escribinos directamente al WhatsApp <strong className="text-slate-800 font-mono">+595 993 535291</strong> para asistencia personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: SOBRE EL AUTOR (#autor)                             */}
      {/* ------------------------------------------------------------- */}
      <section
        id="autor"
        className="w-full bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80"
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
                <img
                  src={fotoPerfilAutor}
                  alt="Elías Cáceres - Técnico Contable, Desarrollador de Software y Fundador de Estudio Cáceres"
                  className="w-full h-full object-cover object-top"
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
                    3+ años
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
                  Soy Elías Cáceres, Técnico Contable y desarrollador de software con más de <strong>3 años de experiencia en auditorías externas</strong> a empresas de distintos rubros.
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
                Extracto oficial del Manual de Contabilidad DNIT 2026 (Material Impreso)
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPreviewDoc(null);
                    scrollToSection('opciones-compra');
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0F2438] text-white text-xs font-bold hover:bg-[#163350] transition-colors whitespace-nowrap text-center cursor-pointer"
                >
                  Ver opciones de compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
