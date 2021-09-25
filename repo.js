import readFile from fs
let repoDiv = document.getElementById("repo")

readFile("repoList.txt", (err, data) => {
    if (err) throw err
    console.log(data)
    repoDiv.innerHTML = data
})