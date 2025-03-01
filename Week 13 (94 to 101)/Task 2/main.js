let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let result = document.querySelector(".classes-list div");
result.classList.add("words");

function Msg() {
    let p = document.createElement("p");
    let msg = document.createTextNode("No Classes To Show");
    p.append(msg);
    result.append(p);
}

function addFunc() {
    let inputArr = addInput.value.toLowerCase().split(" ").sort();
    for (let i = 0; i < inputArr.length; i++) {
        if (addInput !== "") {
            let span = document.createElement("span");
            span.className = `word-${i + 1}`
            let spanText = document.createTextNode(inputArr[i]);
            span.append(spanText);
            result.append(span);
        }
        let p = document.querySelector(".words p");
        if (result.children.length > 0 && p !== null) {
            p.remove();
        }
    }
    addInput.value = "";
}

function removeFunc() {
    let removeArr = removeInput.value.toLowerCase().split(" ");
    let allSpan = document.querySelectorAll(".words span");

    for (let i = 0; i < allSpan.length; i++) {
        if (removeInput !== "") {
            if (removeArr.indexOf(allSpan[i].textContent) !== -1) {
                allSpan[i].remove();
            }
        }
        if (result.children.length === 0) {
            Msg()
        }
    }
    removeInput.value = "";
}

Msg();


// When Input Blur
addInput.addEventListener("blur", (e) => {
    addFunc();
});

removeInput.addEventListener("blur", (e) => {
    removeFunc();
});
