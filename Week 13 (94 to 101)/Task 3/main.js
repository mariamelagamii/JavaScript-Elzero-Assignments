let div = document.querySelector(".our-element");
let para = div.nextElementSibling;
para.remove();

let start = document.createElement("div")
let end = document.createElement("div")

let startText = document.createTextNode("Start")
let endText = document.createTextNode("End")

start.appendChild(startText)
end.appendChild(endText)
start.classList.add("start")
end.classList.add("end")
start.title = "Start Element"
end.title = "End Element"
start.setAttribute("data-value", "Start")
end.setAttribute("data-value", "End")
div.before(start)
div.after(end)