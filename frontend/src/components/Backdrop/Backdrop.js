import React from 'react';

import './Backdrop.css'

const Backdrop = ({ closeDropdown }) => {

    const close = () => {
        closeDropdown()
    }
    
    return (
        <div onClick={close} className="backdrop">
            
        </div>
    );
}

export default Backdrop;
