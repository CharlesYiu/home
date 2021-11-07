let frame = document.getElementById("video-frame")
let content = document.getElementById("content")
var player
if (window.location.toString().endsWith("#")) {
    var firstScriptTag = document.querySelector("script")
    var tag = document.createElement("script")
    tag.src = "https://www.youtube.com/player_api"
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}
document.getElementById("normalFooter").hidden = true
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
function onYouTubePlayerAPIReady() {
    player = new YT.Player("video-frame", {
        width: "100%",
        height: "315px",
        videoId: "dQw4w9WgXcQ",
        host: "https://www.youtube-nocookie.com",
        events: {
            "onStateChange": onPlayerStateChange
        }
    });
}
function okay() {
    document.getElementById("footer").hidden = true
    document.getElementById("normalFooter").hidden = false
    if (window.location.toString().endsWith("#")) {
        content.hidden = true
        frame.hidden = false
        player.seekTo(0)
        player.unMute()
    }
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.seekTo(0)
        player.playVideo()
    }
}
