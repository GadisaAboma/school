import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'
import Backdrop from '../Backdrop/Backdrop'


import './Header.css'


const Header = ({ history }) => {

    const [dropDown, setDropdown] = useState(false)
    const [studentDropdown, setStudentDropDown] = useState(false)
    const [teacherDropdown, setTeacherDropdown] = useState(false)

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)

    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/signin')
    }

    const dropDownHandler = () => {
        setDropdown(true)
    }

    const closeDropdown = () => {
        setDropdown(false)
    }

    const teacherModal = () => {
        setDropdown(false)
        history.push('/admin/registerTeacher')

    }

    const showStudentDropdown = () => {
        setStudentDropDown(!studentDropdown)
    }

    const showTeacherDropdown = () => {
        setTeacherDropdown(!teacherDropdown)
    }

    const registerStudent = () => {
        setDropdown(false)
        history.push('/admin/registerStudent')
    }


    return (
        <header className="header-container">
            {dropDown && <Backdrop closeDropdown={closeDropdown} />}
            {studentDropdown && <Backdrop closeDropdown={showStudentDropdown} />}
            {teacherDropdown && <Backdrop closeDropdown={showTeacherDropdown} />}
          
            <div className="name-container">
                <Link to="/">Dilfire Primary School</Link>
            </div>
            <div className="nav-items">
                <ul>
                    {!userInfo ? <li className="signin"><i className="fa fa-sign-in-alt font-awesome-user"></i><Link className="signin-link" to="signin">Sign In</Link></li>
                        : <ul className="logged-user-menus">
                            {userInfo.role === 'admin' && <li className="admin-user" onClick={dropDownHandler}>
                                Admin
                                <i className="fa fa-caret-down drop-icon"></i>
                                {dropDown && <ul className="adminOptions">
                                    <li onClick={teacherModal} className="admin-option"><i className="fa fa-plus font-awesome-user"></i>Register Teacher</li>
                                    <li onClick={registerStudent} className="admin-option"><i className="fa fa-plus font-awesome-user"></i>Register Student</li>
                                    <li className="admin-option" onClick={logoutHandler} ><i className="fa fa-sign-out-alt font-awesome-user"></i>Logout</li>
                                </ul>}
                            </li>}
                            {userInfo.role === 'student' && <li className="user" onClick={showStudentDropdown}>{userInfo.name.split(' ')[0]}
                                <i className="fa fa-caret-down"></i>

                                {studentDropdown && <ul className="student-options"> <li className="student-option" onClick={logoutHandler} >

                                    <i className="fa fa-sign-out-alt font-awesome-user"></i>Logout</li> </ul>}
                            </li>}
                            {userInfo.role === 'teacher' && <li onClick={showTeacherDropdown} className="user">{userInfo.name.split(' ')[0]}
                                 <i className="fa fa-caret-down"></i>
                                {teacherDropdown && <ul className="teacher-options">
                                      {userInfo.permissionToRegister && <li onClick={registerStudent} className="admin-option"><i className="fa fa-plus font-awesome-user"></i>Register Student</li>}
                                    <li className="teacher-option admin-option" onClick={logoutHandler} >
                                        <i className="fa fa-sign-out-alt font-awesome-user"></i>Logout
                                    </li>
                                </ul>}
                            </li>}
                        </ul>
                    }
                </ul>
            </div>
        </header>
    );
}


export default Header;