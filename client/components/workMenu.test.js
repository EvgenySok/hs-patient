import React from "react"
import WorkMenu from "./workMenu"

const setUp = (props) => shallow(<WorkMenu {...props} />)

describe("WorkMenu component", () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  
  it("should contain one input", () => {
    const input = component.find("input")
    expect(input.length).toBe(1)
  })

  it("input should contain placeholder = Enter the patient's surname or policy number", () => {
    const input = component.find("input")
    expect(input.at(0).props().placeholder).toEqual("Enter the patient's surname or policy number")

  })
  
  it("should contain 3 buttons", () => {
    const buttons = component.find("button")
    expect(buttons.length).toBe(3)
  })

})