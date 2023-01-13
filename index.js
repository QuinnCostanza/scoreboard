let homeAddOne = document.getElementById("homeAddOne")
let homeAddTwo = document.getElementById("homeAddTwo")
let homeAddThree = document.getElementById("homeAddThree")
let guestAddOne = document.getElementById("guestAddOne")
let guestAddTwo = document.getElementById("guestAddTwo")
let guestAddThree = document.getElementById("guestAddThree")

let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")

let homeCount = 0
let guestCount = 0

function addOneHome() {
    homeCount += 1
    homeScore.textContent = homeCount 
}

function addTwoHome() {
    homeCount += 2
    homeScore.textContent = homeCount 
}

function addThreeHome() {
    homeCount += 3
    homeScore.textContent = homeCount 
}

function addOneGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount  
}

function addThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount 
}

function resetButton() {
    guestCount = 0
    homeCount = 0
    guestScore.textContent = guestCount
    homeScore.textContent = homeCount 
}