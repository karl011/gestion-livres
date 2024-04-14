const express = require('express');
const router = express.Router();
const Livre = require('../models/Livre');

// Route pour récupérer tous les livres
router.get('/', async (req, res) => {
    try {
        const livres = await Livre.find();
        res.json(livres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouvel livre
router.post('/', async (req, res) => {
    const livre = new Livre({
        titre: req.body.nom,
        auteur: req.body.prenom,
        isbn: req.body.email,
        categorie: req.body.adresse,
        description: req.body.adresse,
        image: req.body.adresse
    });

    try {
        const nouveauLivre = await livre.save();
        res.status(201).json(nouveauLivre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes CRUD à ajouter selon les besoins

module.exports = router;
