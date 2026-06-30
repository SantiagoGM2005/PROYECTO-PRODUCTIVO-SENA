"use client";
import { Dropdown, DropdownItem } from "flowbite-react";

export function UserDropdown({logoutHandler}) {
  return (
    <Dropdown label="Usuario" dismissOnClick={false}>
      <DropdownItem>Perfil</DropdownItem>
      <DropdownItem onClick={logoutHandler}>Cerrar sesión</DropdownItem>
     
    </Dropdown>
  );
}
