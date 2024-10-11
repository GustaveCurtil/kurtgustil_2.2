let websiteKnoppen = document.querySelectorAll('#websites div');
let websites = document.querySelectorAll('#website article');

for (let i = 0; i < websiteKnoppen.length; i++) {
    const knop = websiteKnoppen[i];
    const website = websites[i]
    knop.addEventListener('click', (e) => {
        websiteKnoppen.forEach(knop => {
            knop.classList.remove('actief');
        });
        knop.classList.add('actief');
        websites.forEach(website => {
            website.classList.remove('actief');
        })
        website.classList.add('actief');
    })
}