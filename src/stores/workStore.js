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
			to: '/case-study/mightyvet'
		},
		{
			name: 'wa state parks',
			to: '/case-study/wasp'
		},
		{
			name: 'astarte',
			to: '/case-study/astarte'
		},
		{
			name: 'ecommerce',
			to: '/case-study/ecommerce'
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
