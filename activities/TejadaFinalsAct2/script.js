const message = document.getElementById("message")
const button = document.getElementById("button1")
const buttons = document.getElementById("button2")
const profile = document.getElementById("profile")
const grade = document.getElementById("grade")
const schedule = document.getElementById("schedule")




buttons.addEventListener("click", function(){
    button.style.background="yellow"
    buttons.style.background="yellow"
    message.innerHTML = "Loading..."

    profile.innerHTML = "Loading..."
    grade.innerHTML = "Loading..."
    schedule.innerHTML = "Loading..."

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){
            profile.innerHTML = "Profile: Loaded"
            resolve()
        },1000)
    })
    
    const gradePromise = new Promise(function(resolve){
        setTimeout(function(){
            grade.innerHTML = "Grade: Loaded"
            resolve()
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Loaded"
            resolve()
        },3000)
    })

    Promise.all([profilePromise,gradePromise,schedulePromise])

    .then(function(){
        message.innerHTML = "Dashboard Ready!";
    });
})





function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){

            resolve("Checking Account...")

        },1000)
    })
}

button.addEventListener("click",function(){
    message.innerHTML = "Loading..."
    message.style.color = "Brown"

    showMessage()

    .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Profile...")
            },1000)
        })

        .then(function(result){
            message.innerHTML = result
    
            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Welcome!")
                },1000)
            })
        })
        
        .then(function(result){
            message.innerHTML = result
        })
    })
})



