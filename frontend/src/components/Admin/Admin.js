import React, { useEffect } from 'react';
import AdminDrawer from '../adminDrawer/adminDrawer';
import { useSelector, useDispatch } from 'react-redux';
import AllTeachers from '../AllTeachers/AllTeachers';
import Printer from '../GenerateTranscript/GenerateTranscript';
import Settings from '../Settings/Settings';
import Requests from '../Requests/Requests';
import UpdateStudent from '../UpdateStudent/UpdateStudent';
import AdminProfile from '../AdminProfile/AdminProfile';
import Events from '../Events/Events'

import './Admin.css'

const Admin = ({ history }) => {

    const dispatch = useDispatch()
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const showTeacher = useSelector(state => state.showTeacher)
    const { allTeacher, transcript, settings, request, student, profile, events } = showTeacher

    useEffect(() => {
        if (!(userInfo && userInfo.role === 'admin')) {
            history.push('/signin')
        }

    }, [dispatch, history, userInfo])


    return (
        <div>
            <div className="admin-body">
                <AdminDrawer />
                { events && <Events /> }
                { allTeacher && <AllTeachers /> }
                { transcript && <Printer /> }
                { settings && <Settings /> }
                { request &&  <Requests /> }
                { student && <UpdateStudent /> }
                { profile && <AdminProfile /> }
            </div>
        </div>
    );
}


export default Admin;