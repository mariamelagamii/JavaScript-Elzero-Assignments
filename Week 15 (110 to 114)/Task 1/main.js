let selectFont = document.getElementById("select__font");
let selectColor = document.getElementById("select__color");
let selectFontSize = document.getElementById("select__fontSize");


let fontValue = localStorage.getItem("font") || selectFont.options[0].value
let colorValue = localStorage.getItem("color") || selectColor.options[0].value
let fontSizeValue = localStorage.getItem("size") || selectFontSize.options[0].value

document.body.style.fontFamily = fontValue;
document.body.style.backgroundColor = colorValue;
document.body.style.fontSize = fontSizeValue;

selectFont.value = fontValue;
selectColor.value = colorValue;
selectFontSize.value = fontSizeValue;

selectFont.addEventListener("change", (e) => {
    fontValue = selectFont.value
    document.body.style.fontFamily = fontValue;
    localStorage.setItem("font", fontValue)
});

selectColor.addEventListener("change", (e) => {
    colorValue = selectColor.value
    document.body.style.backgroundColor = colorValue;
    localStorage.setItem("color", colorValue)
});

selectFontSize.addEventListener("change", (e) => {
    fontSizeValue = selectFontSize.value
    document.body.style.fontSize = fontSizeValue
    localStorage.setItem("size", fontSizeValue)
});