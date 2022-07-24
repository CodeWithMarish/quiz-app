import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button disabled={!onClick} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
