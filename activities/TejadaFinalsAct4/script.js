
const button = document.getElementById("loadbtn")

const result = document.getElementById("result")

button.addEventListener("click",function(){

    let request = new XMLHttpRequest()

    request.open("GET","https://jsonplaceholder.typicode.com/users/1", true)
    
    
    request.onload = function(){
        result.innerHTML = request.responseText
    }

    request.onreadystatechange = function(){
        console.log(request.readyState)
    }

    request.send()

})






