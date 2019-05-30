import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormValidation from './FormValidation';
import validateAuth from './ValidateAuth';


const INITIAL_STATE = {
    email: '',
    password: ''
}

function Register() {
    // execute FormValidation
    const { 
        handleChange, 
        handleSubmit, 
        handleBlur, 
        values, 
        errors, 
        isSubmitting
    } = FormValidation(INITIAL_STATE, validateAuth);

    
    return (
        <div className="container">
            <h1>Form Title</h1>
            <form onSubmit={ handleSubmit }>
                <input 
                    className={errors.email && 'error-input'}
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    name="email"
                    type="email"
                    value={values.email}
                    autoComplete="off"
                    placeholder="Your email address"
                />
                {errors.email  && <p className="error-text">{errors.email}</p>}
                <input 
                    className={errors.password && 'error-input'}
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="Choose a safe password"
                  />
                  {<errors className="password"></errors>  && <p className="error-text">{errors.password}</p>}
            <div className='submit'>
                <button disabled={isSubmitting} type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
