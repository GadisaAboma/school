import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAttendances, setStudentRank } from '../../actions/teacherActions';
import { getCurrentSemister } from '../../actions/userActions';
import Message from '../message/Message'
import Spinner from '../Spinner/spinner';

import './Rank.css'

const Rank = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: { homeRoomGrade, homeRoomYear } } = userLogin

    const getAttendance = useSelector(state => state.getAttendance)
    const { loading, error, students } = getAttendance

    const currentSemister = useSelector(state => state.currentSemister)
    const { semister } = currentSemister



    useEffect(() => {
        dispatch(getCurrentSemister())
        dispatch(getAttendances(homeRoomYear, homeRoomGrade))



    }, [dispatch, homeRoomGrade, homeRoomYear])

    return (
        <div className="rank-container">
            {loading && <div className="spinner-con"><Spinner /></div>}
            {error && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error}</Message> </div>}
            {students && semister && <table>
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Grade</th>
                        <th colSpan="3">Sem 1
                            <td>Total</td>
                            <td>Average</td>
                            <td>Rank</td>
                        </th>
                        <th colSpan="3">Sem 2
                            <td>Total</td>
                            <td>Average</td>
                            <td>Rank</td>
                         </th>
                         <th colSpan="2">
                         Average
                            <td>average</td>
                            <td>rank</td>
                         </th>
                        
                    </tr>
                </tbody>
                <tbody className="rank-inner">
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.username}</td>
                            <td>{student.currentGrade}</td>
                            <td>{(student.grades[student.currentGrade]['sem1'].total).toFixed(2)}</td>
                            <td>{(student.grades[student.currentGrade]['sem1'].average).toFixed(2)}</td>
                            <td><input type="number" onChange={(e) => {
                                dispatch(setStudentRank(student._id, homeRoomGrade, 'sem1', parseInt(e.target.value)))
                            }} /></td>
                            <td>{(student.grades[student.currentGrade]['sem2'].total)}</td>
                            <td>{(student.grades[student.currentGrade]['sem2'].average).toFixed(2)}</td>
                            <td><input type="number" onChange={(e) => {
                                dispatch(setStudentRank(student._id, homeRoomGrade, 'sem2', parseInt(e.target.value)))
                            }} /></td>
                            <td>{(student.grades[student.currentGrade].ava) && (student.grades[student.currentGrade].ava).toFixed(2)}</td>
                            <td><input type="number"  onChange={(e) => {
                                dispatch(setStudentRank(student._id, homeRoomGrade, 'ave', parseInt(e.target.value)))
                            }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}

export default Rank;
