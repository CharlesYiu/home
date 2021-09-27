document.getElementById('normalFooter').hidden = true
fetch("https://raw.githubusercontent.com/charlesyiu/charlesyiu/main/README.md")
    .then(function (response) {
        return response.text()
    })
    .then(function (text) {
        let aboutElmnt = document.getElementById("about")
        aboutElmnt.innerHTML = text
    })
    .catch(function (error) {
        console.log(error);
    });