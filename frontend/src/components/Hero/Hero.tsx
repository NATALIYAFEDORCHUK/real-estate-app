import React from 'react';
import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const Hero: React.FC = () => {
const navigate = useNavigate();

const token = useSelector((state: RootState) => state.auth.token);
    const handleGetStarted = () => {
        if (token) {
          navigate('/properties');
          return;
        }
        navigate('/login');
      };
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>The chemical  negatively charged</h1>
                <p className={styles.heroText}>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
                <button className={styles.heroBtn} onClick={handleGetStarted}>Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Hero;