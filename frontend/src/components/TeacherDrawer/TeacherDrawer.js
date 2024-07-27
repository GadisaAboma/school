import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyStudents, setSubject, showAttendance, showEvents, showRank, showStudents, showAttendanceReport } from '../../actions/teacherActions'
import './TeacherDrawer.css'

const TeacherDrawer = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: { assigned, homeRoomGrade } } = userLogin


    const openClasses = (e) => {
        applyStyles(e)
        dispatch(showStudents())
        setOpen(!open)
    }

    const getMyStudentsHandler = (event, currentYear, currentGrade, assignedSubject) => {

        dispatch(setSubject(assignedSubject))

        const list = document.getElementsByClassName('classes')
        const array = [...list]

        array.map((element) => {
            if (event.target === element) {
                return element.classList.add('active-grade')
            }
            else {
                return element.classList.remove('active-grade')
            }
        })
        dispatch(getMyStudents(currentYear, currentGrade))

    }

    const attendanceHandler = (e) => {
        setOpen(false)
        applyStyles(e)
        dispatch(showAttendance())

    }

    const rankHandler = (e) => {
        applyStyles(e)
        dispatch(showRank())
    }

    const showEventsHandler = (e) => {
        applyStyles(e)
        dispatch(showEvents())
    }

    const attendanceReportHandler = (e) => {
        applyStyles(e)
        dispatch(showAttendanceReport())
    }


    const applyStyles = (event) => {
        const list = document.getElementsByClassName('main-lists')
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
    useEffect(() => {
        document.getElementById('events').classList.add('active')
    }, [])

    return (
        <div className="teacher-sidedrawer">
            <h3>Teacher Dashboard</h3>
            <ul className="main-list-container">
                <li onClick={showEventsHandler} className="main-lists" id="events"> <i className="	fa fa-calendar-week teacher-icons"></i>Events</li>
                {homeRoomGrade && <li onClick={attendanceHandler} className="main-lists"><i className="fa fa-poll-h"></i> Attendances</li>}
                {homeRoomGrade && <li onClick={rankHandler} className="main-lists"><i className="fa fa-pen"></i> Set Rank</li>}
                {homeRoomGrade && <li onClick={attendanceReportHandler} className="main-lists"><i className="fa fa-pen"></i> Attendance Report</li>}
                <li className="main-lists" onClick={openClasses}>
                    {open ? <i className="fa fa-chevron-down  teacher-icons"></i>
                        : <i className="fa fa-chevron-right teacher-icons"></i>}
                    My Classes
                </li>
                <ul className="my-classes">
                    {open && assigned.map((current) => (
                        <li className="classes" onClick={(event) => getMyStudentsHandler(event, current.assignedYear, current.assignedGrade, current.assignedSubject)} key={current._id}>Grade {current.assignedGrade} {current.assignedSubject} </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}


export default TeacherDrawer;