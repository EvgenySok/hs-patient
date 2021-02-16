const Router = require('express')
const router = new Router()
const PatientController = require('../db/controller/patient.controller')


router.post('/patient', PatientController.createPatient)
router.get('/patient/:id', PatientController.getOnePatient)
router.get('/patient', PatientController.getPatients)
router.put('/patient', PatientController.updatePatient)
router.delete('/patient/:id', PatientController.deletePatient)


module.exports = router