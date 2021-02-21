import React from "react"
import  PatientCreationForm,{ fields } from './patientCreationForm'
import { shallow } from 'enzyme'

jest.mock('../secondaryFunctions')
import { Api } from '../secondaryFunctions'

const props = {
  patientsData: [
    {
      id: "1",
      surname: "surname1",
      name: "name1",
      patronymic: "patronymic1",
      sex: "man",
      datebirth: "01.01.2001",
      adress: "adress1",
      policynumber: "777",
    },
    {
      id: "2",
      surname: "surname2",
      name: "name2",
      patronymic: "patronymic2",
      sex: "man",
      datebirth: "02.01.2001",
      adress: "adress2",
      policynumber: "555",
    },
    {
      id: "5",
      surname: "surname5",
      name: "name5",
      patronymic: "patronymic5",
      sex: "woman",
      datebirth: "05.01.2001",
      adress: "adress5",
      policynumber: "333",
    },
  ],
  patientWhoseDataChange: '2',
  setPatientsData: jest.fn(),
  setPatientWhoseDataChange: jest.fn(),
}
const defaultProps = {
  patientsData: [],
  patientWhoseDataChange: '',
  setPatientsData: jest.fn(),
  setPatientWhoseDataChange: jest.fn(),
}
const setUp = (props) => shallow(<PatientCreationForm {...props} />)

describe("PatientCreationForm component", () => {
  let e
  beforeEach(() => {
    e = {
      preventDefault: jest.fn(),
      target: {
        elements: { ...fields.reduce((acc, it) => ({ ...acc, [it]: { value: null } }), {}) }
      }
    };
  })

  describe("Has props", () => {
    const component = setUp(props)
    it("should contain the number of inputs how many in the array 'fields' ", () => {
      const inputs = component.find("input")
      expect(inputs.length).toBe(fields.length)
    })

    it("should contain any in inputs", () => {
      const inputsValueArray = component.find('input').map(input => input.props().defaultValue).filter(input => input)
      expect(inputsValueArray.length).toBe(fields.length)
    })


  })


  describe("Has no props (with default props)", () => {
    const component = setUp(defaultProps)
    it("should contain the number of inputs how many in the array 'fields' ", () => {
      const inputs = component.find("input")
      expect(inputs.length).toBe(fields.length)
    })

    it("should not contain any in inputs", () => {
      const inputsValueArray = component.find('input').map(input => input.props().value).filter(input => input)
      expect(inputsValueArray.length).toBe(0)
    })

    it("tests handleSubmit with out patientWhoseDataChange when use Api.createPatient", async () => {
      const submitButton = component.find('button')
      expect(submitButton.length).toBe(1)
      submitButton.simulate('click', e)
      await expect(Api.createPatient.mock.calls.length).toBe(1)
      await expect(Api.updatePatient.mock.calls.length).toBe(0)
      await expect(Api.getPatients.mock.calls.length).toBe(1)
      expect(defaultProps.setPatientsData.mock.calls.length).toBe(1)
      expect(defaultProps.setPatientWhoseDataChange.mock.calls.length).toBe(1)
      expect(defaultProps.setPatientWhoseDataChange).toHaveBeenCalledWith('')
    })
  })

})