const express= require("express");
const router= express.Router();
const authMidd= require("../middleware/authMidd");
const productosController= require("../controllers/productosController");


router.get("/home",productosController.obtenerProductoHome);
router.get("/:id",authMidd,productosController.obtenerProductoCat);
router.get("/producto/:id",authMidd,productosController.obtenerProductoId);
router.post("/",authMidd,productosController.crearProducto);
router.put("/:id",authMidd,productosController.actualizarProducto);
router.delete("/:id",authMidd,productosController.borrarProducto);

//definir las rutas
module.exports=router;