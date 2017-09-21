import { observable, action } from 'mobx';

class AppStore {
    @observable activePathname = '/';

    @action
    pageIsActive(pathname) {
        this.activePathname = pathname;
    }
}

const appStore = new AppStore();

export default appStore;
