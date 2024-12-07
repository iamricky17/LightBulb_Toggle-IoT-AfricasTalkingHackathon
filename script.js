function changeBackground() {
    const body = document.body;

    if (body.classList.contains("bulbon")) {
        body.classList.remove("bulbon");
        body.classList.add("bulboff");
    } else {
        body.classList.remove("bulboff");
        body.classList.add("bulbon");
    }
}

// Add click event to the entire body
document.body.addEventListener("click", changeBackground);
