let dollar = document.querySelector("input[name='dollar']")
let res = document.querySelector('.result')

document.forms[0].oninput = function () {
    let calc = dollar.value * 50.59
    res.innerHTML = `{${dollar.value}} USD Dollar = {${calc.toFixed(2)}} Egyptian Pound `
}