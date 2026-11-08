import React, { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Plane, 
  Palmtree, 
  Compass, 
  Clock, 
  Smile, 
  ChevronRight,
  MessageCircle,
  Share2,
  Stars
} from 'lucide-react';
import { DESTINATIONS, Destination } from './destinations';

export const TARGET_PHONE = '351966310419';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(DESTINATIONS[0]);
  const [customDestination, setCustomDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Praia & Sol', 'Romance & Cidade', 'Natureza & Relax', 'Aventura & Cultura'];

  const filteredDestinations = categoryFilter === 'Todos' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === categoryFilter);

  // Active chosen name
  const effectiveDestinationName = customDestination.trim() 
    ? customDestination.trim() 
    : selectedDestination ? `${selectedDestination.name} (${selectedDestination.country})` : '';

  const canConfirm = Boolean(effectiveDestinationName && startDate && endDate);

  const buildWhatsAppMessage = () => {
    let msg = `💖 *Amor, escolhi o nosso próximo destino de férias!* 🌴✈️\n\n`;
    msg += `📍 *Destino:* ${effectiveDestinationName}\n`;
    if (selectedDestination && !customDestination.trim()) {
      msg += `✨ *Vibe:* ${selectedDestination.tagline}\n`;
    }
    msg += `📅 *Datas:* de ${startDate} até ${endDate}\n`;
    if (notes.trim()) {
      msg += `💌 *Desejo especial:* "${notes.trim()}"\n`;
    }
    msg += `\nJá podes começar a tratar das reservas ou das malas! Mal posso esperar 🥰`;
    return msg;
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!canConfirm) return;

    const text = buildWhatsAppMessage();
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${TARGET_PHONE}?text=${encoded}`;
    
    // Open WhatsApp Web or mobile app directly
    window.open(waUrl, '_blank');
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/60 via-amber-50/30 to-rose-100/50 pb-24">
      {/* Top Banner / Hero */}
      <header className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 text-rose-100 border border-white/30 shadow-inner">
            <Heart className="w-4 h-4 fill-rose-200 text-rose-200 animate-pulse" />
            Para A Minha Cara-Metade
            <Sparkles className="w-4 h-4 text-amber-200" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-title font-bold tracking-tight mb-4 drop-shadow-sm">
            Para onde vamos a seguir? ✈️
          </h1>
          <p className="text-base sm:text-lg text-rose-100 max-w-2xl mx-auto font-normal">
            Escolhe o teu destino de sonho, define as melhores datas para nós e quando clicares em confirmar, recebo logo no meu WhatsApp para tratarmos de tudo!
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-rose-100/90 font-medium">
            <span className="flex items-center gap-1.5 bg-black/10 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Escolha rápida a 1 toque
            </span>
            <span className="flex items-center gap-1.5 bg-black/10 px-3 py-1 rounded-full border border-white/10">
              <MessageCircle className="w-4 h-4 text-emerald-300" /> Alerta WhatsApp instantâneo (+351 966 310 419)
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
        {/* Floating Quick Action Card / Form Summary */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-100 mb-10 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-rose-100">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-rose-500 flex items-center gap-1.5 mb-1">
                <Stars className="w-4 h-4" /> O Teu Plano Especial
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                {effectiveDestinationName ? effectiveDestinationName : 'Ainda não selecionaste destino'}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {startDate && endDate 
                  ? `Marcado para ${startDate} até ${endDate}`
                  : 'Define a data de partida e regresso em baixo'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleSendWhatsApp()}
                disabled={!canConfirm}
                className={`w-full md:w-auto px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg transition-all duration-200 ${
                  canConfirm 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-200 hover:shadow-emerald-300 cursor-pointer scale-100 hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-slate-150 text-slate-400 cursor-not-allowed bg-slate-100'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>Confirmar & Mandar ao Nelson</span>
              </button>
            </div>
          </div>

          {/* Date & Custom Input Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-rose-500" /> Data de Partida:
              </label>
              <input 
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-slate-800 text-sm font-medium outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-rose-500" /> Data de Regresso:
              </label>
              <input 
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-slate-800 text-sm font-medium outline-none transition"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Desejo ou detalhe romântico (opcional):
              </label>
              <input 
                type="text"
                placeholder="Ex: 'Quero hotel com piscina aquecida e massagens!'"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-slate-800 text-sm outline-none transition"
              />
            </div>
          </div>

          {/* Custom destination alternative */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs text-slate-500 whitespace-nowrap flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-slate-400" /> Ou escreve outro destino:
            </span>
            <input 
              type="text"
              placeholder="Ex: Paris, Islândia, Fernando de Noronha..."
              value={customDestination}
              onChange={(e) => {
                setCustomDestination(e.target.value);
                if (e.target.value) {
                  setSelectedDestination(null);
                }
              }}
              className="w-full sm:flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none"
            />
            {customDestination && (
              <button
                type="button"
                onClick={() => setCustomDestination('')}
                className="text-xs text-rose-500 hover:text-rose-700 underline cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Success notification popup */}
          {isSent && (
            <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold">Mensagem gerada para o WhatsApp do Nelson!</p>
                <p className="text-emerald-700 text-xs mt-0.5">
                  A conversa foi aberta no WhatsApp com o destino e datas selecionadas. Caso não tenha aberto automaticamente, clica novamente no botão.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                    : 'bg-white text-slate-600 hover:bg-rose-50 border border-rose-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 font-medium">
            {filteredDestinations.length} sugestões preparadas com amor
          </span>
        </div>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredDestinations.map((dest) => {
            const isSelected = selectedDestination?.id === dest.id && !customDestination.trim();

            return (
              <div 
                key={dest.id}
                onClick={() => {
                  setSelectedDestination(dest);
                  setCustomDestination('');
                }}
                className={`group relative rounded-3xl overflow-hidden bg-white border cursor-pointer transition-all duration-300 flex flex-col ${
                  isSelected 
                    ? 'ring-3 ring-rose-500 border-rose-500 shadow-2xl scale-[1.01]' 
                    : 'border-rose-100 hover:border-rose-300 hover:shadow-xl'
                }`}
              >
                {/* Image & Badges */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img 
                    src={dest.imageUrl} 
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  {/* Category & Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-rose-600 backdrop-blur-md shadow-sm">
                      {dest.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white backdrop-blur-md">
                      {dest.category}
                    </span>
                  </div>

                  {/* Selected Tick Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-rose-600 text-white p-2 rounded-full shadow-lg animate-bounce">
                      <Heart className="w-5 h-5 fill-white text-white" />
                    </div>
                  )}

                  {/* Destination titles on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-200 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {dest.country}
                    </div>
                    <h3 className="text-2xl font-bold font-serif-title drop-shadow-sm">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-rose-600 mb-2">
                      “{dest.tagline}”
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Momentos Especiais:
                      </span>
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Época ideal: {dest.bestSeason}
                    </span>
                    <button
                      type="button"
                      className={`font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                        isSelected 
                          ? 'bg-rose-600 text-white' 
                          : 'bg-rose-50 text-rose-600 group-hover:bg-rose-100'
                      }`}
                    >
                      {isSelected ? 'Destino Escolhido ✨' : 'Escolher este'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <section className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-4 h-4" /> Notificação Automática
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Todas as escolhas vão diretamente para o WhatsApp do Nelson
            </h3>
            <p className="text-sm text-emerald-100 max-w-xl">
              Assim que clicares em &quot;Confirmar & Mandar ao Nelson&quot;, a mensagem oficial com o destino, o link e as datas vai parar diretamente ao <strong>+351 966 310 419</strong>.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleSendWhatsApp()}
            disabled={!canConfirm}
            className={`px-8 py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg transition-all duration-200 shrink-0 ${
              canConfirm 
                ? 'bg-white text-emerald-700 hover:bg-emerald-50 cursor-pointer scale-100 hover:scale-105 active:scale-95'
                : 'bg-white/40 text-emerald-900 cursor-not-allowed opacity-75'
            }`}
          >
            <Send className="w-5 h-5" />
            <span>Enviar Agora</span>
          </button>
        </section>
      </main>

      {/* Floating Bottom Bar on Mobile */}
      <div className="fixed bottom-4 inset-x-4 md:hidden z-40">
        <button
          type="button"
          onClick={() => handleSendWhatsApp()}
          disabled={!canConfirm}
          className={`w-full py-4 px-6 rounded-2xl font-bold text-base shadow-2xl flex items-center justify-center gap-2.5 transition-all ${
            canConfirm 
              ? 'bg-rose-600 text-white shadow-rose-300' 
              : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-5 h-5" />
          <span>{canConfirm ? 'Confirmar & Mandar por WhatsApp' : 'Escolhe Destino e Datas'}</span>
        </button>
      </div>
    </div>
  );
}
