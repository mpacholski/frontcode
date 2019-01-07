import * as React from "react";
import {ReactHTML} from "react";

export class AppFooter extends React.Component {
    render(): JSX.Element {
        return (<footer className="app-footer">
            <div className="app-footer__content">
                <div className="app-footer__row">
                    <div className="row middle-sm">
                        <div className="col-sm-4">
                            <div className="signature-area">
                                <p>Made with <i className="f-icon--heart" /> in Poland</p>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center">
                            {/*<div className="social-links">*/}
                                {/*<ul className="social-links__list">*/}
                                    {/*<li className="social-links__item">*/}
                                        {/*<a href="" className="social-links__link"><i*/}
                                            {/*className="f-icon--facebook" /></a>*/}
                                    {/*</li>*/}
                                    {/*<li className="social-links__item">*/}
                                        {/*<a href="" className="social-links__link"><i*/}
                                            {/*className="f-icon--linkedin" /></a>*/}
                                    {/*</li>*/}
                                    {/*<li className="social-links__item">*/}
                                        {/*<a href="" className="social-links__link"><i className="f-icon--github"></i></a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-sm-4 text-right">
                            <div className="mini-contact">
                                <p className="mini-contact__item">+48 502 098 745</p>
                                <p className="mini-contact__item">&bull;</p>
                                <p className="mini-contact__item"><a
                                    href="mailto:hello@frontocde.pl">hello@frontcode.pl</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}