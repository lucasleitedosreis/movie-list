import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLi, MenuUl } from './style';

export function MenuBar() {
  return (
    <MenuUl>
      <Link to='populares'>
        <MenuLi>Populares</MenuLi>
      </Link>

      <Link to='/tendencias'>
        <MenuLi>Tendencias</MenuLi>
      </Link>

      <Link to='/lancamentos'>
        <MenuLi>Lançamentos</MenuLi>
      </Link>
      <Link to='/search'>
        <MenuLi>Buscar</MenuLi>
      </Link>
    </MenuUl>
  );
}
