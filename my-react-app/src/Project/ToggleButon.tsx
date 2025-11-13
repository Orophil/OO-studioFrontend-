import { useState } from 'react';
import './ToggleButton.css';

const ToggleButon = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className="toggle-glass"
      onClick={() => setIsToggled(!isToggled)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        width: '70px',
        height: '36px',
        backgroundColor: '#4a5568',
        borderRadius: '18px'
      }}
    >
      <div className="toggle-light"></div>

      {/* Grid Icon - Fixed on Left */}
      <div style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none">
          <path d="M3 4.5C3 3.67157 3.67157 3 4.5 3H6C6.82843 3 7.5 3.67157 7.5 4.5V6C7.5 6.82843 6.82843 7.5 6 7.5H4.5C3.67157 7.5 3 6.82843 3 6V4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 4.5C10.5 3.67157 11.1716 3 12 3H13.5C14.3284 3 15 3.67157 15 4.5V6C15 6.82843 14.3284 7.5 13.5 7.5H12C11.1716 7.5 10.5 6.82843 10.5 6V4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12C3 11.1716 3.67157 10.5 4.5 10.5H6C6.82843 10.5 7.5 11.1716 7.5 12V13.5C7.5 14.3284 6.82843 15 6 15H4.5C3.67157 15 3 14.3284 3 13.5V12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5H13.5C14.3284 10.5 15 11.1716 15 12V13.5C15 14.3284 14.3284 15 13.5 15H12C11.1716 15 10.5 14.3284 10.5 13.5V12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Lines Icon - Fixed on Right */}
      <div style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none">
          <path d="M3 4.5H15M3 7.5H15M3 10.5H15M3 13.5H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Toggle Circle - Moves and changes color */}
      <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #5CD9C6 0%, #4FC3B0 100%)',
        position: 'absolute',
        top: '3px',
        left: isToggled ? 'calc(100% - 33px)' : '3px',
        transition: 'left 0.3s ease',
        boxShadow: '0 4px 12px rgba(92, 217, 198, 0.5)',
        zIndex: 2
      }}>
      </div>
    </div>
  );
}

export default ToggleButon;