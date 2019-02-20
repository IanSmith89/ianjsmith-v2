import React from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { Link } from 'react-router-dom';
import cx from 'classnames';

@observer
export default class CaseStudyThumbnail extends React.Component {
	@observable
	hoverClassName = '';
	directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
	hoverClassNames = ['in', 'out']
		.map(p => Object.values(this.directions).map(d => `${p}-${d}`))
		.reduce((a, b) => a.concat(b));

	getDirection(e) {
		const { width, height, top, left } = this.node.getBoundingClientRect();
		const l = e.pageX - (left + window.pageXOffset);
		const t = e.pageY - (top + window.pageYOffset);
		const x = (l - width / 2) * (width > height ? height / width : 1);
		const y = (t - height / 2) * (height > width ? width / height : 1);

		return Math.round(Math.atan2(y, x) / (Math.PI / 2) + 5) % 4;
	}

	hoverClassLogic() {
		return this.hoverClassNames.reduce((acc, className) => {
			acc[className] = this.hoverClassName === className;
			return acc;
		}, {});
	}

	handleMouseOver(e) {
		this.update(e, 'in');
	}

	handleMouseOut(e) {
		this.update(e, 'out');
	}

	setRef(node) {
		this.node = node;
	}

	@action
	update(e, prefix) {
		const nextHoverClass = `${prefix}-${
			this.directions[this.getDirection(e)]
		}`;

		this.hoverClassName = nextHoverClass;
	}

	render() {
		const { project } = this.props;

		return (
			<div className="project-link-container">
				<Link className="project-link" to={`/case-study/${project.id}`}>
					<div
						className="project-image-container"
						onMouseEnter={this.handleMouseOver}
						onMouseLeave={this.handleMouseOut}
						ref={this.setRef}
					>
						<div
							className={cx(
								'hover-overlay',
								this.hoverClassLogic()
							)}
						>
							<p className="hover-text">{project.description}</p>
						</div>
						<img
							className="project-image"
							src={require(`../assets/images/${
								project.id
							}-cover.jpg`)}
							alt="project"
						/>
					</div>
				</Link>
				<h3 className="project-name">{project.name}</h3>
			</div>
		);
	}
}
