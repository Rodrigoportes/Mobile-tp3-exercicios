import React from 'react';

function Button({ text }) {
  return (
    <button style={{
      backgroundColor: '#00aaff',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}>
      {text}
    </button>
  );
}

export default Button;
