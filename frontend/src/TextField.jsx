import React from 'react'
import {ErrorMessage, useField} from 'formik'

export const TextField = ({label,...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className='fields'>
            <div className='style-label'>
            <label htmlFor={field.name}>{label}</label>
            </div>
            <input className={`form-control shadow-none ${meta.touched && meta.erro && 'is-invalid'}`}
            {...field} {...props}
            autoComplete="off" />
            <ErrorMessage component= 'div' name={field.name} className="error" />
        </div>

    )
}