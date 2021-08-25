import * as yup from 'yup';

yup.setLocale({
    mixed:{
    required:'invalid!' 

    },
})

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    endereco: yup.string().required(),
    complemento: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    profissao: yup.string().required(),
    celular: yup.number().required().positive().integer().required(),
    cep: yup.string().required().min(8).required(),
    cpf: yup.number().required().positive().integer().min(11),
    birthday: yup.number().required().positive().integer(),
    email: yup.string().email().required(),
});