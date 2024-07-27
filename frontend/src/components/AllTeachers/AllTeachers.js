
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { filterTeacher } from '../../actions/adminActions';
import { deleteTeacher } from '../../actions/adminActions';
import { getAllTeachers } from '../../actions/teacherActions';
import Modal from '../modal/Modal'
import Spinner from '../Spinner/spinner';

import './AllTeachers.css'

const AllTeachers = () => {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const dispatch = useDispatch()



    const getTeachers = useSelector(state => state.getTeachers)
    let { teachers, filteredTeachers, loading } = getTeachers

    const deleteTeacherState = useSelector(state => state.deleteTeacher)

    const { deleteSuccess } = deleteTeacherState

    const filterTeachersHandler = (e) => {
        const input = e.target.value
        filteredTeachers = teachers.filter(teacher => teacher.name.toUpperCase().startsWith(input.toUpperCase()))
        dispatch(filterTeacher(teachers, filteredTeachers))
    }

    const showModalHandler = (id, name) => {
        setId(id)
        setName(name)
        setModal(true)

    }

    const continueDeletion = (id) => {
        dispatch(deleteTeacher(id))
        setModal(false)
    }

    const cancelDeletion = () => {
        setModal(false)
    }
    useEffect(() => {
        dispatch(getAllTeachers())
    }, [deleteSuccess, dispatch])

    return (
        <div className="teachers-con">
            <div className="all-teachers">
                {loading &&  <Spinner />}
                {teachers && <div>
                    <div className="filter-container">
                        <h2>All teachers</h2>
                        <div className="transcript-form-container filter">
                            <input onChange={filterTeachersHandler} placeholder="Search teachers" />
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Full Name</th>
                                <th>Username</th>
                                <th>Major</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {filteredTeachers.map((teacher) => (
                                <tr className="each-teacher" key={teacher._id}>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.username}</td>
                                    <td>{teacher.major}</td>
                                    <td className="detail"><Link to={`/admin/teachers/${teacher._id}`}>detail</Link></td>
                                    <td><Link to={`/teacher/${teacher._id}`}><i className="fa fa-edit" ></i></Link></td>
                                    <td><i onClick={showModalHandler.bind(this, teacher._id, teacher.name)} className="fa fa-trash"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}

            </div>
            <Modal
                open={modal}
                name={name}
                continueDeletion={continueDeletion}
                cancelDeletion={cancelDeletion}
                id={id} />
        </div>
    );
}

export default AllTeachers;