require('./assets/styles/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './components/App';

import appStore from './stores/appStore';
import workStore from './stores/workStore';

const stores = {
    appStore,
    workStore
};

import * as appActions from './actions/appActions';
import * as workActions from './actions/workActions';

const actions = {
    ...appActions,
    ...workActions
};

ReactDOM.render(
    <AppContainer>
        <Router>
            <Provider {...stores}>
                <App stores={stores} actions={actions} />
            </Provider>
        </Router>
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <Router>
                    <Provider {...stores}>
                        <App stores={stores} actions={actions} />
                    </Provider>
                </Router>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
