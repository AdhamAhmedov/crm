const { verify } = require("jsonwebtoken")

const { read, write } = require("../lib/FS");

const GET = (req, res) => {

    const { token } = req.cookies
    const user = verify(token, 'SECRET-KEY')
    const userFilter = user.userName
    console.log(user)

    console.log(userFilter)
    if (!token) {
        return res.redirect("/")
    } else {
        const verifiedUser = verify(token, "SECRET-KEY");
        const role = verifiedUser.role;

        allGroups = read("group.json")
        const foundGroup = allGroups.filter(e => e.teacher == userFilter)

        res.render('teacher.ejs', {
            userFilter,
            foundGroup
        })

        if (role == "teacher") {
            res.render("teacher.ejs")
        } else if (role == "student") {
            res.redirect('/student')
        } else if (role == 'admin') {
            res.redirect('/admin')
        }
    }
}



module.exports = {
    GET
}


// const user = verify(token, 'SECRET-KEY')
// const userFilter = user.name

// if (!token) {
//     return res.redirect("/");
// } else {
//     const verifiedUser = verify(token, "SECRET-KEY");
//     const role = verifiedUser.role;
//     if (role == "teacher") {
//         const allTeachers = read("users.json")
//         const allGroups = read("group.json")

//         const foundGroup = allGroups.filter(allTeachers => allTeachers.TeacherName == userFilter);


//         res.render('teacher', {
//             userFilter,
//             groups: foundGroup,
//             teachers: allTeachers
//         })
//     } else if (role == "admin") {
//         res.redirect("/admin");
//     } else if (role == "student") {
//         res.redirect("/student");
//     }
// }
// };