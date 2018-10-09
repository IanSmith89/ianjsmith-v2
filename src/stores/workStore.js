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
			name: 'paragon',
			to: '/projects/paragon'
		},
		{
			name: 'astarte',
			to: '/projects/astarte'
		},
		{
			name: 'wa state parks',
			to: '/projects/wasp'
		},
		{
			name: 'dash',
			to: '/projects/dash'
		},
		{
			name: 'dreamstream',
			to: '/projects/dreamstream'
		},
		{
			name: 'salvage',
			to: '/projects/salvage'
		},
		{
			name: 'cheba hut',
			to: '/projects/cheba-hut'
		},
		{
			name: 'gig posters',
			to: '/projects/posters'
		},
		{
			name: 'topshelf',
			to: '/projects/topshelf'
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
