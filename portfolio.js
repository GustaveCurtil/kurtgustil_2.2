let websites = document.querySelectorAll('#website article');
let selecties = document.querySelectorAll("#selectie div");
let links = document.querySelector("#selectie svg:first-child");
let rechts = document.querySelector("#selectie svg:last-child");
let volgordenummer = 0;

links.addEventListener('click', (e) => {
    if (volgordenummer > 0) {
        volgordenummer -= 1;
    } else {
        volgordenummer = websites.length - 1;
    }
    updateWebite(volgordenummer);
})

rechts.addEventListener('click', (e) => {
    if (volgordenummer < (websites.length - 1)) {
        volgordenummer += 1;
    } else {
        volgordenummer = 0;
    }
    updateWebite(volgordenummer);
})


function updateWebite(volgordenummer){
    let website = websites[volgordenummer];
    let selectie = selecties[volgordenummer];

    selecties.forEach(selectie => {
        selectie.classList.remove('actief');
    })
    websites.forEach(website => {
        website.classList.remove('actief');
    })
    website.classList.add('actief');
    selectie.classList.add('actief');

}

