const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const home = document.querySelector('.home');


buttons.forEach( (button) => {
    // console.log(button)
    button.addEventListener('click', (color) => {
        // console.log(color);
        // console.log(color.target);
        if (color.target.id === color.target.id) {
         body.style.backgroundColor = color.target.id   
        }
    })
} )

home.addEventListener('click',() => {
    location.reload();
})