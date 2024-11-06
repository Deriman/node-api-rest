const connectionDB = require('./database/connection')
const express = require("express")
const cors = require("cors")

connectionDB()

const app = express()
const port = 3900

app.use(cors())
app.use(express.json())

app.get('/probando', (req, res) => {
    console.log("Ruta /probando")
    res.send("Ruta probando")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})