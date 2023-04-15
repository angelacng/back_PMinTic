const Usuario = require("../models/Usuarios");
const bcrypjs =require("bcryptjs");
exports.crearUsuario = async(req,res)=>{
    //console.log(req.body);
    const {password,email}=req.body;
    try{
        //revisar que sea un único usuario registrado
        let usuario =await Usuario.findOne({email});
        if (usuario){
            return res.status(404).json({msg:"El usuario ya existe"});
        }

    //crear el nuevo usuario
    usuario=new Usuario(req.body);
    //hash
    usuario.password = await bcrypjs.hash(password,10);

    //guardar en la base de datos
    const usuarioAlmacenado = await usuario.save();

    res.json(usuarioAlmacenado);
    }catch(error){
        console.log(error)
    }

}