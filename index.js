document.addEventListener("DOMContentLoaded", () => {
    let botones = document.querySelectorAll(".button-trigger")
    botones.forEach((elem) => {
        let audioID = elem.getAttribute("audioID");
        let audioElement = document.getElementById(audioID);
        elem.addEventListener("click", () => {
            audioElement.play()
        })
    })
})