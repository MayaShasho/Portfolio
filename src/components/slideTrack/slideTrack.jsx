import styles from './slideTrack.module.css';
import { SiMysql } from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { LiaJava } from "react-icons/lia";
import { AiOutlinePython } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiReact } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

export const SlideTrack = () => {
    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                <li><TfiMicrosoft size={30} /><span>Microsoft Office</span></li>
                <li><AiOutlinePython size={40} /><span>Python</span></li>
                <li>C</li>
                <li><LiaJava size={40} /><span>Java</span></li>
                <li><IoLogoJavascript size={40} /></li>
                <li><FaNodeJs size={30} /><span>Node.js</span></li>
                <li><SiReact size={30} /><span>React</span></li>
                <li><AiOutlineHtml5 size={30} /><span>HTML5</span></li>
                <li><TbBrandCss3 size={30} /><span>CSS3</span></li>
                <li>SQL</li>
                <li><SiMysql size={80} style={{ marginBlockStart: -24 }} /></li>
                <li><SiMongodb size={30} /><span>MongoDB</span></li>
                <li>Express.js</li>
                <li>Solidworks</li>
                <li>Matlab</li>

                <li><TfiMicrosoft size={30} /><span>Microsoft Office</span></li>
                <li><AiOutlinePython size={40} /><span>Python</span></li>
                <li>C</li>
                <li><LiaJava size={40} /><span>Java</span></li>
                <li><IoLogoJavascript size={40} /></li>
                <li><FaNodeJs size={30} /><span>Node.js</span></li>
                <li><SiReact size={30} /><span>React</span></li>
                <li><AiOutlineHtml5 size={30} /><span>HTML5</span></li>
                <li><TbBrandCss3 size={30} /><span>CSS3</span></li>
                <li>SQL</li>
                <li><SiMysql size={80} style={{ marginBlockStart: -24 }} /></li>
                <li><SiMongodb size={30} /><span>MongoDB</span></li>
                <li>Express.js</li>
                <li>Solidworks</li>
                <li>Matlab</li>
            </ul >
        </div>
    )
}