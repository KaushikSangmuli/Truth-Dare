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
            if ( randomDegree > 4060 && randomDegree < 4220){
                anounce.innerText = `its ${localUser2}'s turn ! select Truth or Dare`
                truthAndDare.classList.remove("hidden")
                isuser2Activated = true
                console.log(localUser2)
            } else if (  randomDegree > 4240 || randomDegree < 4040 ){
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
                    clearTimeout(clearSpinDefault)
                }, 4000);
            }

           
        }, 8000);

       const clearSpinDefault= setTimeout(() => {
            
            isSpinnerSpinning=false;
            spinnerImg.disabled= false;
            anounce.innerText = `Chalo firse Ghumao`
            spinnerImg.style.transition = "transform 1s ease";
            spinnerImg.style.transform = `rotate(0deg)`;
            truthAndDare.classList.add("hidden") 
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
const performer = document.querySelector("#perform-user")
const decision = document.querySelector(".yes-or-no")


truth.addEventListener ( "click", ()=>{
    let i = Math.floor(Math.random()* 78)
    console.log( truthTask[i])
    setTimeout(() => {
        anounce.classList.add("hidden")
        gameBox.classList.add("hidden")
        performTag.classList.remove("hidden")
        truthAndDare.classList.add("hidden")
        decision.classList.remove("hidden")
        if(isUser1Activated){
            performer.innerText = `${localUser1}, ${localUser2} want to ask`
        } else if(isuser2Activated){
            performer.innerText = `${localUser2}, ${localUser1} want to ask`
        }
        performanceText.innerText = truthTask[i]

    }, 500);


})


dare.addEventListener ( "click", ()=>{
    let i = Math.floor(Math.random()* 115)
    setTimeout(() => {
        anounce.classList.add("hidden")
        gameBox.classList.add("hidden")
        performTag.classList.remove("hidden")
        truthAndDare.classList.add("hidden")
        decision.classList.remove("hidden")
        if(isUser1Activated){
            performer.innerText = `${localUser1}, ${localUser2} dare you `
        } else if(isuser2Activated){
            performer.innerText = `${localUser2}, ${localUser1} dare you`
        }
        performanceText.innerText = dareTask[i]
    }, 500);
})

const truthTask= ["What's the craziest thing you've done in the name of love?",
"Have you ever had a crush on a fictional character? Who?",
"What's the most embarrassing thing you've done while trying to impress someone?",
"Have you ever used a cheesy pickup line? Did it work?",
"What's the weirdest food combination you've ever tried?",
"Have you ever snooped through someone else's phone without their permission?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever pretended to like a gift you received but secretly hated it?",
"What's the most embarrassing thing you've worn in public?",
"Have you ever laughed at a joke you didn't understand just to fit in?",
"What's the most embarrassing nickname you've ever had?",
"Have you ever accidentally sent a text to the wrong person? What did it say?",
"What's the weirdest dream you've ever had?",
"Have you ever had an embarrassing moment in front of your crush?",
"What's the silliest fear you have?",
"Have you ever had a wardrobe malfunction in public? What happened?",
"What's the most embarrassing thing your parents have caught you doing?",
"Have you ever had a crush on a teacher? Which one?",
"What's the most embarrassing thing you've said in front of someone you liked?",
"What's the most embarrassing thing you've done on social media?",
"Have you ever tripped and fallen in public? What was the aftermath?",
"What's the most embarrassing thing you've done while drunk?",
"Have you ever had a crush on someone much older or younger than you? Who?",
"What's the most embarrassing thing you've done to try to impress your crush?",
"Have you ever laughed so hard you snorted in public?",
"What's the most embarrassing thing you've done while trying to be cool?",
"Have you ever had an awkward encounter with someone you had a crush on? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had a crush on a friend's sibling? Who?",
"What's the most embarrassing thing you've done in front of your boss?",
"Have you ever walked into a glass door or window? What was the reaction?",
"What's the most embarrassing thing you've done in front of your celebrity crush?",
"Have you ever had an embarrassing moment at a party? What happened?",
"What's the most embarrassing thing you've done while trying to impress your boss?",
"Have you ever had an embarrassing moment in front of your crush's parents? What happened?",
"What's the most embarrassing thing you've done in front of a celebrity?",
"Have you ever had a wardrobe malfunction while performing on stage or in front of an audience?",
"What's the most embarrassing thing you've done in front of your in-laws?",
"Have you ever had an embarrassing moment during a job interview? What happened?",
"What's the most embarrassing thing you've done in front of your siblings?",
"Have you ever had a crush on a coworker? Who?",
"What's the most embarrassing thing you've done during a presentation or speech?",
"Have you ever had an embarrassing moment during a job interview? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?",
"What's the most embarrassing thing you've done in front of your crush?",
"Have you ever had an awkward encounter with someone while trying to avoid them? What happened?",
"What's the most embarrassing thing you've done on a date?",
"Have you ever had an embarrassing moment during a school or college presentation? What happened?"
]
const dareTask = [ 
    
    "Perform a dramatic monologue about a mundane task, like doing the dishes.",
    "Wear socks on your hands for the next three rounds.",
    "Speak in a Shakespearean accent for the next five minutes.",
    "Do an interpretive dance to a nursery rhyme.",
    "Pretend to be a news anchor reporting on a made-up event.",
    "Wear a funny hat and sing 'Happy Birthday' to yourself.",
    "Perform a rap about a random household object.",
    "Do your best impression of a famous superhero.",
    "Speak in slow motion for the next round.",
    "Act out a scene from your favorite movie using only emojis.",
    "Perform a magic trick with a deck of cards.",
    "Wear a blindfold and try to guess what object someone is holding up to you.",
    "Do the robot dance for one minute.",
    "Recreate a famous painting using only your body.",
    "Speak in an exaggerated French accent for the next five minutes.",
    "Wear a mustache made out of paper and introduce yourself to the group.",
    "Act out a soap opera scene with another player.",
    "Speak in rhymes for the next three rounds.",
    "Do your best impression of a cat or dog.",
    "Wear a pair of underwear on your head for the next two rounds.",
    "Perform a dramatic reading of a grocery store receipt.",
    "Mime your favorite hobby for one minute.",
    "Wear a cape and strike a superhero pose for a group photo.",
    "Tell a joke to the group and try to make everyone laugh.",
    "Act like you're being interviewed on a talk show.",
    "Wear a funny costume and do a catwalk strut for the group.",
    "Recite the alphabet backward in under 30 seconds.",
    "Wear your clothes backward for the next round.",
    "Speak with a mouthful of marshmallows for the next three rounds.",
    "Wear a cape and pretend to fly around the room like a superhero.",
    "Act like you're in a silent movie and mime a day in the life of a clown.",
    "Wear a pair of socks on your ears for the next round.",
    "Act out a scene from a romantic comedy with another player.",
    "Perform a dramatic interpretation of a famous meme.",
    "Wear a fake mustache and speak like a detective solving a case.",
    "Do your best impression of a famous historical figure.",
    "Act like you're in a music video and lip-sync to a song.",
    "Wear a tiara and give a dramatic acceptance speech.",
    "Perform a slow-motion fight scene with another player.",
    "Speak in an exaggerated Southern accent for the next five minutes.",
    "Wear a cape and pretend to be a superhero saving the day.",
    "Act like you're a contestant on a game show answering trivia questions.",
    "Wear a pair of socks on your hands and try to do a handstand.",
    "Perform a dramatic reading of a love letter (real or fictional).",
    "Wear a funny hat and pretend to be a tour guide showing off your house.",
    "Act out a scene from a Shakespeare play with another player.",
    "Wear a pair of sunglasses and speak like a movie star.",
    "Perform an interpretive dance to a song chosen by the group.",
    "Wear a fake beard and give a dramatic monologue about your favorite food.",
    "Act out a scene from a famous movie using only animal noises.",
    "Perform a dramatic reading of a random page from a book.",
    "Wear a funny costume and do a silly dance for the group.",
    "Act like you're hosting a cooking show and demonstrate how to make a peanut butter and jelly sandwich.",
    "Wear a pair of oven mitts and try to eat a snack.",
    "Perform a slow-motion reenactment of a famous scene from a movie.",
    "Wear a funny mask and pretend to be a famous celebrity.",
    "Act out a scene from a sci-fi movie with sound effects.",
    "Wear a pair of sunglasses and pretend to be a secret agent on a mission.",
    "Perform a dramatic reading of a random text message.",
    "Wear socks on your hands for the next three rounds.",
    "Speak in a Shakespearean accent for the next five minutes.",
    "Do an interpretive dance to a nursery rhyme.",
    "Pretend to be a news anchor reporting on a made-up event.",
    "Wear a funny hat and sing 'Happy Birthday' to yourself.",
    "Perform a rap about a random household object.",
    "Do your best impression of a famous superhero.",
    "Speak in slow motion for the next round.",
    "Act out a scene from your favorite movie using only emojis.",
    "Perform a magic trick with a deck of cards.",
    "Wear a blindfold and try to guess what object someone is holding up to you.",
    "Do the robot dance for one minute.",
    "Recreate a famous painting using only your body.",
    "Speak in an exaggerated French accent for the next five minutes.",
    "Wear a mustache made out of paper and introduce yourself to the group.",
    "Act out a soap opera scene with another player.",
    "Speak in rhymes for the next three rounds.",
    "Do your best impression of a cat or dog.",
    "Wear a pair of underwear on your head for the next two rounds.",
    "Perform a dramatic reading of a grocery store receipt.",
    "Mime your favorite hobby for one minute.",
    "Wear a cape and strike a superhero pose for a group photo.",
    "Tell a joke to the group and try to make everyone laugh.",
    "Act like you're being interviewed on a talk show.",
    "Wear a funny costume and do a catwalk strut for the group.",
    "Recite the alphabet backward in under 30 seconds.",
    "Wear your clothes backward for the next round.",
    "Speak with a mouthful of marshmallows for the next three rounds.",
    "Wear a cape and pretend to fly around the room like a superhero.",
    "Act like you're in a silent movie and mime a day in the life of a clown.",
    "Wear a pair of socks on your ears for the next round.",
    "Act out a scene from a romantic comedy with another player.",
    "Perform a dramatic interpretation of a famous meme.",
    "Wear a fake mustache and speak like a detective solving a case.",
    "Do your best impression of a famous historical figure.",
    "Act like you're in a music video and lip-sync to a song.",
    "Wear a tiara and give a dramatic acceptance speech.",
    "Perform a slow-motion fight scene with another player.",
    "Speak in an exaggerated Southern accent for the next five minutes.",
    "Wear a cape and pretend to be a superhero saving the day.",
    "Act like you're a contestant on a game show answering trivia questions.",
    "Wear a pair of socks on your hands and try to do a handstand.",
    "Perform a dramatic reading of a love letter (real or fictional).",
    "Wear a funny hat and pretend to be a tour guide showing off your house.",
    "Act out a scene from a Shakespeare play with another player.",
    "Wear a pair of sunglasses and speak like a movie star.",
    "Perform an interpretive dance to a song chosen by the group.",
    "Wear a fake beard and give a dramatic monologue about your favorite food.",
    "Act out a scene from a famous movie using only animal noises.",
    "Perform a dramatic reading of a random page from a book.",
    "Wear a funny costume and do a silly dance for the group.",
    "Act like you're hosting a cooking show and demonstrate how to make a peanut butter and jelly sandwich.",
    "Wear a pair of oven mitts and try to eat a snack.",
    "Perform a slow-motion reenactment of a famous scene from a movie.",
    "Wear a funny mask and pretend to be a famous celebrity.",
    "Act out a scene from a sci-fi movie with sound effects.",
    "Wear a pair of sunglasses and pretend to be a secret agent on a mission.",
    "Perform a dramatic reading of a random text message."
]

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
            resultText.innerText = `${localUser2}, what you think on the performance of ${localUser1}`
        } else if (isuser2Activated){
            resultText.innerText = `${localUser1}, what you think on the performance of ${localUser2}`
        }
    }, 60000);
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
            resultText.innerText = `Shame Shame!! ${localUser1} Dar Gaye aap toh. Chalo maaf kiya firse Ghumao`
        } else if ( isuser2Activated) {
            resultText.innerText = `Shame Shame!! ${localUser2} Dar Gaye aap toh. Chalo maaf kiya firse Ghumao`
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
        resultText.innerText = `Kudos ! ${localUser1} Wah ji... Dil jeet liya aapne to. Chalo firse Khelte Hain.. `
    } else if ( isuser2Activated) {
        resultText.innerText = `Kudos ! ${localUser2} Wah ji... Dil jeet liya aapne to. Chalo firse Khelte Hain.. `
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
        resultText.innerText = `Aaa haa ! ${localUser1} loose the point here :( ${localUser2} give a punishment to ${localUser1}`
    } else if ( isuser2Activated) {
        resultText.innerText = `Aaa haa ! ${localUser2} loose the point here :( ${localUser1} give a punishment to ${localUser2}`
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
    }, 8000);

}




)