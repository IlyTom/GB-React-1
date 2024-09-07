import React from 'react';  
import './Message.css'; // Импортируем CSS файл для стилизации  

const Message = ({ text }) => {  
    return (  
        <div className="message">  
            {text}  
        </div>  
    );  
};  

export default Message;