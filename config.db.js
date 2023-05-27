//Esta linea me permite leer las variables de entorno
const dotenv = require('dotenv');

const mysql = require('mysql');
let connection;

try{
    connection = mysql.createConnection({
        host : process.env.DBHOST,
        user : process.env.DBUSER,
        password : process.env.DBPASSWORD,
        database : process.env.DBNAME,

    }
        

    )

}catch(error){
    console.log("Error al conectar");
}

module.exports = {connection};