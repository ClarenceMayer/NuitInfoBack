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
        console.log(names)
        return sequelize.query("SELECT * From Sauveteur WHERE Nom LIKE ? OR Prenom LIKE ?",
        {
            replacements: names
        })
    }

    async getNbSaved(){

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
}

module.exports = {Sauveteur, Sauve, Evenement}