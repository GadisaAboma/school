import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../message/Message';
import Spinner from '../Spinner/spinner'

import { getStudentTranscript } from '../../actions/studentActions'
import './GenerateTranscript.css'

const TranscriptInput = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const getStudentTranscriptHandler = (e) => {
  
    if (e.which === 13) {
      dispatch(getStudentTranscript(username))
    }
  }

  return (
    <div className="transcript-container">
      <div className="transcript-form-container">
        <input value={username} onChange={(e) => setUsername(e.target.value)} onKeyPress={getStudentTranscriptHandler} placeholder="Enter student username" />
        <i className="fa fa-search"></i>
      </div>
    </div>
  )
}

const TranscriptContainer = () => {

  const studentTranscript = useSelector(state => state.studentTranscript)

  const { transcript, loading, error } = studentTranscript

  return (
    <div id="transcript-table-container">
      {transcript &&
        <div className="transcript-table-inner">
          <h3>Student Transcript</h3>
          <h4>Jimma, Oromia, Ethiopia</h4>
          <h4>Mana Barumsa Sadarkaa 1ffaa Dilfire</h4>
          <h5>Name:  {transcript.name}</h5>
          <span>Gender: {transcript.gender === "Male" ? "M" : "F"}</span>
          <span>Age: {transcript.age}</span>

          <span className="tr-photo"></span>

          <table className="transcript-table">
            <tbody>
              <tr>
                <td>Year</td>
                <td colSpan="3">{transcript.grades['7'].year}</td>
                <td colSpan="3">{transcript.grades['8'].year}</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td colSpan="3">7</td>
                <td colSpan="3">8</td>
              </tr>
              <tr>
                <td>Semister</td>
                <td>I</td>
                <td>II</td>
                <td>AV</td>
                <td>I</td>
                <td>II</td>
                <td>AV</td>
              </tr>
              <tr>
                <td>Afan Oromo</td>
                <td>{transcript.grades['7'].sem1.AfanOromo}</td>
                <td>{transcript.grades['7'].sem2.AfanOromo}</td>
                <td>{(transcript.grades['7'].sem1.AfanOromo + transcript.grades['7'].sem2.AfanOromo) / 2}</td>
                <td>{transcript.grades['8'].sem1.AfanOromo}</td>
                <td>{transcript.grades['8'].sem2.AfanOromo}</td>
                <td>{(transcript.grades['8'].sem1.AfanOromo + transcript.grades['8'].sem2.AfanOromo) / 2}</td>
              </tr>
              <tr>
                <td>English </td>
                <td>{transcript.grades['7'].sem1.English}</td>
                <td>{transcript.grades['7'].sem2.English}</td>
                <td>{(transcript.grades['7'].sem1.English + transcript.grades['7'].sem2.English) / 2}</td>
                <td>{transcript.grades['8'].sem1.English}</td>
                <td>{transcript.grades['8'].sem2.English}</td>
                <td>{(transcript.grades['8'].sem1.English + transcript.grades['8'].sem2.English) / 2}</td>
              </tr>

              <tr>
                <td>Maths</td>
                <td>{transcript.grades['7'].sem1.Maths}</td>
                <td>{transcript.grades['7'].sem2.Maths}</td>
                <td>{(transcript.grades['7'].sem1.Maths + transcript.grades['7'].sem2.Maths) / 2}</td>
                <td>{transcript.grades['8'].sem1.Maths}</td>
                <td>{transcript.grades['8'].sem2.Maths}</td>
                <td>{(transcript.grades['8'].sem1.Maths + transcript.grades['8'].sem2.Maths) / 2}</td>
              </tr>

              <tr>
                <td>Biology</td>
                <td>{transcript.grades['7'].sem1.Biology}</td>
                <td>{transcript.grades['7'].sem2.Biology}</td>
                <td>{(transcript.grades['7'].sem1.Biology + transcript.grades['7'].sem2.Biology) / 2}</td>
                <td>{transcript.grades['8'].sem1.Biology}</td>
                <td>{transcript.grades['8'].sem2.Biology}</td>
                <td>{(transcript.grades['8'].sem1.Biology + transcript.grades['8'].sem2.Biology) / 2}</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>{transcript.grades['7'].sem1.Chemistry}</td>
                <td>{transcript.grades['7'].sem2.Chemistry}</td>
                <td>{(transcript.grades['7'].sem1.Chemistry + transcript.grades['7'].sem2.Chemistry) / 2}</td>
                <td>{transcript.grades['8'].sem1.Chemistry}</td>
                <td>{transcript.grades['8'].sem2.Chemistry}</td>
                <td>{(transcript.grades['8'].sem1.Chemistry + transcript.grades['8'].sem2.Chemistry) / 2}</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>{transcript.grades['7'].sem1.Physics}</td>
                <td>{transcript.grades['7'].sem2.Physics}</td>
                <td>{(transcript.grades['7'].sem1.Physics + transcript.grades['7'].sem2.Physics) / 2}</td>
                <td>{transcript.grades['8'].sem1.Physics}</td>
                <td>{transcript.grades['8'].sem2.Physics}</td>
                <td>{(transcript.grades['8'].sem1.Physics + transcript.grades['8'].sem2.Physics) / 2}</td>
              </tr>
              <tr>
                <td>Geda</td>
                <td>{transcript.grades['7'].sem1.Geda}</td>
                <td>{transcript.grades['7'].sem2.Geda}</td>
                <td>{(transcript.grades['7'].sem1.Geda + transcript.grades['7'].sem2.Geda) / 2}</td>
                <td>{transcript.grades['8'].sem1.Geda}</td>
                <td>{transcript.grades['8'].sem2.Geda}</td>
                <td>{(transcript.grades['8'].sem1.Geda + transcript.grades['8'].sem2.Geda) / 2}</td>
              </tr>
              <tr>
                <td>HPE</td>
                <td>{transcript.grades['7'].sem1.HPE}</td>
                <td>{transcript.grades['7'].sem2.HPE}</td>
                <td>{(transcript.grades['7'].sem1.HPE + transcript.grades['7'].sem2.HPE) / 2}</td>
                <td>{transcript.grades['8'].sem1.HPE}</td>
                <td>{transcript.grades['8'].sem2.HPE}</td>
                <td>{(transcript.grades['8'].sem1.HPE + transcript.grades['8'].sem2.HPE) / 2}</td>
              </tr>
              <tr>
                <td>Hawassa</td>
                <td>{transcript.grades['7'].sem1.Hawassa}</td>
                <td>{transcript.grades['7'].sem2.Hawassa}</td>
                <td>{(transcript.grades['7'].sem1.Hawassa + transcript.grades['7'].sem2.Hawassa) / 2}</td>
                <td>{transcript.grades['8'].sem1.Hawassa}</td>
                <td>{transcript.grades['8'].sem2.Hawassa}</td>
                <td>{(transcript.grades['8'].sem1.Hawassa + transcript.grades['8'].sem2.Hawassa) / 2}</td>
              </tr>
              <tr>
                <td>Amharic</td>
                <td>{transcript.grades['7'].sem1.Amharic}</td>
                <td>{transcript.grades['7'].sem2.Amharic}</td>
                <td>{(transcript.grades['7'].sem1.Amharic + transcript.grades['7'].sem2.Amharic) / 2}</td>
                <td>{transcript.grades['8'].sem1.Amharic}</td>
                <td>{transcript.grades['8'].sem2.Amharic}</td>
                <td>{(transcript.grades['8'].sem1.Amharic + transcript.grades['8'].sem2.Amharic) / 2}</td>
              </tr>
              <tr>
                <td >Total</td>
                <td>{transcript.grades['7'].sem1.total}</td>
                <td>{transcript.grades['7'].sem2.total}</td>
                <td>{(transcript.grades['7'].sem1.total + transcript.grades['7'].sem2.total) / 2}  </td>
                <td>{transcript.grades['8'].sem1.total}</td>
                <td>{transcript.grades['8'].sem2.total}</td>
                <td>{(transcript.grades['8'].sem1.total + transcript.grades['8'].sem2.total) / 2}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{(transcript.grades['7'].sem1.average).toFixed(2)}</td>
                <td>{(transcript.grades['7'].sem2.average).toFixed(2)}</td>
                <td>{((transcript.grades['7'].sem1.average + transcript.grades['7'].sem2.average) / 2).toFixed(2)}  </td>
                <td>{(transcript.grades['8'].sem1.average).toFixed(2)}</td>
                <td>{(transcript.grades['8'].sem2.average).toFixed(2)}</td>
                <td>{((transcript.grades['8'].sem1.average + transcript.grades['8'].sem2.average) / 2).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Rank</td>
                <td>{transcript.grades['7'].sem1.rank === 0 ? '_': transcript.grades['7'].sem1.rank}</td>
                <td>{transcript.grades['7'].sem2.rank === 0 ? '_': transcript.grades['7'].sem2.rank}</td>
                <td>{transcript.grades['7'].rank === 0 ? '_': transcript.grades['7'].rank}  </td>
                <td>{transcript.grades['8'].sem1.rank === 0 ? '_' : transcript.grades['8'].sem1.rank}</td>
                <td>{transcript.grades['8'].sem2.rank === 0 ? '_' : transcript.grades['8'].sem2.rank}</td>
                <td>{transcript.grades['8'].rank === 0 ? '_' : transcript.grades['8'].rank}</td>
              </tr>
            </tbody>
          </table>
          <p>Remark: {transcript.gender === "Male" ? "He " : "She "} has returned all the school properties</p>
          <p>Note: Erasure or absense of school seal will invalidate this transcript</p>
          <p>Name of school director ________________________________</p>
          <p>Signature ______________________ Date ________________________</p>
        </div>
      }
      {loading && <Spinner />}
      {error && <div className="center-message"><Message background="rgb(240, 186, 186)"><i className="fa fa-exclamation-circle"></i> {error}</Message> </div>}
    </div>
  )
}
class GenerateTranscript extends React.Component {

  render() {
    return (
      <TranscriptContainer />
    );
  }

}

const Printer = () => {

  const studentTranscript = useSelector(state => state.studentTranscript)

  const { transcript } = studentTranscript

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  return (
    <div className="transcript-Container">
      <div className="transcript-input-container">
        <TranscriptInput />
      </div>

      <GenerateTranscript ref={componentRef} />
      {transcript && <div className="btn__print-container"><button className="btn-print" onClick={handlePrint}><i className="fa fa-print"></i> Print</button></div>}
    </div>
  )

}

export default Printer