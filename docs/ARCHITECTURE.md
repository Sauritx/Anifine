# Architecture

ANIFINE uses feature-based architecture. UI components are reusable primitives, while business logic lives in feature modules, repositories, and services.

## Structure

- `src/app`: reserved for app-level composition.
- `src/components`: reusable UI, navigation, and feedback components.
- `src/features`: domain-specific features such as auth and gameplay.
- `src/layouts`: shell navigation and responsive layout.
- `src/lib/firebase`: Firebase initialization.
- `src/repositories`: backend access abstractions.
- `src/data`: local question packs.
- `src/pages`: route-level composition only.

## Rules

- UI components do not access Firestore directly.
- Gameplay scoring and XP logic live in `features/gameplay/gameEngine.js`.
- Firebase access is abstracted behind repositories.
