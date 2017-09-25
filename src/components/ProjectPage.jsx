import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

function removeProtocol(str) {
    if (str) {
        return str.replace(/https:\/\//g, '').replace(/http:\/\//g, '');
    }
}

@observer
export default class ProjectPage extends React.Component {
    componentDidMount() {
        const { projectId } = this.props.match.params;
        this.props.actions.getProjectById(projectId);
    }

    componentWillUpdate(nextProps) {
        const { projectId } = nextProps.match.params;

        if (projectId !== this.props.stores.workStore.project.id) {
            this.props.actions.getProjectById(projectId);
            window.scrollTo(0, 0);
        }
    }

    componentWillUnmount() {
        this.props.actions.clearProject();
    }

    render() {
        const { project } = this.props.stores.workStore;

        return (
            <main id="project-top" className="project page">
                <div className="container">
                    <section className="row">
                        <div className="twelve columns">
                            <div className="project-image-container">
                                {project.id ? (
                                    <img
                                        className="project-image"
                                        src={require(`../assets/images/${project.id}-cover.jpg`)}
                                        alt="project"
                                    />
                                ) : (
                                    <div className="no-image" />
                                )}
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="six columns">
                            <p className="project-description">{project.description}</p>
                        </div>
                        <div className="six columns project-details-container">
                            <div className="project-detail">
                                <div className="label">With:</div>
                                <div className="detail">{project.with}</div>
                            </div>
                            <div className="project-detail">
                                <div className="label">Visit:</div>
                                <div className="detail">
                                    <a href={project.websiteUrl} target="_blank">
                                        {removeProtocol(project.websiteUrl)}
                                    </a>
                                </div>
                            </div>
                            <div className="project-detail">
                                <div className="label">Client:</div>
                                <div className="detail">{project.client}</div>
                            </div>
                            <div className="project-detail">
                                <div className="label">Services:</div>
                                <div className="detail">{project.longServices}</div>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="twelve columns project-controls">
                            <ScrollLink to="project-top" spy smooth duration={750}>
                                <div className="to-top">
                                    <img
                                        className="arrow"
                                        src={require('../assets/images/arrow.svg')}
                                        alt="to top arrow"
                                    />
                                    to top
                                </div>
                            </ScrollLink>
                            <Link className="next-project" to={`/projects${project.nextProjectLink}`}>
                                next
                                <img
                                    className="arrow"
                                    src={require('../assets/images/arrow.svg')}
                                    alt="next project arrow"
                                />
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}
