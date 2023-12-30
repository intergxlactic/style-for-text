let backg = document.querySelector(".block")
let text = document.querySelector(".text_in_area")

text.addEventListener("input", ()=>  {
    backg.style.background = text.value;
    backg.style.borderRadius = text.value;
    backg.style.borderColor = text.value;
    if (text.value === "image") {
        backg.style.setProperty("background-image", "url('images/Mask.png')")
    }
})