import React from 'react'
import { Api } from '../secondaryFunctions'

const PatientList = ({ visibleData,setVisibleData, setPatientWhoseDataChange, setIsPatientList }) => {

  const setPatient = (e, patientId) => {
    e.preventDefault()
    console.log('console:', patientId)

    setPatientWhoseDataChange(patientId)
    setIsPatientList(false)
  }

  const delPatient = async (e, patientId) => {
    e.preventDefault()
    await Api.deletePatient(patientId)
    console.log('console:', patientId)
    const newData = await Api.getPatients()
    setVisibleData(newData)
  }

  return (
    <div id="board-list">
      <div className="container">
        <table className="board-table">
          <thead>
            <tr>
              <th scope="col" className="th-num">№</th>
              <th scope="col" className="th-title">Patient</th>
              <th scope="col" className="th-title">Sex</th>
              <th scope="col" className="th-title">Adress</th>
              <th scope="col" className="th-date">Policy number</th>
              <th scope="col" className="th-date">Date of birth</th>
              <th scope="col" className="th-title">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleData && visibleData.map((patient, id) => (
              <tr key={patient.id} >
                <td > {id + 1}</td>
                <th>{`${patient.surname} ${patient.name} ${patient.patronymic}`}</th>
                <td>{patient.sex}</td>
                <td>{patient.datebirth}</td>
                <td>{patient.adress}</td>
                <td>{patient.policynumber}</td>
                <td>
                  <button type="button" className="btn btn-tabl" onClick={(e) => delPatient(e, patient.id)} > Del</button>
                  <button type="button" className="btn btn-tabl" onClick={(e) => setPatient(e, patient.id)}>Edit</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div >
    </div >
  )
}

export default PatientList
