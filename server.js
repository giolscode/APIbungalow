const express = require('express');
const bdd = require('./bdd'); 

const app = express();
const PORT = 700;

app.listen(PORT, () => { console.log('Connexion au serveur fonctionelle avec le port :',PORT)});