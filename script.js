function changeBackground() {
    const body = document.body;
  
    if (body.style.backgroundImage.includes("pic_bulbon")) {
      body.style.backgroundImage = "url('pic_bulboff.jpg')";
    } else {
      body.style.backgroundImage = "url('pic_bulbon.jpg')";
    }
  }
  
  // Add click event to the entire body
  document.body.addEventListener("click", changeBackground);
  