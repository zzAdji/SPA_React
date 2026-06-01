# TaskFlow

TaskFlow est une **Single Page Application (SPA)** de gestion et de suivi des tâches, développée avec **React** et **Vite** dans le cadre d’un TP d’ingénierie logicielle.

L’application permet d’ajouter des tâches, de suivre leur avancement, de persister les données localement (`localStorage`) et de naviguer entre les vues sans rechargement de page grâce à **React Router**.

---

## Prérequis

Avant de commencer, assurez-vous d’avoir installé sur votre machine :

- **Node.js** (version 18 ou supérieure recommandée) — [https://nodejs.org](https://nodejs.org)
- **npm** (fourni avec Node.js)

Pour vérifier que Node.js et npm sont disponibles, exécutez dans un terminal :

```bash
node -v
npm -v
```

---

## Installation des dépendances

1. **Cloner ou ouvrir** le dépôt du projet, puis se placer à la **racine** du projet (le dossier contenant le fichier `package.json`).

   Exemple sous Windows :

   ```bash
   cd C:\Users\HP\Desktop\Enspm\SPA_React
   ```

2. **Installer toutes les dépendances** listées dans `package.json` :

   ```bash
   npm install
   ```

   Cette commande télécharge et installe les paquets nécessaires (React, Vite, React Router, etc.) dans le dossier `node_modules`. Elle ne doit être exécutée **qu’une fois** après le clonage du projet, ou à chaque mise à jour des dépendances.

3. **Vérifier** que l’installation s’est terminée sans erreur. En cas de succès, le dossier `node_modules` est créé à la racine du projet.

---

## Lancement du serveur de développement local

Une fois les dépendances installées :

1. Depuis la **racine du projet**, lancer le serveur de développement Vite :

   ```bash
   npm run dev
   ```

2. Le terminal affiche l’URL locale du serveur, par exemple :

   ```
   VITE v8.x.x  ready in xxx ms

   ➜  Local:   http://localhost:5173/
   ```

3. **Ouvrir cette URL** dans votre navigateur (souvent `http://localhost:5173/`).

4. L’application se recharge automatiquement lorsque vous modifiez le code (**Hot Module Replacement**).

5. Pour **arrêter** le serveur, appuyer sur `Ctrl + C` dans le terminal.

---

## Fonctionnalités principales

- Tableau de bord avec liste des tâches (`Dashboard`)
- Ajout de tâches via formulaire contrôlé (`TaskForm`)
- Cartes de tâches cliquables (`TaskCard`) avec navigation SPA
- Page de détail dynamique (`/task/:id`) — `TaskDetail`
- Persistance locale sous la clé `taskflow_data` dans `localStorage`

---

## Structure du projet

```
SPA_React/
├── public/
├── src/
│   ├── components/     # TaskCard, TaskForm
│   ├── pages/          # Dashboard, TaskDetail
│   ├── utils/          # taskStorage (localStorage)
│   ├── App.jsx         # Routage et état global
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Routes de l’application

| URL            | Page        |
| -------------- | ----------- |
| `/`            | Dashboard   |
| `/task/:id`    | TaskDetail  |

---

## Technologies utilisées

- React 19
- Vite 8
- React Router DOM 7
- CSS Modules
