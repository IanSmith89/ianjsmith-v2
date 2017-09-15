import workStore from '../stores/workStore';
import API from '../api';

export function getProject() {
    return API.work.getProject()
        .then(res => workStore.getProjectSuccess(res))
        .catch(err => console.error(err));
}

export function getProjects() {
    return API.work.getProjects()
        .then(res => workStore.getProjectsSuccess(res))
        .catch(err => console.error(err));
}
