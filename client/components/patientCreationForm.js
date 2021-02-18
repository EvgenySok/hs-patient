import React from 'react'
import { Api } from '../secondaryFunctions'

const PatientCreationForm = ({ setPatientsData, patientWhoseDataChange, setPatientWhoseDataChange, patientsData }) => {

  const fields = ['surname', 'name', 'patronymic', 'sex', 'datebirth', 'adress', 'policynumber']

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = fields.reduce((acc, field) => {
      return { ...acc, [field]: e.target.elements[field].value }
    }, {})
    if (patientWhoseDataChange) {
      await Api.updatePatient({ ...data, id: String(patientWhoseDataChange) })
      const newData = await Api.getPatients()
      setPatientsData(newData)
    } else {
      await Api.createPatient(data)
      const newData = await Api.getPatients()
      setPatientsData(newData)
    }
    setPatientWhoseDataChange('')
  }

  const getPatientDataForField = (nameField) => {
    const patient = patientsData.find(item => item.id === patientWhoseDataChange)
    return patient[nameField]
  }

  return (
    <div id="board-list">
      <div className="container">
        <h2>{patientWhoseDataChange ? 'Editing patient data' : 'Patient creation'} </h2>
        <form onSubmit={handleSubmit}>
          {fields.map(field => (
            <div key={field} className="field">
              <label htmlFor="surname" className="label">{`Enter ${field}:`}</label>
              <input id={field}
                type="text"
                defaultValue={patientWhoseDataChange ? getPatientDataForField(field) : ''}
                name={field}
                placeholder={`Enter the patient's ${field}`}
              />
            </div>
          ))}

          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PatientCreationForm
