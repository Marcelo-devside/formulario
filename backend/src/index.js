require ("dotenv").config()

const express = require ('express')
const mongoose = require ('mongoose')
const connectToDatabase = require ('./database')


connectToDatabase()
const server = express ()
const port = 5000


server.listen(port, ()=> {console.log('rodando')})
server.get("/", (req, res) => {
    return res.send('Servidor rodando bem...')
})
