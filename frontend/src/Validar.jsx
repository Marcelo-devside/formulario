import * as yup from 'yup';

yup.setLocale({
    mixed:{
    required:'Entrada de dados em branco ou Válida'
    },
})

export const userSchema = yup.object().shape({
    name: yup.string().required().min(5).typeError('Nome Invalido'),
    logradouro: yup.string().required(),
    complemento: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    profissao: yup.string().required(),
    celular: yup.number().required().positive().integer().required(),
    cep: yup.number().required().positive().integer().min(8).max(8).required(),
    cpf: yup.number().required().positive().integer().required(),
    birthday: yup.number().required().positive().integer().required(),
    email: yup.string().email().required(),
});