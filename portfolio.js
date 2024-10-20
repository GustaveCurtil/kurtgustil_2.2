let pagina = document.querySelector('#websites');
let websites = document.querySelectorAll('#websites article');
let links = document.querySelector("#selectie svg:first-child");
let rechts = document.querySelector("#selectie svg:last-child");
let infoKnop = document.querySelector("#info");
const root = document.querySelector(':root');
let beschrijvingen = document.querySelectorAll('article .uitleg');
let uitleg = false;
let beelden = document.querySelectorAll('.uitleg figure');
let statischeWebsites = document.querySelectorAll('.noscroll')
let alleBeelden = Array.from(beelden).concat(Array.from(statischeWebsites));

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


document.addEventListener('gesturestart', function(e) {
    beelden.forEach(beeld => {
        if (!beeld.contains(e.target)) {
            e.preventDefault(); // Block zooming outside the div
        }
    });
});

alleBeelden.forEach(beeld => {
    let touchX
    let touchY
    beeld.addEventListener('touchstart', (e) => {
        e.preventDefault();
        let img = beeld.querySelector('img');
        const rect = beeld.getBoundingClientRect();
        touchX = e.changedTouches[0].clientX - rect.left;
        touchY = e.changedTouches[0].clientY - rect.top;
        console.log(touchX);
        console.log(touchY);
        img.style.scale = '300%';
        img.style.transformOrigin = `${touchX}px ${touchY}px`;
    })

    beeld.addEventListener('touchend', (e) => {
        resetScale(beeld);
    })

    beeld.addEventListener('touchmove', (e) => {
        e.preventDefault();
        let img = beeld.querySelector('img');
        const rect = beeld.getBoundingClientRect();
        touchX = e.changedTouches[0].clientX - rect.left;
        touchY = e.changedTouches[0].clientY - rect.top;
        if (touchX < beeld.clientWidth && touchX > 0 && touchY < beeld.clientHeight && touchY > 0) {
            img.style.scale = '300%';
            img.style.transformOrigin = `${touchX}px ${touchY}px`;
        } else {
            resetScale(beeld);
        }
    })
});

function resetScale(beeld) {
    let img = beeld.querySelector('img');
    img.style.scale = '100%';
    img.style.transformOrigin = "center center";
}

// beelden.forEach(beeld => {
//     beeld.addEventListener('gesturestart', function(e) {
//         // Allow zooming only for this specific 'beeld'
//         e.preventDefault(); // Prevent default zooming behavior
//         beeld.style.transition = "transform 0.25s ease"; // Smooth transition
//         // Add any zoom logic here (like scale)
//     });

//     beeld.addEventListener('gesturechange', function(e) {
//         // Calculate the scale based on the gesture scale
//         const scale = e.scale; // e.scale is the scale factor from the gesture
//         beeld.style.transform = `scale(${scale})`; // Apply the scale to the 'beeld'
//         e.preventDefault(); // Prevent default zooming behavior
//     });

//     beeld.addEventListener('gestureend', function(e) {
//         // Optionally reset the transformation or handle zoom end
//         e.preventDefault(); // Prevent default zooming behavior
//     });
// });



