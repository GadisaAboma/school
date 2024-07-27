import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProfile, updateAdmin } from '../../actions/adminActions'
import Message from '../message/Message'
import Spinner from '../Spinner/spinner'

import './AdminProfile.css'

const AdminProfile = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const adminProfile = useSelector(state => state.adminProfile)
    const { loading, admin } = adminProfile

    const updateAdminState = useSelector(state => state.updateAdmin)
    const { loading2, message, error2 } = updateAdminState

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAdminProfile())
    }, [dispatch])

    useEffect(() => {
        if (admin) {
            setUsername(admin.username)
            setName(admin.name)
        }
    }, [admin])

    const updateAdminHandler = () => {
        dispatch(updateAdmin(name, username, password))
    }

    return (
        <div className="admin__profile-container">
            {loading && <div className="spinner-con"><Spinner /></div>}
            {loading2 && <Spinner />}
            {error2 && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error2}</Message> </div>}
            {message && <div className="center-message"><Message background="#80aaff"><i className="fa fa-check-circle"></i> {message}</Message></div>}

            {admin && <div className="student__info-container">
                <div>

                    <span>Full Name</span>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <span>Username</span>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <span>Password</span>
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={updateAdminHandler}>Update</button>
            </div>}
        </div>
    );
}


export default AdminProfile;