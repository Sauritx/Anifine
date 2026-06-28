# ANIFINE

ANIFINE is a production-oriented anime character recognition platform built as a competitive learning experience. Version 0.1 includes authentication, profile stats, local question-based gameplay, and a leaderboard-ready Firestore integration.

## Tech Stack

- React with Vite
- JavaScript
- Tailwind CSS
- React Router
- Firebase Authentication
- Firestore Database
- Lucide React icons
- Framer Motion dependency included for future selective motion enhancements

## Getting Started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal.

## Firebase Setup

Create a `.env` file in the project root and replace the placeholder values with your Firebase web app configuration:

```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Enable Email/Password Authentication in Firebase Authentication and create a `users` collection in Firestore. Registered users are stored with this profile schema:

- uid
- username
- email
- points
- level
- xp
- gamesPlayed
- accuracy
- currentStreak
- highestStreak
- createdAt

## Architecture

```text
src/
  assets/       Static assets
  components/   Reusable UI primitives and layout
  context/      Global React context providers
  data/         Local MVP gameplay question data
  firebase/     Firebase initialization and exports
  hooks/        Shared hooks
  pages/        Route-level screens
  services/     API and Firestore access functions
  styles/       Global styles and Tailwind imports
  utils/        Pure helpers for gameplay and calculations
```

## MVP Features

- Register, login, and logout with Firebase Authentication
- Firestore user profile creation and leaderboard reads
- Premium glassmorphism dashboard UI
- Home dashboard with level, XP, points, and quick actions
- Play page with difficulty selection, progressive hints, answer validation, and points calculation
- Leaderboard sorted by points with current-player highlighting
- Profile statistics page
- Responsive navigation
- 404 page

## Question Data

Gameplay questions are stored in `src/data/questions.json`. Add new records with an `id`, `difficulty`, `answer`, optional `aliases`, base `points`, and ordered `hints`.

## Design Notes

ANIFINE uses a restrained gaming dashboard style with a dark base, red primary actions, amber accents, glass cards, soft borders, and smooth hover transitions. Icons are provided exclusively by Lucide React.
