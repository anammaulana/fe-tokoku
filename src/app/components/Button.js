"use client"
const Button = ({ onClick, children, className, type = "submit" }) => {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`px-4 py-2 rounded-lg transition ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  