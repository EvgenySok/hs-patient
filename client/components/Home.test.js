import React from "react"
import Home from "./Home"

const setUp = (props) => shallow(<Home {...props} />)

describe("should render Home component", () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it("should contain one .post wrapper", () => {
    const wrapper = component.find(".notice")
    expect(wrapper.length).toBe(1)
  })

  it("should contain one element h3", () => {
    const header = component.find("h3")
    expect(header.length).toBe(1)
  })

  it("header should contain text 'Patient List of Hospital №1'", () => {
    const header = component.find("h3")
    expect(header.text()).toBe('Patient List of Hospital №1')
  })

})