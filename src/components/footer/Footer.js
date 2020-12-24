import React, { Component } from 'react';
import styles from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>&copy; Eli Almario 2020</p>
      </footer>
    );
  }
}

export default Footer;
