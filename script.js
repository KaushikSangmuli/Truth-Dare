const group = document.querySelectorAll(".group")
const group3 = document.querySelector(".type-3")
const user = document.querySelectorAll(".username")
const user2 = document.querySelector("#username-2")
const userBox = document.querySelector(".userBox")
const error = document.querySelector("#error")
const level = document.querySelectorAll(".level")
const selectLevel = document.querySelector("#select-level")
const letsGo = document.querySelector("button")

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
        } else{
           console.log( e.value)
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

        console.log(i)
        select1.append(option1)
        select2.append(option2)
    } 
})
// for (let i = 13; i<=49; i++){
//     let option = document.createElement("option")
//     option.setAttribute( "value" , i)
//     option.innerText = i
//     console.log(i)
//     select.append(option)
// }




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
        window.location.href = "gamePage.html"
    } else{
        error.innerText = "fill the details"
    }
})
