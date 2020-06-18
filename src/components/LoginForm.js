import React from 'react'
import {useFormik} from 'formik'

//Styling
const loginFormStyle = {
    display: 'flex',
    justifyContent: 'center'
}
const labelStyle = {
    fontWeight: 'bold',
    display: 'flex',
    marginBottom: '5px'
}
const inputStyle = {
    display: 'block',
    width: '400px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.428573'
}
export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        }
    })
    console.log('Form values', formik.values)
    return (
        <div style={loginFormStyle}>
            <form> 
                <label style= {labelStyle} htmlFor='username'>Username:</label>
                <input style= {inputStyle}
                    type='text'
                    id='username'
                    maxLength='25'
                    onChange= {formik.handleChange} 
                    value= {formik.values.username}
                    
                />
                <label style={labelStyle} htmlFor='password'>Password:</label>
                <input style={inputStyle}
                    type='text'
                    id='password'
                    minLength='8'
                    onChange= {formik.handleChange} 
                    value= {formik.values.password}
                    
                />
                <button type='submit'>Submit</button>


            </form>
        </div>
    )
}
