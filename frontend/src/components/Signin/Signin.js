import React, { useEffect, useState } from 'react';
import FormContainer from '../FormContainer/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../message/Message'
import { loginUser } from '../../actions/userActions';
import Spinner from '../Spinner/spinner'

import './Signin.css'

const Signin = ({ history }) => {


    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(userInfo && userInfo.role === 'admin') {
            history.push('/admin')
        }
        if(userInfo && userInfo.role === 'teacher') {
            history.push('/teacher')
        }
        if(userInfo && userInfo.role === 'student') {
            history.push('/student')
        }
    }, [dispatch, userInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        const btn = document.getElementById('btn-login')
        let ripples = document.createElement('span')
        btn.appendChild(ripples)

        setTimeout(() => {
            ripples.remove()
        }, 500)
        dispatch(loginUser(username, password))
    }

    return (
        <FormContainer>
          
            <h1 className="signin-label">Sign In</h1>
            { error && <Message width="90%" background="rgb(240, 186, 186)">{error}</Message> }
            { loading && <Spinner /> }

            <form onSubmit={submitHandler}  className="form-container-2">
        
                <div className="username-container">
                    <label><i className="fa fa-user"></i> Username</label>
                    <input value={username} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="password-container">
                    <label><i className="fa fa-lock"></i> Password</label>
                    <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                </div>
                <button id="btn-login" type='submit'>Sign In <i className="fa fa-angle-double-right"></i></button>

            </form>

        </FormContainer>
    );
}


export default Signin