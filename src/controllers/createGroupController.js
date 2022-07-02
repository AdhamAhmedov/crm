const { read, write } = require("../lib/fs")

const GET = (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.redirect("/")
    }
    const allGroups = read("group.json")
    const allCourses = read("courses.json")
    const allTeachers = read("users.json").filter(e => e.role == "teacher")
    res.render("createGroup.ejs", { allGroups, allCourses, allTeachers })
}




const POST = (req, res) => {
    const { nameGroup, createdAdd, courseName, teacher } = req.body
    const groups = read("group.json")
    groups.push({ id: groups.length + 1, nameGroup, createdAdd, courseName, teacher });
    write('group.json', groups)
    res.redirect("/createGroups")
}

module.exports = {
    POST,
    GET
}