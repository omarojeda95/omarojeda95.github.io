import React from "react";
const Banner = () => {
  return (
    <section className="banner-section">
      <div
        className="patern-icon-one"
        style={{ backgroundImage: "url(assets/images/main-slider/icon-1.png)" }}
      ></div>
      <div
        className="patern-icon-two"
        style={{ backgroundImage: "url(assets/images/main-slider/icon-2.png)" }}
      ></div>
      <div className="main-slider-carousel owl-carousel owl-theme">
        <div
          className="slide"
          style={{ backgroundImage: "url(assets/images/main-slider/1.png)" }}
        >
          <div
            className="image-layer"
            style={{
              backgroundImage:
                "url(assets/images/main-slider/content-image-1.png)",
            }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h1>
                    Soy un joven
                    <br /> Desarrollador
                  </h1>
                  <div className="text">
                    Possim sapientem cumy sed graeci civibus ats utamur elsifeny
                    hase sonet.
                  </div>
                  <div className="btns-box">
                    <a href="index.html" className="theme-btn btn-style-one">
                      <span className="txt">discuss project</span>
                    </a>
                    <a href="index.html" className="theme-btn btn-style-two">
                      <span className="txt">our services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="long-arrow"
            style={{
              backgroundImage: "url(assets/images/icons/long-arrow-1.png)",
            }}
          ></div>
        </div>

        <div
          className="slide"
          style={{ backgroundImage: "url(assets/images/main-slider/1.png)" }}
        >
          <div
            className="image-layer"
            style={{
              backgroundImage:
                "url(assets/images/main-slider/content-image-1.png)",
            }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h1>
                    Delivering For <br /> Brand Expanding
                  </h1>
                  <div className="text">
                    Possim sapientem cumy sed graeci civibus ats utamur elsifeny
                    hase sonet.
                  </div>
                  <div className="btns-box">
                    <a href="index.html" className="theme-btn btn-style-one">
                      <span className="txt">discuss project</span>
                    </a>
                    <a href="index.html" className="theme-btn btn-style-two">
                      <span className="txt">our services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="long-arrow"
            style={{
              backgroundImage: "url(assets/images/icons/long-arrow-1.png)",
            }}
          ></div>
        </div>

        <div
          className="slide"
          style={{ backgroundImage: "url(assets/images/main-slider/1.png)" }}
        >
          <div
            className="image-layer"
            style={{
              backgroundImage:
                "url(assets/images/main-slider/content-image-1.png)",
            }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h1>
                    Delivering For <br /> Brand Expanding
                  </h1>
                  <div className="text">
                    Possim sapientem cumy sed graeci civibus ats utamur elsifeny
                    hase sonet.
                  </div>
                  <div className="btns-box">
                    <a href="index.html" className="theme-btn btn-style-one">
                      <span className="txt">discuss project</span>
                    </a>
                    <a href="index.html" className="theme-btn btn-style-two">
                      <span className="txt">our services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="long-arrow"
            style={{
              backgroundImage: "url(assets/images/icons/long-arrow-1.png)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
