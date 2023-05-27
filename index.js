const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require('./routes/estudiantes'));

app.listen(process.env.PORT || 3300, ()=>{
    console.log("El servidor corriendo en el puerto 3300");
})

app.get('/', function(req, res){
    res.send('Hola mundo node js')
});

module.exports = app;