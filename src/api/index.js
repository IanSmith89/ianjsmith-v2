import ApiCore from './ApiCore';
import WorkApi from './WorkApi';

class API {
    constructor() {
        this.apiCore = new ApiCore();
        this.work = new WorkApi(this.apiCore);
    }
}

const api = new API();
export default api;
