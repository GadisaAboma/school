import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveRequest, getRequests, deleteRequest } from '../../actions/adminActions';
import Spinner from '../Spinner/spinner';
import Message from '../message/Message';

import './Request.css'

const Requests = () => {

    const dispatch = useDispatch()

    const studentRequests = useSelector(state => state.studentRequests)

    const { requests, loading, error } = studentRequests

    const approveRequestState = useSelector(state => state.approveRequest)

   /*  const { loading2, message, error2 } = approveRequestState */

    const deleteRequestState = useSelector(state => state.deleteRequest)

    useEffect(() => {
        dispatch(getRequests())
    }, [dispatch, approveRequestState, deleteRequestState])

    const approveRequestHanlder = (username) => {
        dispatch(approveRequest(username))
    }

    const deleteRequestHandler = (username) => {
        dispatch(deleteRequest(username))
    }

    return (
        <div className="requests-container">

        { error && <Message background="rgb(240, 186, 186)">{error}</Message> }
           { loading && <div className="spinner-con">
             <Spinner /> 
           </div>}

           { requests && <div className="requests">
              <div className="request-info">
                  <p>Student Name</p>
                  <p>Username</p>
                  <p>Average</p>
                  <p>Grade</p>
                  <p>Approve</p>
                  <p>Delete</p>
              </div>
                { requests.map(request => (
                    <div className="request" key={request._id}>
                        <p>{request.name}</p>
                        <p>{request.username}</p>
                        <p>{request.total}</p>
                        <p>{request.grade}</p>
                        <button onClick={approveRequestHanlder.bind(this, request.username)} className="btn-approve"><i className="fa fa-check-circle"></i> Approve</button>
                        <button onClick={deleteRequestHandler.bind(this, request.username)} className="btn-delete"><i className="fa fa-trash"></i></button>
                    </div>
                )) }
           </div> }
        </div>
    );
}

export default Requests;