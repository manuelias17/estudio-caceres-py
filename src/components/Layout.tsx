import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Phone,
  Check,
  Instagram
} from 'lucide-react';
import logoImgLocal from '../assets/images/logo_real_estudio_caceres.png';

const WHATSAPP_NUMBER = '595993535291';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Estudio Cáceres, quisiera hacer una consulta tributaria.')}`;

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isManualPage = location.pathname === '/manual';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#2C2C2C] font-sans selection:bg-[#1E3A5F]/15 selection:text-[#1E3A5F]">
      {/* ------------------------------------------------------------- */}
      {/* HEADER: Fondo crema #F5F0E6, texto azul noche #1E3A5F         */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 w-full bg-[#F5F0E6] border-b border-[#1E3A5F]/15">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
            {/* Zone 1: Logo + Brand Wordmark with Auditor Tilde */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1E3A5F] rounded-lg whitespace-nowrap shrink-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src={logoImgLocal}
                alt="Logo Estudio Cáceres"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#1E3A5F]/20 shrink-0"
              />
              <span className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-bold font-heading text-[#1E3A5F] tracking-tight">
                <span>Estudio Cáceres</span>
                <Check className="w-4 h-4 text-[#4A7C59] stroke-[2.5]" aria-hidden="true" />
              </span>
            </Link>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#1E3A5F]">
              <Link
                to="/"
                className={`whitespace-nowrap shrink-0 hover:underline underline-offset-4 transition-colors ${
                  location.pathname === '/' ? 'font-bold underline' : ''
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/calendario"
                className={`whitespace-nowrap shrink-0 hover:underline underline-offset-4 transition-colors ${
                  location.pathname === '/calendario' ? 'font-bold underline' : ''
                }`}
              >
                Calendario
              </Link>
              <Link
                to="/manual"
                className={`whitespace-nowrap shrink-0 hover:underline underline-offset-4 transition-colors ${
                  location.pathname === '/manual' ? 'font-bold underline' : ''
                }`}
              >
                Manual Contable
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap shrink-0 text-[#1E3A5F] hover:underline underline-offset-4 transition-colors"
              >
                Contacto
              </a>
            </nav>

            {/* Zone 3: Primary CTA "Comprar manual" (Azul noche #1E3A5F, texto crema #F5F0E6, radio completo) */}
            <div className="hidden sm:flex items-center shrink-0">
              <Link
                to="/manual#opciones-compra"
                onClick={() => {
                  if (location.pathname === '/manual') {
                    scrollToSection('opciones-compra');
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Comprar manual
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="lg:hidden p-2 rounded-lg text-[#1E3A5F] hover:bg-[#E8DCC4] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F0E6] border-t border-[#1E3A5F]/15 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1.5 text-base font-semibold text-[#1E3A5F]">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg hover:underline underline-offset-4 ${
                  location.pathname === '/' ? 'bg-[#E8DCC4] font-bold' : 'hover:bg-[#E8DCC4]/50'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/calendario"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg hover:underline underline-offset-4 ${
                  location.pathname === '/calendario' ? 'bg-[#E8DCC4] font-bold' : 'hover:bg-[#E8DCC4]/50'
                }`}
              >
                Calendario
              </Link>
              <Link
                to="/manual"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg hover:underline underline-offset-4 ${
                  location.pathname === '/manual' ? 'bg-[#E8DCC4] font-bold' : 'hover:bg-[#E8DCC4]/50'
                }`}
              >
                Manual Contable
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#E8DCC4]/50 text-[#1E3A5F] hover:underline font-bold flex items-center justify-between"
              >
                <span>Contacto (WhatsApp)</span>
                <Phone className="w-4 h-4 text-[#1E3A5F]" />
              </a>
            </div>

            <div className="pt-2 border-t border-[#1E3A5F]/15">
              <Link
                to="/manual#opciones-compra"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (location.pathname === '/manual') {
                    scrollToSection('opciones-compra');
                  }
                }}
                className="w-full flex items-center justify-center py-3 px-6 rounded-full text-sm font-semibold bg-[#1E3A5F] text-[#F5F0E6] hover:bg-[#162d4a] transition-colors cursor-pointer"
              >
                Comprar manual
              </Link>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SUB-NAVIGATION BAR: ONLY VISIBLE ON /manual                   */}
        {/* ------------------------------------------------------------- */}
        {isManualPage && (
          <div className="hidden md:block bg-[#F5F0E6] text-[#1E3A5F] border-t border-[#1E3A5F]/10 text-xs py-2 px-4 overflow-x-auto">
            <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-7 whitespace-nowrap font-semibold">
              <button
                type="button"
                onClick={() => scrollToSection('edicion-digital')}
                className="text-[#1E3A5F] hover:underline underline-offset-4 transition-colors py-1 cursor-pointer"
              >
                Edición Digital
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('flujo-entrega')}
                className="text-[#1E3A5F] hover:underline underline-offset-4 transition-colors py-1 cursor-pointer"
              >
                Entrega y envío
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('edicion-impresa')}
                className="text-[#1E3A5F] hover:underline underline-offset-4 transition-colors py-1 cursor-pointer"
              >
                Edición Impresa
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('medios-pago')}
                className="text-[#1E3A5F] hover:underline underline-offset-4 transition-colors py-1 cursor-pointer"
              >
                Medios de pago
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('autor')}
                className="text-[#1E3A5F] hover:underline underline-offset-4 transition-colors py-1 cursor-pointer"
              >
                El autor
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('opciones-compra')}
                className="font-semibold text-[#F5F0E6] bg-[#1E3A5F] px-4 py-1 rounded-full hover:bg-[#162d4a] transition-colors cursor-pointer"
              >
                Opciones de compra
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER: Fondo azul noche #1E3A5F, texto crema #F5F0E6         */}
      {/* ------------------------------------------------------------- */}
      <footer id="footer" className="w-full bg-[#1E3A5F] text-[#F5F0E6] pt-14 pb-10 px-4 sm:px-6 lg:px-8 border-t border-[#E8DCC4]/15">
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#F5F0E6]/15">
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <img
                  src={logoImgLocal}
                  alt="Logo Estudio Cáceres"
                  className="w-11 h-11 rounded-full object-cover border border-[#E8DCC4]/50 shrink-0"
                />
                <div>
                  <span className="text-xl font-bold font-heading tracking-wide text-[#F5F0E6] inline-flex items-center gap-1.5">
                    <span>ESTUDIO CÁCERES</span>
                    <Check className="w-4 h-4 text-[#4A7C59] stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span className="text-xs tracking-wider text-[#E8DCC4] block font-medium">
                    Tributario & Contable · Paraguay
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#F5F0E6]/85 max-w-sm leading-relaxed font-sans">
                Criterio normativo, liquidación impositiva y respaldo técnico para profesionales independientes, estudiantes y empresas en Paraguay.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#E8DCC4]">
                <Check className="w-4 h-4 text-[#4A7C59] shrink-0" aria-hidden="true" />
                <span>Supervisión conforme a la Ley N° 6380/19 y regulaciones DNIT 2026.</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3 text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E8DCC4] block">
                Navegación
              </span>
              <ul className="space-y-2 text-sm text-[#F5F0E6]">
                <li>
                  <Link to="/" className="text-[#F5F0E6] hover:underline underline-offset-4 transition-colors">
                    Inicio institucional
                  </Link>
                </li>
                <li>
                  <Link to="/calendario" className="text-[#F5F0E6] hover:underline underline-offset-4 transition-colors">
                    Calendario de Vencimientos DNIT
                  </Link>
                </li>
                <li>
                  <Link to="/manual" className="text-[#F5F0E6] hover:underline underline-offset-4 transition-colors">
                    Manual de Contabilidad Aplicada
                  </Link>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#F5F0E6] hover:underline underline-offset-4 transition-colors">
                    Consultas por WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Channels */}
            <div className="md:col-span-4 space-y-3 text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E8DCC4] block">
                Vías de Contacto Directo
              </span>
              <div className="flex flex-col gap-2.5 text-sm text-[#F5F0E6]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F5F0E6]/5 hover:bg-[#F5F0E6]/10 text-[#F5F0E6] hover:underline transition-colors border border-[#F5F0E6]/15"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8DCC4] shrink-0" />
                  <span className="tabular-nums">WhatsApp: +595 993 535291</span>
                </a>
                <a
                  href="https://www.instagram.com/estudiocacerespy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F5F0E6]/5 hover:bg-[#F5F0E6]/10 text-[#F5F0E6] hover:underline transition-colors border border-[#F5F0E6]/15"
                >
                  <Instagram className="w-4 h-4 text-[#E8DCC4] shrink-0" />
                  <span>Instagram: @estudiocacerespy</span>
                </a>
                <a
                  href="https://facebook.com/estudiocacerespy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F5F0E6]/5 hover:bg-[#F5F0E6]/10 text-[#F5F0E6] hover:underline transition-colors border border-[#F5F0E6]/15"
                >
                  <ExternalLink className="w-4 h-4 text-[#E8DCC4] shrink-0" />
                  <span>Facebook: estudiocacerespy</span>
                </a>
                <a
                  href="mailto:estudiocacerespy@gmail.com"
                  className="inline-flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F5F0E6]/5 hover:bg-[#F5F0E6]/10 text-[#F5F0E6] hover:underline transition-colors border border-[#F5F0E6]/15"
                >
                  <span className="text-[#E8DCC4] font-bold">@</span>
                  <span>estudiocacerespy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E6]/70">
            <p>© {new Date().getFullYear()} Estudio Cáceres. Todos los derechos reservados. Asunción, Paraguay.</p>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING WHATSAPP BUTTON                                      */}
      {/* ------------------------------------------------------------- */}
      <div id="fp-published-whatsapp" className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 group">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp al +595 993 535291"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1E3A5F] text-[#F5F0E6] border-2 border-[#E8DCC4] hover:bg-[#162d4a] hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="hidden sm:block absolute left-[68px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1E3A5F] text-[#F5F0E6] text-xs font-semibold py-1.5 px-3 rounded-lg border border-[#E8DCC4]/40 whitespace-nowrap pointer-events-none tabular-nums">
            WhatsApp: +595 993 535291
          </span>
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
