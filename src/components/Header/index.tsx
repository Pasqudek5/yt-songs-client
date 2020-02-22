import React, { ReactElement, FunctionComponent } from 'react'
import './styles.scss';

import Logo from '../../assets/icons/logo.svg';

const Header: FunctionComponent = (): ReactElement => (
  <header className="header">
    <h1 className="header__logo">
      <img src={Logo} />
    </h1>
  </header>
)


export default Header