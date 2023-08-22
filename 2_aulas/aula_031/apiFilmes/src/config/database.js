let ambiente = undefined;

switch (process.env.PUBLISH) {
    case "HML":
        ambiente = configurarHML();        
        break;
    case "PROD":
        ambiente = configurarPROD();        
        break; 

    default:
        case "LOCAL":
            ambiente = configurarPROD();        
            break;
}

function configurarHML(){
    return {
        dialet: process.env.HML_DIALECT,
        host: process.env.HML_HOST,
        port: process.ebv.HML_PORT,
        username: process.env.HML_USER_NAME,
        password: process.env.HML_PASSWORD,
        database: process.env.HML_DATABASE,
        define: {
            timestamp: true,
            undercore:true,
        }
    }

}
function configurarPROD(){
    return {
        dialet: process.env.PROD_DIALECT,
        host: process.env.PROD_HOST,
        port: process.ebv.PROD_PORT,
        username: process.env.PROD_USER_NAME,
        password: process.env.PROD_PASSWORD,
        database: process.env.PROD_DATABASE,
        define: {
            timestamp: true,
            undercore:true,
        }
    }

}
function configurarLOCAL(){
    return {
        dialet: process.env.LOCAL_DIALECT,
        host: process.env.LOCAL_HOST,
        port: process.ebv.LOCAL_PORT,
        username: process.env.LOCAL_USER_NAME,
        password: process.env.LOCAL_PASSWORD,
        database: process.env.LOCAL_DATABASE,
        define: {
            timestamp: true,
            undercore:true,
        }
    }

}