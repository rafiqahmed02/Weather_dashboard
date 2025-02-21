import React from 'react';
import {  HeaderContainer, Title } from './styed';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../store/store';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>React Weather</Title>
 
    </HeaderContainer>
  );
};

export default Header;
