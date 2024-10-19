let pagina = document.querySelector('#websites');
let websites = document.querySelectorAll('#websites article');
let links = document.querySelector("#selectie svg:first-child");
let rechts = document.querySelector("#selectie svg:last-child");
let infoKnop = document.querySelector("#info");
const root = document.querySelector(':root');
let beschrijvingen = document.querySelectorAll('article .uitleg');
let uitleg = false;


let volgordenummer = 0;

updateWebite(volgordenummer)

infoKnop.addEventListener('click', (e) => {
    if (!uitleg) {
        pagina.classList.add("informatie");
        infoKnop.classList.add("actief");
        uitleg = true;
    } else {
        pagina.classList.remove("informatie");
        infoKnop.classList.remove("actief");
        uitleg = false;
    }
})


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

    kleurtje(links);
    updateWebite(volgordenummer);
}

function volgende() {

    if (volgordenummer < (websites.length - 1)) {
        volgordenummer += 1;
    } else {
        volgordenummer = 0;
    }

    kleurtje(rechts);
    updateWebite(volgordenummer);

}


function kleurtje(richting) {
    // let hue = Math.floor(Math.random() * 360) 

    richting.style.transition = "none";
    richting.style.backgroundColor = "var(--light-pink)";

    setTimeout(function() {
        richting.style.transition = "background-color 1s ease";
        richting.style.backgroundColor = "";  // Reset to original color
    }, 0);
}

function updateWebite(volgordenummer){
    let website = websites[volgordenummer];
    let hue = 69 + volgordenummer * (360 / websites.length);
    let kleur = "hsl(" + hue + ", 20%, 69%)";
    let kleurAchtergrond = "hsl(" + hue + ", 69%, 90%)";

    root.style.setProperty('--kleur-browser', kleur);
    root.style.setProperty('--kleur-browser-licht', kleurAchtergrond);

    websites.forEach(website => {
        website.classList.remove('actief');
        
    })
    website.classList.add('actief');
    pagina.scrollTop = 0;
}

// document.addEventListener("gesturestart", function (e) {
//     e.preventDefault(); // Prevent gesture zooming
// });

// document.addEventListener('gesturestart', function(e) {

//     // If the gesture is outside the zoomable div, prevent it
//     if (!page.contains(e.target)) {
//         e.preventDefault(); // Block zooming outside the div
//     }
// });



