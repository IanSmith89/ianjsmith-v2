import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class WorkPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        Work Page
                    </div>
                </div>
            </div>
        );
    }
}
