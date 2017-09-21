import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class WorkPage extends React.Component {
    componentDidMount() {
        this.props.actions.getProjects();
    }

    render() {
        const { projects } = this.props.stores.workStore;

        return (
            <main className="home page">
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">Work Page</div>
                    </div>
                </div>
            </main>
        );
    }
}
