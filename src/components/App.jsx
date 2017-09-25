import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import LazyRoute from 'lazy-route';
import cx from 'classnames';

@observer
export default class App extends Component {
    constructor(props) {
        super(props);

        this.actions = props.actions;
        this.stores = props.stores;
    }

    render() {
        const { activePathname } = this.props.stores.appStore;

        return (
            <div
                className={cx('wrapper', {
                    light: activePathname !== '/'
                })}
            >
                <Route
                    path="/"
                    render={props => (
                        <LazyRoute {...props} actions={this.actions} stores={this.stores} component={import('./Nav')} />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={props => (
                        <LazyRoute
                            {...props}
                            actions={this.actions}
                            stores={this.stores}
                            component={import('./WorkPage')}
                        />
                    )}
                />
                <Route
                    path="/about"
                    render={props => (
                        <LazyRoute
                            {...props}
                            actions={this.actions}
                            stores={this.stores}
                            component={import('./AboutPage')}
                        />
                    )}
                />
                <Route
                    path="/projects/:projectId"
                    render={props => (
                        <LazyRoute
                            {...props}
                            actions={this.actions}
                            stores={this.stores}
                            component={import('./ProjectPage')}
                        />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={props => (
                        <LazyRoute
                            {...props}
                            actions={this.actions}
                            stores={this.stores}
                            component={import('./Footer')}
                        />
                    )}
                />
                <Route
                    exact
                    path="/about"
                    render={props => (
                        <LazyRoute
                            {...props}
                            actions={this.actions}
                            stores={this.stores}
                            component={import('./Footer')}
                        />
                    )}
                />
            </div>
        );
    }
}
