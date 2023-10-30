
// Aqui criamos o modelo para a construçao do produto 

const { Sequelize } = require(".")

module.exports = (sequelize,DataTypes) => {

    const Product = sequelize.define("product", {      

        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.DECIMAL(10,2),         
            allowNull: false            
        },
        data:{
            type: DataTypes.DATE 
            
        },
       
    })
return Product
}




