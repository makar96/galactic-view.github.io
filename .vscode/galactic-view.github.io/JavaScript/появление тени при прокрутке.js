

const header2El = document.getElementById("header2")

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY
    if(scrollPos > 50) {
        header2El.classList.add("header_mini")
    }
    else {
        header2El.classList.remove("header_mini")
    }
    console.log("scrollpos");
})



