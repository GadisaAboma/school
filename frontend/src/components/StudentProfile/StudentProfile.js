import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './StudentProfile.css'
import { getStudentProfile } from '../../actions/studentActions'
import Spinner from '../Spinner/spinner';
import profileImage from './newIcon.png';

const StudentProfile = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: { _id } } = userLogin

    const studentProfile = useSelector(state => state.studentProfile)
    const { loading, student} = studentProfile
    
    useEffect(() => {
        dispatch(getStudentProfile(_id))
    }, [dispatch, _id])

    return (
        <div className="student__profile-container">
        
           {loading && <div className="spinner-con">
            <Spinner />
           </div>}
           { student && <div className="student__profile">
              <div className="student__profile-name">
                  <span className="names">Full Name</span>
                  <span>{student.data.name}</span>
              </div>
              <div className="student__profile-username">
                  <span className="names">Username</span>
                  <span>{student.data.username}</span>
              </div>
              <div className="student__profile-age">
                  <span className="names">Age</span>
                  <span>{student.data.age}</span>
              </div>
              <div className="student__profile-grade">
                  <span className="names">Grade</span>
                  <span>{student.data.currentGrade}</span>
              </div>
             
              <div className="student__profile-year">
                  <span className="names">Year</span>
                  <span>{student.data.currentYear}</span>
              </div>

              <img className="profile-image" src = {profileImage}  alt={profileImage}/>
           </div> }


            
        </div>
    );
}

export default StudentProfile;
