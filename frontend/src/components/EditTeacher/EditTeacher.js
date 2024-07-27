import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeacherDetail, givePermission, removeTeacherAssign, updateTeacher } from '../../actions/adminActions';
import Message from '../message/Message';
import Spinner from '../Spinner/spinner'

import './EditTeacher.css'

const EditTeacher = ({ match, history }) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isPermitted, setIspermitted] = useState(false)

    const dispatch = useDispatch()

    const teacherDetail = useSelector(state => state.teacherDetail)
    const { loading, teacher } = teacherDetail

    const updateTeacherState = useSelector(state => state.updateTeacher)
    const { loading3, message2} = updateTeacherState

    const removeAssign = useSelector(state => state.removeAssign)
    const { message } = removeAssign

    useEffect(() => {
        dispatch(getTeacherDetail(match.params.id))
    }, [dispatch, match.params.id, message])

    const removeAssignaHandler = (assignId) => {
      dispatch(removeTeacherAssign(match.params.id, assignId))
    }

    useEffect(() => {
        if (teacher) {
            setName(teacher.name)
            setUsername(teacher.username)
            setIspermitted(teacher.permissionToRegister)
        }
    }, [teacher])

    const updateTeacherHandler = () => {
       dispatch(updateTeacher(match.params.id, name, username, password))
    }

    return (
        <div className='teacher-detail'>
            <div className="btn-container">
                <button onClick={() => history.goBack()} className="back">Back</button>
            </div>
            {loading && <div className="spinner-con"><Spinner /> </div>}
           { teacher && <div className="align-container">
                 <div className="teacher__info-inner">
                  <div className="assigned_class-container">
                  <h2>Assigned Grades</h2>
                    <ul>
                        {teacher.assigned.map(assign => (
                            <div>
                                <li key={assign._id}>Grade {assign.assignedGrade} {assign.assignedSubject}</li>
                                <button onClick={removeAssignaHandler.bind(this, assign._id)} className="btn-remove"><i className="fa fa-trash delete-assign"></i> Remove</button>
                            </div>
                        ))}
                    </ul>
                  </div>

                    <div className="teacher__info-container-input">
                    { loading3 && <Spinner /> }
                    { message2 && <Message background="#00b36b">{message2}</Message> }
                        <h2>Edit Profile</h2>
                        <div>
                            <span>Full Name</span>
                            <input className="edit__teacher-input" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div>
                            <span>Username</span>
                            <input onChange={(e) => setUsername(e.target.value)} value={username} />
                        </div>
                        <div>
                            <span>Password </span>
                            <input onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="permission">
                            <input id="per" checked={isPermitted} onChange={() => {dispatch(givePermission(match.params.id)); setIspermitted(!isPermitted)}} type="checkbox" />
                            <label htmlFor="per"  >Permission to register students</label>
                        </div>
                        <button onClick={updateTeacherHandler} className="update-btn"><i className="fa fa-pen"> Update</i></button>
                    </div>
                </div>
            </div> } 

        </div>
    );
}

export default EditTeacher;
