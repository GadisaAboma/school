import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateAttendanceReport } from '../../actions/teacherActions';
import { useReactToPrint } from 'react-to-print';
import Spinner from '../Spinner/spinner'

import './AttendanceReport.css'


const AttendanceReport = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: { homeRoomGrade, homeRoomYear } } = userLogin

    const attendanceReportState = useSelector(state => state.attendanceReport)
    const { loading, attendanceReport } = attendanceReportState

    const dispatch = useDispatch()

    let count = 0

    const calculatePresent = (student) => {
        count = 0;
        /*  student.map((ss) => {
             if (ss.present === true) {
                 count++
             }
         })
  */
        for (var index = 0; index < student.length; index++) {
            if (student[index].present === true) {
                count++
            }
        }

        return (count * 100) / student.length
    }

    const calculateAbsent = (student) => {
        count = 0;
        /*   student.map((ss) => {
              if (ss.present === false) {
                  count++
              }
          })
   */
        for (var index = 0; index < student.length; index++) {
            if (student[index].present === false) {
                count++
            }
        }

        return (count * 100) / student.length
    }

    useEffect(() => {
        dispatch(generateAttendanceReport(homeRoomGrade, homeRoomYear))
    }, [dispatch, homeRoomGrade, homeRoomYear])

    return (
        <div className="attendance__report-container">
            {loading && <Spinner />}
            <div>
                {attendanceReport && <table>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Present 100%</th>
                        <th>Absent 100%</th>
                        <th>Eligible for exam</th>
                    </tr>
                    <tbody >

                        {attendanceReport.map(student => (
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.username}</td>
                                <td>{(calculatePresent(student.grades[homeRoomGrade].attendance)).toFixed(2)}%</td>
                                <td>{(calculateAbsent(student.grades[homeRoomGrade].attendance)).toFixed(2)}%</td>
                                <td>{(calculatePresent(student.grades[homeRoomGrade].attendance)) >= 50 ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div>
    );
}


class PrintAttendance extends React.Component {
    render() {
        return (
            <AttendanceReport />
        )
    }
}

const AttendancePrinter = () => {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    return (
        <div className="print__attendance-report">
            <PrintAttendance ref={componentRef} />
            <div className="print_attendance-button">
                <button onClick={handlePrint}><i className="fa fa-print"></i> Print</button>
            </div>
        </div>
    )
}


export default AttendancePrinter;