const ACTION_TYPES = new function () {
    return {
        GLOBAL: new function() {
            this.SET_STATE = "GLOBAL_SET_STATE";
        },
        SIDEBAR: new function () {
            this.SET_STATE = "SIDEBAR_SET_STATE";
        }
    }
};

export default ACTION_TYPES;