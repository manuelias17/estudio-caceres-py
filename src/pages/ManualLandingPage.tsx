import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Check,
  CheckCircle2,
  MessageCircle,
  Eye,
  X,
  ChevronRight
} from 'lucide-react';

import balanceSumasSaldosImg from '../assets/images/balance_sumas_saldos_1792161555547.jpg';
import fotoPerfilAutor from '../assets/images/foto_perfil_elias_caceres.jpg';
import page1Svg from '../assets/images/muestras_manual_contabilidad.svg';
import page2Svg from '../assets/images/muestras_manual_contabilidad2.svg';
import page3Svg from '../assets/images/muestras_manual_contabilidad3.svg';

const WHATSAPP_NUMBER = '595993535291';

// Constantes configurables para la versión impresa premium
const PRECIO_TOMO_1 = 'Gs. 135.000';
const PRECIO_EJERCITARIO = 'Gs. 55.000';
const PRECIO_COMBO = 'Gs. 170.000';

const WHATSAPP_TOMO_1_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero pedir el Tomo I del Manual de Contabilidad Aplicada (Fundamentos + Asientos contables de la liquidación del IVA) por Gs. 135.000.\n\n' +
  'Mi nombre:\n' +
  'Mi ciudad / dirección:\n' +
  'Forma de entrega preferida (Delivery / Retiro / Encomienda):'
)}`;

const WHATSAPP_EJERCITARIO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero pedir el Ejercitario Práctico de Contabilidad Aplicada (100 cuentas + solucionario + casos de control interno) por Gs. 55.000.\n\n' +
  'Mi nombre:\n' +
  'Mi ciudad / dirección:\n' +
  'Forma de entrega preferida (Delivery / Retiro / Encomienda):'
)}`;

const WHATSAPP_COMBO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero pedir el Combo Completo recomendado del Manual de Contabilidad Aplicada (Tomo I + Ejercitario) por Gs. 170.000 con delivery incluido en Asunción / Gran Asunción.\n\n' +
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
      q: '¿El manual es un instructivo para liquidar o llenar formularios tributarios?',
      a: 'No. El manual NO es un instructivo de liquidación tributaria ni una guía de llenado de formularios. Es un manual de Contabilidad Aplicada con criterio de auditor externo. Enseña a confeccionar los papeles de trabajo indispensables, el análisis de comprobantes y el registro correcto en el Libro Diario y Mayor de los asientos de la liquidación del IVA en exacta correspondencia con las casillas del Formulario 120.'
    },
    {
      q: '¿Cómo se entrega el material impreso?',
      a: 'El material se entrega en formato físico con encuadernación anillada profesional de alta durabilidad y portadas a full color. El Combo Completo incluye delivery en Asunción y Gran Asunción sin costo adicional. Para el interior del país realizamos envíos seguros vía encomienda.'
    },
    {
      q: '¿Qué medios de pago se encuentran disponibles?',
      a: 'Aceptamos transferencias bancarias directas (SIPAP a todos los bancos y cooperativas del país), pagos rápidos vía QR, y giros por billeteras electrónicas (Tigo Money, Personal Pay, Zimple). Una vez coordinado el pedido por WhatsApp, te facilitamos los datos de pago y despachamos tu ejemplar.'
    },
    {
      q: '¿Sirve para auxiliares contables, estudiantes y recién egresados?',
      a: 'Totalmente. Fue diseñado específicamente por un auditor externo para quienes comienzan o trabajan en estudios contables y empresas. Ayuda a superar la teoría abstracta y a registrar con seguridad técnica comprobantes reales, asientos de compras, ventas, prorrateo y 100 cuentas resueltas paso a paso.'
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      {/* ------------------------------------------------------------- */}
      {/* BANNER STICKY SUPERIOR: Fondo arena #E8DCC4, texto #1E3A5F     */}
      {/* ------------------------------------------------------------- */}
      <aside
        aria-label="Aviso de material impreso premium"
        className="sticky top-16 sm:top-20 z-30 w-full bg-[#E8DCC4] text-[#1E3A5F] py-2.5 px-3 sm:px-4 border-b border-[#1E3A5F]/15"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
          <button
            type="button"
            onClick={() => scrollToSection('opciones-compra')}
            className="text-xs sm:text-[13px] font-bold leading-tight text-[#1E3A5F] hover:underline underline-offset-4 flex items-center justify-center gap-1.5 group cursor-pointer tabular-nums"
          >
            <span>Material impreso premium · Disponible ahora · Combo recomendado Gs. 170.000 (incluye delivery Asu y Gran Asunción)</span>
            <span className="font-bold group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* HERO (#inicio): Fondo azul noche #1E3A5F, titular Source Serif */}
      {/* ------------------------------------------------------------- */}
      <section
        id="inicio"
        className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-[#1E3A5F] text-[#F5F0E6] border-b border-[#E8DCC4]/20"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <p className="text-xs font-bold tracking-wider uppercase text-[#E8DCC4]">
                Edición Impresa · Criterio de Auditor Externo
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F0E6] leading-[1.15] tracking-tight text-balance">
                Manual de Contabilidad Aplicada para la Práctica Profesional en Paraguay
              </h1>

              <p className="text-base sm:text-lg text-[#F5F0E6]/85 leading-relaxed max-w-2xl font-sans">
                Compendio técnico impreso con criterio de auditor externo para dominar la práctica contable real. Aprendé a confeccionar los papeles de trabajo indispensables, el análisis de comprobantes según la Ley N° 6380/19 y los asientos contables de la liquidación del IVA en exacta correspondencia con las casillas del Formulario 120 V.4.
              </p>

              <div className="w-full pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('opciones-compra')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold bg-[#E8DCC4] text-[#1E3A5F] hover:bg-[#F5F0E6] active:scale-[0.98] transition-all group cursor-pointer"
                >
                  <span>Ver opciones de compra</span>
                  <ChevronRight className="w-4 h-4 text-[#1E3A5F] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contenido')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-transparent text-[#F5F0E6] border border-[#F5F0E6]/35 hover:bg-[#F5F0E6]/10 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#E8DCC4]" />
                  <span>Explorar contenido incluido</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#F5F0E6]/15 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-[#F5F0E6]/85">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span>Material impreso premium (anillado profesional)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span>Criterio de auditor externo · Ley 6380/19</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span>Papeles de trabajo y asientos contables reales</span>
                </div>
              </div>
            </div>

            {/* Right Cover Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] lg:max-w-none">
                <div className="relative mx-auto rounded-2xl p-2.5 sm:p-3 bg-[#F5F0E6] border border-[#E8DCC4]">
                  <div className="overflow-hidden rounded-xl border border-[#1E3A5F]/15 bg-white aspect-[2/3] relative">
                    <img
                      src="/assets/aistudio/Portada_oficial_de_manual_Contabilidad_Aplicada_ab64a4d5.png"
                      alt="Portada oficial del Manual Práctico de Contabilidad Aplicada - Estudio Cáceres"
                      width={1024}
                      height={1536}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 p-3.5 sm:p-4 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/20 text-left max-w-[220px] hidden sm:block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A7C59] block">
                    Criterio de auditor
                  </span>
                  <span className="text-xs font-bold text-[#1E3A5F] block mt-0.5">
                    Asientos contables y papeles de trabajo reales
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
        className="w-full bg-[#F5F0E6] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15"
      >
        <div className="max-w-[1180px] mx-auto space-y-12 sm:space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A7C59]">
              Material Incluido
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              Herramientas y papeles de trabajo para tu ejercicio contable
            </h2>
            <p className="text-sm sm:text-base text-[#2C2C2C] leading-relaxed font-sans">
              Aprendé la técnica contable y el criterio de auditoría detrás de cada registro: papeles de trabajo, asientos del Libro Diario y Mayor, y su correlación técnica con las casillas del Formulario 120 V.4.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Stacked Pages Mockup (Preserved) */}
            <div className="lg:col-span-5 flex justify-center py-6">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <div
                  className="absolute inset-0 rounded-2xl bg-white border border-[#1E3A5F]/20 overflow-hidden transform -rotate-4 transition-transform hover:-rotate-6 duration-300"
                  style={{ transform: 'rotate(-4deg)' }}
                >
                  <img
                    src={page1Svg}
                    alt="Muestra de página del Manual de Contabilidad - Estructura y papeles de trabajo del IVA"
                    width={320}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute inset-0 rounded-2xl bg-white border border-[#1E3A5F]/20 overflow-hidden transform rotate-0 transition-transform hover:scale-[1.02] duration-300"
                  style={{ transform: 'rotate(0deg)' }}
                >
                  <img
                    src={page2Svg}
                    alt="Muestra de página del Manual de Contabilidad - Asiento contable de la liquidación del IVA"
                    width={320}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute inset-0 rounded-2xl bg-white border border-[#1E3A5F]/25 overflow-hidden transform rotate-3 transition-transform hover:rotate-6 duration-300"
                  style={{ transform: 'rotate(3deg)' }}
                >
                  <img
                    src={page3Svg}
                    alt="Muestra de página del Manual de Contabilidad - Prorrateo de IVA crédito y asientos de ajuste"
                    width={320}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#1E3A5F] text-[#F5F0E6] text-[11px] font-semibold px-2.5 py-1 rounded text-center tabular-nums">
                    Extracto real del Tomo I (Pág. 12)
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Components */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold text-sm tabular-nums">
                  01
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E3A5F]">
                  Tomo I: Fundamentos y Asientos del IVA
                </h3>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Criterio contable de compras, ventas, prorrateo y los asientos de la liquidación del IVA en correspondencia con las casillas del Formulario 120 V.4.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold text-sm tabular-nums">
                  02
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E3A5F]">
                  Ejercitario Práctico de 100 Casos
                </h3>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  100 cuentas reales con solucionario analítico, papeles de trabajo y casos de control interno analizados con criterio de auditor externo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold text-sm tabular-nums">
                  03
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E3A5F]">
                  Papeles de Trabajo y Control Interno
                </h3>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Checklist de auditoría para análisis de comprobantes deducibles, requisitos formales de la Ley N° 6380/19 y prevención de inconsistencias.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold text-sm tabular-nums">
                  04
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E3A5F]">
                  Casos Prácticos Resueltos Paso a Paso
                </h3>
                <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                  Asientos contables completos con números reales, fundamentación técnica y cruce directo con las cuentas de mayor y balance.
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
        className="w-full bg-[#E8DCC4] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15"
      >
        <div className="max-w-[1180px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A5F]">
              Ruta Contable de Aplicación
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              Circuito contable con criterio de auditor externo
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Steps list */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold shrink-0 tabular-nums">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">
                    Control Interno y Análisis de Comprobantes
                  </h3>
                  <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                    Criterios de validez formal, timbrado vigente y análisis de deducibilidad según rubro bajo la Ley N° 6380/19 previo a cualquier imputación.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold shrink-0 tabular-nums">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">
                    Asientos en Libro Diario y Mayor
                  </h3>
                  <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                    Imputación correcta de IVA Crédito 10%, 5% y compras exentas, factor de prorrateo y balance de comprobación de sumas y saldos cuadrado.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#1E3A5F]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-[#F5F0E6] flex items-center justify-center font-bold shrink-0 tabular-nums">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-[#1E3A5F]">
                    Registro Contable de la Liquidación del IVA
                  </h3>
                  <p className="text-sm text-[#2C2C2C] leading-relaxed font-sans">
                    Asiento de compensación de débito y crédito fiscal en Libro Diario, determinación del saldo contable y su correspondencia con las casillas del Formulario 120 V.4.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps Visual preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#1E3A5F]/20 bg-white p-3">
                <img
                  src={balanceSumasSaldosImg}
                  alt="Balance de Comprobación de Sumas y Saldos - Papel de trabajo contable en Paraguay"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <p className="text-xs text-[#2C2C2C]/80 text-center mt-3 font-medium">
                  Papel de trabajo: Balance de Sumas y Saldos con criterio de auditoría
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
        className="w-full bg-[#F5F0E6] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15"
      >
        <div className="max-w-[1180px] mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A7C59]">
              Extractos Reales del Tomo I: Asientos Contables del IVA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              Vista previa: papeles de trabajo y asientos reales
            </h2>
            <p className="text-sm sm:text-base text-[#2C2C2C] leading-relaxed font-sans">
              Hacé clic en cualquier captura para inspeccionar la estructura contable, los asientos del Libro Diario y las notas técnicas con criterio de auditoría.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Case Card 1: Portada */}
            <div
              onClick={() => setPreviewDoc({
                src: page1Svg,
                title: 'Papeles de trabajo y análisis del débito y crédito fiscal',
                caption: 'Estructura contable previa al registro de la liquidación'
              })}
              className="group cursor-pointer rounded-2xl bg-white border border-[#1E3A5F]/15 overflow-hidden hover:border-[#1E3A5F] transition-colors duration-200 flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] bg-[#E8DCC4]/40 overflow-hidden">
                <img
                  src={page1Svg}
                  alt="Portada del capítulo IVA - Papeles de trabajo y análisis de débito y crédito fiscal"
                  width={380}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/0 group-hover:bg-[#1E3A5F]/25 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#F5F0E6] text-[#1E3A5F] text-xs font-bold border border-[#1E3A5F]/20 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#1E3A5F]" />
                    <span>Ver captura ampliada</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#4A7C59] font-bold block">
                  Estructura Contable
                </span>
                <h3 className="text-base font-bold font-heading text-[#1E3A5F] group-hover:underline underline-offset-4">
                  Papeles de trabajo y análisis del débito y crédito fiscal
                </h3>
              </div>
            </div>

            {/* Case Card 2: Caso 2 */}
            <div
              onClick={() => setPreviewDoc({
                src: page2Svg,
                title: 'Registro contable de la liquidación del IVA (Saldo a pagar)',
                caption: 'Asiento en Libro Diario compensando débito y crédito con boleta de pago'
              })}
              className="group cursor-pointer rounded-2xl bg-white border border-[#1E3A5F]/15 overflow-hidden hover:border-[#1E3A5F] transition-colors duration-200 flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] bg-[#E8DCC4]/40 overflow-hidden">
                <img
                  src={page2Svg}
                  alt="Caso 2 - Registro contable de la liquidación del IVA y pago"
                  width={380}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/0 group-hover:bg-[#1E3A5F]/25 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#F5F0E6] text-[#1E3A5F] text-xs font-bold border border-[#1E3A5F]/20 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#1E3A5F]" />
                    <span>Ver captura ampliada</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#4A7C59] font-bold block">
                  Asiento de Cierre
                </span>
                <h3 className="text-base font-bold font-heading text-[#1E3A5F] group-hover:underline underline-offset-4">
                  Registro contable de la liquidación del IVA (Saldo a pagar)
                </h3>
              </div>
            </div>

            {/* Case Card 3: Caso 5 */}
            <div
              onClick={() => setPreviewDoc({
                src: page3Svg,
                title: 'Prorrateo de IVA crédito en ventas mixtas y su contabilización',
                caption: 'Cálculo del factor de proporcionalidad y asientos contables de ajuste'
              })}
              className="group cursor-pointer rounded-2xl bg-white border border-[#1E3A5F]/15 overflow-hidden hover:border-[#1E3A5F] transition-colors duration-200 flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] bg-[#E8DCC4]/40 overflow-hidden">
                <img
                  src={page3Svg}
                  alt="Caso 5 - Prorrateo de IVA crédito fiscal en actividades con ventas gravadas y exentas"
                  width={380}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/0 group-hover:bg-[#1E3A5F]/25 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#F5F0E6] text-[#1E3A5F] text-xs font-bold border border-[#1E3A5F]/20 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#1E3A5F]" />
                    <span>Ver captura ampliada</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#4A7C59] font-bold block">
                  Caso Complejo
                </span>
                <h3 className="text-base font-bold font-heading text-[#1E3A5F] group-hover:underline underline-offset-4">
                  Prorrateo de IVA crédito en ventas mixtas y su contabilización
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: COMPARATIVA / EVOLUCIÓN (#comparativa)               */}
      {/* Cruz roja #B85450 solo para errores reales; Verde #4A7C59 ok  */}
      {/* ------------------------------------------------------------- */}
      <section
        id="comparativa"
        className="w-full bg-[#E8DCC4] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15"
      >
        <div className="max-w-[1180px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A5F]">
                Criterio Profesional
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
                La diferencia entre cargar números a ciegas y contabilizar con criterio de auditor
              </h2>
              <p className="text-sm sm:text-base text-[#2C2C2C] leading-relaxed font-sans">
                Cualquiera puede intentar llenar casillas en un sistema; el profesional que se destaca entiende la contabilidad aplicada, domina los asientos y sustenta técnicamente cada comprobante ante la DNIT.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('opciones-compra')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Ver opciones de compra
                </button>
              </div>
            </div>

            {/* Right Column: Comparison Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-left">
              {/* Before: Errores reales (#B85450 con cruz X) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#B85450]/35 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#B85450]/10 text-[#B85450] flex items-center justify-center font-bold border border-[#B85450]/30">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1E3A5F]">
                  Registros con dudas operativas
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C] leading-relaxed font-sans">
                  Asientos mecánicos sin papeles de trabajo, cálculo errático del prorrateo, desconocimiento del origen contable de las casillas y temor ante una auditoría.
                </p>
              </div>

              {/* After: Éxito (#4A7C59 con tilde Check) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#4A7C59] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A7C59] text-white flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1E3A5F]">
                  Contabilidad Aplicada con criterio de auditor
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C] leading-relaxed font-sans">
                  Papeles de trabajo estructurados, asientos de la liquidación del IVA técnicamente fundamentados y control interno estricto de comprobantes deducibles.
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
        className="w-full bg-[#F5F0E6] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15"
      >
        <div className="max-w-[1180px] mx-auto space-y-8 sm:space-y-12">
          <div className="max-w-2xl text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A7C59] block mb-2">
              Preguntas Frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              Respuestas técnicas sobre el material y su uso
            </h2>
          </div>

          <div className="divide-y divide-[#1E3A5F]/10 border border-[#1E3A5F]/15 bg-white rounded-2xl px-6 text-left">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#1E3A5F] hover:underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span
                      className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#1E3A5F] text-[#F5F0E6]' : 'bg-[#E8DCC4] text-[#1E3A5F]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm sm:text-base text-[#2C2C2C] leading-relaxed pr-6 font-sans">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-sm sm:text-base text-[#2C2C2C]/80 text-left">
            Todo lo que necesita saber sobre el formato, la vigencia legal y la metodología de entrega del manual.
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: OPCIONES DE COMPRA / PRECIOS (#opciones-compra)      */}
      {/* ------------------------------------------------------------- */}
      <section
        id="opciones-compra"
        className="w-full bg-[#E8DCC4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15 text-center scroll-mt-20"
      >
        <div id="obtener" className="max-w-[1240px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto space-y-3.5 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#4A7C59] px-4 py-1.5 rounded-full inline-block">
              Edición Física Impresa · Disponible Ahora
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              Elegí tu material y aprendé contabilidad con criterio de auditor
            </h2>
            <p className="text-base sm:text-lg text-[#2C2C2C] leading-relaxed font-sans max-w-2xl mx-auto">
              Libros físicos impresos con tapa full color, anillado profesional reforzado y papel de alto gramaje. Diseñados para tener abiertos sobre tu escritorio mientras analizás comprobantes y registrás asientos contables.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6 text-left">
            {/* CARD 1: Tomo I */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between hover:border-[#1E3A5F] transition-colors">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] block">
                    Volumen Principal
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">
                    Tomo I
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C2C2C] font-sans min-h-[38px] leading-relaxed">
                    Fundamentos + asientos contables de la liquidación del IVA
                  </p>
                </div>

                <div className="py-4 border-y border-[#1E3A5F]/15 my-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tabular-nums">
                      {PRECIO_TOMO_1}
                    </span>
                  </div>
                  <span className="text-xs text-[#2C2C2C]/75 font-medium block mt-1">
                    Ejemplar físico impreso anillado
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#2C2C2C]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Tapa full color</strong> y anillado profesional de alta resistencia</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Asientos contables de compras, ventas y <strong>prorrateo de IVA Crédito</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Registro contable de la liquidación del IVA</strong> en correspondencia con el Formulario 120 V.4</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Análisis y <strong>control interno de comprobantes</strong> bajo la Ley N° 6380/19</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>100% enfocado en Contabilidad Aplicada</strong> con criterio de auditor externo</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_TOMO_1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8DCC4]" />
                  <span>Pedir Tomo I</span>
                </a>
              </div>
            </div>

            {/* CARD 2: Combo Completo (RECOMENDADO) */}
            <div className="relative p-7 sm:p-9 rounded-2xl bg-[#F5F0E6] border-2 border-[#1E3A5F] flex flex-col justify-between lg:-translate-y-2">
              {/* Badge Recomendado */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4A7C59] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-white" />
                <span>RECOMENDADO · MEJOR VALOR</span>
              </div>

              <div className="space-y-4 pt-1">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] block">
                    Juego de 2 Volúmenes
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#1E3A5F]">
                    Combo Completo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C2C2C] font-sans min-h-[38px] leading-relaxed">
                    Tomo I (Fundamentos + Asientos del IVA) + Ejercitario Práctico
                  </p>
                </div>

                <div className="py-4 border-y border-[#1E3A5F]/15 my-2 bg-[#E8DCC4]/60 -mx-7 sm:-mx-9 px-7 sm:px-9">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold font-heading text-[#1E3A5F] tabular-nums">
                      {PRECIO_COMBO}
                    </span>
                  </div>
                  <span className="text-xs text-[#2C2C2C] font-medium block mt-1">
                    Juego físico completo: 2 tomos anillados
                  </span>
                </div>

                {/* Delivery Callout */}
                <div className="p-3.5 rounded-xl bg-white border border-[#4A7C59]/40 text-xs text-[#1E3A5F] font-bold flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span>Delivery incluido en Asunción y Gran Asunción</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#2C2C2C] pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Tomo I completo:</strong> Papeles de trabajo y asientos de la liquidación del IVA</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Ejercitario Práctico completo:</strong> 100 cuentas reales + solucionario de auditoría</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Delivery a domicilio</strong> en Asunción y Gran Asunción sin costo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Tapas full color</strong> y anillado profesional reforzado en ambos tomos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Correspondencia exacta</strong> entre registros contables y casillas del Formulario 120</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Casos de <strong>control interno tributario</strong> para detectar fallas antes de balances</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Envíos rápidos por encomienda a todo el interior del país</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_COMBO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full font-bold text-base bg-[#1E3A5F] hover:bg-[#162d4a] active:scale-[0.98] text-[#F5F0E6] transition-all flex items-center justify-center gap-2.5 text-center"
                >
                  <MessageCircle className="w-5 h-5 text-[#E8DCC4] shrink-0" />
                  <span>Pedir Combo Completo</span>
                </a>
              </div>
            </div>

            {/* CARD 3: Ejercitario Práctico */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between hover:border-[#1E3A5F] transition-colors">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] block">
                    Práctica Intensiva
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">
                    Ejercitario Práctico
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C2C2C] font-sans min-h-[38px] leading-relaxed">
                    100 cuentas + solucionario contable + casos de control interno
                  </p>
                </div>

                <div className="py-4 border-y border-[#1E3A5F]/15 my-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tabular-nums">
                      {PRECIO_EJERCITARIO}
                    </span>
                  </div>
                  <span className="text-xs text-[#2C2C2C]/75 font-medium block mt-1">
                    Ejemplar físico impreso anillado
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#2C2C2C]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>100 cuentas contables</strong> reales para ejercitar y fijar criterio profesional</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Solucionario analítico</strong> paso a paso fundamentado con criterio de auditor</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Casos de <strong>control interno contable</strong> y detección de inconsistencias</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span><strong>Tapa full color</strong> y anillado profesional para estudio cómodo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <span>Indispensable para estudiantes, postulantes y auxiliares contables</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_EJERCITARIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8DCC4]" />
                  <span>Pedir Ejercitario</span>
                </a>
              </div>
            </div>
          </div>

          {/* Medios de pago y despacho */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#2C2C2C] text-left">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/10">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1E3A5F] block">Medios de pago disponibles:</span>
                  <p className="text-[#2C2C2C] mt-0.5">Transferencia SIPAP (todos los bancos y cooperativas), Pago vía QR y Billeteras (Tigo Money, Personal Pay, Zimple).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/10">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1E3A5F] block">Entregas y Envíos:</span>
                  <p className="text-[#2C2C2C] mt-0.5">Delivery rápido en Asunción y Gran Asunción (incluido en el Combo Completo) y encomienda a todo el interior del país.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#2C2C2C]/80 font-sans border-t border-[#1E3A5F]/10 pt-3">
              ¿Tenés dudas antes de pedir? Escribinos directamente al WhatsApp <strong className="text-[#1E3A5F] tabular-nums">+595 993 535291</strong> para asistencia personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: SOBRE EL AUTOR (#autor)                             */}
      {/* ------------------------------------------------------------- */}
      <section
        id="autor"
        className="w-full bg-[#F5F0E6] py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1180px] mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center lg:text-left mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A7C59]">
              Perfil profesional
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#1E3A5F] tracking-tight mt-1">
              Sobre el autor
            </h2>
          </div>

          {/* Two-column layout in desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column — Profile Photo */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-[220px] h-[220px] rounded-full border-2 border-[#1E3A5F] overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={fotoPerfilAutor}
                  alt="Elías Cáceres - Técnico Contable, Especialista en Auditoría Externa Impositiva y Fundador de Estudio Cáceres"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width={220}
                  height={220}
                />
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#1E3A5F] mt-4 mb-1">
                Elías Cáceres
              </h3>
              <p className="text-sm font-semibold text-[#4A7C59] mb-2 font-sans">
                Técnico Contable · Especialista en Auditoría Externa Impositiva
              </p>
            </div>

            {/* Right Column — Content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Three micro-stats */}
              <div className="w-full max-w-[65ch] flex items-center justify-around sm:justify-start sm:gap-8 py-4 px-5 sm:px-6 rounded-2xl bg-white border border-[#1E3A5F]/15">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] leading-none tabular-nums">
                    3+ años
                  </span>
                  <span className="text-xs sm:text-sm text-[#2C2C2C]/80 font-sans mt-1">
                    de experiencia
                  </span>
                </div>

                <div className="w-px h-8 sm:h-10 bg-[#1E3A5F]/15 shrink-0" aria-hidden="true" />

                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] leading-none">
                    Auditorías
                  </span>
                  <span className="text-xs sm:text-sm text-[#2C2C2C]/80 font-sans mt-1">
                    externas
                  </span>
                </div>

                <div className="w-px h-8 sm:h-10 bg-[#1E3A5F]/15 shrink-0" aria-hidden="true" />

                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] leading-none">
                    Casos reales
                  </span>
                  <span className="text-xs sm:text-sm text-[#2C2C2C]/80 font-sans mt-1">
                    del día a día
                  </span>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 max-w-[65ch] text-[#2C2C2C] font-sans text-base sm:text-lg leading-relaxed">
                <p>
                  Soy Elías Cáceres, Técnico Contable y especialista en auditoría externa impositiva con más de <strong>3 años de experiencia en auditorías externas</strong> a empresas de diversos rubros en Paraguay.
                </p>
                <p>
                  En auditoría vi los mismos errores una y otra vez: auxiliares que intentan liquidar o llenar formularios sin entender los asientos contables de fondo, comprobantes mal analizados, prorrateos mal registrados y balances que no concilian.
                </p>
                <p>
                  Por eso creé Estudio Cáceres y escribí este material: para que auxiliares contables, estudiantes y recién egresados aprendan <strong>Contabilidad Aplicada con criterio de auditor externo</strong>. No es un instructivo de presentación ni un recetario tributario: es la guía práctica para entender los papeles de trabajo y los asientos contables reales que respaldan cada registro ante la DNIT.
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1E3A5F]/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-[#1E3A5F]/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#1E3A5F]/15 flex items-center justify-between bg-[#F5F0E6]">
              <div className="pr-4 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A7C59] block">
                  {previewDoc.caption}
                </span>
                <h4 className="text-sm sm:text-base font-bold font-heading text-[#1E3A5F] truncate">
                  {previewDoc.title}
                </h4>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1.5 rounded-lg text-[#1E3A5F]/70 hover:text-[#1E3A5F] hover:bg-[#E8DCC4] transition-colors shrink-0 cursor-pointer"
                aria-label="Cerrar vista previa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Document Image */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#E8DCC4]/40 flex items-center justify-center">
              <div className="w-full max-w-lg rounded-lg border border-[#1E3A5F]/20 bg-white overflow-hidden">
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
            <div className="px-5 py-3 border-t border-[#1E3A5F]/15 bg-[#F5F0E6] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#2C2C2C] font-sans">
                Extracto oficial del Manual de Contabilidad DNIT 2026 (Material Impreso)
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-full border border-[#1E3A5F]/25 text-xs font-semibold text-[#1E3A5F] bg-white hover:bg-[#E8DCC4] transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPreviewDoc(null);
                    scrollToSection('opciones-compra');
                  }}
                  className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#1E3A5F] text-[#F5F0E6] text-xs font-semibold hover:bg-[#162d4a] transition-colors whitespace-nowrap text-center cursor-pointer"
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
