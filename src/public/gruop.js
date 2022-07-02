//================modal==========================================
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// ====================create group==============================

const courseSelect = document.querySelector('.greatGroup__courseCelect');
const teacherSelect = document.querySelector('.teacherCelect');

courseSelect.addEventListener("change", (e) => {
    let value = e.target.value;
    fetch("/api/v2")
        .then((res) => res.json())
        .then((data) => {
            allTeachers(data);

            function allTeachers(teachers) {
                teacherSelect.innerHTML = "";
                const foundTeacher = teachers.filter((e) => e.job == value);
                if (foundTeacher) {
                    foundTeacher.map((teacher) => {
                        const { userName } = teacher;
                        let option = document.createElement("option");

                        option.value = userName;
                        option.innerHTML = userName;
                        return teacherSelect.appendChild(option);
                    });
                }
            }
        });
});



