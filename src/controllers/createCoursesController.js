


const { read, write } = require("../lib/FS")

const GET = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.redirect("/")

    }
    const allCours = read('courses.json')
    res.render('createCourses.ejs', { allCours })
}

const POST = (req, res) => {
    const { course, description, cost } = req.body
    const courses = read("courses.json")

    const allCours = courses
    allCours.push({ id: allCours.length + 1, course, description, cost });
    write('courses.json', allCours)

    if (!course && description && cost) {
        return res.send("yozish shart")
    }

    res.redirect('/createCourses')
}


module.exports = {
    GET,
    POST
}


