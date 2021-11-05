const { Router } = require('express');

const { buscar,
        mostrar,
        editar, 
        crear, 
        borrar } = require('../controllers/productos_control');

        

const router = Router();

router.get('/almacen', mostrar);

router.get('/almacen/busqueda/:dato', buscar);

router.post('/almacen', crear);

router.put('/almacen/:id', editar);

router.delete('/almacen/:id', borrar);


module.exports = router;

