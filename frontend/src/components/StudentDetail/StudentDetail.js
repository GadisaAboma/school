import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getStudentDetails } from '../../actions/studentActions';
import Spinner from '../Spinner/spinner'
import Message from '../message/Message'

import './StudentDetail.css'
import { setStudentMark } from '../../actions/teacherActions';

const TeacherDetail = ({ match, history }) => {

    const [mark, setMark] = useState('')
    const [invalidMark, setInvalidMark] = useState(false)

    const studentDetail = useSelector(state => state.studentDetail)
    const { student, loading, error } = studentDetail

    const setStudentsMark = useSelector(state => state.setStudentsMark)
    const { loading2, error2, message } = setStudentsMark

    const currentSemister = useSelector(state => state.currentSemister)
    const { semister } = currentSemister

    const mySubject = useSelector(state => state.mySubject) 

    const { subject } = mySubject

    const id = match.params.id
 
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getStudentDetails(id))


    }, [dispatch, match, id])


    const setStudentMarkHandler = () => {

        if(parseInt(mark) >= 0 && parseInt(mark) <= 100) {
            setInvalidMark(false)
            dispatch(setStudentMark(id, student.currentGrade, semister ,subject , mark))
        }
        else {
            setInvalidMark(true)
        }
      
    }

    return (
        <div className="student-detail-container">
            <button onClick={() => history.goBack()} className="back-from-student-detail"><i className="fa fa-angle-double-left"></i>Back</button>
            { error ? <Message background="rgb(240, 186, 186)">{error}</Message>:  loading ? <Spinner /> :
                <div className="student-detail-container-inner">
                { invalidMark && <Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> Invalid Mark</Message> }
                 { loading2 && <Spinner /> }
                 { error2 && <Message background="rgb(240, 186, 186)">{error2}</Message>}
                 {message && <Message  background="#80aaff"><i className="fa fa-check-circle"></i> {message}</Message>}
                    { student && <div>
                     <div className="student-name">
                        <label>Full Name:</label>
                        <h3>{student.name}</h3>
                    </div>
                    <div className="student-username">
                        <label>Username:</label>
                        <h3>{student.username}</h3>
                    </div>
                    <div className="student-username">
                        <label>Current Grade:</label>
                        <h3>{student.currentGrade}</h3>
                    </div>
                    <div className="student-username">
                        <label>Current Year:</label>
                        <h3>{student.currentYear}</h3>
                    </div>
                    <div className="student-username">
                        <label>Mark 100%:</label>
                        <input type="text" placeholder="mark" onChange={(e) => setMark(e.target.value)} />
                    </div>
                    <button onClick={setStudentMarkHandler} className="set-mark"><i className="fa fa-save save-btn"></i>Save</button>
                </div>}   
                     </div>
                   }
        
        </div>
    );
}

export default TeacherDetail;