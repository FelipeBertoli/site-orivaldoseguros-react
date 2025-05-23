import React, { useEffect, useState } from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo } from '../../ComponentsModule';

export default function ClassicHeader({
  borderStyle,
  itemAlign = 'spacing',
  navStyle = 'text',
  navBorder = 'small-radius',
  showNav = true,
  showActions = true,
  showShadow = false,
  navList
}) {
  const [headerShadow, setHeaderShadow] = useState('');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (showShadow) setHeaderShadow('header-shadow');

  }, [showShadow]);

  const headerClasses = `header ${borderStyle} ${
    navStyle === 'contained' || navStyle === 'outlined' || navStyle === 'text'
      ? 'contained-nav'
      : ''
  }`;

  return (
    <div className={headerClasses}>
      <Logo width="250px" />
      <div className={`header-toolbar header-flex ${itemAlign}`}>
        {showNav && (
          <nav className="header-nav header-flex">
            {navList.map((navLink, index) => {
              const sectionId = navLink.link.replace('#', '');
              const isActive = activeSection === sectionId ? 'active' : '';
              return (
                <a
                  key={index}
                  href={navLink.link}
                  className={`header-nav-item ${navStyle} ${navBorder} ${isActive}`}
                >
                  {navLink.label}
                </a>
              );
            })}
          </nav>
        )}
        {showActions && (
          <div className="header-actions header-flex">
          <IconButton action={() => window.open("https://www.instagram.com/orivaldo.seguros/", "_blank")} icon="brands-instagram" type="contained" />
          <IconButton action={() => window.open("https://api.whatsapp.com/send/?phone=5543991103077&text&type=phone_number&app_absent=0", "_blank")} icon="brands-whatsapp" type="contained" />
          <IconButton action={() => window.open( "https://mail.google.com/mail/?view=cm&fs=1&to=orivaldoobertoli@gmail.com.com",  "_blank")} icon="rs-envelope" type="contained" />
          </div>
        )}
      </div>
    </div>
  );
}
