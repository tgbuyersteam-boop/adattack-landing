import { MessageCircle, Send, Linkedin, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { trackLead } from './FacebookPixel';

export function Contact() {
  const openWhatsApp = () => {
    trackLead('whatsapp');
    window.open('https://wa.me/40735460326', '_blank');
  };

  const openTelegram = () => {
    trackLead('telegram');
    window.open('https://t.me/m/SSAPjfxCOGZl', '_blank');
  };

  const openLinkedIn = () => {
    trackLead('linkedin');
    window.open('https://www.linkedin.com/in/dimitridparis/', '_blank');
  };

  return (
    <section className="py-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Personal Photo Circle */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-red-800 opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-600 shadow-2xl shadow-red-600/50">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1738518212121-22ffc8e9fa16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyME1pbGFuJTIwSXRhbHl8ZW58MXx8fHwxNzcyMTcwMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Milan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Давайте обсудим<br />
              <span className="text-red-600">ваш проект</span>
            </h2>

            <p className="text-xl text-zinc-400 mb-8">
              Свяжитесь с нами удобным способом и получите коммерческое предложение в течение 24 часов.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail className="w-5 h-5 text-red-600" />
                <span>info@youragency.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Работаем с клиентами по всему миру</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={openWhatsApp}
              className="group flex items-center justify-center gap-3 px-8 py-6 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 hover:scale-105 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={openTelegram}
              className="group flex items-center justify-center gap-3 px-8 py-6 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-zinc-700 text-lg"
            >
              <Send className="w-6 h-6" />
              <span>Telegram</span>
            </button>

            <button
              onClick={openLinkedIn}
              className="group flex items-center justify-center gap-3 px-8 py-6 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-zinc-700 text-lg"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}