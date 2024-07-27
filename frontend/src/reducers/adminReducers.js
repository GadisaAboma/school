import {
    SHOW_ALL_TEACHER,
    SHOW_TRANSCRIPT,
    SHOW_SETTINGS,
    CHANGE_SEMISTER_REQUEST,
    CHANGE_SEMISTER_SUCCESS,
    CHANGE_SEMISTER_ERROR,
    SHOW_REQUESTS,
    GET_REQUESTS_REQUEST,
    GET_REQUESTS_SUCCESS,
    GET_REQUESTS_ERROR,
    REQUEST_APPROVE_REQUEST,
    REQUEST_APPROVE_FAIL,
    REQUEST_APPROVE_SUCCESS,
    NEW_REQUESTS_COUNT_REQUEST,
    NEW_REQUESTS_COUNT_SUCCESS,
    NEW_REQUESTS_COUNT_FAIL,
    DELETE_REQUEST_REQUEST,
    DELETE_REQUEST_SUCCESS,
    DELETE_REQUEST_FAIL,
    DELETE_TEACHER_REQUEST,
    DELETE_TEACHER_SUCCESS,
    DELETE_TEACHER_FAIL,
    SHOW_STUDENT,
    GET_STUDENT_REQUEST,
    GET_STUDENT_SUCCESS,
    GET_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    SHOW_ADMIN,
    ADMIN_PROFILE_REQUEST,
    ADMIN_PROFILE_SUCCESS,
    ADMIN_PROFILE_FAIL,
    UPDATE_ADMIN_REQUEST,
    UPDATE_ADMIN_SUCCESS,
    UPDATE_ADMIN_FAIL,
    RESET_ASSIGNED_REQUEST,
    RESET_ASSIGNED_SUCCESS,
    RESET_ASSIGNED_FAIL,
    ASSIGN_HOMEROOM_REQUEST,
    ASSIGN_HOMEROOM_SUCCESS,
    ASSIGN_HOMEROOM_FAIL,
    SHOW_EVENTS,
    TEACHER_DETAIL_REQUEST,
    TEACHER_DETAIL_SUCCESS,
    TEACHER_DETAIL_FAIL,
    REMOVE_ASSIGN_REQUEST,
    REMOVE_ASSIGN_SUCCESS,
    REMOVE_ASSIGN_FAIL,
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAIL,
    GET_EVENT_REQUEST,
    GET_EVENT_SUCCESS,
    GET_EVENT_FAIL,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,
    EDIT_EVENT_REQUEST,
    EDIT_EVENT_SUCCESS,
    EDIT_EVENT_FAIL,
    UPDATE_TEACHER_REQUEST,
    UPDATE_TEACHER_SUCCESS,
    UPDATE_TEACHER_FAIL
} from '../constants/adminConstants'
import { USER_LOGOUT } from '../constants/userConstants'

export const showTeacherReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_ALL_TEACHER:
            return { allTeacher: true, transcript: false, settings: false, request: false, student: false, profile: false, events: false }
        case SHOW_TRANSCRIPT:
            return { allTeacher: false, transcript: true, settings: false, request: false, student: false, profile: false, events: false }
        case SHOW_SETTINGS:
            return { allTeacher: false, transcript: false, settings: true, request: false, student: false, profile: false, events: false }
        case SHOW_REQUESTS:
            return { allTeacher: false, transcript: false, settings: false, request: true, student: false, profile: false, events: false }
        case SHOW_STUDENT:
            return { allTeacher: false, transcript: false, settings: false, request: false, student: true, profile: false, events: false }
        case SHOW_ADMIN:
            return { allTeacher: false, transcript: false, settings: false, request: false, student: false, profile: true, events: false }
        case SHOW_EVENTS:
            return { allTeacher: false, transcript: false, settings: false, request: false, student: false, profile: false, events: true }
        case USER_LOGOUT:
            return {}
        default: {
            return state
        }
    }

}
export const changeSemisterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SEMISTER_REQUEST:
            return { loading: true }
        case CHANGE_SEMISTER_SUCCESS:
            return { loading: false, success: action.payload }
        case CHANGE_SEMISTER_ERROR:
            return { loading: false, error: action.payload }

        default: {
            return state
        }
    }
}




export const getRequestsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_REQUESTS_REQUEST:
            return { loading: true }
        case GET_REQUESTS_SUCCESS:
            return { loading: false, requests: action.payload }
        case GET_REQUESTS_ERROR:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default: {
            return state
        }
    }
}

export const approveRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_APPROVE_REQUEST:
            return { loading2: true }
        case REQUEST_APPROVE_SUCCESS:
            return { loading2: false, message: action.payload }
        case REQUEST_APPROVE_FAIL:
            return { loading2: false, error2: action.payload }
        default:
            return state
    }
}

export const countOfNewRequestsReducer = (state = {}, action) => {

    switch (action.type) {
        case NEW_REQUESTS_COUNT_REQUEST:
            return { loading: true }
        case NEW_REQUESTS_COUNT_SUCCESS:
            return { loading: false, count: action.payload }
        case NEW_REQUESTS_COUNT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const deleteRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_REQUEST_REQUEST:
            return { loading: true }
        case DELETE_REQUEST_SUCCESS:
            return { loading: false }
        case DELETE_REQUEST_FAIL:
            return { loading: false }
        default:
            return state

    }
}

export const deleteTeacherReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_TEACHER_REQUEST:
            return { loading: true }
        case DELETE_TEACHER_SUCCESS:
            return { loading: false, deleteSuccess: true }
        case DELETE_TEACHER_FAIL:
            return { loading: false }
        default:
            return state

    }
}

export const getStudentReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_STUDENT_REQUEST:
            return { loading: true }
        case GET_STUDENT_SUCCESS:
            return { loading: false, student: action.payload }
        case GET_STUDENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateStudentReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_STUDENT_REQUEST:
            return { loading2: true }
        case UPDATE_STUDENT_SUCCESS:
            return { loading2: false, message: action.payload }
        case UPDATE_STUDENT_FAIL:
            return { loading2: false, error2: action.payload }
        default:
            return state
    }

}

export const getAdminProfileReducer = (state = {}, action) => {

    switch (action.type) {
        case ADMIN_PROFILE_REQUEST:
            return { loading: true }
        case ADMIN_PROFILE_SUCCESS:
            return { loading: false, admin: action.payload }
        case ADMIN_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const updateAdminReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_ADMIN_REQUEST:
            return { loading2: true }
        case UPDATE_ADMIN_SUCCESS:
            return { loading2: false, message: action.payload }
        case UPDATE_ADMIN_FAIL:
            return { loading2: false, error2: action.payload }
        default:
            return state
    }

}

export const resetAssignedTeachersReducer = (state = {}, action) => {

    switch (action.type) {
        case RESET_ASSIGNED_REQUEST:
            return { loading2: true }
        case RESET_ASSIGNED_SUCCESS:
            return { loading2: false, message: action.payload }
        case RESET_ASSIGNED_FAIL:
            return { loading2: false, error: action.payload }
        default:
            return state
    }

}

export const assignHomeroomTeacherReducer = (state = {}, action) => {

    switch (action.type) {
        case ASSIGN_HOMEROOM_REQUEST:
            return { loading3: true }
        case ASSIGN_HOMEROOM_SUCCESS:
            return { loading3: false, message2: action.payload }
        case ASSIGN_HOMEROOM_FAIL:
            return { loading3: false, error3: action.payload }
        default:
            return state
    }

}

export const teacherDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case TEACHER_DETAIL_REQUEST:
            return { loading: true }
        case TEACHER_DETAIL_SUCCESS:
            return { loading: false, teacher: action.payload }
        case TEACHER_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const removeTeacherAssignReducer = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_ASSIGN_REQUEST:
            return { loading2: true }
        case REMOVE_ASSIGN_SUCCESS:
            return { loading2: false, message: action.payload }
        case REMOVE_ASSIGN_FAIL:
            return { loading2: false, error: action.payload }
        default:
            return state;
    }
}


export const addEventReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_EVENT_REQUEST:
            return { loading: true }
        case ADD_EVENT_SUCCESS:
            return { loading: false, success: action.payload }
        case ADD_EVENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const getEventReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EVENT_REQUEST:
            return { loading: true }
        case GET_EVENT_SUCCESS:
            return { loading: false, events: action.payload }
        case GET_EVENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const deleteEventReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_EVENT_REQUEST:
            return { loading2: true }
        case DELETE_EVENT_SUCCESS:
            return { loading2: false, success2: action.payload }
        case DELETE_EVENT_FAIL:
            return { loading2: false, error2: action.payload }
        default:
            return state
    }
}

export const editEventReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_EVENT_REQUEST:
            return { loading3: true }
        case EDIT_EVENT_SUCCESS:
            return { loading3: false, success3: action.payload }
        case EDIT_EVENT_FAIL:
            return { loading3: false, error3: action.payload }
        default:
            return state
    }
}

export const updateTeacherReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_TEACHER_REQUEST:
            return { loading3: true }
        case UPDATE_TEACHER_SUCCESS:
            return { loading3: false, message2: action.payload }
        case UPDATE_TEACHER_FAIL:
            return { loading3: false, error3: action.payload }
        default:
            return state
    }

}