import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getCurrentSemister } from './actions/userActions';
import { useDispatch } from 'react-redux'
import Header from './components/Header/Header';
import Signin from './components/Signin/Signin'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Admin from './components/Admin/Admin'
import Student from './components/Student/Student'
import Teacher from './components/Teacher/Teacher'
import RegisterStudent from './components/RegisterStudent/RegisterStudent'
import RegisterTeacher from './components/RegisterTeacher/RegisterTeacher'
import TeacherDetail from './components/TeacherDetail/TeacherDetail';
import StudentDetail from './components/StudentDetail/StudentDetail'
import EditTeacher from './components/EditTeacher/EditTeacher';

import './App.css';


function App() {

  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(getCurrentSemister())
  })

  return (
    <>
      <Router>
      <Route path="/" component={Header}/>
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/teacher" exact component={Teacher} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/student" exact component={Student} />
          <Route path="/admin/registerStudent" exact component={RegisterStudent} />
          <Route path="/admin/registerTeacher" exact component={RegisterTeacher} />
          <Route path="/admin/teachers/:id" exact component={TeacherDetail}/>
          <Route path="/teacher/students/:id" exact component={StudentDetail} />
          <Route path ="/teacher/:id" exact component={EditTeacher} />
        </main>
        <Footer />
      </Router>

    </>
  );
}

export default App;