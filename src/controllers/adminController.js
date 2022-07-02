const { verify } = require("jsonwebtoken")


const GET = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.redirect("/")
    } else {
        const verifiedUser = verify(token, "SECRET-KEY");
        const role = verifiedUser.role;

        if (role == "admin") {
            res.render("admin.ejs")
        } else if (role == "student") {
            res.redirect('/student')
        } else if (role == 'teacher') {
            res.redirect('/teacher')
        }
    }
}


module.exports = {
    GET
}