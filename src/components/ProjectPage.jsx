import React from 'react';
import { observer } from 'mobx-react';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

function removeProtocol(str) {
    if (str) {
        return str.replace(/https:\/\//g, '').replace(/http:\/\//g, '');
    }
}

@observer
export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.projectId = props.match.params.projectId;
    }

    componentDidMount() {
        this.props.actions.getProjectById(this.projectId);
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
                                <img
                                    className="project-image"
                                    src={require(`../assets/images/${this.projectId}-cover.jpg`)}
                                    alt="project"
                                />
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
                                    <span>to top</span>
                                </div>
                            </ScrollLink>
                            <div className="next-project">
                                <span>next</span>
                                <img
                                    className="arrow"
                                    src={require('../assets/images/arrow.svg')}
                                    alt="next project arrow"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}
