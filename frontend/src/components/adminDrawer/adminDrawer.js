import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showAllTeacher, showTranscript, showSettings, showRequests, getNewRequestsCount, showStudent, showAdminProfile, showEvents } from '../../actions/adminActions';

import './adminDrawer.css'

const AdminDrawer = () => {

    const [reload, setReload] = useState(false)

    const dispatch = useDispatch()

    const newRequestsCount = useSelector(state => state.newRequestsCount)
    const { count } = newRequestsCount

    const getTeachershandler = (e) => {

        applyStyle(e)
        dispatch(showAllTeacher())
    }

    const getTranscript = (e) => {
        applyStyle(e)
        dispatch(showTranscript())
    }

    const showSettingsHandler = (e) => {
        applyStyle(e)
        dispatch(showSettings())
    }

    const showAdminProfileHandler = (e) => {
        applyStyle(e)
        dispatch(showAdminProfile())
    }


    const showStudentUpdateHandler = (e) => {
        applyStyle(e)
        dispatch(showStudent())
    }

    const getRequestsHandler = (e) => {
        applyStyle(e)
        dispatch(showRequests())

        setTimeout(() => {
            setReload(true)
        }, 100)
    }

    const applyStyle = (event) => {
        const list = document.getElementsByClassName('admin-options')

        const array = [...list]

        array.map((element) => {
            if (event.target === element) {
                return element.classList.add('active')
            }
            else {
                return element.classList.remove('active')
            }
        })
    }

    const showEventsHandler = (e) => {
        applyStyle(e)
        dispatch(showEvents())
    }

    useEffect(() => {
        dispatch(getNewRequestsCount())
        //document.getElementById('event').classList.add('active')
    }, [dispatch, reload])

    return (
        <div className="admin-sidedrawer">
            <h3> Admin Dashboard</h3>
            <ul>
                <li className="admin-options" onClick={getTeachershandler}><i className="fa fa-chalkboard-teacher"></i> All Teachers</li>
                <li onClick={getTranscript} className="admin-options"><i className="fa fa-poll-h"></i> Generate Transcript</li>
                <li onClick={showEventsHandler} className="admin-options" id="event"><i className="fa fa-calendar-week"></i> Events</li>
                <li onClick={showSettingsHandler} className="admin-options"><i className="fa fa-gear"></i> Settings</li>
                <li onClick={getRequestsHandler} className="admin-options req"><i className="fa fa-question-circle"></i> Requests{parseInt(count) > 0 && <span className="new-requests">{count}</span>}</li>
                <li onClick={showStudentUpdateHandler} className="admin-options"><i className="fa fa-pen"></i> Update Student</li>
                <li onClick={showAdminProfileHandler} className="admin-options"><i className="fa fa-lock"></i> My Profile</li>
            </ul>
        </div>
    );
}


export default AdminDrawer;