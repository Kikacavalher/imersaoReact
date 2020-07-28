import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      {/* <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a> */}
      <p>
        Orgulhosamente criado pela
        {' '}
      <a href="https://www.linkedin.com/in/erica-cavalher/">
        <h3>Kika</h3>
      </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
