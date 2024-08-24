const button = document.querySelector(".button");
const input = document.querySelector(".show");

let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
let length =12

let allchar = upperCaseLetters+lowerCaseLetters+numbers+symbols;

function random(){
    let password ="";
    password += allchar[Math.floor(Math.random() * allchar.length)]

    while(length>password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)]
    }
    input.value = password;
}

function copypassword(){
    input.select();
    document.execCommand("copy")
}
document.querySelector(".copy").addEventListener("click",()=>{
    copypassword();
    if(input.value===""){
        alert("First generate password")
    }
    else{

        document.querySelector(".copy").style.display="none"
        document.querySelector(".copytext").innerHTML="Copied"
        setTimeout(() => {
            document.querySelector(".copy").style.display="block"
            document.querySelector(".copytext").innerHTML=""
            
            
        }, 3000);
    }
})
button.addEventListener("click", random)