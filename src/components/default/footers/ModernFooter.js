import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo, TextLink } from '../../ComponentsModule';

export default function ModernFooter({ navList }) {
  const data = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="modern-footer-container">
        <div className="modern-footer-row">
          <Logo width="275px"/>
        </div>
        <div className="modern-footer-row">
          {navList.map((navLink, index) => (
            <TextLink key={index} link={navLink.link}>{navLink.label}</TextLink>
          ))}
        </div>
        <div className="modern-footer-row icons">
          <IconButton action={() => window.open("https://www.instagram.com/orivaldo.seguros/", "_blank")} icon="brands-instagram" size="md" type="contained" />
          <IconButton action={() => window.open("https://api.whatsapp.com/send/?phone=5543991103077&text&type=phone_number&app_absent=0", "_blank")} icon="brands-whatsapp" size="md" type="contained" />
          <IconButton action={() => window.open( "https://mail.google.com/mail/?view=cm&fs=1&to=orivaldoobertoli@gmail.com.com",  "_blank")} icon="rs-envelope" size="md" type="contained" />
        
        </div>

        <div className="footer-section">
          <small>© {data} Orivaldo Seguros. Todos os Direitos Reservados.</small>
           <div className='flaticon-section'>
            <span> UIcons por <a href="https://www.flaticon.com/uicons" target="_blank" rel="noopener noreferrer">Flaticon</a></span>
           </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <small>Desenvolvido por </small>
        <a href="http://" target="_blank" rel="noreferrer">Korvus</a>
      </div> */}
    </div>
  )
}
