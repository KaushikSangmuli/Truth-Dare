// going to restructure code
const pageOne = document.querySelector(".main")
const subHeading = document.querySelector("#subHeading")


let groupSelected = false;
let levelSelected = false;

const group = document.querySelectorAll(".group")  // type of group
const error = document.querySelector("#error")

group.forEach((e) => {
    e.addEventListener("click" , () => {
        group.forEach((ele)=>{
            ele.classList.remove("mode")
        })
        groupSelected = true
        if (error.innerText){
            error.innerText=""
        }
        e.classList.toggle("mode")
        error.classList.add("hidden")
    })
})


const user = document.querySelectorAll(".username")  //input class
const user1 = document.querySelector("#username-1")  //input 1
const user2 = document.querySelector("#username-2")  //inut 2
const userBox = document.querySelector(".userBox")   //input box containe name and age
let localUser1;
let localUser2 ;
user1.addEventListener("input" , ()=>{
    const firstUserName = user1.value.trim();
    if (firstUserName !== "") {
        localStorage.setItem("firstUser", firstUserName);
    }
     localUser1 = localStorage.getItem("firstUser")
})


user2.addEventListener("input" , ()=>{
    const secondUserName = user2.value.trim()
    if (secondUserName !== ""){
        localStorage.setItem("secondUser", secondUserName)
    }
     localUser2 = localStorage.getItem("secondUser")
    console.log(localUser1)
    console.log(localUser2)
})

window.addEventListener("beforeunload", function(event) {
    localStorage.clear();
});

user.forEach((e) => {
    e.addEventListener( "click" , () =>{
        if(!groupSelected){
            error.classList.remove("hidden")
            error.innerText = "select the group first"           
        } 
    })
})

let select= document.querySelectorAll("select")
let select1= document.querySelector("#age-1")
let select2= document.querySelector("#age-2")

select.forEach((e)=>{
    for (let i = 13; i<=49; i++){
        let option1 = document.createElement("option")
        let option2 = document.createElement("option")

        option1.setAttribute( "value" , i)
        option2.setAttribute( "value" , i)

        option1.innerText = i
         option2.innerText = i

        select1.append(option1)
        select2.append(option2)
    } 
})

const level = document.querySelectorAll(".level")   //level button
const selectLevel = document.querySelector("#select-level")  // level heading

level.forEach((e)=>{
    e.addEventListener("click" , () => {
        level.forEach( (ele) =>{
            ele.classList.remove("mode")
        })
        levelSelected = true;
        e.classList.toggle("mode")
        error.classList.add("hidden")
        if(error.innerText){
            error.innerText = ""
        }

    }
    )
})

const letsGo = document.querySelector("button")

letsGo.addEventListener("click", ()=>{
    let allFilled = true;
    user.forEach((input) => {
        if (input.value.trim() ===""){
            allFilled=false
        }
        return
    })
    if (groupSelected && allFilled && levelSelected){
        pageOne.classList.add("hidden")
        subHeading.classList.add("hidden")
        gamingSection.classList.remove("hidden")

    } else{
        error.innerText = "fill the details"
        error.classList.remove("hidden")
    }
})
// page 2 started here
const gamingSection = document.querySelector(".game")
const gameBox = document.querySelector(".game-page")
const spinnerImg = document.querySelector(".spinner-img")
const gameUser = document.querySelectorAll(".game-User")
const gameUser1= document.querySelector("#game-user1")
const gameUser2= document.querySelector("#game-user2")
const anounce = document.querySelector("#turn-anounce")

let isUser1Activated = false;
let isuser2Activated = false;

let isSpinnerSpinning = false;

spinnerImg.addEventListener ("click" , () => {
        if (!isSpinnerSpinning){

            isSpinnerSpinning = true
        
        spinnerImg.disabled=true
        let randomDegree = Math.floor(Math.random() * 361) + 3960
        spinnerImg.style.transition = "transform 6s ease-out";
        spinnerImg.style.transform = `rotate(${randomDegree}deg)`; 
        console.log(randomDegree)

        setTimeout(() => {
            if ( randomDegree > 4070 && randomDegree < 4210){
                anounce.innerText = `its ${localUser2}'s turn ! select Truth or Dare`
                truthAndDare.classList.remove("hidden")
                isuser2Activated = true
                console.log(localUser2)
            } else if (  randomDegree > 4250 && randomDegree < 4030 ){
                anounce.innerText = `its ${localUser1}'s turn ! select Truth or Dare`
                truthAndDare.classList.remove("hidden")
                isUser1Activated =true
                console.log(localUser1)
            } else {
                console.log("spin again")
                anounce.innerText = `Oh noo ! Its fair to spin the bottle again`
                setTimeout(() => {
                    isSpinnerSpinning=false;
                    spinnerImg.disabled= false;
                    spinnerImg.style.transition = "transform 1s ease";
                    spinnerImg.style.transform = `rotate(0deg)`; 
                }, 4000);
            }

           
        }, 8000);

        setTimeout(() => {
            
            isSpinnerSpinning=false;
            spinnerImg.disabled= false;
            anounce.innerText = `show some spirit and spin the bottle`
            spinnerImg.style.transition = "transform 1s ease";
            spinnerImg.style.transform = `rotate(0deg)`; 
        }, 30000);

    }
})






user.forEach((e , index)=>{
    e.addEventListener("input", () =>{
        gameUser[index].innerText=e.value;
    })
})

const truth = document.querySelector("#truth")
const dare = document.querySelector("#dare")
const truthAndDare = document.querySelector(".option-selection")
const performTag =  document.querySelector(".perform")
const performanceText =  document.querySelector(".perform-class")
const decision = document.querySelector(".yes-or-no")


truth.addEventListener ( "click", ()=>{
    let i = Math.floor(Math.random()* 29)
    console.log( truthTask[i])
    setTimeout(() => {
        anounce.classList.add("hidden")
        gameBox.classList.add("hidden")
        performTag.classList.remove("hidden")
        truthAndDare.classList.add("hidden")
        decision.classList.remove("hidden")
        performanceText.innerText = truthTask[i]
    }, 1000);


})


dare.addEventListener ( "click", ()=>{
    let i = Math.floor(Math.random()* 29)
    setTimeout(() => {
        anounce.classList.add("hidden")
        gameBox.classList.add("hidden")
        performTag.classList.remove("hidden")
        truthAndDare.classList.add("hidden")
        decision.classList.remove("hidden")
        performanceText.innerText = dareTask[i]
    }, 1000);
})

const truthTask= ["What is the most embarrassing thing that has happened to you in public?",
"Have you ever lied to get out of trouble? What was the situation?",
"What is your biggest fear, and why?",
"What is the silliest thing you've ever done to impress someone?",
"Have you ever cheated on a test or exam? How did you do it?",
"What's the most adventurous thing you've ever done?",
"Have you ever had a crush on a friend's partner? Who?",
"What's the most embarrassing thing you've searched for on the internet?",
"Have you ever been caught doing something you shouldn't have been doing? What was it?",
"What's the weirdest dream you've ever had?",
"Have you ever sent a text to the wrong person? What did it say?",
"What's the most embarrassing nickname you've ever had?",
"Have you ever pretended to be sick to get out of something? What was it?",
"What's the most trouble you've ever gotten into at school or work?",
"Have you ever stolen something? What was it, and why?",
"What's the most embarrassing thing your parents have caught you doing?",
"Have you ever lied about your age? Why?",
"What's the most embarrassing thing you've done while drunk?",
"Have you ever had a secret crush on a teacher? Which one?",
"What's the most embarrassing thing you've said in front of someone you liked?",
"Have you ever broken something and blamed it on someone else? What was it?",
"What's the most embarrassing thing you've worn in public?",
"Have you ever had a wardrobe malfunction in public? What happened?",
"What's the most embarrassing thing that's ever happened to you during a date?",
"Have you ever had a crush on someone much older or younger than you? Who?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever been caught singing or dancing when you thought no one was watching? What song or dance?",
"What's the most embarrassing thing you've done to try to impress your crush?",
"Have you ever accidentally sent a message about someone to that person? What was it?",
"What's the most embarrassing thing you've done while trying to be cool?"
]
const dareTask = [ "Do your best impression of a celebrity and have everyone guess who it is.",
"Wear socks on your hands for the next three rounds.",
"Sing everything you say for the next 10 minutes.",
"Do 20 push-ups.",
"Text your crush and confess your love for them (but tell them it's just a dare afterward).",
"Speak in an accent for the next three rounds.",
"Let someone draw a funny mustache on your face with lipstick or a marker.",
"Do your best breakdance move.",
"Eat a spoonful of a condiment that you normally wouldn't eat.",
"Put an ice cube down your shirt and let it melt.",
"Wear your clothes backward for the next three rounds.",
"Call a friend and sing Happy Birthday to them, regardless of whether it's their birthday or not.",
"Do 20 jumping jacks.",
"Let someone give you a makeover with makeup.",
"Do a handstand against the wall for as long as you can.",
"Dance like nobody's watching for the next two minutes.",
"Send a silly selfie to someone without any context.",
"Eat a spoonful of hot sauce.",
"Try to juggle three objects of the group's choosing.",
"Let someone tickle you for 30 seconds.",
"Wear a funny hat for the next three rounds.",
"Do a cartwheel.",
"Post an embarrassing photo of yourself on social media (with consent from the group).",
"Try to lick your elbow for a minute.",
"Speak in rhyme for the next three rounds.",
"Do a plank for as long as you can.",
"Let someone draw a funny face on your stomach with a marker.",
"Wear sunglasses indoors for the next three rounds.",
"Try to do a handstand against the wall for 30 seconds.",
"Do the chicken dance."]

const decisionYes = document.querySelector("#yes")
const decisionNo = document.querySelector("#no")
const timer = document.querySelector(".timer");
timer.innerText=60


decisionYes.addEventListener( "click" , ()=>{
    console.log("you opted for yes")
    timer.classList.remove("hidden")
    const stoppingClock = setInterval(() => {
        timer.innerText--
    }, 1000);
    setTimeout(() => {
        clearInterval(stoppingClock)
        result.classList.remove("hidden")
        performTag.classList.add("hidden")
        decision.classList.add("hidden")
        if( isUser1Activated){
            resultText.innerText = `${localUser2}, are you satisfied by the performance of ${localUser1}`
        } else if (isuser2Activated){
            resultText.innerText = `${localUser1}, are you satisfied by the performance of ${localUser2}`
        }
    }, 6000);
})


decisionNo.addEventListener( "click" , ()=>{

    console.log("you opted for no")
    setTimeout(() => {
        result.classList.remove("hidden")
        performTag.classList.add("hidden")
        decision.classList.add("hidden")
        satisfied.classList.add("hidden")
        notSatisfied.classList.add("hidden")
        spinAgainLooser.classList.remove("hidden")

        if ( isUser1Activated){
            resultText.innerText = `Shame Shame!! ${localUser1} have some guts. Spin Again`
        } else if ( isuser2Activated) {
            resultText.innerText = `Shame Shame!! ${localUser1} have some guts. Spin Again`
        }
    }, 6000);
    
})

const result = document.querySelector(".result")   //contain button and paragraph
const resultText = document.querySelector("#result-paragraph")  //paragraph text
const satisfied = document.querySelector("#satisfied")   //satisfy button
const notSatisfied = document.querySelector("#notSatisfied") //not satisfy button 
const spinAgainLooser = document.querySelector("#spin-again-looser") // spin again button
let isClicked = false;


satisfied.addEventListener("click", ()=>{
    
    if ( isUser1Activated){
        resultText.innerText = `Kudos ! ${localUser1} earned a point !! :) had fun? then Give it a another shot!`
    } else if ( isuser2Activated) {
        resultText.innerText = `Kudos ! ${localUser2} earned a point !! :) had fun? then Give it a another shot!`
    }
    setTimeout(() => {
        result.classList.add("hidden")
        gameBox.classList.remove("hidden")
        timer.classList.add("hidden")
        anounce.classList.remove("hidden")
        anounce.innerText = "Spin Again ;)"
        timer.innerText=60;
    }, 8000);
    isClicked = true;
})
notSatisfied.addEventListener("click",  ()=>{
    if ( isUser1Activated){
        resultText.innerText = `Aaa haa ! ${localUser1} loose the point here !! :( No worries Let's Start Again`
    } else if ( isuser2Activated) {
        resultText.innerText = `Aaa haa ! ${localUser2} loose the point here !! :( No worries Let's Start Again`
    }
    setTimeout(() => {
        result.classList.add("hidden")
        gameBox.classList.remove("hidden")
        timer.classList.add("hidden")
        anounce.classList.remove("hidden")
        anounce.innerText = "Spin Again ;)"
        timer.innerText=60;
    }, 8000);
    isClicked = true;
})

spinAgainLooser.addEventListener("click",  ()=>{
    setTimeout(() => {
        result.classList.add("hidden")
        gameBox.classList.remove("hidden")
        timer.classList.add("hidden")
        anounce.classList.remove("hidden")
        anounce.innerText = "Spin Again ;)"
        timer.innerText=60;
    }, 1000);

}




)