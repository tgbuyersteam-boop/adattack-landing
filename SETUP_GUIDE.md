# 🚀 AdAttack Landing - Полная инструкция по установке

## 📋 Структура проекта

```
adattack-landing/
├── package.json
├── vite.config.ts
├── postcss.config.mjs
├── index.html
├── .gitignore
├── README.md
├── src/
│   ├── main.tsx
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Portfolio.tsx
│   │       ├── MiniPortfolio.tsx
│   │       ├── Offer.tsx
│   │       ├── OfferHero.tsx
│   │       ├── Footer.tsx
│   │       └── FacebookPixel.tsx
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
└── public/
    └── (ваше фото из Милана)
```

## 🔧 Установка локально

### 1. Создайте папку проекта
```bash
mkdir adattack-landing
cd adattack-landing
```

### 2. Скопируйте все файлы из этого гайда

### 3. Установите зависимости
```bash
npm install
```

### 4. Запустите dev сервер
```bash
npm run dev
```

### 5. Соберите для продакшена
```bash
npm run build
```

---

## 🌐 Деплой на Vercel

### Шаг 1: Загрузка на GitHub

```bash
# Инициализация git
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: AdAttack landing"

# Добавление удаленного репозитория (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/adattack-landing.git

# Пуш в GitHub
git branch -M main
git push -u origin main
```

### Шаг 2: Подключение Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите **"New Project"**
3. Выберите ваш GitHub репозиторий `adattack-landing`
4. Vercel автоматически определит настройки (Vite)
5. Нажмите **"Deploy"**

### Шаг 3: Настройка Environment Variables (для Supabase)

В настройках проекта на Vercel → **Settings** → **Environment Variables**:

```
VITE_SUPABASE_URL=https://ielttxrutlcrghlpfmrv.supabase.co
VITE_FB_PIXEL_ID=ваш_facebook_pixel_id
```

---

## 📱 Замена фотографии

Ваше фото из Милана находится в коде как:
```tsx
import personalPhoto from 'figma:asset/25b364edb648eed109bf834cfc52a654e3714cbe.png';
```

Для деплоя замените на:
```tsx
import personalPhoto from '/path/to/your/photo.jpg';
```

И положите фото в папку `public/`

---

## 🔗 Настройка Supabase

### 1. Зайдите в Supabase Dashboard
https://supabase.com/dashboard/project/ielttxrutlcrghlpfmrv

### 2. Скопируйте API ключи
Settings → API → Project URL и anon key

### 3. Добавьте в Vercel Environment Variables

---

## 🎯 Контакты в Footer

Не забудьте добавить ваши реальные ссылки:
- WhatsApp: `https://wa.me/ВАШ_НОМЕР`
- Telegram: `https://t.me/ВАШ_USERNAME`
- LinkedIn: `https://linkedin.com/in/ВАШ_ПРОФИЛЬ`

---

## ✅ Чеклист перед деплоем

- [ ] Все файлы скопированы
- [ ] `npm install` выполнен успешно
- [ ] `npm run build` работает без ошибок
- [ ] Фото заменено на реальное
- [ ] Ссылки на соцсети обновлены
- [ ] Facebook Pixel ID добавлен
- [ ] Supabase переменные настроены
- [ ] Проект загружен на GitHub
- [ ] Vercel деплой выполнен

---

## 🆘 Troubleshooting

### Ошибка "figma:asset not found"
Замените все импорты `figma:asset/*` на реальные пути к изображениям в `public/`

### Ошибка сборки Vite
Проверьте версии пакетов в `package.json`

### Supabase не работает
Проверьте environment variables в Vercel

---

Готово! 🎉
