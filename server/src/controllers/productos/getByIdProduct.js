const {Producto}=require("../../db")

const getByIdProduct=async(id)=>{
    const data=await Productos.findByPk(id);
    if(!id)throw new Error (`El id ${id} no es válido para mostrar el producto.`)
    return data;
}