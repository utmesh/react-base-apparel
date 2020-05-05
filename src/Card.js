import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import './Styles/Card.css'


export default function Card(props) {
    const { handleSubmit, register, errors } = useForm()
    const onSubmit = values => console.log(values);

    return (
        <div className='entireDisplay'>
                <div className='Text'>
                    <img src={props.logo} alt='logo' />
                    <h1><span className='salmon'>WE'RE</span><br />COMING<br />SOON</h1>
                    <p>{props.info}</p>
                    <form>
                    <span>
                        <input className='inputStyle' type='email' 
                        ref={register({
                            required: "Required",
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Please provide valid email address"
                            }
                            })}
                        />   
                        <button className='ovalShape' type='submit' 
                        onSubmit={handleSubmit}
                        >
                            <img className='icon' src={props.icon} alt='icon'  />
                        </button>
                    </span>
                    {errors.email && errors.email.message}
                    </form>
                
                </div>
                <div className='Image'>
                    <img src={props.name} alt='hero' />
                </div>
            
        </div>
    )
}

Card.propTypes = {
    logo: PropTypes.string,
    //title: PropTypes.string,
    info: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string
};