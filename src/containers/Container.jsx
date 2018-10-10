import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import Nav from './Nav';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import NotFound from './NotFound';
import Footer from './Footer';

@observer
class Container extends React.Component {
	constructor(props) {
		super(props);

		this.pathname = props.location.pathname;
	}

	componentWillUpdate(nextProps) {
		if (this.pathname !== nextProps.location.pathname) {
			this.pathname = nextProps.location.pathname;
		}
	}

	render() {
		return (
			<div
				className={cx('wrapper', {
					light: this.pathname !== '/'
				})}
			>
				<Nav />
				<TransitionGroup>
					<CSSTransition
						appear
						classNames="fade"
						key={this.props.location.key}
						mountOnEnter
						timeout={{ enter: 300, exit: 400 }}
						unmountOnExit
					>
						<Switch location={this.props.location}>
							<Route exact path="/" component={WorkPage} />
							<Route path="/about" component={AboutPage} />
							<Route
								path="/projects/:projectId"
								component={ProjectPage}
							/>
							<Route path="/not-found" component={NotFound} />
							<Redirect from="/*" to="/not-found" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(Container);
