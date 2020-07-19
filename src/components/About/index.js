import React from "react";
const About = () => {
  return (
    <section id="about" className="yb-section">
      <div className="yb-my-profile">
        <div className="uk-container">
          <div className="uk-grid-collapse uk-child-width-expand@m" data-uk-grid>
            <div>
              <div className="yb-my-profile-img uk-background-cover uk-background-norepeat uk-background-top-center" data-src="src/img/profile.jpg" data-uk-img data-uk-lightbox>
                <a href="https://www.youtube.com/watch?v=uQBL7pSAXR8" className="yb-my-intro">
                  <span data-uk-icon="icon: play; ratio: 2"></span>
                  <span className="yb-my-intro-text">Introduction</span>
                </a>
              </div>
            </div>
            <div>
              <div className="yb-my-profile-desc">
                <div className="yb-section-point-wrapper">
                  <div className="yb-section-point right">
                    <sup>02</sup>
                    <span>Sobre mí</span>
                  </div>
                </div>
                <div className="yb-my-profile-desc-top">
                  <h2 className="yb-section-title">Hola a todos!</h2>
                  <p>
                    Soy un programador que estudió Ingenieria de Computación y Sistemas
                    en la Universidad de San Martin de Porres. Llevé cursos de desarrollo
                    en Sistema UNI comenzando con el lenguaje de programación Visual Basic
                    de forma básica, luego en el mismo instituto llevé los cursos de Java básico,
                    Java orientado a Escritorio y Java orientado a Web.
                    Llevé cursos en línea para aprender CSS, JavaScrip, PHP, Angular, React y Android.

                  </p>
                </div>
                <div className="yb-my-profile-desc-bottom yb-bg-soft">
                  <ul className="yb-my-profile-desc-info uk-list">
                    <li>
                      <span>Nacimiento</span> : 15/08/1995
                    </li>
                    <li>
                      <span>Celular</span> : 978-994-510
                    </li>
                    <li>
                      <span>Correo</span> : omarsilva.ojeda@gmail.com
                    </li>
                    <li>
                      <span>Dirección</span> : Av. Central 72, VES
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yb-border-top yb-border-bottom ">
        <div className="uk-container">
          <div data-uk-grid className="yb-box-services uk-child-width-1-4@l uk-child-width-1-2 uk-text-center uk-grid-divider">
            <div>
              <div className="yb-box-service">
                <span className="uk-icon" data-uk-icon="icon: laptop; ratio: 1.5"></span>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span className="uk-icon" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                <h5>Web Designer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span className="uk-icon" data-uk-icon="icon: world; ratio: 1.5"></span>
                <h5>Web Marketer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span className="uk-icon" data-uk-icon="icon: settings; ratio: 1.5"></span>
                <h5>Web Tester</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
