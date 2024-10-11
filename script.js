let kopierKnop = document.querySelectorAll(".kopieer button");

kopierKnop.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id)
        navigator.clipboard.writeText(button.id);
        alert("je hebt '" + button.id + "' gekopieerd")
    })
});