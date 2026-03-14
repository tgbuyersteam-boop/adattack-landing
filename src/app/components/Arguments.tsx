import { CheckCircle2, Clock, TrendingUp, Shield, Headphones, Award } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Проверенная методология',
    description: 'Используем только протестированные стратегии, которые показали результаты на сотнях кампаний.'
  },
  {
    icon: Clock,
    title: 'Быстрый запуск',
    description: 'Запускаем первые кампании уже через 3-5 дней после брифа. Время = деньги.'
  },
  {
    icon: TrendingUp,
    title: 'Масштабируемость',
    description: 'Помогаем не только запустить, но и масштабировать успешные кампании без потери эффективности.'
  },
  {
    icon: Shield,
    title: 'Прозрачность',
    description: 'Полный доступ к рекламным кабинетам и аналитике. Без скрытых платежей и серых схем.'
  },
  {
    icon: Headphones,
    title: '24/7 Поддержка',
    description: 'Персональный менеджер всегда на связи. Решаем проблемы до того, как они станут критичными.'
  },
  {
    icon: Award,
    title: 'Гарантии результата',
    description: 'Работаем до достижения KPI. Если не выполнили план — продолжаем работу бесплатно.'
  }
];

export function Arguments() {
  return (
    <section className="py-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Мы не просто подрядчики — мы партнеры в вашем росте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((arg, index) => {
            const Icon = arg.icon;
            return (
              <div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700/50 hover:border-red-600/50 transition-all duration-300 hover:bg-zinc-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">
                      {arg.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {arg.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600/10 to-red-700/10 border border-red-600/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl text-white mb-4">
                Готовы к росту?
              </h3>
              <p className="text-zinc-300 text-lg">
                Получите бесплатный аудит ваших текущих кампаний и персональную стратегию масштабирования.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Анализ конкурентов в вашей нише</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Аудит текущих рекламных кампаний</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Прогноз ROI и план действий</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}