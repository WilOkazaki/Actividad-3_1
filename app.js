//servidor
const express = require('express')
const app = express()

const {connect_database} = require('./database')
//const Usuario = require('./models/Usuario')
const passport = require("passport");
const bcrypt = require("bcryptjs");

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Rutas
const productos = require('./routes/productos_ruta')
app.use(productos)
const usuarios = require('./routes/usuarios_ruta');
app.use(usuarios)

//const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//Ruta de prueba
app.get('/', (req, res) => {
	res.send('hola mundo')
})

//Coneccion
app.listen(3000, () => {
	console.log("server ON en http://localhost:3000")
})

