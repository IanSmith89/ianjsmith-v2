import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
export default class Nav extends Component {
    render() {
        return (
            <nav className="top-nav">
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <Link to="/">
                                Ian J. Smith
                            </Link>
                            <Link to="/">
                                Work
                            </Link>
                            <Link to="/about">
                                About/Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
