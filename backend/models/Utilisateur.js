const mongoose = require('mongoose');

const UtilisateurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    adresse: { type: String },
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
