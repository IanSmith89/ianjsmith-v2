require('./assets/styles/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import workStore from './stores/workStore';
import * as workActions from './actions/workActions';

const stores = {
    workStore
};

const actions = {
    ...workActions
};

ReactDOM.render(
    <AppContainer>
        <App stores={stores} actions={actions} />
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <App stores={stores} actions={actions} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
