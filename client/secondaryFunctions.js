
export const Api = {

  async createPatient(data) {
    const { surname, name, patronymic, sex, datebirth, adress, policynumber } = data
    const rawResponse = await fetch('/api/v1/patient', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ surname, name, patronymic, sex, datebirth, adress, policynumber })
    });
    const content = await rawResponse.json();
    return content
  },


  async getOnePatient(id) {
    const rawResponse = await fetch(`/api/v1/patient/${id}`)
    const content = await rawResponse.json();
    return content
  },


  async getPatients() {
    const rawResponse = await fetch(`/api/v1/patient`)
    const content = await rawResponse.json();
    return content
  },

  async updatePatient(data) {
    const { id, surname, name, patronymic, sex, datebirth, adress, policynumber } = data
    const rawResponse = await fetch('/api/v1/patient', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, surname, name, patronymic, sex, datebirth, adress, policynumber })
    });
    const content = await rawResponse.json();
    return content
  },


  async deletePatient(id) {
    const rawResponse = await fetch(`/api/v1/patient/${id}`, {
      method: 'DELETE'
    })
    const content = await rawResponse.json()

    return content
  }
}

export const summ = (a, b) => a + b