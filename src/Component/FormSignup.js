import React from 'react'
import useForm from '../Hooks/useForm'
import validate from '../Utils/Validate'

const FormSignup = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate)

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Get Started With Us Today! Create your Account </h1>

                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input id='Username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter Your Username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter Your Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter Your Password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='confirmpassword' className='form-label'>Confirm Password</label>
                    <input id='confirmpassword'
                        type='password'
                        name='confirmpassword'
                        className='form-input'
                        placeholder='Enter Your Confirmpassword'
                        value={values.confirmpassword}
                        onChange={handleChange}
                    />
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
                </div>

                <button className='form-input-btn' type='submit'>Sign Up</button>
                <span className='form-input-login'> Already have an account? Login <a href="#"> here </a> </span>

            </form>

        </div>
    )
}

export default FormSignup
