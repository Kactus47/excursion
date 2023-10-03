import React from 'react';
import { FooterTop } from './FooterTop';
import { FooterBottom } from './FooterBottom';
import "./footer.scss"

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}