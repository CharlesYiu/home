fetch("https://raw.githubusercontent.com/charlesyiu/charlesyiu/main/README.md")
    .then(function (response) {
        let aboutElmnt = document.getElementById("about")
        aboutElmnt.innerHTML = response.text()
        return response
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });