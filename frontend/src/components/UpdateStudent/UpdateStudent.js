import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getStudent, updateStudent } from '../../actions/adminActions';
import Spinner from '../Spinner/spinner'
import Message from '../message/Message';

import './UpdateStudent.css'

const UpdateStudent = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState()


    const getStudentState = useSelector(state => state.getStudent)
    const { loading, error, student } = getStudentState

    const updateStudentState = useSelector(state => state.updateStudent)
    const { loading2, error2, message } = updateStudentState
    

    
    const [name, setName] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(student) {
            setName(student.name)
            setNewUsername(student.username)
        }
    },[getStudentState, student])

    const keyHandler = (e) => {
        
       if(e.which === 13) {
           dispatch(getStudent(username))
       }
    } 

    const updateStudentHandler = () => {
        dispatch(updateStudent(newUsername, password, name, student._id))
    }

    return (
        <div className="transcript-container update">
            <div className="transcript-form-container upper-con">
                <input onChange={(e) => setUsername(e.target.value)} onKeyPress={keyHandler}  placeholder="Enter student username" />
                <i className="fa fa-search"></i>
            </div>
            { loading && <Spinner />}
            { loading2 && <Spinner />}
            { message && <div className="center-message"><Message background="#80aaff"><i className="fa fa-check-circle"></i> {message}</Message></div> }
            { error &&<div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error}</Message> </div> }
            { error2 &&<div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error2}</Message> </div> }
            { student && <div className="student__info-container">
                <div>
                    <span>Full Name</span>
                    <input onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <span>Username</span>
                    <input onChange={(e) => setNewUsername(e.target.value)} value={newUsername} />
                </div>
                <div>
                    <span>password</span>
                    <input onChange={(e) => setPassword(e.target.value)} />
                </div>
               <button onClick={updateStudentHandler} className="btn__update-student"><i className="fa fa-pen"> Update</i></button>
            </div> }
        </div>
    );
}

export default UpdateStudent;
