import React from "react";
const About = () => {
  return (
    <section id="about" className="yb-section">
      <div className="yb-my-profile">
        <div className="uk-container">
          <div className="uk-grid-collapse uk-child-width-expand@m" data-uk-grid>
            <div>
              <div className="yb-my-profile-img uk-background-cover uk-background-norepeat uk-background-top-center" data-src="assets/img/profile.jpg" data-uk-img data-uk-lightbox style={{ backgroundImage: `url(assets/img/profile.jpg)` }}>
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
                    Analista programador con 05 años de experiencia en diseño web y conocimiento en lenguajes de
                    programación, base de datos, servidores, API’s y Sistemas de Control de Versiones. He
                    conseguido implementar desarrollos tanto nacional como internacional. Actualmente busco ampliar
                    mi experiencia en la implementación web profesional, en un entorno que requiere habilidades
                    independientes para la resolución de problemas y soluciones a corto plazo con el cliente.
                    <br></br>
                    Llevé cursos en línea para aprender CSS, JavaScrip, PHP, Angular, React y Android.
                  </p>
                </div>
                <div className="yb-my-profile-desc-bottom yb-bg-soft">
                  <ul className="yb-my-profile-desc-info uk-list">
                    <li>
                      <span>Nacimiento</span> : 15/08/1995
                    </li>
                    <li>
                      <span>Celular</span> : <a href="https://wa.me/+51978994510" target="_blank">978-994-510</a>
                    </li>
                    <li>
                      <span>Correo</span> : <a href="mailto:omarsilva.ojeda@gmail.com" target="_blank">omarsilva.ojeda@gmail.com</a>
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
