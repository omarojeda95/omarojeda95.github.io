import React from "react";
const About = () => {
  return (
    <section className="about-section">
      <div
        className="circle-layer"
        style={{ backgroundImage: "url(assets/images/icons/icon-1.png)" }}
      ></div>
      <div
        className="dotted-layer"
        style={{
          backgroundImage: "url(assets/images/icons/dotted-pattern.png)",
        }}
      ></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="sec-title">
            <div className="title">Sobre mi</div>
            <div className="separate"></div>
          </div>
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <p>
                Soy un un programado de 25 años con experiencia de 4 años
                officia deserunt mollit any laboruys. Sed perspiciatis unde
                omnis iste natus error sit voluptatem accusantium dolor que
                totams rendy aperiam eaque laudantium sed ipsum dolor sit amet
                consectetur.
              </p>
              <p>
                Eiusmod temp incididunt laborey magna aliqua enimas minim veniam
                quis sit voluptatem.
              </p>
            </div>
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <p>
                Soy un un programado de 25 años con experiencia de 4 años quae
                ab illo inventore veritatis quas chitecto beatae vitae dicta
                sunt explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <a href="#" className="read-more">
                Read More <span className="arrow flaticon-arrow"></span>
              </a>
            </div>
          </div>
          <div className="counter-boxed">
            <div className="fact-counter">
              <div className="row clearfix">
                <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-mouse"></div>
                      <div className="count-outer count-box alternate">
                        <span
                          className="count-text"
                          data-speed="4500"
                          data-stop="600"
                        >
                          0
                        </span>
                        +
                      </div>
                      <div className="counter-title">Project</div>
                    </div>
                  </div>
                </div>
                <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-user-4"></div>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="3000"
                          data-stop="150"
                        >
                          0
                        </span>
                        +
                      </div>
                      <div className="counter-title">Client</div>
                    </div>
                  </div>
                </div>
                <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-imac"></div>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="80"
                        >
                          0
                        </span>
                        +
                      </div>
                      <div className="counter-title">Award</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
