import {

    REGISTER_TEACHER_REQUEST,
    REGISTER_TEACHER_SUCCESS,
    REGISTER_TEACHER_FAIL,
    GET_TEACHERS_REQUEST,
    GET_TEACHERS_SUCCESS,
    GET_TEACHERS_FAIL,
    GET_TEACHER_DETAIL_REQUEST,
    GET_TEACHER_DETAIL_SUCCESS,
    GET_TEACHER_DETAIL_FAIL,
    ASSIGN_TEACHER_REQUEST,
    ASSIGN_TEACHER_SUCCESS,
    ASSIGN_TEACHER_FAIL,
    GET_MYSTUDENTS_REQUEST,
    GET_MYSTUDENTS_SUCCESS,
    GET_MYSTUDENTS_FAIL,
    SET_SUBJECT,
    SET_STUDENT_MARK_REQUEST,
    SET_STUDENT_MARK_SUCCESS,
    SET_STUDENT_MARK_FAIL,
    SHOW_STUDENTS,
    SHOW_ATTENDANCE,
    GET_ATTENDANCE_REQUEST,
    GET_ATTENDANCE_SUCCESS,
    GET_ATTENDANCE_FAIL,
    SHOW_RANK,
    SET_ATTENDANCE_DATE_REQUEST,
    SET_ATTENDANCE_DATE_SUCCESS,
    SET_ATTENDANCE_DATE_FAIL,
    SET_STUDENT_ATTENDANCE_REQUEST,
    SET_STUDENT_ATTENDANCE_SUCCESS,
    SET_STUDENT_ATTENDANCE_FAIL,
    GET_STUDENT_REQUEST,
    GET_STUDENT_SUCCESS,
    GET_STUDENT_FAIL,
    VIEW_ATTENDANCE_REQUEST,
    VIEW_ATTENDANCE_SUCCESS,
    VIEW_ATTENDANCE_FAIL,
    GET_ATTENDANCE_REPORT_REQUEST,
    GET_ATTENDANCE_REPORT_SUCCESS,
    GET_ATTENDANCE_REPORT_FAIL

} from "../constants/teacherConstants"
import { USER_LOGOUT } from "../constants/userConstants"

export const registerTeacherReducer = (state = {}, action) => {

    switch (action.type) {
        case REGISTER_TEACHER_REQUEST:
            return { loading: true }
        case REGISTER_TEACHER_SUCCESS:
            return { loading: false, created: true }
        case REGISTER_TEACHER_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return state
        default:
            return state
    }

}

export const getTeachersReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_TEACHERS_REQUEST:
            return { loading: true }
        case GET_TEACHERS_SUCCESS:
            return { loading: false, filteredTeachers: action.filtered, teachers: action.payload  }
        case GET_TEACHERS_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }

}

export const getTeacherDetailReducer = (state = { teacher: {} }, action) => {

    switch (action.type) {
        case GET_TEACHER_DETAIL_REQUEST:
            return { loading: true, ...state }
        case GET_TEACHER_DETAIL_SUCCESS:
            return { loading: false, teacher: action.payload }
        case GET_TEACHER_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const assignTeacherReducer = (state = {}, action) => {

    switch (action.type) {
        case ASSIGN_TEACHER_REQUEST:
            return { loading2: true }
        case ASSIGN_TEACHER_SUCCESS:
            return { loading2: false, message: action.payload, assigned: true }
        case ASSIGN_TEACHER_FAIL:
            return { loading2: false, error2: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const getMyStudentsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_MYSTUDENTS_REQUEST:
            return { loading: true }
        case GET_MYSTUDENTS_SUCCESS:
            return { loading: false, students: action.payload }
        case GET_MYSTUDENTS_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }

}


export const setSubjectReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_SUBJECT:
            return { subject: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const setStudentMarkReducer = (state = {}, action) => {

    switch (action.type) {
        case SET_STUDENT_MARK_REQUEST:
            return { loading2: true }
        case SET_STUDENT_MARK_SUCCESS:
            return { loading2: false, message: action.payload }
        case SET_STUDENT_MARK_FAIL:
            return { loading2: false, error2: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }

}

export const teacherMenuReducer = (state = {}, action) => {
    switch(action.type) {
        case SHOW_STUDENTS:
            return { attendance: false, student: true, rank: false, events: false, attendanceReport: false, requests: false }
        case SHOW_ATTENDANCE:
            return { attendance: true, student: false, rank: false, events: false, attendanceReport: false,  requests: false }
        case SHOW_RANK:
            return { attendance: false, student: false, rank: true, events: false, attendanceReport: false,  requests: false }
        case 'SHOW_EVENTS_TEACHER':
            return {  attendance: false, student: false, rank: false, events: true, attendanceReport: false,  requests: false }
        case 'SHOW_ATTENDANCE_REPORT':
            return { attendance: false, student: false, rank: false, events: false, attendanceReport: true,  requests: false }
        case 'SHOW_REQUEST_TEACHER':
            return { attendance: false, student: false, rank: false, events: false, attendanceReport: false,  requests: true }
        default:
            return state
    }
}

export const getAttendanceReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_ATTENDANCE_REQUEST:
            return { loading: true }
        case GET_ATTENDANCE_SUCCESS:
            return { loading: false, students: action.payload }
        case GET_ATTENDANCE_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }

}

export const setStudentRankReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_STUDENT_MARK_REQUEST:
            return { loading: true }
        case SET_STUDENT_MARK_SUCCESS:
            return { loading: false }
        case SET_STUDENT_MARK_FAIL:
            return { laoding: false }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const setAttendanceDateReducer = (state = {}, action) => {

   switch(action.type) {
       case SET_ATTENDANCE_DATE_REQUEST:
           return { loading2: true }
        case SET_ATTENDANCE_DATE_SUCCESS:
            return { loading2: false, students: action.payload }
        case SET_ATTENDANCE_DATE_FAIL:
            return { loading2: false, error2: action.payload}
        case 'CLEAR_ERROR':
            return { error2: '' }
        default:
            return state
   }

}

export const setStudentAttendanceReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_STUDENT_ATTENDANCE_REQUEST:
            return { loading: true }
        case SET_STUDENT_ATTENDANCE_SUCCESS:
            return { loading: false }
        case SET_STUDENT_ATTENDANCE_FAIL:
            return { loading: false }
        case USER_LOGOUT:
            return {}
        default: 
        return state
    }
}

export const getAttendanceStudentReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_STUDENT_REQUEST:
            return { loading: true }
        case GET_STUDENT_SUCCESS:
            return { loading: false, students: action.payload }
        case GET_STUDENT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }

}


export const viewAttendanceReducer = (state = {}, action) => {

    switch (action.type) {
        case VIEW_ATTENDANCE_REQUEST:
            return { loadingAttendance: true }
        case VIEW_ATTENDANCE_SUCCESS:
            return { loadingAttendance: false, attendance: action.payload }
        case VIEW_ATTENDANCE_FAIL:
            return { loadingAttendance: false, attendanceError: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }

}

export const getAttendanceReportReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_ATTENDANCE_REPORT_REQUEST:
            return { loading: true }
        case GET_ATTENDANCE_REPORT_SUCCESS:
            return { loading: false, attendanceReport: action.payload }
        case GET_ATTENDANCE_REPORT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

