import ACTION_TYPES from "../../scripts/apps/action-types";
import GLOBAL_FUNCTIONS from "../../scripts/apps/global-functions";

const initialState = new function () {

}

const global_reducer = (state = initialState, action) => {
    let newState = GLOBAL_FUNCTIONS.CopyObject(state);
    switch (action.type) {
        case ACTION_TYPES.GLOBAL.SET_STATE:
            return GLOBAL_FUNCTIONS.SetReduxObject(newState, action);
         default:
             return state;
     }
};
export default global_reducer;