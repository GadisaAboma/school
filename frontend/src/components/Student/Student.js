import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner/spinner';
import StudentDrawer from '../StudentDrawer/StudentDrawer';
import StudentScore from '../StudentScore/StudentScore';
import StudentProfile from '../StudentProfile/StudentProfile'
import Event from '../Events/Event'

import './Student.css'
import { showStudentEvent } from '../../actions/studentActions';
 
const Student = ({ history }) => {

  const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const { userInfo } = userLogin

    const myMark = useSelector(state => state.myMark)
    const { score, loading} = myMark

    const studentMenu = useSelector(state => state.studentMenu)
    const { mark, profile, events } = studentMenu

    useEffect(() => {
       if(!(userInfo && userInfo.role === 'student')){
        history.push('/signin')
       }

        dispatch(showStudentEvent())

    }, [userInfo, history, dispatch])

    return (
        <div className="student-page">
          <StudentDrawer />
          { loading && <div className="spinner-con"><Spinner /></div>}
          { mark && score && <StudentScore /> }
          { profile && <StudentProfile /> }
          { events &&  <Event />}
          
        </div>
    );
}
 
 
export default Student;