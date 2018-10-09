import workStore from '../stores/workStore';
import API from '../api';

function _defaultProject() {
	return {
		id: '',
		name: '',
		client: '',
		description: '',
		how: [],
		services: [],
		takeaways: [],
		techStack: [],
		users: [],
		websiteUrl: '',
		why: [],
		with: ''
	};
}

export function handleLinkClick(e, linkIsActive) {
	if (linkIsActive) return e.preventDefault();
}

export function clearProject() {
	return workStore.setProject(_defaultProject());
}

export function getProjectById(id) {
	return API.work
		.getProjectById(id)
		.then(res => workStore.setProject(res))
		.catch(err => console.error(err));
}

export function getProjects() {
	return API.work
		.getProjects()
		.then(res => workStore.setProjects(res))
		.catch(err => console.error(err));
}
