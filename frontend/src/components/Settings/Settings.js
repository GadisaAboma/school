import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSemister, resetAssignedTeachers } from '../../actions/adminActions';
import Spinner from '../Spinner/spinner';
import Message from '../message/Message'
import { getCurrentSemister } from '../../actions/userActions'

/*  import Switch  from '@mui/material/Switch'   */

import './Settings.css'

const Settings = () => {

  const [semister, setSemister] = useState("sem1")

    const dispatch = useDispatch()

    const change = useSelector(state => state.changeSemister)
    const { loading, success, error } = change

    const resetAssign = useSelector(state => state.resetAssign)
    const { loading2, message } = resetAssign

    const changeSemisterHandler = (e) => {
        let ripples = document.createElement('span')
        e.target.appendChild(ripples)

        setTimeout(() => {
            ripples.remove()
        }, 500)
        dispatch(changeSemister(semister))
        dispatch(getCurrentSemister())
    }

    const resetAssignedTeachersHandler = () => {
        dispatch(resetAssignedTeachers())
    }

    return (
        <div className="semister-container">
            { loading && <Spinner /> }
            { loading2 && <Spinner /> }
            { message && <Message background="#80aaff"><i className="fa fa-check-circle"></i> {message}</Message>}
            { error && <Message background="rgb(240, 186, 186)">error</Message> }
            {success && <Message background="#80aaff"><i className="fa fa-check-circle"></i> {success}</Message>}
            <div className="change-sem-container">
                <label>Change Semister</label>
                <select onChange={(e) => setSemister(e.target.value)}>
                    <option value="sem1">Sem1</option>
                    <option value="sem2">Sem2</option>
                  
                </select>
                <button className="btn-anchor" onClick={changeSemisterHandler}><i className="fa fa-pen"></i> Update</button>
            </div>
            {/* <div className="btn-update-container"> */}
                
            {/* </div> */}
              
              <div className="reset_assign-teachers">
                  <label>Reset all assigned Teachers</label>
                  <button onClick={resetAssignedTeachersHandler}><i className='fa fa-reset'></i> Reset</button>
              </div>
            
        </div>
    );
}


export default Settings;