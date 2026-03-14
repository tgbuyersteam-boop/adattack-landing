import { Target, ShoppingBag, Palette, BarChart3, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Meta Ads Кампании',
    description: 'Таргетированная реклама в Facebook и Instagram с максимальным ROAS. Полный цикл от аналитики до масштабирования.',
    features: ['Настройка пикселей', 'A/B тестирование', 'Ретаргетинг']
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Магазины',
    description: 'Разработка высококонверсионных e-commerce магазинов на Shopify. От концепции до первой продажи.',
    features: ['Дизайн под ключ', 'SEO оптимизация', 'Интеграция платежей']
  },
  {
    icon: Palette,
    title: 'Креативы & Дизайн',
    description: 'Разработка продающих креативов для рекламы. Фото, видео, графика — всё, что остановит скролл.',
    features: ['UGC контент', 'Видеопродукция', 'Статичные баннеры']
  },
  {
    icon: BarChart3,
    title: 'Аналитика & Отчеты',
    description: 'Детальная аналитика эффективности кампаний. Прозрачные метрики и регулярные отчеты.',
    features: ['Дашборды в реальном времени', 'Еженедельные отчеты', 'ROI анализ']
  },
  {
    icon: Zap,
    title: 'Оптимизация конверсий',
    description: 'Повышаем конверсию ваших воронок через CRO и UX аудиты. Каждый процент считается.',
    features: ['Тепловые карты', 'Воронки продаж', 'Сплит-тесты']
  },
  {
    icon: Users,
    title: 'SMM & Контент',
    description: 'Управление социальными сетями и создание вирусного контента для вашей аудитории.',
    features: ['Контент-план', 'Комьюнити менеджмент', 'Сторителлинг']
  }
];

export function Services() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Комплексный подход к росту вашего бизнеса в digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-red-600 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>

                  <h3 className="text-2xl text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zinc-500 text-sm">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}