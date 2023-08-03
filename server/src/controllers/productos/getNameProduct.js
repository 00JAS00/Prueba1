const {Producto}=require("../../db")
const {Op}=require("sequelize") 
const getByNameProductValidation = require("../../helpers/producto/getNameProductValidation")

const getByNameProduct = async (name) => {
    getByNameProductValidation(name)
    const data=await Producto.find({
        where:{nombre:{[Op.ilike]: `%${name}%`}}
    })
    if (data.length === 0) throw new Error(`No se encontraron productos para mostrar.`);
    const filter=data.filter(country=>country.nombre).toLowerCase().startsWith(name.toLowerCase());

    return [...filter];
    

}


module.exports = getByNameProduct