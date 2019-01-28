import { observable, action } from 'mobx';

class WorkStore {
	@observable
	project = {};
	@observable
	projects = [];
	projectLinks = [
		{
			name: 'all',
			to: '/'
		},
		{
			name: 'mightyvet',
			to: '/projects/mightyvet'
		},
		{
			name: 'wa state parks',
			to: '/projects/wasp'
		},
		{
			name: 'astarte',
			to: '/projects/astarte'
		},
		{
			name: 'ecommerce',
			to: '/projects/ecommerce'
		}
	];

	@action
	setProject(project) {
		this.project = project;
	}

	@action
	setProjects(projects) {
		this.projects = projects;
	}
}

const workStore = new WorkStore();

export default workStore;
