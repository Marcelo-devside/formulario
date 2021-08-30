 require ("dotenv").config()

const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const swaggerUi = require ('swagger-ui-express')
const routes = require ('./routes')
const swaggerDocs =  require ('./swagger.json')
const connectToDatabase = require ('./database')


connectToDatabase()
const app = express ()
const port = 5000


app.use(cors())
app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/", routes)
app.listen(process.env.PORT || port, ()=> {console.log('rodando')})

