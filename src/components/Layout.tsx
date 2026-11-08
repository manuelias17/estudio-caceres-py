import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Phone,
  ShieldCheck,
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
    <div className="min-h-screen flex flex-col bg-[#E9E6E0] text-[#213C2F] font-sans selection:bg-[#B8955E]/30 selection:text-[#213C2F]">
      {/* ------------------------------------------------------------- */}
      {/* UNIFIED MAIN HEADER (Fixed)                                   */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#C6C3BE] shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Brand Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8955E] rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src={logoImgLocal}
                alt="Logo Estudio Cáceres"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#B8955E] shadow-xs group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg font-bold font-heading text-[#213C2F] leading-tight">
                  Estudio Cáceres
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#B8955E] uppercase font-bold">
                  Tributario & Contable · PY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#213C2F]/80">
              <Link
                to="/"
                className={`transition-colors hover:text-[#213C2F] ${
                  location.pathname === '/' ? 'text-[#213C2F] font-bold border-b-2 border-[#B8955E] pb-0.5' : ''
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/calendario"
                className={`transition-colors hover:text-[#213C2F] ${
                  location.pathname === '/calendario' ? 'text-[#213C2F] font-bold border-b-2 border-[#B8955E] pb-0.5' : ''
                }`}
              >
                Calendario
              </Link>
              <Link
                to="/manual"
                className={`transition-colors hover:text-[#213C2F] ${
                  location.pathname === '/manual' ? 'text-[#213C2F] font-bold border-b-2 border-[#B8955E] pb-0.5' : ''
                }`}
              >
                Manual Contable
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#213C2F]"
              >
                Contacto
              </a>
            </nav>

            {/* Desktop Action Button: "Comprar manual" */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/manual#opciones-compra"
                onClick={() => {
                  if (location.pathname === '/manual') {
                    scrollToSection('opciones-compra');
                  }
                }}
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#213C2F] text-white hover:bg-[#16271f] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap cursor-pointer border border-[#B8955E]/40"
              >
                Comprar manual
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="lg:hidden p-2 rounded-xl text-[#213C2F] hover:bg-[#E9E6E0] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#C6C3BE] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in duration-150">
            <div className="flex flex-col space-y-2 text-base font-semibold text-[#213C2F]">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg ${
                  location.pathname === '/' ? 'bg-[#E9E6E0] text-[#213C2F] font-bold' : 'hover:bg-[#E9E6E0]/50'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/calendario"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg ${
                  location.pathname === '/calendario' ? 'bg-[#E9E6E0] text-[#213C2F] font-bold' : 'hover:bg-[#E9E6E0]/50'
                }`}
              >
                Calendario
              </Link>
              <Link
                to="/manual"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg ${
                  location.pathname === '/manual' ? 'bg-[#E9E6E0] text-[#213C2F] font-bold' : 'hover:bg-[#E9E6E0]/50'
                }`}
              >
                Manual Contable
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-[#E9E6E0]/50 text-[#213C2F] font-bold flex items-center justify-between"
              >
                <span>Contacto (WhatsApp)</span>
                <Phone className="w-4 h-4 text-[#B8955E]" />
              </a>
            </div>

            <div className="pt-2 border-t border-[#C6C3BE]">
              <Link
                to="/manual#opciones-compra"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (location.pathname === '/manual') {
                    scrollToSection('opciones-compra');
                  }
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-bold bg-[#213C2F] text-white hover:bg-[#16271f] transition-colors shadow-sm cursor-pointer border border-[#B8955E]/40"
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
          <div className="bg-[#213C2F] text-white border-t border-[#C6C3BE]/30 text-xs py-2 px-4 overflow-x-auto shadow-inner">
            <div className="max-w-[1280px] mx-auto flex items-center justify-start sm:justify-center gap-4 sm:gap-7 whitespace-nowrap font-medium">
              <span className="text-[#B8955E] font-bold uppercase tracking-wider hidden md:inline">
                Manual 2026:
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('contenido')}
                className="hover:text-[#B8955E] transition-colors py-1"
              >
                Material incluido
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('pasos')}
                className="hover:text-[#B8955E] transition-colors py-1"
              >
                Ruta de aplicación
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('ejemplos')}
                className="text-[#B8955E] font-bold hover:text-white transition-colors py-1"
              >
                Casos reales
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('comparativa')}
                className="hover:text-[#B8955E] transition-colors py-1"
              >
                Evolución profesional
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('autor')}
                className="hover:text-[#B8955E] transition-colors py-1"
              >
                El autor
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('preguntas')}
                className="hover:text-[#B8955E] transition-colors py-1"
              >
                Resolución de dudas
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('opciones-compra')}
                className="font-bold text-[#213C2F] bg-[#B8955E] px-3 py-1 rounded hover:bg-[#a3824e] transition-colors"
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
      {/* UNIFIED FOOTER                                                */}
      {/* ------------------------------------------------------------- */}
      <footer id="footer" className="w-full bg-[#213C2F] text-white pt-14 pb-10 px-4 sm:px-6 lg:px-8 border-t border-[#C6C3BE]/20">
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <img
                  src={logoImgLocal}
                  alt="Logo Estudio Cáceres"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#B8955E] shadow-md shrink-0"
                />
                <div>
                  <span className="text-xl font-black font-heading tracking-wide text-white block">
                    ESTUDIO CÁCERES
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-[#B8955E] uppercase font-bold">
                    Tributario & Contable · Paraguay
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/80 max-w-sm leading-relaxed font-sans">
                Criterio normativo, liquidación impositiva y respaldo técnico para profesionales independientes, estudiantes y empresas en Paraguay.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck className="w-4 h-4 text-[#B8955E]" />
                <span>Supervisión conforme a la Ley N° 6380/19 y regulaciones DNIT 2026.</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3 text-left">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B8955E] block">
                Navegación
              </span>
              <ul className="space-y-2 text-sm text-white/85">
                <li>
                  <Link to="/" className="hover:text-[#B8955E] transition-colors">
                    Inicio institucional
                  </Link>
                </li>
                <li>
                  <Link to="/calendario" className="hover:text-[#B8955E] transition-colors">
                    Calendario de Vencimientos DNIT
                  </Link>
                </li>
                <li>
                  <Link to="/manual" className="hover:text-[#B8955E] transition-colors">
                    Manual de Contabilidad Aplicada
                  </Link>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8955E] transition-colors">
                    Consultas por WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Channels */}
            <div className="md:col-span-4 space-y-3 text-left">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#B8955E] block">
                Vías de Contacto Directo
              </span>
              <div className="flex flex-col gap-2.5 text-sm text-white/90">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <MessageCircle className="w-4 h-4 text-[#B8955E] shrink-0" />
                  <span>WhatsApp: +595 993 535291</span>
                </a>
                <a
                  href="https://www.instagram.com/estudiocacerespy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <Instagram className="w-4 h-4 text-[#B8955E] shrink-0" />
                  <span>Instagram: @estudiocacerespy</span>
                </a>
                <a
                  href="https://facebook.com/estudiocacerespy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <ExternalLink className="w-4 h-4 text-[#B8955E] shrink-0" />
                  <span>Facebook: estudiocacerespy</span>
                </a>
                <a
                  href="mailto:estudiocacerespy@gmail.com"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <span className="text-[#B8955E] font-mono font-bold">@</span>
                  <span>estudiocacerespy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and Legal Notice */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Estudio Cáceres. Todos los derechos reservados. Asunción, Paraguay.</p>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING WHATSAPP BUTTON (Left side)                          */}
      {/* ------------------------------------------------------------- */}
      <div id="fp-published-whatsapp" className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 group">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp al +595 993 535291"
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#213C2F] text-[#B8955E] border-2 border-[#B8955E] shadow-xl hover:bg-[#B8955E] hover:text-[#213C2F] hover:scale-105 active:scale-95 transition-all"
        >
          <span className="hidden sm:block absolute left-[70px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#213C2F] text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none border border-[#B8955E]">
            WhatsApp: +595 993 535291
          </span>
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        </a>
      </div>
    </div>
  );
}
