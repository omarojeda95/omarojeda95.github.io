import React from "react";
const Navigation = () => {
  return (
    <section className="hidden-bar left-align">
      <div className="color-layer"></div>
      <div className="hidden-bar-closer">
        <button>
          <span className="flaticon-multiply"></span>
        </button>
      </div>
      <div className="logo">
        <a href="index.html">
          <img src="assets/images/logo-2.png" alt="" />
        </a>
      </div>
      <div className="hidden-bar-wrapper">
        <div className="side-menu">
          <ul className="navigation clearfix">
            <li>
              <a href="blog.html">Our Blog</a>
            </li>
            <li>
              <a href="blog.html">Our Blog</a>
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
        <ul className="social-links clearfix">
          <li>
            <a href="index.html">
              <span className="fa fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fa fa-twitter"></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fa fa-google-plus"></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fa fa-linkedin"></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fa fa-pinterest"></span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <span className="fa fa-instagram"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright-text">Copyright &copy; 2020 Gazek</div>
    </section>
  );
};

export default Navigation;
