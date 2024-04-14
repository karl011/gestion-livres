import React, { useState } from "react";

export default function Utilisateur() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        adresse: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/utilisateurs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const newUser = await response.json();
                alert('Utilisateur créé avec succès !');
                console.log(newUser); // Affiche les données de l'utilisateur créé
                setFormData({
                    nom: "",
                    prenom: "",
                    email: "",
                    adresse: ""
                }); // Réinitialise le formulaire
            } else {
                const errorData = await response.json();
                alert('Erreur lors de la création de l\'utilisateur : ' + errorData.message);
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de la création de l\'utilisateur');
        }
    };

    return (
        <div className="container">
            <h1>Créer un utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required placeholder="Nom" autoComplete="nom"/><br/><br/>
                <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required placeholder="Prénoms" autoComplete="prenom"/><br/><br/>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="E-mail" autoComplete="email"/><br/><br/>
                <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} placeholder="Adresse" autoComplete="adresse"/><br/><br/><br/>
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
}
