const Sequelize = require('sequelize');
const sequelize = new Sequelize('nuitinfocesi_sauvetage', '251319_admin', '4,wXPeeB4iD#QpBk', {
    host: 'mysql-nuitinfocesi.alwaysdata.net',
    dialect: 'mysql'
  });

class Sauveteur{
    async findAll(){
        return sequelize.query("SELECT * From Sauveteur")
    }

    async findById(id){
        return sequelize.query("SELECT * From Sauveteur WHERE id = :id ",
        {
            replacements: { id: id }
        })
    }

    async findByName(input)
    {
        var names = input.split(' ')
        return sequelize.query("SELECT * From Sauveteur WHERE Nom LIKE ? OR Prenom LIKE ?",
        {
            replacements: names
        })
    }

    async getNbSaved(id){
        return sequelize.query("SELECT COUNT * FROM Sauver WHERE id = :id",
        {
            replacements: { id: id }
        })
    }

    async createSauveteur(nom,prenom,description,naissance,mort,id_utilisateur){
        sequelize.query("INSERT INTO Sauveteur (Nom,Prenom,Description,Naissance,Mort,Valide,DateCreation,ID_Utilisateur) VALUES (:nom , :prenom , :description , :naissance , :mort , 0 , "+ Date.now()+ " , :id_utilisateur",
        {
            replacements: {nom : nom, prenom : prenom ,description : description ,naissance : naissance ,mort : mort, id_utilisateur : id_utilisateur}
        })
    }

    async updateSauveteur(id,){

    }

    async deleteSauveteur(id){
        sequelize.query("DELETE * FROM Sauveteur WHERE id = :id",
        {
            replacements: { id: id }
        })
    }
}

class Sauve{

    async findAll(){
        return sequelize.query("SELECT * From Sauve")
    }

    async findById(id){
        return sequelize.query("SELECT * From Sauve WHERE id = :id ",
        {
            replacements: { id: id }
        })
    }

    async findByName(name){
        var names = input.split(' ')
        return sequelize.query("SELECT * From Sauve WHERE Nom LIKE ? OR Prenom LIKE ?",
        {
            replacements: names
        })
    }

    async createSauve(nom,prenom,id_utilisateur){
        sequelize.query("INSERT INTO Sauve (Nom,Prenom,Valide,DateCreation,ID_Utilisateur) VALUES (:nom , :prenom , 0 , "+ Date.now()+ " , :id_utilisateur",
        {
            replacements: {nom : nom, prenom : prenom , id_utilisateur : id_utilisateur}
        })
    }

    async deleteSauve(id){
        sequelize.query("DELETE * FROM Sauve WHERE id = :id",
        {
            replacements: { id: id }
        })
    }
}

class Evenement{

    async findAll(){
        return sequelize.query("SELECT * From Evenement")
    }

    async findById(id){
        return sequelize.query("SELECT * From Evenement WHERE id = :id ",
        {
            replacements: { id: id }
        })
    }

    async findByTitre(titre){
        var words = input.split(' ')
        return sequelize.query("SELECT * From Evenement WHERE Titre LIKE ?",
        {
            replacements: words
        })
    }

    async createEvenement(titre,description,dateEvenement,nbSauve, nbSauveur,id_Utilisateur){
        sequelize.query("INSERT INTO Evenement (Titre,Description,DateEvenement,NbSauve, NbSauveur, valide,dateCreation,ID_Utilisateur) VALUES (:titre , :description, :dateEvenement , :nbSauve , :nbSauveur,  0 , "+ Date.now()+ " , :id_utilisateur",
        {
            replacements: {titre : titre, description : description ,nbSauve : nbSauve, nbSauveur: nbSauveur, id_utilisateur : id_utilisateur}
        })
    }

    async deleteEvenement(id){
        sequelize.query("DELETE * FROM Evenement WHERE id = :id",
        {
            replacements: { id: id }
        })
    }
}

class Bateau{

    async findAll(){
        return sequelize.query("SELECT * From Bateau")
    }

    async findById(id){
        return sequelize.query("SELECT * From Bateau WHERE id = :id ",
        {
            replacements: { id: id }
        })
    }

    async findByName(name){
        var names = input.split(' ')
        return sequelize.query("SELECT * From Bateau WHERE Nom LIKE ? OR Prenom LIKE ?",
        {
            replacements: names
        })
    }

    async createSauve(nom,matricule,description,id_utilisateur){
        sequelize.query("INSERT INTO Bateau (Nom,matricule,description,Valide,DateCreation,ID_Utilisateur) VALUES (:nom , :matricule , :description, 0 , "+ Date.now()+ " , :id_utilisateur",
        {
            replacements: {nom : nom, matricule : matricule, description: description , id_utilisateur : id_utilisateur}
        })
    }

    async deleteSauve(id){
        sequelize.query("DELETE * FROM Bateau WHERE id = :id",
        {
            replacements: { id: id }
        })
    }
}

class Utilisateur{

    async findAll(){
        return sequelize.query("SELECT * From Utilisateur")
    }

    async findById(id){
        return sequelize.query("SELECT * From Utilisateur WHERE id = :id ",
        {
            replacements: { id: id }
        })
    }

    async login(login, mdp){

    }
}

module.exports = {Sauveteur, Sauve, Evenement, Utilisateur}