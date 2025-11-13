import React from 'react';
import logo from '../assets/Background+Border.svg';
import { ClipboardList } from 'lucide-react';
import './Sidebar.css'

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { label: 'Label', count: null, icon: ClipboardList },
    { label: 'Label', count: '100+', icon: ClipboardList },
    { label: 'Label', count: null, icon: ClipboardList },
    { label: 'Label', count: null, icon: ClipboardList },
    { label: 'Label', count: '100+', icon: ClipboardList },
  ];
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <div className="sidebar__inner">
        <div className="oostudio-brand">
          <img src={logo} alt="OOStudioAI logo" className="oostudio-brand__logo" />
          {isOpen && <p className="oostudio-brand__text">OOStudio AI</p>}
        </div>
        <div className="sidebar__menu">
          {menuItems.map((item, index) => (
            <div key={index} className={`sidebar__menu-item ${index === 1 ? 'is-active' : ''}`}>
              <div className="sidebar__menu-left">
                <span className="sidebar__menu-icon">
                  <item.icon size={20} color="white" />
                </span>
                {isOpen && <span className="sidebar__menu-label">{item.label}</span>}
              </div>
              {isOpen && item.count && <span className="sidebar__menu-count">{item.count}</span>}
            </div>
          ))}
        </div>
        <div className="sidebar__bottom-icon" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: isOpen ? 'none' : 'rotate(180deg)', transition: 'transform 300ms ease' }}>
            <path d="M3.73877 5.14453H4.40544" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.73828 7.98828H4.40495" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.73877 10.8516H4.40544" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.34886 14L6.34886 2M14.7489 12L14.7489 4C14.7489 2.89543 13.8534 2 12.7489 2L3.41553 2C2.31096 2 1.41553 2.89543 1.41553 4L1.41553 12C1.41553 13.1046 2.31096 14 3.41553 14L12.7489 14C13.8534 14 14.7489 13.1046 14.7489 12Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
