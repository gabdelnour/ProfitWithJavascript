let login = prompt('Who are you?')

if (login == "Admin") {
    let password = prompt("What's your password")
    if(password == "TheMaster"){
        alert("Welcome Admin")
    }else{
        alert("Wrong Password")
    }
}else{
    alert("I don't know you")
}