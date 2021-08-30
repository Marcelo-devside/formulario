import * as yup from 'yup';

yup.setLocale({
    mixed:{
    required:'campo obrigatório!' 

    },
})


export const userSchema = yup.object().shape({
    cpf: yup.string().min(7, "Digite o nome completo").required(),
    identidade: yup.string(),
    name: yup.string().required(),
    profissao: yup.string().required(),
    PossuiVeiculo: yup.string(),
    habilitacao: yup.string(),
    CargoPretendido: yup.string(),
    birthday: yup.string().required(),
    EstadoCivil: yup.string(),
    sexo: yup.string(),
    cep: yup.string().required(),
    endereco: yup.string().required(),
    complemento: yup.string(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    uf: yup.string().uppercase().required(),
    telefone: yup.string(),
    celular: yup.string().required(),
    email: yup.string().lowercase().email().required(),
});