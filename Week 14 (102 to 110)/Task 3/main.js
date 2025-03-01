let div = document.createElement("div")
let divText = document.createTextNode("10")

div.append(divText)
document.body.append(div)


function countDown() {
    div.innerHTML -= 1
    if (div.innerHTML == 0) {
        clearInterval(counter)
    }
}

let counter = setInterval(countDown, 1000)