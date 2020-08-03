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
                                        Habilidades
                                    </a>
                                </li>
                                <li>
                                    <a href="#awwwards" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span>
                                        Capacitaciones
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-expand@s yb-section-padding-top">
                        <div>
                            <h2 className="yb-section-title uk-heading-line" id="education">
                                <span>Educación</span>
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
                                                <div className="yb-resume-item-date-text"><span>12/2013 - 03/2014</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Asistente HelpDesk</h4>
                                            <strong>CVR</strong>
                                            <div className="uk-text-small">
                                                <p>
                                                    Encargado de resolver los problemas que surgían en las computadoras de las personas que trabajan en
                                                    CVR.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>09/2015 – 03/2017</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Asistente de Sistemas</h4>
                                            <strong>JE refrigeración S.A.C.</strong>
                                            <div className="uk-text-small">
                                                <p>
                                                    Apoyo en el área de sistemas. Involucrado a la solución de problemas que se ejercían en las
                                                    computadoras de los ingenieros.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>08/2017 - 08/2018</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Practicante Front End</h4>
                                            <strong>Universidad de San Martin de Porres</strong>
                                            <div className="uk-text-small">
                                                <p>
                                                    Desarrollar páginas web y actualizar los contenidos de la página principal de la USMP.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>09/2018 - 01/2019</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Practicante Back End</h4>
                                            <strong>CRP Radios</strong>
                                            <div className="uk-text-small">
                                                <p>
                                                    Mejorar un sistema de creación de plataformas para la radio, generación de reportes en
                                                    dicho sistema.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>02/2019 – 03/2019</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Desarrollador Front End</h4>
                                            <strong>TechUp</strong>
                                            <div className="uk-text-small">
                                                <p>
                                                    Desarrollar un sistema web en Codeigniter y consumo de servicios en AWS.
                                                    <br></br>
                                                    Desarrollar páginas web para negocios.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>04/2019 – Actualidad</span></div>
                                            </div>
                                            <h4 className="yb-section-title">Desarrollador Full Stack</h4>
                                            <strong>TRANSTOTAL AGENCIA MARITIMA S.A.</strong>
                                            <div className="uk-text-small">
                                                <p>
                                                    Desarrollar sistemas webs para los diferentes giros de negocios, utilizando leguaje de
                                                    programación PHP y crear procedimientos en SQL Server.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="yb-section-title  uk-heading-line " id="skills">
                                <span>Habilidades</span>
                            </h2>
                            <div className="yb-margin-top-1 yb-margin-bottom-2">
                                <div className="uk-grid-collapse  uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-text-center" data-uk-grid>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="1">
                                                <strong>100<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">HTML</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.9">
                                                <strong>90<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">CSS</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.8">
                                                <strong>80<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">JavaScript</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.9">
                                                <strong>90<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">PHP</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.6">
                                                <strong>60<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">JAVA</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.5">
                                                <strong>50<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">C #</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.9">
                                                <strong>90<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">SQL Server</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.8">
                                                <strong>80<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">MySQL</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.8">
                                                <strong>80<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">GIT</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.6">
                                                <strong>60<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">Angular</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.7">
                                                <strong>70<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">React</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.6">
                                                <strong>60<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">Android</h5>
                                        </div>
                                    </div>
                                    <div className="yb-bg-soft">
                                        <div className="yb-box-circle">
                                            <div className="circle-progress " data-value="0.5">
                                                <strong>50<i>%</i></strong>
                                            </div>
                                            <h5 className="yb-box-circle-title">CCNA</h5>
                                        </div>
                                    </div>
                                </div>
                                <div data-uk-grid className="uk-child-width-1-2">
                                    <div>
                                        <h4 className="yb-section-title">Habilidades Blandas</h4>
                                        <ul className="uk-list uk-list-large  uk-list-divider">
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                    Resolución de problemas <small className="uk-float-right uk-text-bold uk-visible@s">100%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="100" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Creatividad <small className="uk-float-right uk-text-bold uk-visible@s">90%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="90" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Gestión del tiempo <small className="uk-float-right uk-text-bold uk-visible@s">80%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="80" max="100"></progress>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Trabajo en equipo <small className="uk-float-right uk-text-bold uk-visible@s">90%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="90" max="100"></progress>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="yb-section-title">Lenguajes </h4>
                                        <ul className="uk-list uk-list-large uk-list-divider">
                                            <li>
                                                <div className="yb-resume-skill-item">
                                                    <h5>
                                                        Inglés <small className="uk-float-right uk-text-bold uk-visible@s">60%</small>
                                                    </h5>
                                                    <progress className="uk-progress" value="60" max="100"></progress>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="yb-section-title  uk-heading-line " id="awwwards">
                                <span>Capacitaciones</span>
                            </h2>
                            <div className="yb-resume-list">
                                <ul className="uk-list uk-list-large uk-list-divider">
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2013</span></div>
                                            </div>
                                            <h4 className="yb-section-title">XVIII Congreso Internacional de Ingeniería y XII Arquiforo Visión 2013</h4>
                                            <strong>USMP - FIA</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2014</span></div>
                                            </div>
                                            <h4 className="yb-section-title">XVIII Congreso Internacional de Ingeniería y XII Arquiforo Visión 2014</h4>
                                            <strong>USMP - FIA</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2015</span></div>
                                            </div>
                                            <h4 className="yb-section-title">XVIII Congreso Internacional de Ingeniería y XII Arquiforo Visión 2015</h4>
                                            <strong>USMP - FIA</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="yb-resume-item">
                                            <div className="yb-resume-item-date">
                                                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                                                <div className="yb-resume-item-date-text"><span>2016</span></div>
                                            </div>
                                            <h4 className="yb-section-title">XVIII Congreso Internacional de Ingeniería y XII Arquiforo Visión 2016</h4>
                                            <strong>USMP - FIA</strong>
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
                            <a href="" className=" yb-btn uk-button uk-button-primary uk-button-large">Descargar CV</a>
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
