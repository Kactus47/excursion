import React from 'react';
import { HeaderMenu } from "./HeaderMenu"
import { HeaderContent } from './HeaderContent';
import './header.scss';

export const Header: React.FC = () => {
  return (
    <>
      <HeaderMenu />
      <HeaderContent />
    </>
  )
}