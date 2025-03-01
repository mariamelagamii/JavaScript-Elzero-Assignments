function model() {
    let box = document.createElement("div")
    let close = document.createElement("div")
    let span = document.createElement("span")
    let p = document.createElement("p")

    box.className = "box";
    close.className = "close"

    let spanText = document.createTextNode("Welcome")
    let pText = document.createTextNode("Welcome To ElZero Web School")
    let closeText = document.createTextNode("X")

    span.append(spanText)
    p.append(pText)
    close.append(closeText)

    box.append(close, span, p)

    document.body.append(box)
}

function close() {
    let box = document.querySelector(".box");
    let close = document.querySelector(".close");


    close.addEventListener("click", (e) => {
        box.remove()
    });
}


setTimeout(model, 2000)
setTimeout(close, 2000)