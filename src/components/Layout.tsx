import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  MessageCircle,
  ExternalLink,
  Calendar,
  BookOpen,
  Phone,
  ShieldCheck,
  ChevronRight,
  Instagram
} from 'lucide-react';
import logoImgLocal from '../assets/images/logo_real_estudio_caceres.png';

const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/Y108013354Q?bid=1792156131415';
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
    <div className="min-h-screen flex flex-col bg-[#F7F8F9] text-[#1C242B] font-sans selection:bg-[#C98A2C]/25 selection:text-[#0F2438]">
      {/* ------------------------------------------------------------- */}
      {/* UNIFIED MAIN HEADER (Fixed)                                   */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Brand Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C98A2C] rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src={logoImgLocal}
                alt="Logo Estudio Cáceres"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#C98A2C]/60 shadow-xs group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg font-bold font-heading text-[#0F2438] leading-tight">
                  Estudio Cáceres
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#C98A2C] uppercase font-bold">
                  Tributario & Contable · PY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menu (PASO 5: Inicio, Calendario, Manual DNIT, Contacto, Comprar) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <Link
                to="/"
                className={`transition-colors hover:text-[#0F2438] ${
                  location.pathname === '/' ? 'text-[#0F2438] font-bold border-b-2 border-[#C98A2C] pb-0.5' : ''
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/calendario"
                className={`transition-colors hover:text-[#0F2438] ${
                  location.pathname === '/calendario' ? 'text-[#0F2438] font-bold border-b-2 border-[#C98A2C] pb-0.5' : ''
                }`}
              >
                Calendario
              </Link>
              <Link
                to="/manual"
                className={`transition-colors hover:text-[#0F2438] ${
                  location.pathname === '/manual' ? 'text-[#0F2438] font-bold border-b-2 border-[#C98A2C] pb-0.5' : ''
                }`}
              >
                Manual Contable
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#0F2438]"
              >
                Contacto
              </a>
            </nav>

            {/* Desktop Action Button: "Comprar manual" */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
              >
                Comprar manual
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="lg:hidden p-2 rounded-xl text-[#0F2438] hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in duration-150">
            <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg ${
                  location.pathname === '/' ? 'bg-slate-100 text-[#0F2438] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/calendario"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg ${
                  location.pathname === '/calendario' ? 'bg-slate-100 text-[#0F2438] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                Calendario
              </Link>
              <Link
                to="/manual"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg ${
                  location.pathname === '/manual' ? 'bg-slate-100 text-[#0F2438] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                Manual Contable
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 text-emerald-700 font-bold flex items-center justify-between"
              >
                <span>Contacto (WhatsApp)</span>
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-bold bg-[#0F2438] text-white hover:bg-[#163350] transition-colors shadow-sm"
              >
                Comprar manual
              </a>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SUB-NAVIGATION BAR: ONLY VISIBLE ON /manual                   */}
        {/* ------------------------------------------------------------- */}
        {isManualPage && (
          <div className="bg-[#0F2438] text-white border-t border-slate-800 text-xs py-2 px-4 overflow-x-auto shadow-inner">
            <div className="max-w-[1280px] mx-auto flex items-center justify-start sm:justify-center gap-4 sm:gap-7 whitespace-nowrap font-medium">
              <span className="text-[#C98A2C] font-bold uppercase tracking-wider hidden md:inline">
                Manual 2026:
              </span>
              <button
                type="button"
                onClick={() => scrollToSection('contenido')}
                className="hover:text-[#C98A2C] transition-colors py-1"
              >
                Material incluido
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('pasos')}
                className="hover:text-[#C98A2C] transition-colors py-1"
              >
                Ruta de aplicación
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('ejemplos')}
                className="text-[#C98A2C] font-bold hover:text-white transition-colors py-1"
              >
                Casos reales
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('comparativa')}
                className="hover:text-[#C98A2C] transition-colors py-1"
              >
                Evolución profesional
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('autor')}
                className="hover:text-[#C98A2C] transition-colors py-1"
              >
                El autor
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('preguntas')}
                className="hover:text-[#C98A2C] transition-colors py-1"
              >
                Resolución de dudas
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('obtener')}
                className="font-bold text-[#C98A2C] bg-white/10 px-2.5 py-0.5 rounded hover:bg-white/20 transition-colors"
              >
                Quiero mi manual
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
      <footer id="footer" className="w-full bg-[#0F2438] text-white pt-14 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <img
                  src={logoImgLocal}
                  alt="Logo Estudio Cáceres"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C98A2C]/60 shadow-md shrink-0"
                />
                <div>
                  <span className="text-xl font-black font-heading tracking-wide text-white block">
                    ESTUDIO CÁCERES
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-[#C98A2C] uppercase font-bold">
                    Tributario & Contable · Paraguay
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-sans">
                Criterio normativo, liquidación impositiva y respaldo técnico para profesionales independientes, estudiantes y empresas en Paraguay.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#C98A2C]" />
                <span>Supervisión conforme a la Ley N° 6380/19 y regulaciones DNIT 2026.</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3 text-left">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 block">
                Navegación
              </span>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link to="/" className="hover:text-[#C98A2C] transition-colors">
                    Inicio institucional
                  </Link>
                </li>
                <li>
                  <Link to="/calendario" className="hover:text-[#C98A2C] transition-colors">
                    Calendario de Vencimientos DNIT
                  </Link>
                </li>
                <li>
                  <Link to="/manual" className="hover:text-[#C98A2C] transition-colors">
                    Manual de Contabilidad Aplicada
                  </Link>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#C98A2C] transition-colors">
                    Consultas por WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Channels */}
            <div className="md:col-span-4 space-y-3 text-left">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 block">
                Vías de Contacto Directo
              </span>
              <div className="flex flex-col gap-2.5 text-sm text-slate-300">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WhatsApp: +595 993 535291</span>
                </a>
                <a
                  href="https://www.instagram.com/estudiocacerespy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Instagram: @estudiocacerespy</span>
                </a>
                <a
                  href="https://facebook.com/estudiocacerespy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <ExternalLink className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Facebook: estudiocacerespy</span>
                </a>
                <a
                  href="mailto:estudiocacerespy@gmail.com"
                  className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                >
                  <span className="text-[#C98A2C] font-mono font-bold">@</span>
                  <span>estudiocacerespy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and Legal Notice */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Estudio Cáceres. Todos los derechos reservados. Asunción, Paraguay.</p>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING WHATSAPP BUTTON (Left side as customized)            */}
      {/* ------------------------------------------------------------- */}
      <div id="fp-published-whatsapp" className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 group">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp al +595 993 535291"
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white border-2 border-white shadow-[0_12px_30px_rgba(13,94,45,0.32)] hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="hidden sm:block absolute left-[70px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
            WhatsApp: +595 993 535291
          </span>
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
        </a>
      </div>
    </div>
  );
}
