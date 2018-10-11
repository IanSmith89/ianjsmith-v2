import React from 'react';
import {
	matchPath,
	Redirect,
	Route,
	Switch,
	withRouter
} from 'react-router-dom';
import { observer } from 'mobx-react';
import { TransitionGroup, Transition } from 'react-transition-group';
import cx from 'classnames';
import Nav from './Nav';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import NotFound from './NotFound';
import Footer from './Footer';
import { fadeInUp, fadeOutUp } from '../utils/animations';

@observer
class Container extends React.Component {
	render() {
		const { location } = this.props;

		return (
			<div
				className={cx('wrapper', {
					light: location.pathname !== '/'
				})}
			>
				<Nav />
				<TransitionGroup appear>
					<Transition
						key={'child-' + location.key}
						timeout={{
							enter: 500,
							exit: 300
						}}
						onEnter={fadeInUp}
						onExit={fadeOutUp}
					>
						<Switch location={location}>
							<Route exact path="/" component={WorkPage} />
							<Route path="/about" component={AboutPage} />
							<Route
								path="/projects/:projectId"
								component={ProjectPage}
							/>
							<Route path="/not-found" component={NotFound} />
							<Redirect from="/*" to="/not-found" />
						</Switch>
					</Transition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(Container);
