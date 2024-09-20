import React from 'react'
import FormSignup from './FormSignup'
import "./Form.css"

const Form = () => {
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>X</span>
                <div className='form-content-left'>
                    < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLFtNMrtrdsWmoDxPrC2AKMvLUE9WTK4E00dYsCZ6eCbzdv9tve6roSDH0VyglXwJoOc&usqp=CAU"
                        // {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Frocket-launch-3d-illustration_16492620.htm&psig=AOvVaw05kz5GYFpJqYwleyMe_FiP&ust=1725086363190000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjmq_KNnIgDFQAAAAAdAAAAABAP" */}
                        alt="left"
                        className='form-img' />
                </div>
                <FormSignup />
            </div>

        </>
    )
}

export default Form
