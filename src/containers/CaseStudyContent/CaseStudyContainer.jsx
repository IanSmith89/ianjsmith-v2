import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import CaseStudyHero from '../../components/CaseStudyHero';
import Astarte from './Astarte';
import MightyVet from './MightyVet';
import WAStateParks from './WAStateParks';
import ECommerce from './ECommerce';

@inject('workStore')
@observer
export default class CaseStudyContainer extends Component {
	render() {
		const { project } = this.props.workStore;

		return (
			<Fragment>
				<CaseStudyHero project={project} />
				<div className="container">
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">The Problem</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">{project.problem}</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">Team &amp; Role</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">
								{project.teamAndRole}
							</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">The Solution</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">
								{project.solution}
							</p>
						</div>
					</div>
					<Switch>
						<Route
							path="/case-study/astarte"
							component={() => <Astarte project={project} />}
						/>
						<Route
							path="/case-study/ecommerce"
							component={() => <ECommerce project={project} />}
						/>
						<Route
							path="/case-study/mightyvet"
							component={() => <MightyVet project={project} />}
						/>
						<Route
							path="/case-study/wasp"
							component={() => <WAStateParks project={project} />}
						/>
					</Switch>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">
								Outcome &amp; Reflection
							</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							{project.outcomeAndReflection &&
								project.outcomeAndReflection.map((p, i) => (
									<p className="section-content" key={i}>
										{p}
									</p>
								))}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
