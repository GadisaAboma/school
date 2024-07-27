import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
/* import { getMyStudents } from '../../actions/teacherActions' */
import Message from '../message/Message';

import './SelectedStudents.css'

const SelectedStudents = () => {

   /*  const dispatch = useDispatch() */

    const myStudents = useSelector(state => state.myStudents)
    const { students } = myStudents

    const currentSemister = useSelector(state => state.currentSemister)
    const { semister } = currentSemister

    const mySubject = useSelector(state => state.mySubject)
    const { subject } = mySubject

    return (
        
        <div className="my-students">
            {typeof (students) === "string" &&  <Message width="50%" background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {students}</Message>}
            {typeof (students) === "object" &&
                <table>
                    <tbody>
                        <tr>
                            <th>Full Name</th>
                            <th>username</th>
                            <th>Score 100%</th>
                            <th>Details</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.username}</td>
                                <td>
                                {student.grades[student.currentGrade][semister][subject] ? student.grades[student.currentGrade][semister][subject] : "_" } 
                                {/* <input disable value={student.grades[student.currentGrade][semister][subject]} type="text" /> */}
                                </td>
                                <td className="detail"><Link to={`/teacher/students/${student._id}`}>detail</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    );
}


export default SelectedStudents;