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

// Autres routes CRUD à ajouter selon les besoins

module.exports = router;
