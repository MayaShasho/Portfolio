import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
    return <div className={styles.root}>
        <h2 data-aos="fade-up"
            data-aos-duration="1000">Open to new job opportunities.</h2>
        <br />
        <p data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000">I'd love to hear from you.</p>
        <br />
        <p data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000">Let's
            <span> connect!</span>
        </p>
        <a data-aos="zoom in"
            data-aos-delay="200"
            data-aos-duration="1000"
            href='mailto:mayashasho6292@gmail.com'>mayashasho6292@gmail.com</a>

    </div>
}