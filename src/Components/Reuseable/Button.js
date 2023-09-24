import React from "react";










const Button = ({type, variant, id, className, onClick, children, style}) => {
    return (
        <button 
          type={type ? type : "button"} 
          variant ={variant} 
          className={className ? `btn-component ${className}` :"btn-component"}
          id={id}
          onClick={onClick}
          style={style}
         >
        
           {children}
        </button>
    );
};

export default Button;