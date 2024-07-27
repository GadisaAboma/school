import { GET_SEMISTER_FAIL, GET_SEMISTER_REQUEST, GET_SEMISTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}


export const showTeacherModalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { showModal: true }
        case 'CLOSE_MODAL':
            return { showModal: false }
        default:
            return state
    }
}

export const getCurrentSemsiter = (state = {}, action) => {
    switch (action.type) {
        case GET_SEMISTER_REQUEST:
            return { loading: true }
        case GET_SEMISTER_SUCCESS:
            return { laoding: false, semister: action.payload }
        case GET_SEMISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}