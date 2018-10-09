import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import cx from 'classnames';
import Nav from './Nav';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import NotFound from './NotFound';

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
				<Switch>
					<Route exact path="/" component={WorkPage} />
					<Route path="/about" component={AboutPage} />
					<Route
						path="/projects/:projectId"
						component={ProjectPage}
					/>
					<Route path="/*" component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(Container);
