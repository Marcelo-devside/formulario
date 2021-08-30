const mongoose = require ('mongoose')
const PersonSchema = new mongoose.Schema({
                       cpf: {type:String, unique:true, required:true},
                       identidade: {type:String, unique:false, required:false}, 
                       nome: {type:String, unique:false, required:true}, 
                       profissao: {type:String, unique:false, required:true},
                       PossuiVeiculo: {type:String, unique:false, required:false},
                       habilitacao: {type:String, unique:false, required:false},
                       CargoPretendido: {type:String, unique:false, required:false},
                       birthday: {type:String, unique:false, required:true},
                       EstadoCivil: {type:String, unique:false, required:false},
                       sexo: {type:String, unique:false, required:false},
                       cep: {type:String, unique:false, required:true},
                       endereco: {type:String, unique:false, required:true},
                       complemento: {type:String, unique:false, required:true},
                       bairro: {type:String, unique:false, required:true},
                       cidade: {type:String, unique:false, required:true},
                       uf: {type:String, unique:false, required:true},
                       telefone: {type:String, unique:false, required:false},
                       celular: {type:String, unique:false, required:true},
                       email: {type:String, unique:true, required:true}
  }, { timestamps: true
})
module.exports = mongoose.model('Person', PersonSchema)