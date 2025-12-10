/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...
let scaleLink = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
// scaleLink.addEventListener...
scaleLink.addEventListener('click', function() {
  scaleLink.classList.add('scale')
})
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

scaleLink.addEventListener('animationend', function() {
  scaleLink.classList.remove('scale')
})




//Stap 1: querySelector

let translateLink = document.querySelector('a[href="#and"]')

// Stap 2: addEventListener

translateLink.addEventListener('click', function() {
  translateLink.classList.add('translate3')
})
// translateLink.classList.remove...

translateLink.addEventListener('animationend', function() {
  translateLink.classList.remove('translate3')
})




//Stap 1: querySelector

let shakeLink = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener

shakeLink.addEventListener('dblclick', function() {
  shakeLink.classList.add('translate3')
})
// shakeLink.classList.remove...

shakeLink.addEventListener('animationend', function() {
  shakeLink.classList.remove('translate3')
})


// focus
let focusLink = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener classList.add
focusLink.addEventListener('focus', function() {
  focusLink.classList.add('focus')
})

// focusLink.classList.remove...
focusLink.addEventListener('animationend', function() {
  focusLink.classList.remove('focus')
})



function fixLeaveHandler() {
  fixLink.innerText = "Fix"
}





