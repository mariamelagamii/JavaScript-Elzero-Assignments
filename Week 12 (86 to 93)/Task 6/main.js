let numOfElements = document.querySelector('[name="elements"]');
let elementsText = document.querySelector('[name="texts"]');
let typeOfElement = document.querySelector('[name="type"]');
let submitBtn = document.querySelector('[name="create"]');
let results = document.querySelector(".results");


submitBtn.onclick = function (e) {
    e.preventDefault();
    results.innerHTML = "";

    for (let i = 0; i < numOfElements.value; i++) {
        let theText = document.createTextNode(`${elementsText.value}`)
        let finalElement = document.createElement(typeOfElement.value)
        if (elementsText.value !== "") {
            finalElement.setAttribute("title", "Element")
            finalElement.className = "box";
            finalElement.id = `id-${i + 1}`
            finalElement.appendChild(theText)
        }
        results.appendChild(finalElement);
    }
}