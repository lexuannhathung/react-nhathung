import ACTION_TYPES from "../../scripts/apps/action-types";
import GLOBAL_FUNCTIONS from "../../scripts/apps/global-functions";

const initialState = new function () {
    this.selected_pageid = -2;
}

const sidebar_reducer = (state = initialState, action) => {
    let newState = GLOBAL_FUNCTIONS.CopyObject(state);
    switch (action.type) {
        case ACTION_TYPES.SIDEBAR.SET_STATE:
            return GLOBAL_FUNCTIONS.SetReduxObject(newState, action);
         default:
             return state;
     }
};
export default sidebar_reducer;