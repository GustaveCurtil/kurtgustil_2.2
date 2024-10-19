let pagina = document.querySelector('#websites');
let websites = document.querySelectorAll('#website article');
let links = document.querySelector("#selectie svg:first-child");
let rechts = document.querySelector("#selectie svg:last-child");
let infoKnop = document.querySelector("#info");
let hyperlinkKnop = document.querySelector("#hyperlinks");
let hyperlinks = document.querySelectorAll("#hyperlinks a");

let volgordenummer = 0;

infoKnop.addEventListener('click', (e) => {
    pagina.classList.add("informatie");
    infoKnop.classList.remove("actief");
    hyperlinks[volgordenummer].style.display = "inline";
    hyperlinkKnop.classList.add("actief");
})

function resetInfo(){
    pagina.classList.remove("informatie");
    hyperlinkKnop.classList.remove("actief");
    infoKnop.classList.add("actief");
    hyperlinks[volgordenummer].style.display = "none";
    hyperlinkKnop
}

links.addEventListener('click', (e) => {
    resetInfo();
    vorige();
})

rechts.addEventListener('click', (e) => {
    resetInfo();
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
    let hue = Math.floor(Math.random() * 360) 

    richting.style.transition = "none";
    richting.style.backgroundColor = "hsl(" + hue + ", 21%, 52%)";

    setTimeout(function() {
        richting.style.transition = "background-color 1s ease";
        richting.style.backgroundColor = "";  // Reset to original color
    }, 0);
}

function updateWebite(volgordenummer){
    let website = websites[volgordenummer];

    websites.forEach(website => {
        website.classList.remove('actief');
    })
    website.classList.add('actief');
}



