import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../Spinner/spinner'
import { addEventAction, deleteEventAction, editEventAction } from '../../actions/adminActions';
import Message from '../message/Message'

import './Events.css'
import { getEvents } from '../../actions/userActions';

const Events = () => {

    const [edit, setEdit] = useState(false)


    const addEvent = useSelector(state => state.addEvent)

    const { loading, success, error } = addEvent

    const deleteEvent = useSelector(state => state.deleteEvent)

    const { success2 } = deleteEvent

    const getEventsState = useSelector(state => state.getEvents)

    const { loading2, events } = getEventsState

    const editEvent = useSelector(state => state.editEvent)
    const { success3 } = editEvent



    const [description, setDescription] = useState('')
    const [error2, setError] = useState(false)
    const [id, setId] = useState('')
    const dispatch = useDispatch()

    const addEventHandler = () => {

        if (description === '') {
            setError(true)
        } else {
            dispatch(addEventAction(description))
        }

    }

    const deleteEventHandler = (id) => {
      dispatch(deleteEventAction(id))
    }

    const editEventHandler = (description, id) => {
        setEdit(true)
        setId(id)
        setDescription(description)

    }

    const updateEventHandler = () => {
        dispatch(editEventAction(id, description))
        setDescription('')
        setEdit(false)
    }

    useEffect(() => {
        dispatch(getEvents())
    }, [addEvent, dispatch, success2, success3])


    return (
        <div className="event-container">
            {loading2 ? <Spinner /> : <div className="event__list-inner" >
                {loading && <Spinner />}
                {success && <div className="infos">
               {/*  <Message background="#80aaff">{success}</Message> */}
                </div>}
                {error2 && <div className="infos"><Message background="rgb(240, 186, 186)">Empty event cannot be added!</Message></div>}
                {error && <Message background="rgb(240, 186, 186)">{error}</Message>}
                <textarea value={description} onChange={(e) => { setDescription(e.target.value); setError(false) }} placeholder="Write Post Here..." />
                { !edit && <button onClick={addEventHandler}>Submit</button>}
                { edit && <button onClick={updateEventHandler} >Update</button>}

                <div className="event__list-container">
                    {events && events.map((e) => (
                        <div key={e._id} className="event">
                        <p>{e.description}</p>
                          <span className="post_date-container">posted on {e.date}</span>
                          {e.edited && <span className="post__edited-container">edited</span>}
                          <span onClick={editEventHandler.bind(this, e.description, e._id)} className="edit-event"><i className="fa fa-pen"></i></span>
                          <span onClick={deleteEventHandler.bind(this, e._id)} className="delete-event"><i className="fa fa-trash"></i></span>
                        </div>
                    ))}
                </div>
            </div>}


        </div>
    );
}

export default Events;
