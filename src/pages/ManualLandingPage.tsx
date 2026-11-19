import React, { useState, useEffect } from 'react';
import {
  Check,
  CheckCircle2,
  MessageCircle,
  Eye,
  X,
  Truck
} from 'lucide-react';

import fotoPerfilAutor from '../assets/images/foto_perfil_elias_caceres.jpg';
import previewTomo1Indice from '../assets/images/preview_tomo1_indice.svg';
import previewTomo2Ejercitario from '../assets/images/preview_tomo2_ejercitario.svg';
import previewTomo2Matriz from '../assets/images/preview_tomo2_matriz.svg';

const WHATSAPP_NUMBER = '595993535291';

// Constantes configurables para la Edición Digital (PDF)
const PRECIO_TOMO_1_DIGITAL = 'Gs. 85.000';
const PRECIO_TOMO_1_DIGITAL_LISTA = 'Gs. 100.000';
const PRECIO_TOMO_2_DIGITAL = 'Gs. 39.000';
const PRECIO_TOMO_2_DIGITAL_LISTA = 'Gs. 55.000';
const PRECIO_COMBO_DIGITAL = 'Gs. 109.000';
const PRECIO_COMBO_DIGITAL_NORMAL = 'Gs. 155.000';

const WHATSAPP_TOMO_1_DIGITAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero comprar el Tomo I — Contabilidad Aplicada (Edición Digital en PDF) por Gs. 85.000.\n\n' +
  'Mis datos para el envío al correo electrónico:\n' +
  '• Nombre completo:\n' +
  '• Correo electrónico:\n' +
  '• Medio de pago (Transferencia bancaria o Billetera digital):'
)}`;

const WHATSAPP_TOMO_2_DIGITAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero comprar el Tomo II — Ejercitario Práctico de Contabilidad Aplicada (Edición Digital en PDF + plantillas .docx editables) por Gs. 39.000.\n\n' +
  'Mis datos para el envío al correo electrónico:\n' +
  '• Nombre completo:\n' +
  '• Correo electrónico:\n' +
  '• Medio de pago (Transferencia bancaria o Billetera digital):'
)}`;

const WHATSAPP_COMBO_DIGITAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero aprovechar la oferta del Combo Completo Digital (Tomo I + Tomo II + Ejercitario + Bonus en PDF y plantillas .docx editables) con 30% OFF por Gs. 109.000 (ahorro directo de Gs. 46.000 sobre Gs. 155.000).\n\n' +
  'Mis datos para el envío al correo electrónico:\n' +
  '• Nombre completo:\n' +
  '• Correo electrónico:\n' +
  '• Medio de pago (Transferencia bancaria o Billetera digital):'
)}`;

const WHATSAPP_BANNER_OFERTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  '¡Hola Estudio Cáceres! 👋 Quiero aprovechar la oferta del Combo Completo (Tomo I + Tomo II + Ejercitario) por Gs. 109.000. ¿Me envían los datos para la transferencia / alias QR?'
)}`;

const WHATSAPP_IMPRESA_CONSULTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Estudio Cáceres, quiero consultar disponibilidad y costo de envío a domicilio para la Edición Impresa del Manual de Contabilidad Aplicada.\n\n' +
  '• Mi nombre:\n' +
  '• Ciudad / Barrio de entrega:'
)}`;

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col font-sans">
      {/* ------------------------------------------------------------- */}
      {/* BANNER STICKY SUPERIOR: Fondo #1E3A5F, texto crema #F5F0E6    */}
      {/* ------------------------------------------------------------- */}
      <aside
        aria-label="Oferta 30% OFF Manual Digital DNIT 2026"
        className="sticky top-16 sm:top-20 z-30 w-full bg-[#1E3A5F] text-[#F5F0E6] py-2.5 px-3 sm:px-4 border-b border-[#E8DCC4]/20"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="text-xs sm:text-[13px] font-bold leading-tight text-[#F5F0E6] flex flex-wrap items-center justify-center gap-2 sm:gap-3 tabular-nums">
            <span>🛡️ Evitá inconsistencias y hacé que todo te cuadre: Manual + Ejercitario con 30% OFF</span>
            <a
              href={WHATSAPP_BANNER_OFERTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 px-3 py-1 rounded bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1E3A5F] text-[11px] sm:text-xs font-extrabold tracking-wide uppercase transition-colors shrink-0 cursor-pointer"
            >
              <span>VER OFERTA DIGITAL</span>
              <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: OPCIONES DE COMPRA / PRECIOS (#opciones-compra)      */}
      {/* ------------------------------------------------------------- */}
      <section
        id="opciones-compra"
        className="w-full bg-[#F5F0E6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E3A5F]/15 text-center scroll-mt-36"
      >
        <div id="obtener" className="max-w-[1240px] mx-auto space-y-14">
          {/* Header */}
          <div className="max-w-3xl mx-auto space-y-3.5 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#4A7C59] px-4 py-1.5 rounded-full inline-block">
              Lanzamiento 2026 · Edición Digital e Impresa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#1E3A5F] tracking-tight text-balance">
              Elegí tu material y aprendé contabilidad con criterio de auditor
            </h2>
            <p className="text-base sm:text-lg text-[#2C2C2C] leading-relaxed font-sans max-w-2xl mx-auto">
              Accedé de forma inmediata a los Tomos I y II en versión digital (PDF + plantillas editables al correo) o solicitá los ejemplares físicos impresos con envío a domicilio.
            </p>
          </div>

          {/* SUB-SECCIÓN: Opciones de compra — Edición Digital */}
          <div id="edicion-digital" className="space-y-8 scroll-mt-36">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] block">
                Descarga y envío por correo electrónico
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#1E3A5F]">
                Opciones de compra — Edición Digital
              </h3>
            </div>

            {/* 3 Tarjetas Digitales lado a lado */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
              {/* TARJETA TOMO I DIGITAL */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between hover:border-[#1E3A5F] transition-colors">
                <div className="space-y-4">
                  {/* Vista previa real del Tomo I */}
                  <div className="grid grid-cols-2 gap-2.5 p-2.5 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/10">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewDoc({
                          src: '/assets/aistudio/Portada_oficial_de_manual_Contabilidad_Aplicada_ab64a4d5.png',
                          title: 'Portada Oficial — Tomo I Manual de Contabilidad Aplicada',
                          caption: 'Edición Digital (PDF)'
                        })
                      }
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#1E3A5F]/15 bg-white cursor-pointer"
                    >
                      <img
                        src="/assets/aistudio/Portada_oficial_de_manual_Contabilidad_Aplicada_ab64a4d5.png"
                        alt="Portada oficial Tomo I Contabilidad Aplicada Digital"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#1E3A5F]/90 text-[#F5F0E6] text-[10px] font-bold py-0.5 px-1.5 rounded text-center">
                        Portada PDF
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewDoc({
                          src: previewTomo1Indice,
                          title: 'Índice de Contenidos — Tomo I (Módulos 1 al 4)',
                          caption: 'Vista previa real del PDF Tomo I'
                        })
                      }
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#1E3A5F]/15 bg-white cursor-pointer"
                    >
                      <img
                        src={previewTomo1Indice}
                        alt="Índice de contenidos real del Tomo I Digital"
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#1E3A5F]/90 text-[#F5F0E6] text-[10px] font-bold py-0.5 px-1.5 rounded text-center flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3" /> Índice real
                      </span>
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] block">
                      Edición Digital · PDF
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] leading-snug">
                      Tomo I — Contabilidad Aplicada (Digital)
                    </h4>
                  </div>

                  <div className="py-3.5 border-y border-[#1E3A5F]/15">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs sm:text-sm text-[#2C2C2C]/60 font-semibold tabular-nums">
                        Precio de Lista: <span className="line-through">{PRECIO_TOMO_1_DIGITAL_LISTA}</span>
                      </span>
                      <span className="text-[11px] font-bold text-[#4A7C59] uppercase tracking-wide">
                        Promo por tomo separado
                      </span>
                    </div>
                    <span className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tabular-nums block mt-0.5">
                      {PRECIO_TOMO_1_DIGITAL}
                    </span>
                    <span className="text-xs text-[#2C2C2C]/80 font-medium block mt-1 leading-relaxed">
                      PDF del TOMO I. Precio promocional por tomo separado (Precio de Lista regular: {PRECIO_TOMO_1_DIGITAL_LISTA}). Acceso inmediato vía correo tras confirmar tu pago (Pago único).
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C2C2C]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span>Módulos 1 al 4: Fundamentos, Partida Doble, Libros e IVA Form. 120</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span>Asientos contables reales, prorrateo y papeles de trabajo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span>Formato PDF de alta definición para PC, tablet o celular</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 space-y-3">
                  <a
                    href={WHATSAPP_TOMO_1_DIGITAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8DCC4]" />
                    <span>Comprar Tomo I Digital</span>
                  </a>
                  <div className="text-[11px] sm:text-xs text-[#2C2C2C]/75 space-y-1 text-center leading-snug">
                    <p>💳 Pago por transferencia o billetera digital</p>
                    <p>📧 Envío al correo electrónico con acceso inmediato</p>
                  </div>
                </div>
              </div>

              {/* TARJETA COMBO DIGITAL (Borde dorado #C98A2C y badge MEJOR VALOR) */}
              <div className="relative p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#C98A2C] flex flex-col justify-between lg:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C98A2C] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>MEJOR VALOR · 30% OFF</span>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Vista previa combinada Tomo I + Tomo II */}
                  <div className="grid grid-cols-2 gap-2.5 p-2.5 rounded-xl bg-[#E8DCC4]/55 border border-[#C98A2C]/40">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewDoc({
                          src: '/assets/aistudio/Portada_oficial_de_manual_Contabilidad_Aplicada_ab64a4d5.png',
                          title: 'Tomo I Digital — Manual de Contabilidad Aplicada',
                          caption: 'Incluido en el Combo Digital'
                        })
                      }
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#1E3A5F]/15 bg-white cursor-pointer"
                    >
                      <img
                        src="/assets/aistudio/Portada_oficial_de_manual_Contabilidad_Aplicada_ab64a4d5.png"
                        alt="Tomo I incluido en el Combo Digital"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#1E3A5F]/90 text-[#F5F0E6] text-[10px] font-bold py-0.5 px-1.5 rounded text-center">
                        Tomo I PDF
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewDoc({
                          src: previewTomo2Ejercitario,
                          title: 'Tomo II Digital — Ejercitario Práctico y Plantillas .docx',
                          caption: 'Incluido en el Combo Digital'
                        })
                      }
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#1E3A5F]/15 bg-white cursor-pointer"
                    >
                      <img
                        src={previewTomo2Ejercitario}
                        alt="Tomo II Ejercitario Práctico incluido en el Combo Digital"
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#1E3A5F]/90 text-[#F5F0E6] text-[10px] font-bold py-0.5 px-1.5 rounded text-center flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3" /> Tomo II PDF
                      </span>
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C98A2C] block">
                      Pack Completo Digital · Ahorro Gs. 46.000 (30% OFF)
                    </span>
                    <h4 className="text-2xl sm:text-[26px] font-bold font-heading text-[#1E3A5F] leading-snug">
                      Combo Tomo I + II Digital
                    </h4>
                  </div>

                  <div className="py-3.5 border-y border-[#C98A2C]/30 bg-[#F5F0E6]/70 -mx-7 sm:-mx-8 px-7 sm:px-8">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm text-[#2C2C2C]/55 line-through font-semibold tabular-nums">
                        {PRECIO_COMBO_DIGITAL_NORMAL}
                      </span>
                      <span className="text-[11px] font-bold text-[#4A7C59] uppercase tracking-wide">
                        30% OFF · Ahorrás Gs. 46.000
                      </span>
                    </div>
                    <span className="text-4xl sm:text-5xl font-bold font-heading text-[#1E3A5F] tabular-nums block leading-none mt-1">
                      {PRECIO_COMBO_DIGITAL}
                    </span>
                    <span className="text-xs text-[#2C2C2C] font-medium block mt-2 leading-relaxed">
                      Pack Completo (Tomo I + Tomo II + Ejercitario + Bonus en PDF y plantillas .docx editables): ahorro directo de Gs. 46.000 sobre el valor regular de Gs. 155.000. Acceso inmediato vía correo tras confirmar tu pago (Pago único).
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C2C2C]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span><strong>Tomo I completo (PDF):</strong> Fundamentos, papeles de trabajo y asientos del IVA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span><strong>Tomo II completo (PDF + .docx):</strong> 100 cuentas, solucionario y control interno</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span><strong>Plantillas .docx editables</strong> listas para usar en tu estudio o estudio contable</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 space-y-3">
                  <a
                    href={WHATSAPP_COMBO_DIGITAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full font-bold text-base bg-[#1E3A5F] hover:bg-[#162d4a] active:scale-[0.98] text-[#F5F0E6] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-5 h-5 text-[#E8DCC4]" />
                    <span>Comprar Combo Digital</span>
                  </a>
                  <div className="text-[11px] sm:text-xs text-[#2C2C2C]/75 space-y-1 text-center leading-snug">
                    <p>💳 Pago por transferencia o billetera digital</p>
                    <p>📧 Envío al correo electrónico con acceso inmediato</p>
                  </div>
                </div>
              </div>

              {/* TARJETA TOMO II DIGITAL */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 flex flex-col justify-between hover:border-[#1E3A5F] transition-colors">
                <div className="space-y-4">
                  {/* Vista previa real del Tomo II */}
                  <div className="grid grid-cols-2 gap-2.5 p-2.5 rounded-xl bg-[#F5F0E6] border border-[#1E3A5F]/10">
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewDoc({
                          src: previewTomo2Ejercitario,
                          title: 'Tomo II — Ejercitario Práctico de Contabilidad Aplicada',
                          caption: 'Índice y contenido real del PDF Tomo II'
                        })
                      }
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#1E3A5F]/15 bg-white cursor-pointer"
                    >
                      <img
                        src={previewTomo2Ejercitario}
                        alt="Portada y contenido real Tomo II Ejercitario Práctico"
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#1E3A5F]/90 text-[#F5F0E6] text-[10px] font-bold py-0.5 px-1.5 rounded text-center flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3" /> Contenido
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewDoc({
                          src: previewTomo2Matriz,
                          title: 'Matriz Práctica de Clasificación de 100 Cuentas — Tomo II',
                          caption: 'Incluye solucionario oficial y plantillas .docx'
                        })
                      }
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#1E3A5F]/15 bg-white cursor-pointer"
                    >
                      <img
                        src={previewTomo2Matriz}
                        alt="Matriz práctica de 100 cuentas Tomo II Digital"
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#1E3A5F]/90 text-[#F5F0E6] text-[10px] font-bold py-0.5 px-1.5 rounded text-center flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3" /> 100 cuentas
                      </span>
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] block">
                      Edición Digital · PDF + .docx
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#1E3A5F] leading-snug">
                      Tomo II — Ejercitario práctico de Contabilidad Aplicada (Digital)
                    </h4>
                  </div>

                  <div className="py-3.5 border-y border-[#1E3A5F]/15">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs sm:text-sm text-[#2C2C2C]/60 font-semibold tabular-nums">
                        Precio de Lista: <span className="line-through">{PRECIO_TOMO_2_DIGITAL_LISTA}</span>
                      </span>
                      <span className="text-[11px] font-bold text-[#4A7C59] uppercase tracking-wide">
                        Promo por tomo separado
                      </span>
                    </div>
                    <span className="text-3xl sm:text-4xl font-bold font-heading text-[#1E3A5F] tabular-nums block mt-0.5">
                      {PRECIO_TOMO_2_DIGITAL}
                    </span>
                    <span className="text-xs text-[#2C2C2C]/80 font-medium block mt-1 leading-relaxed">
                      PDF + plantillas .docx editables. Precio promocional por tomo separado (Precio de Lista regular: {PRECIO_TOMO_2_DIGITAL_LISTA}). Acceso inmediato vía correo tras confirmar tu pago (Pago único).
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C2C2C]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span>Casos reales de análisis documental y control interno DNIT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span>Matriz práctica de 100 cuentas + solucionario oficial completo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                      <span>Incluye plantillas .docx editables para ejercitar sin límites</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 space-y-3">
                  <a
                    href={WHATSAPP_TOMO_2_DIGITAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8DCC4]" />
                    <span>Comprar Tomo II Digital</span>
                  </a>
                  <div className="text-[11px] sm:text-xs text-[#2C2C2C]/75 space-y-1 text-center leading-snug">
                    <p>💳 Pago por transferencia o billetera digital</p>
                    <p>📧 Envío al correo electrónico con acceso inmediato</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini-flujo visual de entrega */}
            <div id="flujo-entrega" className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-left scroll-mt-36">
              <div className="p-5 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A7C59] block">
                  Cómo recibís la Versión Digital
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#1E3A5F] font-sans">
                  🧾 Enviá comprobante → 📝 Completá el formulario que te enviaremos → 📧 Recibís al correo indicado con acceso inmediato
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#1E3A5F]/15 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A5F] block">
                  Cómo recibís los Ejemplares Impresos
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#1E3A5F] font-sans">
                  🛒 Seña → 💳 Confirmás → 🚚 Se coordina la entrega → Cancelás al recibir
                </p>
              </div>
            </div>
          </div>

          {/* NUEVA SECCIÓN: Envío físico — Edición Impresa */}
          <div id="edicion-impresa" className="p-7 sm:p-9 rounded-2xl bg-[#E8DCC4] border border-[#1E3A5F]/20 text-left space-y-6 scroll-mt-36">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A5F]">
                  <Truck className="w-4 h-4 text-[#1E3A5F]" />
                  <span>Envío físico — Edición Impresa</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#1E3A5F]">
                  📦 Edición Impresa (Envío a domicilio)
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C] font-sans leading-relaxed">
                  El manual impreso se entrega en tu domicilio. Consulta disponibilidad y costo de envío por WhatsApp al <strong className="text-[#1E3A5F] tabular-nums">+595 993 535291</strong>.
                </p>
              </div>

              <a
                href={WHATSAPP_IMPRESA_CONSULTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors text-center"
              >
                <span aria-hidden="true">🚚</span>
                <span>Consultar envío por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3 Pricing Cards Grid — Edición Física Impresa (Preservadas) */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A5F] block">
                Ejemplares Físicos Anillados
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#1E3A5F]">
                Opciones de Edición Impresa
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2 text-left">
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
          <div id="medios-pago" className="p-6 sm:p-8 rounded-2xl bg-white border border-[#1E3A5F]/15 max-w-4xl mx-auto space-y-4 scroll-mt-36">
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
                  <p className="text-[#2C2C2C] mt-0.5">Envío inmediato al correo para ediciones digitales; delivery rápido en Asunción y Gran Asunción (incluido en el Combo Completo impreso) y encomienda a todo el interior del país.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#2C2C2C]/80 font-sans border-t border-[#1E3A5F]/10 pt-3">
              ¿Tenés dudas antes de pedir? Escribinos directamente al WhatsApp <strong className="text-[#1E3A5F] tabular-nums">+595 993 535291</strong> para asistencia personalizada.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: SOBRE EL AUTOR (#autor)                             */}
      {/* ------------------------------------------------------------- */}
      <section
        id="autor"
        className="w-full bg-[#F5F0E6] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-36"
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
                Extracto oficial del Manual de Contabilidad DNIT 2026 (Edición Digital e Impresa)
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
