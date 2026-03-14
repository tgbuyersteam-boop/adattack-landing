import { MessageCircle, Send, Linkedin, CheckCircle2, XCircle, Frown, DollarSign, CreditCard, Wallet, Smile, Instagram } from 'lucide-react';


import { trackLead } from './FacebookPixel';

export function Offer() {
  const openInstagram = () => {
    trackLead('instagram');
    window.open('https://ig.me/m/adattack.metaads', '_blank');
  };

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
    <section id="offer-section" className="relative pt-0 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Problems Block */}
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 sm:p-8 mb-3 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Frown className="w-10 h-10 text-red-600 flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl text-white">Нет креативной системы = Нет масштабируемых результатов в Meta Ads</h3>
          </div>
          <ul className="space-y-4 text-lg sm:text-xl text-white">
            <li className="flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <span>креативы убивают ваше время</span>
            </li>
            <li className="flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <span>объявления непостоянны</span>
            </li>
            <li className="flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <span>вы тратите бюджет вслепую</span>
            </li>
          </ul>
        </div>

        {/* Solution Block */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-zinc-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 sm:p-8 mb-3 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-500 flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl text-white">Мое быстрое решение</h3>
          </div>
          <p className="text-lg sm:text-xl text-white text-center leading-tight">
            Я создаю готовый к тестированию креативный пак за 48 часов. Создан для быстрого поиска победителей, без потери вашего времени
          </p>
        </div>

        {/* Product Card - Testing Pack $149 */}
        <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-3 overflow-hidden">
          {/* Liquid red glass gradient background layers - more saturated red without gray blending */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 via-rose-600/85 to-red-700/80 blur-3xl animate-paint-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-rose-600/75 via-red-500/80 to-rose-500/75 blur-2xl animate-paint-slower"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 via-rose-600/75 to-red-700/70 blur-3xl animate-paint-flow"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-rose-600/70 via-red-500/75 to-rose-600/70 blur-2xl animate-paint-flow-reverse"></div>
          
          {/* Content wrapper */}
          <div className="relative">
            {/* Product Title & Price */}
            <div className="text-center mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-2">
                Тестовый пак <span className="text-white font-bold">$149</span>
              </h2>
            </div>

            {/* Product Image */}
            <div className="mb-6 rounded-xl overflow-hidden max-w-[200px] mx-auto shadow-2xl shadow-black/60 border-2 border-white/20">
              <img 
                src={"https://via.placeholder.com/800"} 
                alt="Meta Ads Creative Dashboard" 
                className="w-full h-auto"
              />
            </div>

            {/* What you get */}
            <div>
              <h3 className="text-2xl sm:text-3xl text-white mb-4 font-semibold">20 рабочих креативов</h3>

              <ul className="space-y-2 text-base sm:text-lg text-white">

                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 leading-[1.4rem]">•</span>
                  <span>Созданы для быстрого выявления выигрышных концепций, а не «красивых объявлений»</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 leading-[1.4rem]">•</span>
                  <span>Основаны на вашей воронке, осведомленности аудитории и триггерах покупки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 leading-[1.4rem]">•</span>
                  <span>Множественные углы, хуки и призывы к действию - чтобы Meta Ads могла оптимизировать</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5 leading-[1.4rem]">•</span>
                  <span>Готовые форматы для Meta Ads (Лента + Истории)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results Block */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-zinc-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 sm:p-8 mb-3 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smile className="w-8 h-8 text-green-500 flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl text-white font-semibold">Результаты, которые вы получаете</h3>
          </div>
          <ul className="space-y-3 text-lg sm:text-xl text-white">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5 leading-[1.4rem]">•</span>
              <span>Вы видите явных победителей в течение 48 часов</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5 leading-[1.4rem]">•</span>
              <span>Вы экономите огромное количество времени на производстве креативов</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5 leading-[1.4rem]">•</span>
              <span>Вы тестируете и масштабируетесь гораздо быстрее</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5 leading-[1.4rem]">•</span>
              <span>Вы снижаете CPA до 30% благодаря новым углам и концепциям</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5 leading-[1.4rem]">•</span>
              <span>Вы становитесь более стабильными благодаря постоянному тестированию</span>
            </li>
          </ul>
        </div>

        {/* How it works */}
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 sm:p-8 mb-3">
          <h3 className="text-2xl sm:text-3xl text-white mb-4 text-center">Как это работает</h3>
          <ol className="space-y-4 text-lg sm:text-xl text-white">
            <li className="flex items-start gap-4">
              <span className="text-3xl text-red-600 font-bold leading-none">1.</span>
              <span className="pt-0.5">Напишите мне, чтобы заказать пак и произвести оплату</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-3xl text-red-600 font-bold leading-none">2.</span>
              <span className="pt-0.5">Отправьте детали вашего оффера: информацию о продукте, целевую аудиторию, фан-страницы, прошлых победителей, ссылки на конкурентов</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-3xl text-red-600 font-bold leading-none">3.</span>
              <span className="pt-0.5">Я анализирую и создаю креативные концепции с разными углами</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-3xl text-red-600 font-bold leading-none">4.</span>
              <span className="pt-0.5">Вы запускаете и находите победителей</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-3xl text-red-600 font-bold leading-none">5.</span>
              <span className="pt-0.5">Повторяете, зарабатываете, повторяете</span>
            </li>
          </ol>
        </div>

        {/* How to pay */}
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 sm:p-8 mb-3">
          <h3 className="text-2xl sm:text-3xl text-white mb-6 text-center">Как оплатить</h3>
          
          {/* Payment methods grid */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-white text-lg">USD Transfer</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-white text-lg">Wise</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span className="text-white text-lg">Revolut</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="text-white text-lg">USDT</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-red-400 flex-shrink-0" />
              <span className="text-white text-lg">Платежная ссылка</span>
            </div>
          </div>

          {/* Invoice note */}
          <p className="text-center text-lg sm:text-xl text-white">
            <span className="text-green-400">✓</span> Я предоставляю инвойсы
          </p>
        </div>

        {/* CTA */}
        <div id="contact-form" className="text-center pb-12">
          <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-8 sm:p-10 overflow-hidden">
            {/* Liquid red glass gradient background layers - pleasant red tones (same as Testing Pack) */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/60 via-rose-600/70 to-red-600/60 blur-3xl animate-paint-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-rose-600/50 via-red-500/60 to-rose-500/50 blur-2xl animate-paint-slower"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/45 via-rose-600/55 to-red-600/45 blur-3xl animate-paint-flow"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-rose-600/45 via-red-500/50 to-rose-600/50 blur-2xl animate-paint-flow-reverse"></div>
            
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 font-bold tracking-wide">
                Получите 20 креативов для Meta Ads за 48 часов за $149
              </h3>
              
              <p className="text-lg text-white/90 mb-8 font-light">
                Выберите способ связи
              </p>
              
              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Instagram */}
                <button
                  onClick={openInstagram}
                  className="group relative w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/40 text-white px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden shadow-lg"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <Instagram className="w-6 h-6" />
                    <span className="text-lg font-medium">Instagram</span>
                  </div>
                </button>
                
                {/* LinkedIn */}
                <button
                  onClick={openLinkedIn}
                  className="group relative w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/40 text-white px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden shadow-lg"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <Linkedin className="w-6 h-6" />
                    <span className="text-lg font-medium">LinkedIn</span>
                  </div>
                </button>
                
                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="group relative w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/40 text-white px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden shadow-lg"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-lg font-medium">WhatsApp</span>
                  </div>
                </button>

                {/* Telegram */}
                <button
                  onClick={openTelegram}
                  className="group relative w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/40 text-white px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden shadow-lg"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <Send className="w-6 h-6" />
                    <span className="text-lg font-medium">Telegram</span>
                  </div>
                </button>
              </div>
              

            </div>
          </div>
        </div>

        {/* Results Screenshot */}
        <div className="bg-gradient-to-br from-emerald-900/40 to-zinc-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 sm:p-8 mb-3 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-6 text-center">
            Результаты тестового пака для Pawira: найдены новые победители, CPA снижен на 30% GEO США, КАНАДА
          </h3>
          <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.6),0_20px_60px_rgb(0,0,0,0.8)]">
            <img 
              src={"https://via.placeholder.com/800"} 
              alt="Campaign Results showing CPA reduction" 
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}