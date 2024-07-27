import React from 'react';
import './message.css'
 
const Message = (props) => {
    return (
        <div style={{
            width: props.width,
            backgroundColor: props.background
        }} className="message">
            {props.children}
        </div>
    );
}
 
 
export default Message;