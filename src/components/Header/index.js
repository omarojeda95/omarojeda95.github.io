import React from "react";

const Navbar = () => {
	const appNav = (
		<header className="yb-main-header" id="main-header">
			<div className="yb-full-height " id="home">
				<section className="yb-profile-desc">
					<div className="yb-section-point-wrapper" data-uk-parallax="opacity: 1, 0;">
						<div className="uk-container">
							<div className="yb-section-point">
								<sup>01</sup>
								<span>bienvenido</span>
							</div>
						</div>
					</div>
					<div className="yb-graphics">
						<div className="yb-graphic-1" data-uk-parallax="blur: 0,30;"></div>
						<div className="yb-graphic-2" data-uk-parallax="blur: 0,30;"></div>
					</div>
					<div className="uk-container uk-text-center yb-profile-desc-wrap uk-position-relative">
						<img src="src/img/x1.png" alt="" width="60" />
						<h1 className="uk-text-bold yb-gradient-text"><span>Omar</span> <span>Ojeda</span></h1>
						<div className="uk-text-bold yb-myjob">
							Soy <span id="typed" className="typed"></span>
						</div>
					</div>
				</section>
			</div>
			<nav className="yb-main-menu " id="main-menu">
				<div className="uk-container" data-uk-navbar>
					<div className="uk-navbar-left">
						<a className="yb-logo uk-navbar-item uk-logo" href="dark-index.html"><span>OmarOjeda</span></a>
					</div>
					<div className="uk-navbar-right uk-hidden@m">
						<a className="uk-navbar-toggle" href="#" id="btn-menu-toggle">
							<span data-uk-navbar-toggle-icon className="yb-icon-menu"></span>
							<span data-uk-icon="close" className="yb-icon-close"></span>
						</a>
					</div>
					<div className="yb-menu-toggle-wrapper" id="menucollapse">
						<div className="uk-navbar-center">
							<ul className="uk-navbar-nav" data-uk-scrollspy-nav="closest: li; scroll: false; offset: 79 ">
								<li>
									<a className="yb-inner-link" href="#home"> Inicio </a>
								</li>
								<li>
									<a className="yb-inner-link" href="#about"> Sobre mí</a>
								</li>
								<li>
									<a className="yb-inner-link" href="#resume"> Resume </a>
								</li>
								<li>
									<a className="yb-inner-link" href="#portfolio"> Portafolio </a>
								</li>
								<li>
									<a className="yb-inner-link" href="#blog"> Blog </a>
								</li>
								<li>
									<a className="yb-inner-link" href="#contact"> Contacto </a>
								</li>
							</ul>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav yb-social-icons">
								<li>
									<a href="fb.com/omarojeda95" target="_blank">
										<span className="uk-icon " data-uk-icon="icon: facebook"></span>
									</a>
								</li>
								<li>
									<a href="instagram.com/omarojeda95" target="_blank">
										<span className="uk-icon" data-uk-icon="icon: instagram"></span>
									</a>
								</li>
								<li>
									<a href="#">
										<span className="uk-icon" data-uk-icon="icon: twitter"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);

	return appNav;
};

export default Navbar;
