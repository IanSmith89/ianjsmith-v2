import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        About Page
                    </div>
                </div>
            </div>
        );
    }
}
