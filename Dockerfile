FROM node:20.10

# Créer et utiliser le dossier de travail
WORKDIR /app/suas-api

# Copier uniquement les fichiers nécessaires à l'installation
COPY package*.json ./

# Installer les dépendances
RUN npm install --force

# Copier le reste de l'application
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Exposer le port
EXPOSE 8080

# Lancer l'application
CMD ["node", "app.js"]
