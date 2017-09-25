import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

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
                    <div className="flex-container">
                        {projects.map(project => (
                            <div className="project-link-container" key={project.id}>
                                <Link className="project-link" to={`/projects/${project.id}`}>
                                    <div className="project-image-container">
                                        <img
                                            className="project-image"
                                            src={require(`../assets/images/${project.id}-cover.jpg`)}
                                            alt="project"
                                        />
                                    </div>
                                    <h1 className="project-client">{project.name}</h1>
                                    <h2 className="project-services">{project.shortServices}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}
