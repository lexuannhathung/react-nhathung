import ACTION_TYPES from "../../scripts/apps/action-types";

const sidebar_action = new function () {
    return {
        setState: (_data) => {
            return { type: ACTION_TYPES.SIDEBAR.SET_STATE, data: _data }
        }
    }
}
export default sidebar_action;