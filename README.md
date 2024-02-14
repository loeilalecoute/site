## Développement

Le projet est basé sur le méta framework [sveltekit](https://kit.svelte.dev/).

Le site est stylisé à l'aide de [tailwind](https://tailwindcss.com/).

### Installation

Avant de commencer le développement, assurez-vous d'avoir les outils suivants installés sur votre système :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (inclut npm, le gestionnaire de paquets Node.js)

**Cloner le dépôt :**

```bash
git clone https://github.com/loeilalecoute/site.git name-of-dir
```

**Naviguer dans le dossier :**

```bash
cd name-of-dir
```

**Installer les dépendances :**

```bash
npm install
```

**Télécharger les fichiers audios**
Depuis la racine du projet

```bash
sh scripts/downloadAudios.sh
```

**Démarer le serveur de développement**

```bash
npm run dev
```

**Construire un livrable**

```bash
npm run build
```

**Prévisualiser le livrable**

```bash
npm run preview
```

**Créer les images optimisées**

```bash
npm run preprocessImages
```
