const { Model, DataTypes }= require("sequelize");

class Movie extends model{
    static init(connection){
        super.init(
            {
                title:DataTypes.STRING,
                poster:DataTypes.STRING,
                overview:DataTypes.TEXT,
            },
            {
                sequelize:connection,
                schema:"public",
                table:"movies",
                createdAt: "criadoEm",
                updatedAt:"atualizadoEm",
                timesStamps:true,
                underscored: false,
            }
        )
    }
}
module.exports = Movie;