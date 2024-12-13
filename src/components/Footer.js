import React from 'react';
import '../styles.css';

export default function Footer(){

    const currentYear =new Date().getFullYear();
    return (

        <div className=" bg-dark bottom-0 " style={{ position: "fixed", width:"100%"}}   >
            <p className='footer-text'>
            © {currentYear}&nbsp;
             GeoshanAllen. All rights reserved.
            </p>
           
            </div>

    );

}