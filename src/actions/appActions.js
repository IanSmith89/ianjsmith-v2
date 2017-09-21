import appStore from '../stores/appStore';

export function pageIsActive(pathname) {
    return appStore.pageIsActive(pathname);
}
