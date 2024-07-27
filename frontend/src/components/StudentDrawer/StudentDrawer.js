import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyMarks, showMarks, showProfile, showStudentEvent } from '../../actions/studentActions'

import './StudentDrawer.css'

const StudentDrawer = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: { _id } } = userLogin

    const getMyMarksHandler = (e) => {

        applyStyle(e)
      
        dispatch(getMyMarks(_id))
        dispatch(showMarks())
    }

    const myProfilHandler = (e) => {
        applyStyle(e)
        dispatch(showProfile())

    }

    const applyStyle = (event) => {
        const list = document.getElementsByClassName('main-lists-student')
    
        const array = [...list]
    
        array.map((element) => {
            if (event.target === element) {
               return element.classList.add('active')
            }
            else {
               return element.classList.remove('active')
            }
        })
      }

      const showEventHandler = (e) => {
          applyStyle(e)
        dispatch(showStudentEvent())
    }

    useEffect(() => {
        document.getElementById('events').classList.add('active')
    }, [])

    

    return (
        <div className="student-sidedrawer">
            <h3>Student Dashboard</h3>
            <ul className="main-list-container-student">
                <li onClick={showEventHandler} className="main-lists-student" id="events"><i className="fa fa-calendar-week teacher-icons"></i>Events</li>
                <li className="main-lists-student" onClick={getMyMarksHandler}><i className="fa fa-list"></i> Get Marks</li>
                <li className="main-lists-student" onClick={myProfilHandler}><i className="fa fa-user"></i> My Profile</li>
            </ul>
        </div>
    );
}
export default StudentDrawer;