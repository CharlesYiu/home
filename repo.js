let fs = require("fs")
let repoDiv = document.getElementById("repo")

fs.readFile("repoList.txt", (err, data) => {
    if (err) throw err
    console.log(data)
})