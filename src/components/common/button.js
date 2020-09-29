import React from 'react';
import './css/button.css';

export default function Button({ children, onclick, white, styles }) {
  return (
    <button className={`button ${white ? "btn-trans" : "btn-pry"}`} style={styles} onClick={onclick}>
      {children}
    </button>
  );
}
