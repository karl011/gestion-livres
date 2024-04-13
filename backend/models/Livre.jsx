const mongoose = require('mongoose');

const LivreSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    isbn: { type: String, required: true },
    categorie: { type: String },
    description: { type: String },
    image: { type: String }
});

module.exports = mongoose.model('Livre', LivreSchema);
