let websites = document.querySelectorAll('#website article');
let selecties = document.querySelectorAll("#selectie div");
let links = document.querySelector("#selectie svg:first-child");
let rechts = document.querySelector("#selectie svg:last-child");
let volgordenummer = 0;
let pagina = document.querySelector("#websites");


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
    website.classList.add('actief');
    selectie.classList.add('actief');

}

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

pagina.addEventListener('touchstart', (e) => {
    touchstartX = e.screenX;
    touchstartY = e.screenY;
}, false);

pagina.addEventListener('touchend', (e) => {
    touchendX = e.screenX;
    touchendY = e.screenY;
    handleGesure();
}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        alert(swiped + 'left!');
    }
    if (touchendX > touchstartX) {
        alert(swiped + 'right!');
    }
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        alert('tap!');
    }
}

