import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TeacherDrawer from '../TeacherDrawer/TeacherDrawer';
import SelectedStudents from '../SelectedStudents/SelectedStudents';
import Spinner from '../Spinner/spinner'
import Message from '../message/Message';
import Attendance from '../Attendance/Attendance';

import './Teacher.css'
import Rank from '../Rank/Rank';
import Event from '../Events/Event';
import { showEvents } from '../../actions/teacherActions';
import Printer from '../AttendanceReport/AttendanceReport'
import Request from '../Requests/Requests'

const Teacher = ({ history }) => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const teacherMenu = useSelector(state => state.teacherMenu)
  const { student, attendance, rank, events, attendanceReport, requests } = teacherMenu

  const myStudents = useSelector(state => state.myStudents)

  const { loading, students, error } = myStudents

  useEffect(() => {
    if (!(userInfo && userInfo.role === 'teacher')) {
      history.push('/signin')
    }
    dispatch(showEvents())

  }, [dispatch, userInfo, history])
  return (
    <div className="admin-page">
      { userInfo && <TeacherDrawer /> }
      
        { student && loading && <div className="spinner-center"> <Spinner /></div>}
      { student && students && <SelectedStudents /> }
      {  student && error && <Message background="rgb(240, 186, 186)">{error}</Message> }
      { rank && <Rank /> }
      { events && <Event /> }
      { attendance && <Attendance /> }
      { attendanceReport && <Printer/> }
      { requests && <Request /> }
     
      
    </div>
  );
}

export default Teacher;