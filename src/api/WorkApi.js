export default class WorkApi {
    constructor(apiCore) {
        this.API = apiCore;
    }

    getProjectById(id) {
        return this.API.get(`${WorkApi.projectsPath}/${id}`);
    }

    getProjects() {
        return this.API.get(WorkApi.projectsPath);
    }
}

WorkApi.projectsPath = '/api/projects';
