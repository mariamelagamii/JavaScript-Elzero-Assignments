let div = document.createElement("div")
let divText = document.createTextNode("5")

div.append(divText)
document.body.append(div)


function countDown() {
    div.innerHTML -= 1
    if (div.innerHTML == 0) {
        clearInterval(counter)
        window.open("https://www.elzero.org", "_blank", "width=400,height=500")
    }
}

let counter = setInterval(countDown, 1000)