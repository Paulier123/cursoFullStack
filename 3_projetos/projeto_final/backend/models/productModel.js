
// Aqui criamos o modelo para a construçao do produto 

module.exports = (sequelize,DataTypes) => {

    const Product = sequelize.define("product", {
        descricao: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        valor: {
            type: DataTypes.INTEGER
            
        },
        data:{
            type: DataTypes.DATE
        },

    })
return Product 
}



