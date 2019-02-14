import React from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import cx from 'classnames';
import Nav from './Nav';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import CaseStudyPage from './CaseStudyPage';
import GigPosters from './GigPosters';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
import { fadeInUp, fadeOutUp } from '../utils/animations';
import throttle from 'lodash.throttle';

@observer
class Container extends React.Component {
	@observable
	top = 0;

	componentDidMount() {
		window.addEventListener('scroll', throttle(this.handleScroll, 500));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', throttle(this.handleScroll, 500));
	}

	handleExitTransition(node) {
		return fadeOutUp(node, this.top);
	}

	@action
	handleScroll() {
		if (this.refs.container) this.top = window.pageYOffset;
	}

	render() {
		const { location } = this.props;

		return (
			<div
				className={cx('wrapper', {
					light: location.pathname !== '/'
				})}
				ref="container"
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
						onExit={this.handleExitTransition}
					>
						<Switch location={location}>
							<Route exact path="/" component={WorkPage} />
							<Route path="/about" component={AboutPage} />
							<Route
								path="/projects/:projectId"
								render={props => {
									const ids = [
										'astarte',
										'ecommerce',
										'wasp',
										'mightyvet'
									];
									return ids.includes(
										props.match.params.projectId
									) ? (
										<CaseStudyPage {...props} />
									) : (
										<NotFoundPage />
									);
								}}
							/>
							<Route path="/posters" component={GigPosters} />
							<Route component={NotFoundPage} />
						</Switch>
					</Transition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(Container);
