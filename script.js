let header = document.querySelector("header");

header.addEventListener('click', (e) => {
    window.location = '/';
})


let kopieerKnop = document.querySelector(".contact button");

if (kopieerKnop) {
    kopieerKnop.addEventListener('click', () => {
        console.log(kopieerKnop.id)
        navigator.clipboard.writeText(kopieerKnop.id);
        alert("Yihaa! Je hebt '" + kopieerKnop.id + "' gekopieerd")
    })
}
