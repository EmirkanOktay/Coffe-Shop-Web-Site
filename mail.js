let mail = document.querySelector("#mail")
let button = document.querySelector("#submit")
let nameInput = document.querySelector("#name")
let surnameInput = document.querySelector("#surname")
let textInput = document.querySelector("#text")

function checkNumber(value) {
    return /\d/.test(value); 
}

function checkTrueMail(value) {

    return /\S+@\S+\.\S+/.test(value);
}
button.addEventListener("click",()=>
{

    let name = nameInput.value.trim().toUpperCase();
    let surname = surnameInput.value.trim().toUpperCase();
    let email = mail.value.trim().toLowerCase();
    let text = textInput.value.trim();

    if(checkNumber(name || surname))
    {
        alert("Your surname cannot include numbers.")
  }

    if(!checkTrueMail(email))
    {
         alert("Invalid email format.")
         false;
    }
    else if(checkTrueMail(email))
    {
        true;
    }

    let holdInfo = {
        name,surname,email,text
    }

    console.log(holdInfo)
})


