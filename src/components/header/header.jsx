import styles from './header.module.css';
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

export const Header = () => {
    return <div className={styles.root}>
        <a
            data-aos="fade-up"
            href="https://linkedin.com/in/maya-shasho-2954b61a7"
            target="_blank">
            <SlSocialLinkedin size={22} />
            <span>Linkedin</span>
        </a>
        <a
            data-aos="fade-up"
            href="https://github.com/MayaShasho"
            target="_blank">
            <FiGithub size={22} />
            <span>Github</span>
        </a>
    </div>
}