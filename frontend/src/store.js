import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    showTeacherModalReducer,
    getCurrentSemsiter
} from './reducers/userReducers'
import {
    registerTeacherReducer,
    getTeachersReducer,
    getTeacherDetailReducer,
    assignTeacherReducer,
    getMyStudentsReducer,
    setSubjectReducer,
    setStudentMarkReducer,
    teacherMenuReducer,
    getAttendanceReducer,
    setAttendanceDateReducer,
    getAttendanceStudentReducer,
    viewAttendanceReducer,
    getAttendanceReportReducer
} from './reducers/teacherReducers'
import {
    registerStudentReducer,
    getStudentDetailReducer,
    getStudentTranscriptReducer,
    getMyMarksReducer,
    addRequestReducer,
    studentMenuReducer,
    studentProfileReducer
} from './reducers/studentReducers'
import {
    showTeacherReducer,
    changeSemisterReducer,
    getRequestsReducer,
    approveRequestReducer,
    countOfNewRequestsReducer,
    deleteRequestReducer,
    deleteTeacherReducer,
    getStudentReducer,
    updateStudentReducer,
    getAdminProfileReducer,
    updateAdminReducer,
    resetAssignedTeachersReducer,
    assignHomeroomTeacherReducer,
    teacherDetailReducer,
    removeTeacherAssignReducer,
    addEventReducer,
    getEventReducer,
    deleteEventReducer,
    editEventReducer,
    updateTeacherReducer
} from './reducers/adminReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    teacherModal: showTeacherModalReducer,
    registerTeacher: registerTeacherReducer,
    registerStudent: registerStudentReducer,
    getTeachers: getTeachersReducer,
    getTeacherDetail: getTeacherDetailReducer,
    showTeacher: showTeacherReducer,
    assignTeacher: assignTeacherReducer,
    myStudents: getMyStudentsReducer,
    changeSemister: changeSemisterReducer,
    studentDetail: getStudentDetailReducer,
    mySubject: setSubjectReducer,
    currentSemister: getCurrentSemsiter,
    setStudentsMark: setStudentMarkReducer,
    studentTranscript: getStudentTranscriptReducer,
    myMark: getMyMarksReducer,
    studentRequests: getRequestsReducer,
    addRequest: addRequestReducer,
    approveRequest: approveRequestReducer,
    newRequestsCount: countOfNewRequestsReducer,
    deleteRequest: deleteRequestReducer,
    deleteTeacher: deleteTeacherReducer,
    studentMenu: studentMenuReducer,
    studentProfile: studentProfileReducer,
    getStudent: getStudentReducer,
    updateStudent: updateStudentReducer,
    teacherMenu: teacherMenuReducer,
    getAttendance: getAttendanceReducer,
    setAttendance: setAttendanceDateReducer,
    getStudents: getAttendanceStudentReducer,
    viewAttendance: viewAttendanceReducer,
    adminProfile: getAdminProfileReducer,
    updateAdmin: updateAdminReducer,
    resetAssign: resetAssignedTeachersReducer,
    homeroomTeacher: assignHomeroomTeacherReducer,
    teacherDetail: teacherDetailReducer,
    removeAssign: removeTeacherAssignReducer,
    addEvent: addEventReducer,
    getEvents: getEventReducer,
    deleteEvent: deleteEventReducer,
    editEvent: editEventReducer,
    attendanceReport: getAttendanceReportReducer,
    updateTeacher: updateTeacherReducer,
})

const userInfoFromStorage = localStorage.getItem('loginInfo') ?
    JSON.parse(localStorage.getItem('loginInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    teacherModal: { showModal: false }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store