import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRequest} from '../../actions/studentActions';
import Message from '../message/Message'
import Spinner from '../Spinner/spinner'

import './StudentScore.css'

const StudentScore = () => {

    const dispatch = useDispatch()

    const myMark = useSelector(state => state.myMark)
    const { score: { semisterResult, gradeAverage } } = myMark

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const currentSemister = useSelector(state => state.currentSemister)
    const { semister } = currentSemister

    const addRequestState = useSelector(state => state.addRequest)

    const { loading, message, error } = addRequestState

    const subjects = Object.keys(semisterResult)

    const addRequestHandler = () => {
        dispatch(addRequest(userInfo.name, userInfo.username, gradeAverage, (userInfo.grade + 1)))
    }

    return (
        <div className="student__score-container">
            <h4>Full Name:   <span className="name-con">{userInfo.name}</span></h4>
            <h4>Grade:       <span className="grade-con">{userInfo.grade}</span></h4>
            <h4>Semister:    <span className="sem-con">{semister}</span></h4>
            <table>
                <tbody>
                    <tr>
                        <th>Subject</th>
                        <th>Score 100%</th>
                    </tr>
                </tbody>
                <tbody>
                    {subjects.map((subject) => (
                        <tr key={subject}>
                            <td>{subject}</td>
                            {semisterResult.average === semisterResult[subject] ? <td>{semisterResult[subject] === 0 ? '_' : semisterResult[subject].toFixed(1)}</td> : <td>{semisterResult[subject] === 0 ? '_' : semisterResult[subject]}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='infos'>
                {message && <Message background="#80aaff"><i className="fa fa-check-circle"></i> {message}</Message>}
                {error && <Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error}</Message>}
                {loading && <Spinner />}
            </div>

            {userInfo.grade < 8 && <div className="btn__pass-container"> <button onClick={addRequestHandler} className="btn-register  btn-pass">Register me for grade {userInfo.grade + 1}</button></div>}
        </div>
    );
}

export default StudentScore