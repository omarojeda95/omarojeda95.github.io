import React from "react";

const Navbar = () => {
  const appNav = (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo.png" alt="" title="" />
                </a>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li>
                      <a href="blog.html">Inicio</a>
                    </li>
                    <li>
                      <a href="blog.html">Sobre mi</a>
                    </li>
                    <li>
                      <a href="blog-classic.html">Blog Classic</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="outer-box clearfix">
                <div className="btn-box">
                  <a href="tel:+51978994510" className="contact-btn theme-btn">
                    <span className="icon flaticon-smartphone"></span>
                    978-994-510
                  </a>
                </div>
                <div className="menu-toggler nav-toggler hidden-bar-opener">
                  <span className="icon flaticon-menu"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <a href="index.html" title="">
              <img src="assets/images/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="pull-right">
            <nav className="main-menu"></nav>
            <div className="outer-box clearfix">
              <div className="btn-box">
                <a href="tel:+800-019-4900" className="contact-btn theme-btn">
                  <span className="icon flaticon-smartphone"></span> + 800 019
                  4900
                </a>
              </div>
              <div className="menu-toggler nav-toggler hidden-bar-opener">
                <span className="icon flaticon-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-multiply"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer"></div>
        </nav>
      </div>
    </header>
  );

  return appNav;
};

export default Navbar;
