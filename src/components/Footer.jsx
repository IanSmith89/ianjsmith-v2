import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
export default class Footer extends Component {
    render() {
        const { activePathname } = this.props.stores.appStore;

        return (
            <footer
                className={cx('footer', {
                    light: activePathname !== '/'
                })}
            >
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <small>&copy; Ian Smith, 2017</small>
                            <div className="mailto-link">
                                <a href="mailto:iansmith1026@gmail.com">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
