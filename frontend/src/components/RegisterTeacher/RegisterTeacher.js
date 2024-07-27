import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTeachers, registerTeachers } from '../../actions/teacherActions';
import Message from '../message/Message'
import Spinner from '../Spinner/spinner'

import './RegisterTeacher.css'

const RegisterTeacher = ({ history }) => {

    const [ fullName, setFullName ] = useState('')
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ major, setMajor ] = useState('')

    const dispatch = useDispatch()

    const registerTeacherFields = useSelector(state => state.registerTeacher)

    const { loading, error, created } = registerTeacherFields


    const closeTeacher = () => {
       history.goBack()
    }

    const registerTeacherHandler = (e) => {
        e.preventDefault()
            dispatch(registerTeachers(fullName, userName, password, major))
            dispatch(getAllTeachers())
    }

    const checkName = (e) => {

        if(/\d/.test(e.target.value)) {
            return false
        } else {
            setFullName(e.target.value)
        }
     }

    const checkMajor = (e) => {

        if(/\d/.test(e.target.value)) {
            return false
        } else {
            setMajor(e.target.value)
        }
     }
 

    return (
        <div className="teacher-registration-container">

            <i onClick={closeTeacher} className="fa fa-times-circle close-modal"></i>
            <h1>Register Teacher</h1>
            { error && <Message width="98%" background="rgb(240, 186, 186)">{error}</Message> } 
            {loading && <Spinner />}
            { created && <Message width="98%" background="#00b36b">Successfully Registered</Message> }
            <form onSubmit={registerTeacherHandler}>
                <div className="teacher-input-container">
                    <label>Full Name</label>
                    <input value={fullName} onChange={checkName} type="text" required />
                </div>
                <div className="teacher-input-container">
                    <label>Username</label>
                    <input onChange={(e) => setUserName(e.target.value)} type="text" required />
                </div>
                <div className="teacher-input-container">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" required />
                </div>
                <div className="teacher-input-container">
                    <label>Major In</label>
                    <input value={major} onChange={checkMajor} required />
                </div>
                <button className="btn-register">Register  <i className="fa fa-arrow-right"></i></button>
            </form>

        </div>
    );
}

export default RegisterTeacher;
