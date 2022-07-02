const { read, write } = require("../lib/FS")

const GET = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.redirect("/")

    }
    const allCourses = read("courses.json")
    const allusers = read('users.json').filter(e => e.role == "teacher")

    res.render("createTeachers.ejs", { allusers, allCourses })

}

const POST = (req, res) => {
    const { userName, password, phoneNumber, job } = req.body

    const users = read("users.json")

    const allusers = users

    allusers.push({ id: allusers.length + 1, userName, password, phoneNumber, job, role: "teacher" });
    write('users.json', allusers)

    if (!userName && password && phoneNumber && job) {
        return res.send("yozish shart")
    }


    res.redirect('/createTeacher')
}


module.exports = {
    GET,
    POST
}