const student = require('../controllers/student_controller')
const router =require('express').Router()
router.post('/create',student.add)
router.get('/find/:id',student.find)
router.put('/updatestudent/:id',student.updatestudt)
router.put('/updatelaptop/:id',student.updatelaptop)
router.delete('/deletestudent/:id',student.removestudent)
router.delete('/deletelaptop/:id',student.removelaptop)





module.exports = router