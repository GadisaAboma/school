import {
    ADD_EVENT_FAIL,
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADMIN_PROFILE_FAIL,
    ADMIN_PROFILE_REQUEST,
    ADMIN_PROFILE_SUCCESS,
    CHANGE_SEMISTER_ERROR,
    CHANGE_SEMISTER_REQUEST,
    CHANGE_SEMISTER_SUCCESS,
    DELETE_EVENT_FAIL,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_REQUEST_FAIL,
    DELETE_REQUEST_REQUEST,
    DELETE_REQUEST_SUCCESS,
    DELETE_TEACHER_FAIL,
    DELETE_TEACHER_REQUEST,
    DELETE_TEACHER_SUCCESS,
    EDIT_EVENT_FAIL,
    EDIT_EVENT_REQUEST,
    EDIT_EVENT_SUCCESS,
    GET_REQUESTS_ERROR,
    GET_REQUESTS_REQUEST,
    GET_REQUESTS_SUCCESS,
    GET_STUDENT_FAIL,
    GET_STUDENT_REQUEST,
    GET_STUDENT_SUCCESS,
    NEW_REQUESTS_COUNT_FAIL,
    NEW_REQUESTS_COUNT_REQUEST,
    NEW_REQUESTS_COUNT_SUCCESS,
    REMOVE_ASSIGN_FAIL,
    REMOVE_ASSIGN_REQUEST,
    REMOVE_ASSIGN_SUCCESS,
    REQUEST_APPROVE_FAIL,
    REQUEST_APPROVE_REQUEST,
    REQUEST_APPROVE_SUCCESS,
    RESET_ASSIGNED_FAIL,
    RESET_ASSIGNED_REQUEST,
    RESET_ASSIGNED_SUCCESS,
    SHOW_ADMIN, SHOW_ALL_TEACHER,
    SHOW_EVENTS,
    SHOW_REQUESTS, SHOW_SETTINGS,
    SHOW_STUDENT, SHOW_TRANSCRIPT,
    TEACHER_DETAIL_FAIL,
    TEACHER_DETAIL_REQUEST,
    TEACHER_DETAIL_SUCCESS,
    UPDATE_ADMIN_FAIL,
    UPDATE_ADMIN_REQUEST,
    UPDATE_ADMIN_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_TEACHER_FAIL,
    UPDATE_TEACHER_REQUEST,
    UPDATE_TEACHER_SUCCESS
} from "../constants/adminConstants";

import axios from 'axios'
import { GET_TEACHERS_SUCCESS } from "../constants/teacherConstants";

export const showAllTeacher = () => (dispatch) => {

    dispatch({
        type: SHOW_ALL_TEACHER
    })

}

export const showAdminProfile = () => (dispatch) => {

    dispatch({
        type: SHOW_ADMIN
    })
}

export const showEvents = () => (dispatch) => {

    dispatch({
        type: SHOW_EVENTS
    })

}
export const showTranscript = () => (dispatch) => {

    dispatch({
        type: SHOW_TRANSCRIPT
    })

}

export const showSettings = () => (dispatch) => {
    dispatch({
        type: SHOW_SETTINGS
    })
}

export const showRequests = () => (dispatch) => {
    dispatch({
        type: SHOW_REQUESTS
    })
}

export const showStudent = () => (dispatch) => {
    dispatch({
        type: SHOW_STUDENT
    })
}


export const changeSemister = (semister) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CHANGE_SEMISTER_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put('/api/admin/changeSemister', { semister }, config)


        dispatch({
            type: CHANGE_SEMISTER_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: CHANGE_SEMISTER_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const getRequests = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_REQUESTS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/request/getRequests', config)

        dispatch({
            type: GET_REQUESTS_SUCCESS,
            payload: data
        })



    } catch (error) {
       
        dispatch({
            type: GET_REQUESTS_ERROR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const approveRequest = (username) => async (dispatch, getState) => {
    try {
        dispatch({
            type: REQUEST_APPROVE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/approveRequest', { username }, config)

        dispatch({
            type: REQUEST_APPROVE_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: REQUEST_APPROVE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const getNewRequestsCount = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: NEW_REQUESTS_COUNT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/request/countNewRequests', config)

        dispatch({
            type: NEW_REQUESTS_COUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_REQUESTS_COUNT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const deleteRequest = (username) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_REQUEST_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post('/api/request/deleteRequest', { username }, config)


        dispatch({
            type: DELETE_REQUEST_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: DELETE_REQUEST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const deleteTeacher = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_TEACHER_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post('/api/admin/deleteTeacher', { id }, config)


        dispatch({
            type: DELETE_TEACHER_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: DELETE_TEACHER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const filterTeacher = (teachers, filteredTeachers) => dispatch => {
    dispatch({
        type: GET_TEACHERS_SUCCESS,
        filtered: filteredTeachers,
        payload: teachers
    })
}

export const getStudent = (username) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_STUDENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put('/api/admin/getStudent', { username }, config)


        dispatch({
            type: GET_STUDENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_STUDENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const updateStudent = (username, password, name, id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_STUDENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/updateStudent/' + id, { username, name, password }, config)


        dispatch({
            type: UPDATE_STUDENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_STUDENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const getAdminProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/admin/getAdminProfile', config)


        dispatch({
            type: ADMIN_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const updateAdmin = (name, username, password) => async (dispatch, getState) => {

    try {
        dispatch({
            type: UPDATE_ADMIN_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put('/api/admin/updateAdmin', { username, name, password }, config)


        dispatch({
            type: UPDATE_ADMIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_ADMIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}



export const resetAssignedTeachers = () => async (dispatch, getState) => {

    try {
        dispatch({
            type: RESET_ASSIGNED_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/admin/resetAssignedTeachers', config)


        dispatch({
            type: RESET_ASSIGNED_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: RESET_ASSIGNED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}



export const getTeacherDetail = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: TEACHER_DETAIL_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/admin/getTeacherDetail/' + id, config)


        dispatch({
            type: TEACHER_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TEACHER_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const removeTeacherAssign = (teacherId, assignId) => async (dispatch, getState) => {

    try {
        dispatch({
            type: REMOVE_ASSIGN_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/removeTeacherAssign', { teacherId, assignId }, config)


        dispatch({
            type: REMOVE_ASSIGN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: REMOVE_ASSIGN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const addEventAction = (description) => async (dispatch, getState) => {

    try {
        dispatch({
            type: ADD_EVENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/addEvent', { description }, config)


        dispatch({
            type: ADD_EVENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_EVENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const deleteEventAction = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: DELETE_EVENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/admin/deleteEvent/'+id, config)


        dispatch({
            type: DELETE_EVENT_SUCCESS,
            payload: data
        })

    } catch (error) {
     dispatch({
            type: DELETE_EVENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const editEventAction = (id, description) => async (dispatch, getState) => {

    try {
        dispatch({
            type: EDIT_EVENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/editEvent', {id, description}, config)


        dispatch({
            type: EDIT_EVENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        alert(error.response.data.message)
     dispatch({
        
            type: EDIT_EVENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}



export const updateTeacher = (id, name, username, password) => async (dispatch, getState) => {

    try {
        dispatch({
            type: UPDATE_TEACHER_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/admin/updateTeacher', {id, name, username, password}, config)


        dispatch({
            type: UPDATE_TEACHER_SUCCESS,
            payload: data
        })

    } catch (error) {
     dispatch({
        
            type: UPDATE_TEACHER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}



export const givePermission = (id) => async (dispatch, getState) => {

    try {
        
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post('/api/admin/givePermission', {id}, config)


    } catch (error) {
     
    }
}
