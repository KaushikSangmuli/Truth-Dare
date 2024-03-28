const spinnerImg = document.querySelector(".spinner-img")
const gameUser1= document.querySelector("#game-user1")
const gameUser2= document.querySelector("#game-user2")

spinnerImg.addEventListener ( "click", ()=>{
    spinnerImg.style.animation = "spin 5s ease 0s  forwards ;";
    spinnerImg.style.transitionDuration = "5s"
    const randomDegree = Math.floor(Math.random() * 1440);
    spinnerImg.style.transform = `rotate(${randomDegree}deg)`;


})

setTimeout(() => {

    spinnerImg.style.transform = `rotate(${0}deg)`
}, 6000);