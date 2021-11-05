
const Usuario = require( "../models/Usuario");

//Registro
const signup =  (req = request, res = response)=>{
	const {username, password} = req.body;
	const usuario = new Usuario({username, password});
  usuario.save(err => {
		if(err){
			res.status(500).send('error al registrar la usuario');
		}else{
			res.status(200).send('usuario registrado');
		}
	});

}

//Login
const signin = (req = request, res = response) =>{
	const {username, password} = req.body;
	
	Usuario.findOne({username}, (err, usuario) =>{

		if(err){
			res.status(500).send('error al autenticar el usuario');
		}else if(!usuario){
			
			res.status(200).send('El usuario no existe');
		}else{
			usuario.isCorrectPassword(password, (err, result) =>{
				if(err){
					res.status(500).send('error al autenticar el usuario');
				}else if(result){
					res.status(200).send('usuario autenticado, link: http://localhost:3000/almacen');
				}else{
					res.status(500).send('usuario y contraseña incorrecta');
				}
                   
				});
			}
		});
	};

  //Editar
  const edit = async(req = request, res = response) => {
    try{
    const { id } = req.params;
  
    const { username, password } = req.body;
  
    console.log(req.body);
  
    const usuario = await Usuario.findByIdAndUpdate( id , {username, password} );
  
    res.json(usuario);
  
  }  catch(error){
    console.log(error);
   }
  }
  
  //Borrar
  const drop = async(req = request, res = response) => {
    try{
    const { id } = req.params;
  
    const usuario = await Usuario.findByIdAndDelete( id );
  console.log(usuario)
    res.json(usuario);
  }  catch(error){
    console.log(error);
   }
  }

  //Mostrar
  const mostrar = async(req = request, res = response) => {
    try{const  usuario = await Promise.all([
        Usuario.find()
    ]);

    res.json(usuario);
	console.log(usuario)
}  catch(error){
	console.log(error);
 }
}

  module.exports = {signup, signin, edit, drop, mostrar};





