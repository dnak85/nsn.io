const clsButtons = document.querySelectorAll('.collapse-button');

console.log(clsButtons);

clsButtons.forEach((clsButton) => {
    clsButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(clsButton);
    })
})