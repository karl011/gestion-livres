import React from 'react';

function LivresListe() {
    const livres = [
        { id: 1, titre: 'Livre 1', auteur: 'Auteur 1', isbn: '1234567890', categorie: 'Fiction' },
        { id: 2, titre: 'Livre 2', auteur: 'Auteur 2', isbn: '0987654321', categorie: 'Non-fiction' }
    ];

    return (
        <div>
            <h2>Liste des Livres :</h2>
            <ul>
                {livres.map(livre => (
                    <li key={livre.id}>
                        {livre.titre} - {livre.auteur}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LivresListe;
