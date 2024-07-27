import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTeacherDetails, assignTeacher, assignHomeroomTeacher } from '../../actions/teacherActions';
import Spinner from '../Spinner/spinner'
import Message from '../message/Message'

import './TeacherDetail.css'

const TeacherDetail = ({ match, history }) => {

    const [grade, setGrade] = useState('1')
    const [subject, setSubject] = useState('Maths')
    const [year, setYear] = useState()
    const [homeRoomYear, setHomeRoomYear] = useState('')
    const [check, setCheck] = useState(false)
    const [checkRoom, setCheckRoom] = useState(false)
    const [homeRoomGrade, setHomeRoomGrade] = useState('')

    const dispatch = useDispatch()

    const getTeacherInfo = useSelector(state => state.getTeacherDetail)

    const { loading, teacher, error } = getTeacherInfo

    const getTeacherAssign = useSelector(state => state.assignTeacher)
    const { loading2, message, error2, assigned } = getTeacherAssign

    const homeroomTeacher = useSelector(state => state.homeroomTeacher)
    const { loading3, message2, error3 } = homeroomTeacher

    useEffect(() => {
        dispatch(getTeacherDetails(match.params.id))
    }, [dispatch, match])

    const assignTeacherHandler = () => {
        if (!year) {
            setCheck(true)
        }
        else {
            dispatch(assignTeacher(match.params.id, grade, subject, year, teacher.name))
            setCheck(false)
        }

    }

    const assignHomeroomTeacherHandler = () => {

        if (parseInt(homeRoomGrade) > 8 || parseInt(homeRoomGrade) < 1 || homeRoomYear === '' || homeRoomGrade === '') {
            setCheckRoom(true)
        } else {
            dispatch(assignHomeroomTeacher(match.params.id, homeRoomGrade, homeRoomYear))
        }
    }

    return (
        <div className="teacher-detail-container">
            <button onClick={() => history.goBack()} className="back-from-teacher-detail"><i className="fa fa-angle-double-left"></i> Back</button>


            {loading && <div className="spinner-con2"><Spinner /></div>}

            {error ? <Message background="rgb(240, 186, 186)">Failed To Load Teacher</Message> : teacher &&
                <div className="teacher-detail-container-inner">

                    <div className="left-container">

                        {loading2 && <Spinner />}
                        {check && <Message background="rgb(240, 186, 186)">Invalid Year</Message>}
                        {assigned && <Message background="#00b36b"><i className="fa fa-check-circle"></i> {message}</Message>}
                        {error2 && <Message background="rgb(240, 186, 186)">{error2}</Message>}
                        <div className="teacher-name">
                            <label>Full Name:</label>
                            <h3>{teacher.name}</h3>
                        </div>
                        <div className="teacher-major">
                            <label>Major In:</label>
                            <h3>{teacher.major}</h3>
                        </div>
                        <div className="select-container">
                            <label>Assign Grade</label>
                            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        {parseInt(grade) >= 1 && parseInt(grade) <= 4 && <div className="select-container">
                            <label>Assign Subject</label>
                            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                                <option value="Maths">Maths</option>
                                <option value="Geda">Geda</option>
                                <option value="Science">Science</option>
                                <option value="English">English</option>
                                <option value="AfanOromo">AfanOromo</option>
                                <option value="HPE">HPE</option>
                            </select>
                        </div>
                        }
                        {parseInt(grade) >= 5 && parseInt(grade) <= 6 && <div className="select-container">
                            <label>Assign Subject</label>
                            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                                <option value="Maths">Maths</option>
                                <option value="Science">Science</option>
                                <option value="Ogumma">Ogumma</option>
                                <option value="Muziqa">Muziqa</option>
                                <option value="AfanOromo">AfanOromo</option>
                                <option value="Geda">Geda</option>
                                <option value="Hawassa">Hawassa</option>
                                <option value="Amharic">Amharic</option>
                                <option value="English">English</option>
                                <option value="HPE">HPE</option>
                            </select>
                        </div>}

                        {parseInt(grade) >= 7 && parseInt(grade) <= 8 && <div className="select-container">
                            <label>Assign Subject</label>
                            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                                <option value="Maths">Maths</option>
                                <option value="Biology">Biology</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="English">English</option>
                                <option value="AfanOromo">AfanOromo</option>
                                <option value="Geda">Geda</option>
                                <option value="Hawassa">Hawassa</option>
                                <option value="Amharic">Amharic</option>
                                <option value="Physics">Physics</option>
                                <option value="HPE">HPE</option>
                            </select>

                        </div>}

                        <div className="assign-year">
                            <label>Assign Year</label>
                            <input onChange={(e) => setYear(e.target.value)} type="number" placeholder="Assign year" />
                        </div>
                        <button onClick={assignTeacherHandler} className="btn-assign"><i className="fa fa-pen"></i> Assign</button>
                    </div>

                    <div className="homeroom-teacher">
                        {checkRoom && <Message background="rgb(240, 186, 186)">Invalid Assign</Message>}
                        { loading3 && <Spinner /> }
                        { error3 && <Message background="rgb(240, 186, 186)">{error3}</Message> }
                        {message2 && <Message background="#00b36b"><i className="fa fa-check-circle"></i> {message2}</Message>}
                       
                        <label>Homeroom Grade </label>
                        <input type="number" placeholder="grade" onChange={(e) => {setHomeRoomGrade(e.target.value); setCheckRoom(false)}} /><br /><br />
                        <label>Homeroom Year </label>
                        <input type="number" placeholder="year" onChange={(e) => {setHomeRoomYear(e.target.value); setCheckRoom(false)}} />
                        <div>
                            <button onClick={assignHomeroomTeacherHandler}><i className="fa fa-pen"></i>Assign</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
}


export default TeacherDetail;