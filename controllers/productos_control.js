//Almacen
const { response, request } = require('express');
const Almacen = require('../models/Producto');



//Me muestra la base de datos

const mostrar = async(req = request, res = response) => {
    try{const  almacen = await Promise.all([
        Almacen.find()
    ]);

    res.json(almacen);
	console.log(almacen)
}  catch(error){
	console.log(error);
 }
}

//Me busca en la base de datos
const buscar = async(req = request, res = response) => {
    try{const { dato } = req.params;

    const  almacen = await Promise.all([
        Almacen.find({area : dato})
    ]);

    res.json(almacen);
	console.log(almacen);
}  catch(error){
	console.log(error);
 }
}

//Me crea en la base de datos
const crear = async(req = request, res = response) => {
try{
    const { area, marca, descripcion, precio } = req.body;

    if(area && marca && descripcion && precio) {
        const almacen = new Almacen({ area, marca, descripcion, precio });
        await almacen.save();

        res.json({
            almacen
        });
		console.log(almacen);
    }

    res.status(403).json({
        msj: "No estan completos los datos",
        formato: "{ area, marca, descripcion, precio }" 
    });

}  catch(error){
	console.log(error);
 }
}

//Modifico en la base de datos
const editar = async(req = request, res = response) => {
   try{ const { id } = req.params;
   
    const { ...datos } = req.body;

    const almacen = await Almacen.findByIdAndUpdate( id, datos );

    res.json(almacen);
	console.log(almacen);
	console.log(datos);

}  catch(error){
	console.log(error);
 }
}

//elimino en la base de datos
const borrar = async(req = request, res = response) => {
   try{ const { id } = req.params;

    
    const almacen = await Almacen.findByIdAndDelete( id );

    res.json(almacen);
}  catch(error){
	console.log(error);
 }
}

module.exports = {
    buscar,
    mostrar,
    editar,
    crear,
    borrar,
}
