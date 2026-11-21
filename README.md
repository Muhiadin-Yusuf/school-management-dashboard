# Component-by-component School Dashboard

## Run
```bash
npm install
npm run dev
```

## Structure
- `App.jsx`: global state and React Router routes.
- `data/initialData.js`: sample staff, class, student and finance records.
- `components/layout/`: Sidebar and Topbar, each with its own CSS.
- `components/common/`: reusable PageHeader, StatCard, StatusBadge and SearchBox components.
- `pages/`: Home, Classes, Students, Finance, Staff and Registration. Each page has its own JSX file.
- `pages/PageStyles.css`: shared page/form/table styles used by page components.
- `styles/global.css`: reset, global typography, shared panel/table styling.
- `styles/app-layout.css`: overall sidebar/main-content layout.

## How styling is organized
Each reusable visual component has a matching CSS file beside its JSX file. Page-specific layout lives in the page CSS file. Shared styles are kept in `global.css` and `PageStyles.css` to avoid repeating the same rules in every page.

## Important
This is a frontend learning project with in-memory React state and sample data. Refreshing the browser resets changes. Use localStorage or a backend/database for persistence.
