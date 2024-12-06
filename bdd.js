const mysql = require("mysql2");

//Création de la connection à la BDD
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'bungalow'
});

//Test
connection.connect((err) => {
    if(err){
        console.error('Erreu de connexion, erreur : ', err)
        return 1 ; 
    }
    console.log("Connexion réussi avec succès")
});


module.exports = connection; //Pour l'exporter dans d'autres fichiers

