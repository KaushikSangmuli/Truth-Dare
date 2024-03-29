const group = document.querySelectorAll(".group")
const group3 = document.querySelector(".type-3")
const user = document.querySelectorAll(".username")
const user1 = document.querySelector("#username-1")
const user2 = document.querySelector("#username-2")
const userBox = document.querySelector(".userBox")
const error = document.querySelector("#error")
const level = document.querySelectorAll(".level")
const selectLevel = document.querySelector("#select-level")
const letsGo = document.querySelector("button")
const userInputPage = document.querySelector(".user-input-page")
const pageOne = document.querySelector(".main")
const subHeading = document.querySelector("#subHeading")


let groupSelected = false;
let levelSelected = false;

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
    })
})
// let addUser= document.createElement("button")
// group3.addEventListener("click", ()=>{
//     console.log("buddies clicked!")
//    addUser.innerText =" Add more + "
//    addUser.classList.add("addUserStyle")
//    console.log("buddies clicked!")
//    selectLevel.insertBefore(addUser, selectLevel[0])
// })

// addUser.addEventListener( "click" ,() => {
//         console.log("adduser clicked !")
//         let newUser = user.cloneNode(true)
//         userBox.append(newUser)
        
// })
user.forEach((e) => {
    e.addEventListener( "click" , () =>{
        if(!groupSelected){
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


level.forEach((e)=>{
    e.addEventListener("click" , () => {
        level.forEach( (ele) =>{
            ele.classList.remove("mode")
        })
        levelSelected = true;
        e.classList.toggle("mode")
        if(error.innerText){
            error.innerText = ""
        }
    }
    )
})

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
    }
})
// page 2 started here
const gamingSection = document.querySelector(".game")
const gameBox = document.querySelector(".game-page")
const spinnerImg = document.querySelector(".spinner-img")
const gameUser = document.querySelectorAll(".game-User")
const gameUser1= document.querySelector("#game-user1")
const gameUser2= document.querySelector("#game-user2")

spinnerImg.addEventListener ( "click", ()=>{
    spinnerImg.style.animation = "spin 5s ease 0s  forwards ;";
    spinnerImg.style.transitionDuration = "5s"
    var randomDegree = Math.floor(Math.random() * 1440);
    console.log(randomDegree)
    spinnerImg.style.transform = `rotate(${randomDegree}deg)`; 
    const anounce = document.querySelector("#turn-anounce")

   

    if (0 <= randomDegree <= 180 || 361<= randomDegree <= 540 || 721<= randomDegree <= 900 || 1081<= randomDegree <=1260){
        setTimeout(() => {
            anounce.innerText = `its ${user1.value}'s turn ! select Truth or Dare`
            truthAndDare.classList.remove("hidden")
            }, 5000);
            
    } else{
        setTimeout(() => {
            anounce.innerText = `its ${user2.value};s turn ! select Truth or Dare`
            truthAndDare.classList.remove("hidden")
        }, 5000);
    }

})

// 0-180  181-360
// 361-540 451-720
// 721-900 901-1080
// 1081-1260 1261-1440


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
    }, 60000);
})
decisionNo.addEventListener( "click" , ()=>{
    console.log("you opted for NO")
})

