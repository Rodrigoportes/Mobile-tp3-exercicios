import React from 'react';

function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #00aaff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px',
      backgroundColor: '#cdffff',
    }}>
      {children}
    </div>
  );
}

export default Card;

