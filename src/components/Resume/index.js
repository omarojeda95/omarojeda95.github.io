import React from "react";

const Resume = () => {
    const appResume = (
        <section className="yb-section " id="resume">
            <div className="yb-section-point-wrapper">
                <div className="uk-container">
                    <div className="yb-section-point">
                        <sup>03</sup>
                        <span>Resume</span>
                    </div>
                </div>
            </div>
            <div className="uk-container">
                <div data-uk-grid className="uk-grid-divider">
                    <div className="uk-width-1-4@s uk-visible@s uk-margin-large-bottom yb-section-padding-top " id="resume-nav-wrapper">
                        <div data-uk-sticky="bottom: #resume-nav-wrapper; offset: 100; media: 650">
                            <ul className="yb-nav-left uk-tab-left uk-tab" data-uk-scrollspy-nav="closest: li; scroll: false; offset: 120">
                                <li className="uk-active">
                                    <a href="#education" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span>
                                        Educacion
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span>
                                        Experiencia
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span>
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#awwwards" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span>
                                        Awards
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-expand@s yb-section-padding-top">
                        <div>
                            <h2 className="yb-section-title uk-heading-line" id="education">
                                <span>Educacion</span>
                            </h2>
                            <div className="yb-resume-list">
                                <ul className="uk-list uk-list-large uk-list-divider">
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2013 - 2019</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Bachiller en Ingenieria de Computación y Sistemas</h4>
                                            <strong>Universidad de San Martin de Porres</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="yb-section-title  uk-heading-line " id="experience">
                                <span>Experiencia</span>
                            </h2>
                            <div className="yb-resume-list">
                                <ul className="uk-list uk-list-large uk-list-divider">
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2018 - Present</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Software Developer</h4>
                                            <strong>River Tech</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2016 - 2018</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Web Designer</h4>
                                            <strong>Retail Ocean</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2014 - 2016</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Web Marketing</h4>
                                            <strong>Proper Team</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2013 - 2014</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Web Tester</h4>
                                            <strong>Ota Group</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="yb-section-title  uk-heading-line " id="skills">
                                <span>Skills</span>
                            </h2>
                            <div className="yb-margin-top-1 yb-margin-bottom-2">
                                <div className="uk-grid-collapse  uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-text-center" data-uk-grid>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.9">
                                                <strong>90<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">CSS</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.9">
                                                <strong>90<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">HTML</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="1">
                                                <strong>100<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">PHP</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.8">
                                                <strong>80<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">Flutter</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.6">
                                                <strong>60<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">ROR</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.7">
                                                <strong>70<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">Elixir</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.8">
                                                <strong>80<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">Git</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.9">
                                                <strong>90<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">Mysql</h5>
                                        </div>
                                    </div>
                                </div>
                                <div data-uk-grid className="uk-child-width-1-2">
                                    <div>
                                        <h4 className="yb-section-title">Soft Skills</h4>
                                        <ul className="uk-list uk-list-large  uk-list-divider">
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Problem Solving <small className="uk-float-right uk-text-bold uk-visible@s">100%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="100" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Creativity <small className="uk-float-right uk-text-bold uk-visible@s">90%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="90" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Time Management <small className="uk-float-right uk-text-bold uk-visible@s">80%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="80" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Team Work <small className="uk-float-right uk-text-bold uk-visible@s">90%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="90" max="100"></progress>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="yb-section-title">Language </h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        English <small className="uk-float-right uk-text-bold uk-visible@s">100%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="100" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        French <small className="uk-float-right uk-text-bold uk-visible@s">70%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="70" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Chinese <small className="uk-float-right uk-text-bold uk-visible@s">80%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="80" max="100"></progress>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="yb-section-title  uk-heading-line " id="awwwards">
                                <span>Awards</span>
                            </h2>
                            <div className="yb-resume-list">
                                <ul className="uk-list uk-list-large uk-list-divider">
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2018 - 2019</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Top 10 Web Developer</h4>
                                            <strong>Ota Group</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2015 - 2016</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Top 5 LeaderShip Exellence Winner</h4>
                                            <strong>Proper Team</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2012 - 2015</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Top 4 Web Tester</h4>
                                            <strong>Rival Ocean</strong>
                                            <div className="uk-text-small">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="yb-section yb-section-padding uk-background-cover uk-background-fixed " data-uk-parallax="bgy: -200" data-src="src/img/bg/bg2.jpg" data-uk-img>
                <div className="yb-overlay-primary uk-position-cover"></div>
                <div className="uk-container uk-text-center uk-position-relative">
                    <div data-uk-grid className="uk-grid-small  uk-flex-center">
                        <div>
                            <a href="#" className=" yb-btn uk-button uk-button-primary uk-button-large">Download CV</a>
                        </div>
                        <div>
                            <a href="#contact" className="yb-inner-link yb-btn uk-button uk-button-danger  uk-button-large">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return appResume;
};

export default Resume;
