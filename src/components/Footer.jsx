import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Created by{' '}
        <a
          href="https://spectreascended.github.io/personalhomepage/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Cory Pollard
        </a>{' '}
        &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
