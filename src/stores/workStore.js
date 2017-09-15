import { observable, action } from 'mobx';

class WorkStore {
    @observable project = {};
    @observable projects = [];

    @action getProjectSuccess(project) {
        this.project = project;
    }

    @action getProjectsSuccess(projects) {
        this.projects = projects;
    }
}

const workStore = new WorkStore();

export default workStore;
