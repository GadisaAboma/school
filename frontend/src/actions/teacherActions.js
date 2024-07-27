import {
    ASSIGN_TEACHER_FAIL,
    ASSIGN_TEACHER_REQUEST,
    ASSIGN_TEACHER_SUCCESS,
    GET_ATTENDANCE_FAIL,
    GET_ATTENDANCE_REQUEST,
    GET_ATTENDANCE_SUCCESS,
    GET_MYSTUDENTS_FAIL,
    GET_MYSTUDENTS_REQUEST,
    GET_MYSTUDENTS_SUCCESS,
    GET_STUDENT_FAIL,
    GET_STUDENT_REQUEST,
    GET_STUDENT_SUCCESS,
    GET_TEACHERS_FAIL,
    GET_TEACHERS_REQUEST,
    GET_TEACHERS_SUCCESS,
    GET_TEACHER_DETAIL_FAIL,
    GET_TEACHER_DETAIL_REQUEST,
    GET_TEACHER_DETAIL_SUCCESS,
    REGISTER_TEACHER_FAIL,
    REGISTER_TEACHER_REQUEST,
    REGISTER_TEACHER_SUCCESS,
    SET_ATTENDANCE_DATE_FAIL,
    SET_ATTENDANCE_DATE_REQUEST,
    SET_ATTENDANCE_DATE_SUCCESS,
    SET_STUDENT_MARK_FAIL,
    SET_STUDENT_MARK_REQUEST,
    SET_STUDENT_MARK_SUCCESS,
    SET_STUDENT_RANK_FAIL,
    SET_STUDENT_RANK_REQUEST,
    SET_STUDENT_RANK_SUCCESS,
    SET_SUBJECT,
    SHOW_ATTENDANCE,
    SHOW_RANK,
    SHOW_STUDENTS,
    SET_STUDENT_ATTENDANCE_FAIL,
    SET_STUDENT_ATTENDANCE_SUCCESS,
    SET_STUDENT_ATTENDANCE_REQUEST,
    VIEW_ATTENDANCE_REQUEST,
    VIEW_ATTENDANCE_SUCCESS,
    VIEW_ATTENDANCE_FAIL,
    GET_ATTENDANCE_REPORT_REQUEST,
    GET_ATTENDANCE_REPORT_SUCCESS,
    GET_ATTENDANCE_REPORT_FAIL
} from "../constants/teacherConstants";

import axios from 'axios'
import { ASSIGN_HOMEROOM_FAIL, ASSIGN_HOMEROOM_REQUEST, ASSIGN_HOMEROOM_SUCCESS } from "../constants/adminConstants";

export const registerTeachers = (name, username, password, major) => async (dispatch, getState) => {

    try {

        dispatch({
            type: REGISTER_TEACHER_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post('/api/admin/createTeacher', { name, username, password, major }, config)

        dispatch({
            type: REGISTER_TEACHER_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: REGISTER_TEACHER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const getAllTeachers = () => async (dispatch, getState) => {

    try {

        dispatch({
            type: GET_TEACHERS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/admin/getTeachers', config)

        dispatch({
            type: GET_TEACHERS_SUCCESS,
            filtered: data,
            payload: data 
        })

    } catch (error) {
        dispatch({
            type: GET_TEACHERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}
export const getTeacherDetails= (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_TEACHER_DETAIL_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get('/api/admin/getTeacher/'+ id, config)


        dispatch({
            type: GET_TEACHER_DETAIL_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: GET_TEACHER_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }


}
 export const assignTeacher= (id, assignedGrade, assignedSubject, assignedYear, name) => async (dispatch, getState) => {

    try {
        dispatch({
            type: ASSIGN_TEACHER_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

      const { data } = await axios.put('/api/admin/assignTeacher/'+ id, { assignedGrade, assignedSubject, assignedYear, name }, config)

        dispatch({
            type: ASSIGN_TEACHER_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ASSIGN_TEACHER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

} 



export const getMyStudents= (currentYear, currentGrade) => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_MYSTUDENTS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 

        const { data } = await axios.post('/api/teacher/myStudents', { currentYear, currentGrade }, config)


        dispatch({
            type: GET_MYSTUDENTS_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: GET_MYSTUDENTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }


}

export const setSubject = (subject) => (dispatch) => {
    
    dispatch({
        type: SET_SUBJECT,
        payload: subject
    })

}

export const setStudentMark = (id, currentGrade, currentSemister, subject, mark) => async (dispatch, getState) => {

    try {
        dispatch({
            type: SET_STUDENT_MARK_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 

        const { data } = await axios.post('/api/teacher/setStudentMark/'+ id, { currentGrade, currentSemister, subject, mark }, config)


        dispatch({
            type: SET_STUDENT_MARK_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: SET_STUDENT_MARK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}
export const showAttendance = () => dispatch => {
    dispatch({
        type: SHOW_ATTENDANCE
    })
}

export const showEvents = () => dispatch => {
    dispatch({
        type: 'SHOW_EVENTS_TEACHER'
    })
}

export const showAttendanceReport = () => dispatch => {
    dispatch({
        type: 'SHOW_ATTENDANCE_REPORT'
    })
}

export const showStudents = () => dispatch => {
    dispatch({
        type: SHOW_STUDENTS
    })
}
export const showRank = () => dispatch => {
    dispatch({
        type: SHOW_RANK
    })
}

export const getAttendances = (year, grade) => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_ATTENDANCE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 
        const { data } = await axios.post('/api/teacher/getAttendance', { year, grade }, config)

        dispatch({
            type: GET_ATTENDANCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ATTENDANCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const setStudentRank = (id, grade, sem, rank) => async (dispatch, getState) =>  {

    try {

        dispatch({
            type: SET_STUDENT_RANK_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 
        const { data } = await axios.post('/api/teacher/setRank', { id, grade, sem, rank }, config)

        dispatch({
            type: SET_STUDENT_RANK_SUCCESS,
            payload: data
        })

    } catch(error) {
        alert(error.response.data.message )
        dispatch({
            type: SET_STUDENT_RANK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const setAttendanceDate = (grade, year, date) => async (dispatch, getState) =>  {

    try {

        dispatch({
            type: SET_ATTENDANCE_DATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 
        const { data } = await axios.post('/api/teacher/setAttendanceDate', {grade, year, date}, config)

        dispatch({
            type: SET_ATTENDANCE_DATE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: SET_ATTENDANCE_DATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const setStudentAttendance = (grade, id) => async (dispatch, getState) =>  {

    try {

        dispatch({
            type: SET_STUDENT_ATTENDANCE_REQUEST
        })
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 

        const { data } = await axios.post('/api/teacher/setStudentAttendance', {grade, id}, config)

        dispatch({
            type: SET_STUDENT_ATTENDANCE_SUCCESS,
            payload: data
        })

    } catch(error) {
        console.log(error.response.data.message)
        dispatch({
            type: SET_STUDENT_ATTENDANCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export const getStudent = (year, grade) => async (dispatch, getState) => {


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

        const { data } = await axios.post('/api/teacher/getAttendance', { year, grade }, config)


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


export const clearError = () => dispatch => {
    dispatch({
        type: 'CLEAR_ERROR'
    })
}

export const viewAttendances = (grade, year, date) => async (dispatch, getState) => {

    try {
        dispatch({
            type: VIEW_ATTENDANCE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 

        const { data } = await axios.post('/api/teacher/viewAttendance', {grade, year, date}, config)


        dispatch({
            type: VIEW_ATTENDANCE_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: VIEW_ATTENDANCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}

export const assignHomeroomTeacher = (id, grade, year) => async (dispatch, getState) => {

    try {
        dispatch({
            type: ASSIGN_HOMEROOM_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 

        const { data } = await axios.post('/api/admin/assignHomeroomTeacher', {id, grade, year}, config)


        dispatch({
            type: ASSIGN_HOMEROOM_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: ASSIGN_HOMEROOM_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const generateAttendanceReport = (grade, year) => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_ATTENDANCE_REPORT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } 

        const { data } = await axios.post('/api/teacher/generateAttendanceReport', {grade, year}, config)


        dispatch({
            type: GET_ATTENDANCE_REPORT_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: GET_ATTENDANCE_REPORT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }

}


export const showTeacherRequest = () => (dispatch) => {
    dispatch({
        type: 'SHOW_REQUEST_TEACHER'
    })
}