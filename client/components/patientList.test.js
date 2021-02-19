import React from "react"
import PatientList from "./patientList"

const props = {
  // visibleData, setVisibleData, setPatientWhoseDataChange, setIsPatientList
  visibleData: [
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
  ]
}

const setUp = (props) => shallow(<PatientList {...props} />)

describe("PatientList component", () => {

  describe("Has props", () => {
    const component = setUp(props)
    it("should contain tag <tr> how visibleData.length in <tbody>", () => {
      const patientsList = component.find('tbody').find('tr')
      expect(patientsList).toHaveLength(props.visibleData.length)
    })
  })

  describe("Has no props", () => {
    const component = setUp()
    it("should not contain tag <tr> in <tbody>", () => {
      const patientsList = component.find('tbody').find('tr')
      expect(patientsList).toHaveLength(0)
    })
  })
})