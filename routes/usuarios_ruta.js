const { Router } = require('express');
const {
		signin,
		signup, 
    edit,
    drop, 
    mostrar
        } = require('../controllers/usuarios_control');

const router = Router();

router.post('/usuarios/register', signup);

router.post('/usuarios/authenticate', signin);

router.put('/usuarios/:id', edit);

router.delete('/usuarios/:id', drop);

router.get('/usuarios/register', mostrar);

module.exports = router;

