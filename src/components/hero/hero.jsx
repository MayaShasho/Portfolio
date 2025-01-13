import styles from './hero.module.css';
import hand from '../../assets/hand.jpg';

export const Hero = () => {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className={styles.root}>
            <p> Hi, I'm Maya
                <img
                    src={hand}
                    alt="">
                </img>
            </p>
            <h1><span>Software</span> Developer</h1>
        </div >
    )
}