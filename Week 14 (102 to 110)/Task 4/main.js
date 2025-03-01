let div = document.createElement("div")
let divText = document.createTextNode("3")

div.append(divText)
document.body.append(div)


function countDown() {
    div.innerHTML -= 1
    if (div.innerHTML == 0) {
        clearInterval(counter)
        location.href = "https://www.elzero.org"
    }
}

let counter = setInterval(countDown, 1000)