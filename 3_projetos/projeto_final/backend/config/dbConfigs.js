module.exports = {
        HOST: 'localhost',
        USER: 'postgres',
        PASSWORD:'123456',
        DB: 'node_sequlize_api_db', //ter certeza de nomear o baco no postregs com o mesmo nome
        DIALECT:'postgres',
             
        pool:{
                max: 5,
                min: 0,
                acquire:30000,
                idle: 10000 
        },
       
}  
