let websites = document.querySelectorAll('#website article');
let selecties = document.querySelectorAll("#selectie div");
let links = document.querySelector("#selectie svg:first-child");
let rechts = document.querySelector("#selectie svg:last-child");
let pagina = document.querySelector("#websites");

let volgordenummer = 0;
let touchstartX = 0;
let touchendX = 0;


links.addEventListener('click', (e) => {
    vorige();
})

rechts.addEventListener('click', (e) => {
    volgende()
})

function vorige() {
    if (volgordenummer > 0) {
        volgordenummer -= 1;
    } else {
        volgordenummer = websites.length - 1;
    }
    updateWebite(volgordenummer);
}

function volgende() {
    if (volgordenummer < (websites.length - 1)) {
        volgordenummer += 1;
    } else {
        volgordenummer = 0;
    }
    updateWebite(volgordenummer);
}

function updateWebite(volgordenummer){
    let website = websites[volgordenummer];
    let selectie = selecties[volgordenummer];

    selecties.forEach(selectie => {
        selectie.classList.remove('actief');
    })
    websites.forEach(website => {
        website.classList.remove('actief');
    })
    pagina.scrollTop = 0;
    website.classList.add('actief');
    selectie.classList.add('actief');

}

// Listen for the 'touchstart' event
pagina.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].clientX; // Use clientX from the first touch
}, false);

// Listen for the 'touchend' event
pagina.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].clientX; // Use clientX from the first touch
    handleGesure();
}, false);

function handleGesure() {
    let swiped = 'swiped: ';
    if ((-100 > touchendX - touchstartX) || 100 < (touchendX - touchstartX)) {
        if (touchendX < touchstartX) {
            vorige();
        }
        if (touchendX > touchstartX) {
            volgende();
        }
    }
    console.log(touchendX)
    console.log(touchstartX)
}

