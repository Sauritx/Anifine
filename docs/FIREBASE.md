# Firebase

ANIFINE uses Firebase Authentication and Cloud Firestore.

## Authentication

Enable Email/Password sign-in in Firebase Authentication.

## Firestore Collections

### `users/{uid}`

```json
{
  "uid": "string",
  "username": "string",
  "email": "string",
  "points": 0,
  "xp": 0,
  "level": 1,
  "gamesPlayed": 0,
  "accuracy": 0,
  "currentStreak": 0,
  "highestStreak": 0,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

Leaderboard data is queried from `users` ordered by `points` descending.
