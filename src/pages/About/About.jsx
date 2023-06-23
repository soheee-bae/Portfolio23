import React, { useContext } from 'react';
import { a } from '@react-spring/web';

import ToggleContext from '../../context/toggleContext';
import styles from './About.module.scss';
import AboutScene from '../../components/AboutScene/AboutScene';

function About() {
  const { x } = useContext(ToggleContext);

  return (
    <a.div
      id="about"
      className={styles.about}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor400)', 'var(--blackColor300)'])
      }}>
      <a.div className={styles.aboutContent}>
        <AboutScene />
      </a.div>
    </a.div>
  );
}

export default About;
