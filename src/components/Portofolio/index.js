import React from "react";

const Portofolio = () => {
    const appPortofolio = (
        <section className="yb-section  uk-overflow-hidden" id="portfolio">
            <div className="yb-section-point-wrapper">
                <div className="uk-container">
                    <div className="yb-section-point">
                        <sup>04</sup>
                        <span>Portfolio</span>
                    </div>
                </div>
            </div>
            <div className="uk-container ">
                <div data-uk-grid className="uk-grid-divider">
                    <div className="uk-width-1-4@s uk-visible@s uk-margin-large-bottom yb-section-padding-top" id="portfolio-nav-wrapper">
                        <div data-uk-sticky="bottom: #portfolio-nav-wrapper; offset: 100; media: 650">
                            <ul className="yb-nav-left uk-tab-left uk-tab" data-uk-scrollspy-nav="closest: li; scroll: false; offset: 120">
                                <li className="uk-active">
                                    <a href="#myworks" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span> Mis Trabajos
                                    </a>
                                </li>
                                <li>
                                    <a href="#testi" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span> Testimonios
                                    </a>
                                </li>
                                <li>
                                    <a href="#client" className="yb-inner-link" data-offset="120">
                                        <span data-uk-icon="minus"></span> Clientes
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="uk-width-expand@s yb-section-padding-top">
                        <div>
                            <h2 className="yb-section-title uk-heading-line " id="myworks"><span>Mis Trabajos</span></h2>
                            <div data-uk-filter="target: .js-filter" className="yb-margin-top-1 yb-margin-bottom-1">
                                <ul className="yb-nav-filter uk-subnav uk-subnav-pill ">
                                    <li><a data-uk-filter-control=".data-web">Web</a></li>
                                </ul>
                                <ul className="js-filter uk-child-width-1-2  uk-grid-small  " data-uk-grid data-uk-lightbox="animation: fade;  toggle: .yb-lightbox">
                                    <li className="data-web">
                                        <div className="yb-work-item uk-transition-toggle">
                                            <div className="yb-work-item-img-wrap">
                                                <div className="yb-work-item-img">
                                                    <img src={`../assets/img/work/01.jpg`}
                                                        width="383" height="574"
                                                        className="uk-transition-scale-up uk-transition-opaque" alt=""
                                                        data-uk-img />
                                                </div>
                                                <div className="yb-work-item-overlay uk-transition-fade uk-position-cover uk-position-small uk-overlay  uk-flex uk-flex-center uk-flex-middle">
                                                    <div>
                                                        <a href="../assets/img/work/jerefrigeracion.png" className="yb-lightbox uk-transition-slide-left" data-caption="JE REFRIGERACIÓN S.A.C." target="_blank">
                                                            <span data-uk-icon="icon:plus; ratio:1.2"></span>
                                                        </a>
                                                        <a href="https://jerefrigeracion.org" className="uk-transition-slide-right show-portfolio" target="_blank">
                                                            <span data-uk-icon="icon:link; ratio:1.2"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://jerefrigeracion.org" className="show-portfolio">
                                                <div className="yb-work-item-title">
                                                    <h5>JE REFRIGERACION S.A.C.</h5>
                                                    <span>Web</span>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <div id="show-portofolio-details" className="uk-modal-full" data-uk-modal>
                                    <div className="uk-modal-dialog ">
                                        <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                                        <div id="portofolio-details" data-uk-height-viewport className="uk-animation-toggle uk-overflow-hidden">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="testi">
                            <h2 className="yb-section-title uk-heading-line "><span>Testimonios</span></h2>
                            <div data-uk-slider>
                                <div className="yb-margin-top-1 yb-margin-bottom-2">
                                    <div data-uk-grid className="uk-grid-small">
                                        <div className="uk-width-expand">
                                            <div className="uk-slider-container">
                                                <ul className="yb-slider-items uk-slider-items uk-child-width-1-1">
                                                    <li>
                                                        <div className="yb-testi-item">
                                                            <div className="yb-testi-item-desc">
                                                                <h4>Nice Design</h4>
                                                                    For the first time I see such high-quality work, everything is just fine. The design is incredible,
                                                                    a
                                                                    lot of features and ready-made solutions.
                                                            </div>
                                                            <div className="yb-testi-item-img">
                                                                <div data-uk-grid className="uk-flex-middle uk-grid-small">
                                                                    <div>
                                                                        <img src="src/img/empty.png" width="300" height="300" data-src="src/img/people/01.jpg" alt="" data-uk-img />
                                                                    </div>
                                                                    <div className="uk-text-bold uk-text-small">
                                                                        <span>Ben</span>
                                                                        <span data-uk-icon="minus"></span>
                                                                        <span>Envato User</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="uk-width-auto">
                                            <div className="yb-testi-nav">
                                                <a href="#" data-uk-slider-item="next">
                                                    <span data-uk-icon="arrow-right"></span>
                                                </a>
                                                <a href="#" data-uk-slider-item="previous">
                                                    <span data-uk-icon="arrow-left"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="yb-section-title uk-heading-line " id="client"><span>Clients</span></h2>
                            <div className="yb-margin-top-1 yb-margin-bottom-2">
                                <div data-uk-grid className="uk-child-width-1-6@m uk-child-width-1-3">
                                    <div>
                                        <div className="yb-client-item">
                                            <img src="https://yobithemes.com/demo/html/freda/src/img/client/01.png" width="300" height="300" data-src="src/img/client/01.png" alt="" className="uk-border-rounded" data-uk-img />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-client-item">
                                            <img src="testing" width="300" height="300" data-src="src/img/client/02.png" alt="" className="uk-border-rounded" data-uk-img />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-client-item">
                                            <img src="assets/img/empty.png" width="300" height="300" data-src="src/img/client/03.png" alt="" className="uk-border-rounded" data-uk-img />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-client-item">
                                            <img src="assets/img/empty.png" width="300" height="300" data-src="src/img/client/04.png" alt="" className="uk-border-rounded" data-uk-img />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-client-item">
                                            <img src="src/img/empty.png" width="300" height="300" data-src="src/img/client/05.png" alt="" className="uk-border-rounded" data-uk-img />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="yb-client-item">
                                            <img src="src/img/empty.png" width="300" height="300" data-src="src/img/client/06.png" alt="" className="uk-border-rounded" data-uk-img />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="yb-border-top yb-border-bottom">
                <div className="uk-container">
                    <div data-uk-grid className="yb-box-services uk-child-width-1-4@l uk-child-width-1-2 uk-text-center uk-grid-divider">
                        <div>
                            <div className="yb-box-fact">
                                <div className="yb-box-fact-count uk-h3">4441</div>
                                <span className="yb-box-fact-desc ">Jobs Done</span>
                            </div>
                        </div>
                        <div>
                            <div className="yb-box-fact">
                                <div className="yb-box-fact-count uk-h3">100%</div>
                                <span className="yb-box-fact-desc">Recommended</span>
                            </div>
                        </div>
                        <div>
                            <div className="yb-box-fact">
                                <div className="yb-box-fact-count uk-h3">673</div>
                                <span className="yb-box-fact-desc">Repeat Clients</span>
                            </div>
                        </div>
                        <div>
                            <div className="yb-box-fact">
                                <div className="yb-box-fact-count uk-h3">99%</div>
                                <span className="yb-box-fact-desc">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return appPortofolio;
};

export default Portofolio;
