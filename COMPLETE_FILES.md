# 📦 ПОЛНЫЕ ФАЙЛЫ ПРОЕКТА ADATTACK

Скопируйте каждый файл в соответствующую папку.

---

## 📄 1. `package.json`

```json
{
  "name": "adattack-landing",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
}
```

---

## 📄 2. `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

---

## 📄 3. `postcss.config.mjs`

```javascript
export default {}
```

---

## 📄 4. `.gitignore`

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
```

---

## 📄 5. `index.html`

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AdAttack - Креативы Meta Ads | $149 Creative Test Pack</title>
    <meta name="description" content="6 лет экспертизы Meta Ads. Решаем проблемы креативного разнообразия и скорости для eCommerce брендов. $149 Creative Test Pack." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 📄 6. `README.md`

```markdown
# 🔥 AdAttack - Meta Ads Creative Agency

Продающий лендинг для агентства креативов Meta Ads и Shopify.

## Технологии
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide Icons
- Supabase (Facebook Pixel Integration)

## Установка

\`\`\`bash
npm install
\`\`\`

## Разработка

\`\`\`bash
npm run dev
\`\`\`

## Продакшн

\`\`\`bash
npm run build
\`\`\`

## Фичи
- ✅ Темно-серая/красная цветовая схема
- ✅ Анимированные градиенты
- ✅ Портфолио с видео
- ✅ Facebook Pixel + Conversions API
- ✅ $149 Creative Test Pack оффер
- ✅ Контакты (WhatsApp, Telegram, LinkedIn)
- ✅ Полностью адаптивный дизайн

## Автор
AdAttack Creative Agency
```

---

## 📁 СТРУКТУРА `src/`

### 📄 7. `src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

### 📄 8. `src/styles/index.css`

```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
```

---

### 📄 9. `src/styles/fonts.css`

```css
/* Добавьте сюда ваши шрифты, если нужно */
```

---

### 📄 10. `src/styles/tailwind.css`

```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';
```

---

⚠️ **ФАЙЛ theme.css СЛИШКОМ БОЛЬШОЙ - он уже есть в вашем проекте**

---

Продолжить с компонентами React? (Hero, About, Portfolio, и т.д.)

Напишите **ДА** и я дам вам все компоненты!
