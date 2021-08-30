const Person = require ('../models/Person')
module.exports = {
    async register(req, res) {
        const {
            cpf,
            identidade,  
            nome, 
            profissao, 
            PossuiVeiculo, 
            habilitacao,
            CargoPretendido, 
            birthday,
            EstadoCivil, 
            sexo, 
            cep, 
            endereco, 
            complemento, 
            bairro,
            cidade,
            uf,
            telefone, 
            celular,
            email 
        } = req.body
        
        const newPerson = new Person()
            newPerson.cpf = cpf
            newPerson.identidade = identidade
            newPerson.nome = nome
            newPerson.profissao = profissao
            newPerson.PossuiVeiculo = PossuiVeiculo
            newPerson.habilitacao = habilitacao
            newPerson.CargoPretendido = CargoPretendido
            newPerson.birthday = birthday
            newPerson.EstadoCivil = EstadoCivil
            newPerson.sexo = sexo
            newPerson.cep = cep
            newPerson.endereco = endereco
            newPerson.complemento = complemento
            newPerson.bairro = bairro
            newPerson.cidade = cidade
            newPerson.uf = uf
            newPerson.telefone = telefone
            newPerson.celular = celular
            newPerson.email = email

            newPerson.save((err, savedPerson) =>{
                if (err) {
                    console.log(err)
                    return res.status(500).json({message:"Erro ao salvar no Banco de Dados!"})
                } esle (savedPerson)
                console.log(savedPerson)
                return res.status(200).json({massege:"OK enviado com sucesso!"})
                
            })
    }
}