
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const PORT = process.env.PORT || 5000
const cookieParser = require("cookie-parser")

//middleware
const auth = require('./middlewares/auth')

const { read } = require("./lib/fs")

//
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())

//
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views/'))

//controllers
const loginController = require("./controllers/loginController")
const adminController = require("./controllers/adminController")
const studentController = require("./controllers/studentController")
const teacherController = require("./controllers/teacherController")
const createTeacherController = require("./controllers/createTeacherController")
const createCoursesController = require("./controllers/createCoursesController")
const createGroupController = require("./controllers/createGroupController")
const createStudentController = require("./controllers/createStudentController")

//routes
app.get('/', loginController.GET)
app.get('/createTeacher', createTeacherController.GET)
app.get('/createCourses', createCoursesController.GET)
app.get('/createGroups', createGroupController.GET)
app.get('/createStudents', createStudentController.GET)
app.get('/admin', adminController.GET)
app.get('/student', studentController.GET)
app.get('/student', studentController.GET)
app.get('/teacher', teacherController.GET)
app.post('/', auth, loginController.LOGIN)
app.post('/createTeacher', createTeacherController.POST)
app.post('/createCourses', createCoursesController.POST)
app.post('/createGroups', createGroupController.POST)
app.post('/createStudents', createStudentController.POST)


//api
app.get('/api', (_, res) => {
    const allGroups = read("group.json");
    res.send(allGroups);
});

app.get('/api/v2', (_, res) => {
    const allTeachers = read("users.json");
    res.send(allTeachers);
});




//port
app.listen(PORT, console.log(PORT))