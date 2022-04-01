import React from "react";
import { Link } from "react-router-dom";
import { MenuLi, MenuUl } from "./SideBarStyle";

export function SideBar() {
  return (
    <MenuUl>
      <Link to="/populares">
        <MenuLi>Populares</MenuLi>
      </Link>

      <Link to="/tendencias">
        <MenuLi>Tendencias</MenuLi>
      </Link>
    </MenuUl>
  );
}
