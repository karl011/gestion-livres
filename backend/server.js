const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware pour utiliser JSON dans les requêtes
app.use(express.json());

// Middleware pour autoriser les requêtes depuis d'autres domaines (CORS)
app.use(cors());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB'));

// Routes pour les livres
const livresRouter = require('./routes/livres');
app.use('/livres', livresRouter);

// Autres routes à ajouter selon les besoins

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
