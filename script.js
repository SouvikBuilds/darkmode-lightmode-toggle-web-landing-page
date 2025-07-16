document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle")
    const body = document.getElementById("wholeBody")

    const imageTag = document.querySelector(".icon")

    function toggleFunction() {
        body.classList.toggle("dark-mode")
        if (body.classList.contains("dark-mode")) {
            imageTag.src = "sun.png";
        } else {
            imageTag.src = "moon.png";
        }
    }

    toggleButton.addEventListener("click", toggleFunction)
})
