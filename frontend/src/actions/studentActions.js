import {
    ADD_REQUEST_REQUEST,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_FAIL,
    GET_SCORE_FAIL,
    GET_SCORE_REQUEST,
    GET_SCORE_SUCCESS,
    GET_STUDENT_DETAIL_FAIL,
    GET_STUDENT_DETAIL_REQUEST,
    GET_STUDENT_DETAIL_SUCCESS,
    GET_TRANSCRIPT_FAIL,
    GET_TRANSCRIPT_REQUEST,
    GET_TRANSCRIPT_SUCCESS,
    REGISTER_STUDENT_FAIL,
    REGISTER_STUDENT_REQUEST,
    REGISTER_STUDENT_SUCCESS,
    SHOW_MARK,
    SHOW_PROFILE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
} from "../constants/studentConstants";
import axios from 'axios'

export const registerStudents = (name, username, password, age, gender, grade, year) => async (dispatch, getState) => {

    try {
        dispatch({
            type: REGISTER_STUDENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post('/api/admin/createStudent', { name, username, password, age, gender, grade, year }, config)
        dispatch({
            type: REGISTER_STUDENT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: REGISTER_STUDENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const getStudentDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_STUDENT_DETAIL_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/teacher/getStudent/' + id, config)


        dispatch({
            type: GET_STUDENT_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_STUDENT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const getStudentTranscript = (username) => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_TRANSCRIPT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/getTranscript', { username }, config)

        dispatch({
            type: GET_TRANSCRIPT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_TRANSCRIPT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const getMyMarks = (id) => async (dispatch) => {

    try {
        dispatch({
            type: GET_SCORE_REQUEST
        })

        /*  const { userLogin: { userInfo } } = getState()
 
         const config = {
             headers: {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${userInfo.token}`
             }
         } */

        const { data } = await axios.get('/api/student/getMyMarks/' + id/* ,  config */)


        dispatch({
            type: GET_SCORE_SUCCESS,
            payload: data
        })


    } catch (error) {
        alert(error.response.data.message)
        dispatch({
            type: GET_SCORE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const addRequest = (name, username, total, grade) => async (dispatch) => {

    try {
        dispatch({
            type: ADD_REQUEST_REQUEST
        })

        const { data } = await axios.post('/api/request/addRequest', { name, username, total, grade })

        dispatch({
            type: ADD_REQUEST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_REQUEST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const showMarks = () => (dispatch) => {

    dispatch({
        type: SHOW_MARK
    })

}
export const showStudentEvent = () => (dispatch) => {

    dispatch({
        type: 'SHOW_EVENT_STUDENT'
    })

}

export const showProfile = () => (dispatch) => {

    dispatch({
        type: SHOW_PROFILE
    })

}

export const getStudentProfile = (id) => async (dispatch) => {
    try {

        dispatch({
            type: GET_PROFILE_REQUEST
        })

        const data = await axios.get('/api/student/myProfile/' + id)

        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data

        })

    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}