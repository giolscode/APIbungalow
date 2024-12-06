const express = require('express');
const bodyParser = require('body-parser');
const bdd = require('./bdd');

const app = express();
const PORT = 700;

// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Route pour la réservation
app.post('/reservation', (req, res) => {

    const { name, lastname, mail, adult, child, suit, arv_date, dep_date } = req.body;
    console.log('Données reçues :', { name, lastname, mail, adult, child, suit, arv_date, dep_date });
    const sql = `INSERT INTO reservation (prenom, nom, mail, nb_adulte, nb_enfant, suite, date_arv, date_dep) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    bdd.query(sql,[name, lastname, mail, adult, child, suit, arv_date, dep_date],(err, result) => {

        if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données :', err);
            return res.status(500).send('Une erreur est survenue lors de l\'enregistrement de votre réservation.');
        }

        res.send(`
            <h1>Merci ${name} ${lastname} !</h1>
            <p>Votre réservation pour une ${suit} a bien été enregistrée.</p>
            <p>Dates : du ${arv_date} au ${dep_date}.</p>
            <p>Nous vous contacterons bientôt à l'adresse email ${mail}.</p>
        `);
    });
});

// Lancer le serveur
app.listen(PORT, () => { 
    console.log('Connexion au serveur fonctionnelle avec le port :', PORT);
});