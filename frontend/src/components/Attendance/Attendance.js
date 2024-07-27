import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAttendanceDate, setStudentAttendance, viewAttendances } from '../../actions/teacherActions';
import Spinner from '../Spinner/spinner'
import Message from '../message/Message'

import './Attendance.css'

const Attendance = () => {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [invalid, setInvalid] = useState(false)
    const [menu, setMenu] = useState('take')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: { homeRoomGrade, homeRoomYear } } = userLogin

    const setAttendance = useSelector(state => state.setAttendance)
    let { error2, students, loading2 } = setAttendance

    const viewAttendance = useSelector(state => state.viewAttendance)
    const { loadingAttendance, attendance, attendanceError } = viewAttendance

    const generateAttendanceHandler = () => {

        const date = `${day.trim()}/${month.trim()}/${year.trim()}`

        if (parseInt(day) <= 0 || parseInt(day) > 30 || parseInt(month) <= 0 || parseInt(month) > 12 || day === '' || month === '' || year === '') {
            setInvalid(true)

        } else {
            setInvalid(false)
            dispatch(setAttendanceDate(homeRoomGrade, homeRoomYear, date))
        }
    }

    const studentAttendanceHandler = (id) => {
        dispatch(setStudentAttendance(homeRoomGrade, id))
    }

    const viewAttendanceHandler = () => {

        const date = `${day.trim()}/${month.trim()}/${year.trim()}`

        if (parseInt(day) <= 0 || parseInt(day) > 30 || parseInt(month) <= 0 || parseInt(month) > 12 || day === '' || month === '' || year === '') {
            setInvalid(true)

        } else {
            setInvalid(false)
            dispatch(viewAttendances(homeRoomGrade, homeRoomYear, date))
        }

      
    }

    return (
        <div className="attendance-container">

            <div className="options-container">
                <div className="attendance-menu">
                    <select onChange={(e) => {
                        setMenu(e.target.value)
                        setDay('')
                        setMonth('')
                        setYear('')
                        }}>
                        <option value="take">Take Attendance</option>
                        <option value="view">View Attendance</option>
                    </select>
                </div>

             { menu === 'take' && <div className="attendance__date-container">
                    <div>
                        <label>Take Attendance</label>
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="text" placeholder="day" onChange={(e) => { setInvalid(false); setDay(e.target.value) }} />
                        <input type="text" placeholder="month" onChange={(e) => { setInvalid(false); setMonth(e.target.value) }} />
                        <input type="text" placeholder="year" onChange={(e) => { setInvalid(false); setYear(e.target.value) }} />
                        <button onClick={generateAttendanceHandler} >Enter</button>
                    </div>

                </div>}  

                { menu === 'view' && <div className="attendance__date-container">
                    <div>
                        <label>View Attendance</label>
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="text" placeholder="day" onChange={(e) => { setInvalid(false); setDay(e.target.value) }} />
                        <input type="text" placeholder="month" onChange={(e) => { setInvalid(false); setMonth(e.target.value) }} />
                        <input type="text" placeholder="year" onChange={(e) => { setInvalid(false); setYear(e.target.value) }} />
                        <button onClick={viewAttendanceHandler} >View</button>
                    </div>
                </div> }
            </div>

           { menu === 'take' && <div>
            {loading2 && <div className="spinner-con"><Spinner /></div>}
            {error2 && menu === 'take' && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error2}</Message> </div>}
            {invalid && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> Invalid Date!</Message> </div>}
            {!invalid  && students && <table>
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Present</th>
                    </tr>
                </tbody>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.username}</td>
                            <td><input type="checkbox" onChange={studentAttendanceHandler.bind(this, student._id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>}
            </div> } 
  
        { menu === 'view' && <div> 

        { loadingAttendance && <Spinner /> }
        {attendanceError && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {attendanceError}</Message> </div>}
            {invalid && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> Invalid Date!</Message> </div>}
        
        {!invalid && menu === 'view' && attendance && <table>
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Present</th>
                    </tr>
                </tbody>
                <tbody>
                    {attendance.map((student) => (
                        <tr key={student.username}>
                            <td>{student.name}</td>
                            <td>{student.username}</td>
                            <td><input type="checkbox" checked = { student.present ?  student.present: false } /></td>
                        </tr>
                    ))}
                </tbody>
            </table>} </div>}
        </div>
    );
}

export default Attendance;