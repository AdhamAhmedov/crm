const { verify } = require("jsonwebtoken")

const GET = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.sendStatus(401)
    } else {
        const verifiedUser = verify(token, "SECRET-KEY");
        const role = verifiedUser.role;

        if (role == "student") {
            res.render("student.ejs")
        } else if (role == 'admin') {
            res.redirect('/admin')
        } else if (role == 'teacher') {
            res.redirect('/teacher')
        }
    }
}

module.exports = {
    GET
}