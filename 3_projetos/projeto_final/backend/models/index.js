// importar os paramentros definidos no arquivo db config

const dbConfig = require('../config/dbConfigs.js') 

//Instanciando o Sequelize

const {Sequelize, DataTypes} = require('sequelize') 
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect:dbConfig.DIALECT,
        // operatorsAliases:false, ficou ultrapassado
        
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('...conectando')
}).catch((err)=>{
    console.log(err +'Error')
})
const db = {} // iniciar o db vazio

db.Sequelize = Sequelize // construtor do sequlize
db.sequelize = sequelize //instancia que criamos acima

db.products = require('./productModel.js')(sequelize, DataTypes) // products é o nome da tabela do banco de dados, ela vai conter tudo que especificamos em cadastroControler e vai sequlizer ela baseada em seu DataTypes

db.sequelize.sync({force: false}) // importante porque se for true vai perder as informações da tabela
.then(()=>{
    console.log('re-sync completo!')
})

module.exports = db