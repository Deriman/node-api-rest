const mongoose = require("mongoose")

const connection = async() => {

    try {
        await mongoose.connect("mongodb+srv://deriman:deriman18@node.hey8v.mongodb.net/myBlog")
        console.log("Conexión exitosa")
        
    } catch (error) {
        console.log(error)
        throw new Error("No hay conexión con la base de datos")
        
    }
}

module.exports = connection
