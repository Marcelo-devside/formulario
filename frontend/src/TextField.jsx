import React, { useCallback } from 'react'
import {ErrorMessage, useField} from 'formik'
import {cep} from "./mascara/Cep"
import {identidade} from "./mascara/Rg"
import {celular} from "./mascara/Celular"
import {telefone} from "./mascara/Telefone"
import {cpf} from "./mascara/Cpf"
import {email} from "./mascara/Email"
import {nome} from "./mascara/Nome"

export const TextField = ({label, mask,...props}) => {
    const [field, meta] = useField(props)
    const handleKeyUp = useCallback((e) => {
        if (mask === "cep") {
            cep(e)
        } else if (mask === "identidade"){
            identidade(e)
        } else if (mask === "celular"){
            celular(e)
        } else if (mask === "telefone"){
            telefone(e)
        } else if (mask === "cpf"){
            cpf(e)
        } else if (mask === "email"){
            email(e)
        }  else if (mask === "nome"){
            nome(e)
        }
    }, [mask]
    )
    return (
        <div className='fields'>
            <div className='style-label'>
            <span htmlFor={field.name}>{label}<ErrorMessage component= 'span' name={field.name} className="error" /></span>
            </div>
            <input className={`form-control shadow-none ${meta.touched && meta.erro && 'is-invalid'}`}
            {...field} {...props}
            autoComplete="off" onKeyUp={handleKeyUp}  />
        </div>

    )
}





// import React from 'react'
// import {ErrorMessage, useField} from 'formik'

// export const TextField = ({label,...props}) => {
//     const [field, meta] = useField(props)
//     return (
//         <div className='fields'>
//             <div className='style-label'>
//             <span htmlFor={field.name}>{label}<ErrorMessage component= 'span' name={field.name} className="error" /></span>
//             </div>
//             <input className={`form-control shadow-none ${meta.touched && meta.erro && 'is-invalid'}`}
//             {...field} {...props}
//             autoComplete="off" />
//         </div>

//     )
// }