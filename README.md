# Munni & Sonali’s Festive Faral

A mobile-first, Marathi-first Diwali faral storefront built with React, Vite, Tailwind CSS, and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run lint` to check the code and `npm run build` to create the production site in `dist/`.

## Deploy to Vercel

The project is configured for Vercel in `vercel.json`:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback: requests are served from `index.html`

To deploy, import `https://github.com/ShubhamAdelkar/ms-faral` in Vercel, keep the detected project settings, and deploy. No environment variables are required for the current site. The WhatsApp order link opens a prefilled message and does not use the WhatsApp Business API.

## Product photos and details

Supplied photos and artwork are in `public/assets/`, so Vite includes them in production builds. Product names, descriptions, categories, prices, and image paths are in the `products` array in `src/App.jsx`; customer review photos and Marathi/English captions are in the `reviews` array. Marathi is the default language; use the header toggle to switch to English.
