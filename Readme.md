# Movie Explorer

Preview - [Movie explorer](https://movie-explorer-oasw.vercel.app?_vercel_share=pRbHRIS4yxj6DIEQ4ZJiSmZyOkxthbD0)

## Prerequisites
- Node.js 18+
- TMDB API key — get it at [themoviedb.org](https://www.themoviedb.org/settings/api)

## Getting started
```bash
git clone https://github.com/EustasTheMonk/movie_explorer.git
cd movie_explorer
```

## BFF
```bash
cd bff
npm install
cp .env.example .env
npm run dev
```

Add your TMDB API key to `bff/.env`:
```
TMDB_API_KEY=your_key_here
```

## UI
```bash
cd ui
npm install
cp .env.example .env
npm run dev
```

Add BFF URL to `ui/.env`:
```
VITE_GRAPHQL_URL=http://localhost:4000/graphql
```
