const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const{connection} = require('../config.db.js');
//const { request, response } = require("..");

const consultaEstudiantes = (request, response)=>{
    connection.query("SELECT * FROM estudiantes",(error, result)=>{
            if(error)
            throw error;
            response.status(200).json(result);
        }
    );
};

app.route("/estudiantes")
.get(consultaEstudiantes);

module.exports = app;