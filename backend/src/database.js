const mongoose = require ('mongoose')

 function connectToDatabase() { 
     mongoose.connect(
         process.env.DATABASE_URL,{
         useUniFiedTopology: true,
         useNewUrlParser: true,
     }
    )
const db = mongoose.connection;
db.on("error",(error) => console.error('Falha na conecção com o Banco de Dados status 404', error))
db.once("open", () => console.log('Conectado ao banco de dados status: 200'))
 }

 module.exports = connectToDatabase