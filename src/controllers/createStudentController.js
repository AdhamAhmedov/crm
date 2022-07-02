
const { read, write } = require("../lib/fs")

const GET = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.redirect("/")

    }
    const allCours = read("courses.json")
    const allGroup = read("group.json")
    const allStudent = read("users.json").filter(e => e.role == "student")
    console.log(allStudent)

    res.render("createStudent.ejs", { allCours, allGroup, allStudent })
}
const POST = (req, res) => {
    const { userName, password, phoneNumber, coursName } = req.body
    const allStudents = read("users.json")
    allStudents.push({ id: allStudents.length + 1, userName, password, phoneNumber, coursName, role: "student" });
    write('users.json', allStudents)
    res.redirect('/createStudents')
}

module.exports = {
    POST,
    GET
}