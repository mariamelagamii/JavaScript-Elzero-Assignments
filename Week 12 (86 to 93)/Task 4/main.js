let div1=document.querySelector('.one')
let div2=document.querySelector('.two')
let num2=div1.getAttribute('title')
let nTwo=document.body.children.length -1


div1.setAttribute('title',div2.getAttribute('title'))
div2.setAttribute('title',num2)


div1.textContent=div1.getAttribute('title')
div2.textContent=`${div2.getAttribute('title')} ${nTwo}`