import React from "react";

const Contacto = () => {
    const appContacto = (
        <section className="yb-section yb-border-top" id="contact">
            <div className="yb-section-point-wrapper">
                <div className="uk-container">
                    <div className="yb-section-point ">
                        <sup>05</sup>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className="uk-container">
                <div data-uk-grid className=" uk-grid-divider">
                    <div className="yb-section-padding yb-contact-left uk-width-3-4@m">
                        <div>
                            <h2 className="yb-section-title uk-heading-line ">
                                <span>Get in touch</span>
                            </h2>
                            <p className="uk-text-bold">Feel free to contact me</p>
                            <div id="contact-form-alert"></div>
                            <form id="contact-form" className="uk-form-stacked">
                                <div className="uk-grid uk-grid-small uk-child-width-1-2@s">
                                    <div>
                                        <div className="uk-margin">
                                            <label htmlFor="f_email" className="uk-form-label">Email*</label>
                                            <div className="uk-form-controls uk-inline uk-width-1-1">
                                                <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                                <input className="yb-input uk-input  uk-border-rounded" type="email" name="f_email" id="f_email" placeholder=" Your email here . . ." />
                                            </div>
                                            <small className="uk-text-danger err-msg" id="f_email_error"></small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-margin">
                                            <label htmlFor="f_phone" className="uk-form-label">Phone*</label>
                                            <div className="uk-form-controls uk-inline uk-width-1-1">
                                                <span className="uk-form-icon" data-uk-icon="icon: phone"></span>
                                                <input className="yb-input uk-input uk-border-rounded" type="text" name="f_phone" id="f_phone" placeholder=" Your phone here . . ." />
                                            </div>
                                            <small className="uk-text-danger err-msg" id="f_phone_error"></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-margin ">
                                    <label htmlFor="f_message" className="uk-form-label">Message*</label>
                                    <div className="uk-form-controls">
                                        <textarea className="yb-input  uk-textarea uk-border-rounded" rows="7" name="f_message" id="f_message" placeholder="Your message here . . ."></textarea>
                                    </div>
                                    <small className="uk-text-danger err-msg" id="f_message_error"></small>
                                </div>
                                <div className="uk-margin-top">
                                    <button className="uk-button uk-button-primary uk-button-large  yb-btn" type="submit" id="btn-contact-form" data-textreset="Send Now">
                                        <span className="uk-margin-small-right btn-text-wrap">Send Now</span>
                                        <span data-uk-icon="arrow-right" className="uk-icon"> </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=" uk-width-1-4@m yb-section-padding yb-contact-right">
                        <p className="uk-margin-medium-bottom uk-visible@m">
                            <img src="src/img/empty.png" data-src="src/img/profile2.jpg" width="500" height="500" data-uk-img alt="" className="uk-border-circle" />
                        </p>
                        <ul className="uk-list uk-list-divider uk-text-small yb-contact-mini">
                            <li className="uk-flex uk-flex-middle">
                                <span data-uk-icon="mail" className="uk-flex-none uk-text-primary "></span>
                                <span>my.email@gmail.com</span>
                            </li>
                            <li className="uk-flex uk-flex-middle">
                                <span data-uk-icon="phone" className="uk-flex-none uk-text-primary"></span>
                                <span> +62-123-123-213</span>
                            </li>
                            <li className="uk-flex uk-flex-middle">
                                <span data-uk-icon="location" className="uk-flex-none uk-text-primary "></span>
                                <span>Lamda Street West Cibinong 8027 Bogor</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

    return appContacto;
};

export default Contacto;
