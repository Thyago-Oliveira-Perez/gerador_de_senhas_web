let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let letters = "abcdefghijklmnopqrstuvxwyz"
let lettersUpper = letters.toUpperCase();
let symbols = "!@#$%&*=+/?<>"
let charset = letters + lettersUpper + symbols;

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    n = charset.length;
    for(let i = 0; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))      
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}