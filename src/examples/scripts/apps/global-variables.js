import GLOBAL_FUNCTIONS from './global-functions';

class GLOBAL_VARIABLES {
    constructor() {
        this.username = "";
    }
    Set(newData) {
        if (newData != undefined) {
            let keys = Object.keys(newData);
            keys.map(k => {
                this[k] = newData[k];
            });
        }
    }
    Get(key) {
        return this[key];
    }

}

export  default new GLOBAL_VARIABLES();