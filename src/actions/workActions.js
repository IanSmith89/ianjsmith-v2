import workStore from '../stores/workStore';
import API from '../api';

export function clearProject() {
    return workStore.clearProject();
}

export function getProjectById(id) {
    return API.work
        .getProjectById(id)
        .then(res => workStore.getProjectByIdSuccess(res))
        .catch(err => console.error(err));
}

export function getProjects() {
    return API.work
        .getProjects()
        .then(res => workStore.getProjectsSuccess(res))
        .catch(err => console.error(err));
}
