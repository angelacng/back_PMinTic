const jwt = require("jsonwebtoken");

module.exports =function(req,res,next){
    //leer el token del header o desde postman
    const token = req.header("x-auth-token");
    //console.log(token);

    //revisar si hay un token
    if(!token){
        return res.status(400).json({msg:"no hay token"});
    }
    //validar token
    try{
        const cifrado = jwt.verify(token,process.env.SECRETA)
        req.usuario = cifrado.usuario;
       // console.log(cifrado.usuario);
       next();

    }catch(error){
        return res.status(400).json({msg:"Token no válido"});
    }
}