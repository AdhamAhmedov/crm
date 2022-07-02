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



//=====================create student=================================

const courseSelectStudent = document.querySelector('.createStudent__coursSelect');
const groupSelectstudent = document.querySelector('.createStudent__groupSelect');

courseSelectStudent.addEventListener("change", (e) => {
    let value = e.target.value;
    fetch("/api")
        .then((res) => res.json())
        .then((data) => {
            allGroups(data);
            console.log(data);

            function allGroups(groups) {
                groupSelectstudent.innerHTML = "";
                console.log(groups);
                const foundGroups = groups.filter((e) => e.courseName == value);
                if (foundGroups) {
                    foundGroups.map((group) => {
                        const { nameGroup } = group;

                        let option = document.createElement("option");

                        option.value = nameGroup;
                        option.innerHTML = nameGroup;
                        return groupSelectstudent.appendChild(option);
                    });
                }
            }
        });
});
