
// Aqui criamos o modelo para a construçao do produto 

module.exports = (sequelize,DataTypes)   => {
    const Product = sequelize.define("product",{
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.INTEGER
        },
        description:{
            type: DataTypes.TEXT
        }
    })
return Product
}

