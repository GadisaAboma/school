import {
    REGISTER_STUDENT_REQUEST,
    REGISTER_STUDENT_SUCCESS,
    REGISTER_STUDENT_FAIL,
    GET_STUDENT_DETAIL_REQUEST,
    GET_STUDENT_DETAIL_SUCCESS,
    GET_STUDENT_DETAIL_FAIL,
    GET_TRANSCRIPT_REQUEST,
    GET_TRANSCRIPT_SUCCESS,
    GET_TRANSCRIPT_FAIL,
    GET_SCORE_REQUEST,
    GET_SCORE_SUCCESS,
    GET_SCORE_FAIL,
    ADD_REQUEST_REQUEST,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_FAIL,
    SHOW_MARK,
    SHOW_PROFILE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    
} from "../constants/studentConstants"

import { USER_LOGOUT } from "../constants/userConstants"


export const registerStudentReducer = (state = {}, action) => {

    switch (action.type) {
        case REGISTER_STUDENT_REQUEST:
            return { loading: true }
        case REGISTER_STUDENT_SUCCESS:
            return { loading: false, created: true }
        case REGISTER_STUDENT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }

}


export const getStudentDetailReducer = (state = { student: {} }, action) => {

    switch (action.type) {
        case GET_STUDENT_DETAIL_REQUEST:
            return { loading: true, ...state }
        case GET_STUDENT_DETAIL_SUCCESS:
            return { loading: false, student: action.payload }
        case GET_STUDENT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const getStudentTranscriptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TRANSCRIPT_REQUEST:
            return { loading: true }
        case GET_TRANSCRIPT_SUCCESS:
            return { loading: false, transcript: action.payload }
        case GET_TRANSCRIPT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}


export const getMyMarksReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCORE_REQUEST:
            return { loading: true }
        case GET_SCORE_SUCCESS:
            return { loading: false, score: action.payload }
        case GET_SCORE_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const addRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_REQUEST_REQUEST:
            return { loading: true }
        case ADD_REQUEST_SUCCESS:
            return { loading: false, message: action.payload }
        case ADD_REQUEST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const studentMenuReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_MARK:
            return { profile: false, mark: true, events: false }
        case SHOW_PROFILE:
            return { profile: true, mark: false, events: false }
        case 'SHOW_EVENT_STUDENT':
            return { profile: false, mark: false, events: true }
        default:
            return state
    }
}

export const studentProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return { loading: true }
        case GET_PROFILE_SUCCESS:
            return { loading: false, student: action.payload }
        case GET_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

