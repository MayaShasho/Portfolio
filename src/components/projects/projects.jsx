import React from 'react';
import styles from './projects.module.css';
import screenshot from '../../assets/screenshot.jpg';
import todolist from '../../assets/todoListwhite.jpg';
import bank from '../../assets/bank.jpg';
import connectfour from '../../assets/connectFour.jpg';

export const Projects = () => {
    return (
        <div className={styles.root}>
            <div className={styles.shadow}>
                <div className={styles.container}>
                    <h2 data-aos="fade-up" data-aos-duration="1000">
                        <span data-aos="fade-up">projects</span> <br />
                        Look What I've Done
                    </h2>
                    <div className={styles.content}>
                        {/* portfolio */}
                        <a
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className={styles.details}
                            href="https://mayashasho.github.io/Portfolio/"
                            target="_blank"
                        >
                            <h3
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            >
                                My Personal Website
                            </h3>
                            <p>
                                A responsive portfolio showcasing my skills and
                                projects.
                            </p>
                            <figure>
                                <img src={screenshot}></img>
                            </figure>
                        </a>

                        {/* Todo list */}
                        <a
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className={styles.details}
                            href="https://mayashasho.github.io/Todo-List/"
                            target="_blank"
                        >
                            <h3
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            >
                                To-do list
                            </h3>
                            <p>
                                An intuitive app to organize and manage tasks.
                            </p>
                            <figure>
                                <img src={todolist}></img>
                            </figure>
                        </a>

                        {/* MO Bank */}
                        <a
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className={styles.details}
                        >
                            <h3
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            >
                                MO Bank
                            </h3>
                            <p>
                                Manage your finances, control spending, and
                                track your balance effortlessly.
                            </p>
                            <figure>
                                <img src={bank}></img>
                            </figure>
                        </a>

                        {/* Connect 4 */}
                        <a
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className={styles.details}
                            href="https://mayashasho.github.io/Connect-4-Game/"
                            target="_blank"
                        >
                            <h3
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            >
                                Connect 4
                            </h3>
                            <p>
                                two-player board game built with React.
                                featuring a dynamic grid and turn-based
                                gameplay.
                            </p>
                            <figure>
                                <img src={connectfour}></img>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
