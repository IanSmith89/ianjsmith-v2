import API from '../api';

export function clearProject(workStore) {
	workStore.setProject(_defaultProject());
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

export async function fetchProjects() {
	try {
		const projects = await API.work.getProjects();
		return projects;
	} catch (err) {
		console.error(err);
	}
}

export async function getProjectById(id, workStore) {
	try {
		const project = await API.work.getProjectById(id);
		return workStore.setProject(project);
	} catch (err) {
		console.error(err);
	}
}

export async function getProjects(workStore) {
	const projects = await fetchProjects();
	return workStore.setProjects(projects);
}

export function handleLinkClick(e, linkIsActive) {
	if (linkIsActive) return e.preventDefault();
}
