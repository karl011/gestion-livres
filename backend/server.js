const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware pour utiliser JSON dans les requêtes
app.use(express.json());

// Middleware pour autoriser les requêtes depuis d'autres domaines (CORS)
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200
  };
app.use(cors(corsOptions));


// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB'));

// Routes pour les livres
const livresRouter = require('./routes/livres');
app.use('/livres', livresRouter);

// Routes pour les utilisateurs
const utilisateursRouter = require('./routes/utilisateurs');
app.use('/utilisateurs', utilisateursRouter);

// Autres routes à ajouter selon les besoins

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});