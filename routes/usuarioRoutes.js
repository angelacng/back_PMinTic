const express= require("express");
const router= express.Router();
const usuarioController=require("../controllers/usuariosController");

router.post(
    "/",
    usuarioController.crearUsuario
);
/*router.get("/",(req,res)=>{
    res.json({msg:"desde router get json"});
});
router.post("/",(req,res)=>{
        res.json({msg:"desde router post json hacia postman"});
});
router.put("/",(req,res)=>{
    res.json({msg:"desde router put (para actualizar) json postman"});
});

router.delete("/",(req,res)=>{
    res.json({msg:"desde router delete (para borrar) json postman"});
});*/


//definir las rutas
module.exports=router;