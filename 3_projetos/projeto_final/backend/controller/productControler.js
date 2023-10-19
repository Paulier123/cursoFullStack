// importar os paramentros definidos no arquivo db config

const dbConfig = require('../config/dbConfigs') 

//Instanciando o Sequelize

const {Sequelize, DataTypes} = require('sequelize') 
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect:dbConfig.DIALECT,
        operatorsAliases:false

    }

)