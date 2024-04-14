const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/Utilisateur');

// Route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.find();
        res.json(utilisateurs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouvel utilisateur
router.post('/', async (req, res) => {
    const { nom, prenom, email, adresse } = req.body;

    try {
        const nouvelUtilisateur = new Utilisateur({
            nom,
            prenom,
            email,
            adresse,
        });

        const utilisateurCree = await nouvelUtilisateur.save();
        res.status(201).json(utilisateurCree);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes CRUD à ajouter selon les besoins

module.exports = router;
