import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../Spinner/spinner'
import { getEvents } from '../../actions/userActions'

import './Event.css'

const Event = () => {

    const dispatch = useDispatch()

    const getEventsState = useSelector(state => state.getEvents)
    const { loading, events } = getEventsState

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    return (
        <div className="event__container-student">

            {loading && <Spinner />}
            <div className="event__list__container-student">
                <h1>Events</h1>
                {events && events.map((e) => (
                    <div className="event" key={e._id} >
                        <p>{e.description}</p>
                         <span className="post_date-container">posted on {e.date}</span>
                         { e.edited && <span className="post__edited-container">edited</span> }
                    </div>
                ))}
            </div>


        </div>
    );
}



export default Event;