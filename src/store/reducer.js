import { combineReducers } from 'redux'

export const PUSH_BREADCRUMD = 'PUST_BREADCRUMD'

const initState = {
    path: []
}

const breadcrumd = (state = initState, action) => {
    switch(action.type) {
        case PUSH_BREADCRUMD:
            let path = []
            if (Array.isArray(state.path)) {
                path = [...state.path, action.path]
            } else {
                path = [action.path]
            }
            return Object.assign({}, state, {
                path: path
            })
        default:
            return state
    }
}



export default combineReducers({
    breadcrumd: breadcrumd
})