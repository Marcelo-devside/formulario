import * as yup from 'yup';

yup.setLocale({
    mixed:{
    required:'invalid!' 

    },
})

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    endereco: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    profissao: yup.string().required(),
    celular: yup.string().required(),
    cep: yup.string().required(),
    cpf: yup.string().required(),
    birthday: yup.string().required(),
    email: yup.string().email().required(),
});