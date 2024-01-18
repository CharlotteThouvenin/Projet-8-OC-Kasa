import arrow from '../assets/arrow.svg'
import '../styles/collapse.scss'
import { useState } from 'react'

import React from 'react';

function Collapse ({title, content, size}) {

    const [active, setActive] = useState(false)

    const handleToggle = e =>{
        setActive(!active) 
    }

    return (
        <div className={`collapse ${active && 'active'} ${size}`}>
            <div className='collapse__title'>
                <div className='collapse__title__text'>{title}</div>
                <img className='collapse__title__icon' src={arrow} alt='arrow' onClick={handleToggle}/>
            </div>
            <div className='collapse__content'>{content}</div>
        </div>
    );
};

export default Collapse;