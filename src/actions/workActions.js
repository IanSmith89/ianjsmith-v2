import API from '../api';

export function clearProject(workStore) {
	return workStore.setProject(_defaultProject());
}

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

export function getProjectById(id, workStore) {
	return API.work
		.getProjectById(id)
		.then(res => workStore.setProject(res))
		.catch(err => console.error(err));
}

export function getProjects(workStore) {
	return API.work
		.getProjects()
		.then(res => workStore.setProjects(res))
		.catch(err => console.error(err));
}
