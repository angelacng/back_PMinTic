const Productos = require("../models/Productos");


exports.obtenerProductoHome = async (req, res) => {
    try {
        const producto = await Productos.find();
        res.json({ producto })
    } catch (error) {
        console.log(error);
    }
};

exports.obtenerProductoCat = async (req, res) => {
    const { id } = req.params
    try {
        const producto = await Productos.find().where("categoriaId").equals(id);
        res.json(producto);

    } catch (error) {
        console.log(error);
    }

};

/**exports.obtenerProductoId = async (req, res) => {
    const{id}=req.params;
    try{
        const producto =await Productos.findById(id);
        res.json({producto});
    }catch(error){
        console.log(error);
    }
};**/

exports.crearProducto = async (req, res) => {
    const producto = new Productos(req.body);
    //  const categoria =await Categorias.findById(producto.categoriaId);
    try {

        //       if(!categoria){
        //        return res.status(404).json({msg:"Categoría no encontrada"});
        //  }else{
        producto.save();
        res.json(producto);
        //   }

    } catch (error) {
        console.log(error);
    }
};

exports.actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await Productos.findById(id);
    try {

        if (!producto) {
            return res.status(404).json({ msg: "producto no encontrado" });
        }
        producto.nombre = req.body.nombre || producto.nombre;
        producto.descripcion = req.body.descripcion || producto.descripcion;
        producto.stock = req.body.stock || producto.stock;
        producto.precio = req.body.precio || producto.precio;
        producto.imagen = req.body.imagen || producto.imagen;
        producto.categoriaId = req.body.categoriaId || producto.categoriaId;
        producto.save();
        res.json({ producto });
    } catch (error) {
        console.log(error);
    }
};

exports.borrarProducto = async (req, res) => {
    try {
        await Productos.deleteOne({ _id: req.params.id });
        res.json({ msg: "producto eliminado" });
    } catch (error) {
        console.log(error);
    }
};