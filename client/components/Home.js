import React, { useState, useEffect } from 'react'
import { Api } from '../secondaryFunctions'
import PatientCreationForm from './patientCreationForm'
import PatientList from './patientList'
import WorkMenu from './workMenu'

const Home = () => {
  const [patientsData, setPatientsData] = useState([])
  const [visibleData, setVisibleData] = useState([])
  const [isPatientList, setIsPatientList] = useState(true)
  const [patientWhoseDataChange, setPatientWhoseDataChange] = useState('')

  useEffect(async () => {
    if (patientsData.length === 0) {
      const data = await Api.getPatients()
      setPatientsData(data)
    }
  }, [])

  return (
    <section className="notice">
      <div className="page-title">
        <div className="container">
          <h3>Patient List of Hospital №1</h3>
        </div>
      </div>

      <WorkMenu
        setVisibleData={setVisibleData}
        patientsData={patientsData}
        setIsPatientList={setIsPatientList}
        setPatientWhoseDataChange={setPatientWhoseDataChange} />

      {isPatientList ?
        <PatientList
          visibleData={visibleData}
          setVisibleData={setVisibleData}
          setPatientWhoseDataChange={setPatientWhoseDataChange}
          setIsPatientList={setIsPatientList} /> :
        <PatientCreationForm
          setPatientsData={setPatientsData}
          patientWhoseDataChange={patientWhoseDataChange}
          setPatientWhoseDataChange={setPatientWhoseDataChange}
          patientsData={patientsData} />}

    </section>
  )
}

export default Home
