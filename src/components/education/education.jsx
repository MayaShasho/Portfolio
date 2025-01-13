import styles from './education.module.css';

export const Education = () => {
    return (
        <div className={styles.root}>
            <div className={styles.mask} />
            <div className={styles.container}>
                <h3 data-aos="fade-up"
                    data-aos-duration="1000">Education</h3>
                <div className={styles.content}>
                    <ul>
                        {/* College Section */}
                        <li data-aos="fade-in"
                            data-aos-duration="1000"
                            className={styles.baseCard}>
                            <details className={styles.educationDetail}>
                                <summary
                                    className={styles.toggleTitle}>
                                    B.Sc. of Medical Engineering | Afeka College of Engineering
                                </summary>
                                <span>Majoring:</span>
                                Information system
                                <br />
                                Focused on data mining, predictive tools, machine learning, and software.
                                <br />
                                <span>Final Project: </span>
                                PPG Signal Analysis System for Diagnosing Arrhythmias.
                                <ul>
                                    <li>Awarded an excellent project accolade</li>
                                </ul>
                                The final product is a wristband device designed to detect arrhythmias based on signal processing and machine learning.
                                The project encompasses the full development of a medical device, combining software techniques along with the designing of a complex hardware system.
                                <br />
                                <span>GPA:</span> 87.5
                            </details>
                            <time>2018 - 2022</time>
                        </li>

                        {/* High School Section */}
                        <li data-aos="fade-in"
                            data-aos-duration="1000"
                            className={styles.baseCard}>
                            <details className={styles.educationDetail}>
                                <summary
                                    className={styles.toggleTitle}>
                                    Majored in Medical Science | Rothberg Highschool, Ramat Hasharon
                                </summary>
                                <ul>
                                    <li>Completed 15 Matriculation Units in Medicine</li>
                                </ul>
                                Gaining insights into human body systems, various pathologies, and preventive medicine through theoretical studies and practical experiences.
                            </details>
                            <time>2012 - 2014</time>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
