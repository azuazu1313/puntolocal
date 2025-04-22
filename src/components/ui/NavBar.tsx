import * as React from 'react';
import Menu, { IMenu } from './Menu';

interface NavBarProps {
  list: IMenu[];
}

const NavBar = ({ list }: NavBarProps) => {
  return <Menu list={list} />;
};

export default NavBar;