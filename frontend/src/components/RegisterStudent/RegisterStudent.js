import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { registerStudents } from '../../actions/studentActions';
import Message from '../message/Message'
import Spinner from '../Spinner/spinner'

import './RegisterStudent.css'

const RegisterStudent = ({ history }) => {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('Male')
    const [age, setAge] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [grade, setGrade] = useState()
    const [year, setYear] = useState()
    const [inValid, setInvalid] = useState(false)

    const back = () => {
        history.goBack()
    }

    const registerStudent = useSelector(state => state.registerStudent)

    const { loading, created, error } = registerStudent

    const registerStudentHandler = (e) => {
        e.preventDefault()
        const fullName = firstName + " " + middleName + " " + lastName

        if(parseInt(grade) < 0 || parseInt(grade) > 8) {
            setInvalid(true)
        } else {
            setInvalid(false)
            dispatch(registerStudents(fullName, username, password, age, gender, grade, year))
        }

      
    }

    const checkInput = (e) => {

      if(e.target.value.length > 2) {
          return false
      }

       const input = e.target.value.split('')

       if(parseInt(input[input.length - 1]) <= 9 && parseInt(input[input.length - 1]) >= 0 ) {
       if(parseInt(input) < 6 && parseInt(input) >= 80) {
        return false
    }

        setAge(e.target.value)
            

       }else {
         return false
       }

    }

    const checkFirstName = (e) => {

       if(/\d/.test(e.target.value)) {
           return false
       } else {
           setFirstName(e.target.value)
       }
    }

    const checkMiddleName = (e) => {

       if(/\d/.test(e.target.value)) {
           return false
       } else {
           setMiddleName(e.target.value)
       }
    }
    const checkLastName = (e) => {

       if(/\d/.test(e.target.value)) {
           return false
       } else {
           setLastName(e.target.value)
       }
    }

   
    return (
        <div className="student-registration">
            <form onSubmit={registerStudentHandler}>
                <h1>Student Registration form</h1>
                {created && <Message background="#00b36b"><i className="fa fa-check-circle"></i> Successfully Registered</Message>}
                { inValid && <Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i>Invalid Grade!</Message>  }
                {error && <Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error}</Message>}
                {loading && <Spinner />}
                <h3 className="stud-info"><span>1</span> Student Information</h3>
                <div className="student-name-container">
                    <label>Full Name: </label>
                    <div className="student-reg-input">
                        <input type="text" value={firstName} required placeholder="First Name" onChange={checkFirstName} />
                    </div>
                    <div className="student-reg-input">
                        <input type="text" value={middleName} required placeholder="Middle Name" onChange={checkMiddleName} />
                    </div>
                    <div className="student-reg-input">
                        <input type="text" value={lastName} required placeholder="Last Name" onChange={checkLastName} />
                    </div>
                </div>
                <div className="gender-container">
                    <div>
                        <span>
                            Gender:
                        </span>
                        <select onChange={(e) => setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>
                        Age:
                    </label>
                    <input type="text" value={age} placeholder="Age" required onChange={checkInput} />
                </div>
                <div className="username-container">
                    <label>
                        Username:
                    </label>
                    <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <label className="label-pass">
                        Password:
                    </label>
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                </div>


                <div>
                    <label>
                        Grade
                    </label>
                    <input type="text" placeholder="Current grade" onChange={(e) => setGrade(e.target.value)} />
                    <label className="label-pass">
                        Year
                    </label>
                    <input type="number" placeholder="Current year" onChange={(e) => setYear(e.target.value)} />
                </div>

                <i className="fa fa-times back-btn" onClick={back}></i>

                <button className="btn-register">Register</button>
            </form>
        </div>
    );
}


export default RegisterStudent;