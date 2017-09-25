import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.actions = props.actions;
    }

    componentWillMount() {
        const { pathname } = this.props.location;
        this.actions.pageIsActive(pathname);
    }

    componentWillReceiveProps(nextProps) {
        const { pathname } = nextProps.location;
        this.actions.pageIsActive(pathname);
    }

    render() {
        const { activePathname } = this.props.stores.appStore;

        return (
            <nav
                className={cx('top-nav', {
                    light: activePathname !== '/'
                })}
            >
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <div className="logo">
                                <Link to="/">Ian J. Smith</Link>
                            </div>
                            <div className="page-links">
                                <Link
                                    to="/"
                                    className={cx({
                                        active: activePathname === '/' || activePathname.indexOf('/projects') !== -1
                                    })}
                                >
                                    Work
                                </Link>
                                <Link
                                    to="/about"
                                    className={cx({
                                        active: activePathname === '/about'
                                    })}
                                >
                                    About/Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
