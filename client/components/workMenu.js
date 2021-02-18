import React, { useState } from 'react'

const WorkMenu = ({ setVisibleData, patientsData, setIsPatientList, setPatientWhoseDataChange }) => {
  // id, surname, name, patronymic, sex, datebirth, adress, policynumber
  const [inputValue, setInputValue] = useState('')
  const search = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setPatientWhoseDataChange('')
      const searchResults = patientsData.filter(patient => patient.surname === inputValue.trim() || patient.policynumber === inputValue.trim())
      setVisibleData(searchResults)
      setIsPatientList(true)
    }
  }
  const showAll = (e) => {
    e.preventDefault()
    setPatientWhoseDataChange('')
    setVisibleData(patientsData)
    setIsPatientList(true)
  }
  const addPatient = (e) => {
    e.preventDefault()
    setVisibleData(patientsData)
    setIsPatientList(false)
  }

  return (
    <div id="board-search">
      <div className="container">
        <div className="search-window">
          <form action="">
            <div className="search-wrap">
              <label htmlFor="search" className="blind">Enter the patient&apos;s surname or policy number</label>
              <input id="search"
                type="search"
                name=""
                placeholder="Enter the patient&apos;s surname or policy number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="btns">
                <button type="submit" className="btn btn-dark" onClick={search}>Search</button>
                <button type="submit" className="btn btn-dark" onClick={showAll} >Show all</button>
                <button type="submit" className="btn btn-dark" onClick={addPatient}>Add patient</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkMenu
