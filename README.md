# React + Vite + Redux

Redux Todo App ✅

A modern Todo application built with React and Redux Toolkit, featuring a sleek dark theme and full CRUD functionality.

🔧 Features

Add new todos

Edit existing todos

Mark todos as complete/incomplete (toggle)

Delete todos

Responsive and modern dark-themed UI

🚀 Demo

https://basant1414.github.io/Redux-Todoapp/

🛠️ Installation
git clone https://github.com/basant1414/Redux-Todoapp.git
cd Redux-Todoapp
npm install
npm run dev


Open http://localhost:5173
 in your browser to see the app running locally.

📦 Build for Production
npm run build
npm run deploy


Make sure your package.json and vite.config.js have the correct homepage and base:

"homepage": "https://basant1414.github.io/Redux-Todoapp"

// vite.config.js
export default defineConfig({
  base: '/Redux-Todoapp/',
  plugins: [react()]
});

🗂️ Folder Structure
Redux-Todoapp/
├─ public/
├─ src/
│  ├─ features/
│  │  └─ todo/
│  │     ├─ todoSlice.js
│  │     └─ ...
│  ├─ components/
│  │  ├─ AddTodo.jsx
│  │  └─ Todos.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
