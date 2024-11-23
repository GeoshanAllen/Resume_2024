import React from 'react';
import '../styles.css';

export default function Footer(){

    const currentYear =new Date().getFullYear();
    return (
        <footer className='footer bg-dark'>
            <p className='footer-text'>
            © {currentYear}&nbsp;
             GeoshanAllen. All rights reserved.
            </p>
           
            </footer>

    );

}