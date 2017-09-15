export default class WorkApi {
    constructor(apiCore) {
        this.API = apiCore;
    }

    getProject(id) {
        return this.API.get(`${WorkApi.projectsPath}/${id}`);
    }

    getProjects() {
        return this.API.get(WorkApi.projectsPath);
    }
}

WorkApi.projectsPath = '/api/projects';
