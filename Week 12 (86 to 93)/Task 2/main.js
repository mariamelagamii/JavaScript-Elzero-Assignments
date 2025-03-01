document.body.style.backgroundColor='pink'
let images = document.images;
for (let i = 0; i < images.length; i++) {
    images[i].src = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png'
    images[i].setAttribute('alt', 'Elzero Logo')
}