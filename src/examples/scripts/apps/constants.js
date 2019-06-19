const CONSTANTS = new function () {
    this.NAVIGATION_URL = new function () {
        this.ROOT_FILE = "";
        this.LOGIN = this.ROOT_FILE + '/login';
        this.INDEX = this.ROOT_FILE + '/';
        this.HOME = this.ROOT_FILE + '/home';
        this.PRODUCT_DETAIL = this.ROOT_FILE + '/product-detail';
        this.NOT_FOUND = this.ROOT_FILE + '/not-found';
    }
    this.SIDEBAR_PAGEID = new function () {
        return {
            NONE: -1,
            HOME: 0
        }
    }
};

export default CONSTANTS;