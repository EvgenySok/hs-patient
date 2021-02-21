import React from "react"
import WorkMenu from "./workMenu"

const setUp = (props) => shallow(<WorkMenu {...props} />)

describe("WorkMenu component", () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  // setVisibleData, patientsData, setIsPatientList, setPatientWhoseDataChange 
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
    setVisibleData: jest.fn(),
    setPatientWhoseDataChange: jest.fn(),
    setIsPatientList: jest.fn(),
  }

  it("should contain one input", () => {
    const input = component.find('input[type="search"]')
    expect(input.length).toBe(1)
  })

  it('should have proper props for email field', () => {
    expect(component.find('input[type="search"]').props()).toEqual({
      id: 'search',
      name: 'search',
      onChange: expect.any(Function),
      placeholder: "Enter the patient's surname or policy number",
      type: 'search',
      value: '',
    });
  })


  it("should contain 3 buttons", () => {
    const buttons = component.find("button")
    expect(buttons.length).toBe(3)
  })

  describe("Buttons", () => {
    const component = setUp(props)
    describe("Search button", () => {
      const searchButton = component.find('button[name="search"]')

      it('should be 1 button', () => {
        expect(searchButton.length).toBe(1)
      })

      it('should have proper props for search button', () => {
        const searchButton = component.find('button[name="search"]')
        expect(searchButton.props()).toEqual({
          className: 'btn btn-dark',
          name: 'search',
          onClick: expect.any(Function),
          type: 'submit',
          children: 'Search'
        })
      })

      it("should not be called the following functions", async () => {
        const e = { preventDefault: jest.fn() }
        searchButton.simulate('click', e)
        expect(props.setPatientWhoseDataChange).toHaveBeenCalledTimes(0)
        expect(props.setVisibleData).toHaveBeenCalledTimes(0)
        expect(props.setVisibleData).toHaveBeenCalledTimes(0)
      })

      it("should be called the following functions", async () => {
        const e = { preventDefault: jest.fn() }
        const inputValue = 'value from mock state'
        React.useState = jest.fn().mockReturnValue([inputValue, {}])
        const component = setUp(props)
        component.find('button[name="search"]').simulate('click', e)
        expect(props.setPatientWhoseDataChange).toHaveBeenCalledTimes(1)
        expect(props.setVisibleData).toHaveBeenCalledTimes(1)
        expect(props.setVisibleData).toHaveBeenCalledTimes(1)
      })


    })
  })

})