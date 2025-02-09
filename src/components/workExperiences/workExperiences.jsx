import styles from './workExperiences.module.css';
import { BiSolidLeftArrow } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";

export const WorkExperiences = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2 data-aos="fade-up"
                    data-aos-duration="500">Work Experiences</h2>
                <div className={styles.timeline}>
                    {/* Research Assistant */}
                    <div data-aos="fade-up"
                        data-aos-duration="500"
                        className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>
                            <FaBriefcase className={styles.timelineIcon} />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Research Assistant | Binah.ai</h3>
                            <ul>
                                <li>
                                    <BiSolidLeftArrow />
                                    <p>
                                        Conducted statistical analyses of datasets using Matlab
                                    </p>
                                </li>
                                <li>
                                    <BiSolidLeftArrow />
                                    <p>
                                        Provided oversight for clinical data collection in health facilities
                                    </p>
                                </li>
                                <li>
                                    <BiSolidLeftArrow />
                                    <p>
                                        Collected data, maintained records, and ensured compliance with regulatory standards
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Math Tutor */}
                    <div data-aos="fade-up"
                        data-aos-duration="500"
                        className={styles.timelineItem}>
                        <div className={styles.timelineMarker}>
                            <FaBriefcase className={styles.timelineIcon} />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Math Tutor | The Ministry of Science and Technology</h3>
                            <ul>
                                <li>
                                    <BiSolidLeftArrow />
                                    <p>
                                        Tutored and coached students to help develop their Mathematics skills
                                    </p>
                                </li>
                                <li>
                                    The position required me to lead by example and be dedicated, constantly encouraging my students.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
