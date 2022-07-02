const LOGIN = (req, res) => {
    const { role } = req.body

    role == "admin" ? res.redirect("/admin") :
        role == "teacher" ? res.redirect("/teacher") :
            role == "student" ? res.redirect("/student") :
                null
}

const GET = (_, res) => {
    res.render("index")
}

module.exports = {
    LOGIN,
    GET
}