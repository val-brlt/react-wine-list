# Wine Regions App - React 18.3

Ce projet est une application simple en **React 18.3** qui permet de lister les vins en fonction de leur domaine et de leur type. L'application récupère les données via une API et affiche une liste interactive des vins disponibles par région.

Utilisation de l'api : https://sampleapis.com/api-list/wines

## Fonctionnalités

- Liste des types de vins.
- Affichage des domaines disponibles par type de vin.
- Recherche de vins par région.
- Interface utilisateur réactive et fluide.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- npm (ou yarn) pour la gestion des packages.

## Installation

1. Clonez le dépôt sur votre machine locale :

```bash
   git clone https://github.com/val-brlt/react-wine-list.git
```
2. Accédez au répertoire du projet :
```bash
    cd react-wine-list
```
3. Installez les dépendances :
```bash
   npm install
```

# Démarrage
Pour démarrer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

## Structure du projet

- `src/`
  - `components/`: Composants React pour l'interface utilisateur.
  - `WineApp.jsx`: Composant principal qui orchestre l'application.
  - `main.jsx`: Point d'entrée principal de l'application React.

