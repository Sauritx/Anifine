# ANIFINE

ANIFINE is a premium anime character recognition platform built with React, Vite, Firebase, React Router, Lucide React, Framer Motion, and Tailwind CSS.

## Features

- Cinematic session splash screen
- Firebase Authentication registration, login, and logout
- Firestore-backed player profiles
- Local JSON question packs by difficulty
- Reusable gameplay engine for scoring, XP, levels, streaks, and accuracy
- Leaderboard repository sorted by points
- Responsive glassmorphism gaming dashboard

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Create `.env.local` with:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Scripts

- `npm run dev` starts Vite.
- `npm run build` creates a production build.
- `npm run preview` previews the production build.
