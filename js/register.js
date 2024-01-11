/* === Vars === */

const username = document.getElementById("username") ; 
const email = document.getElementById("email") ; 
const password = document.getElementById("password") ; 

const signUp = document.getElementById("signUp"); 

signUp.addEventListener("click" , function register(e) {
    e.preventDefault () ; 
    if (username.value === "" || email.value === "" || password.value === "" ) {
        alert("Fill them all ") ; 
    }
    else {
        localStorage.setItem("username" , username.value) ;
        localStorage.setItem("email" , email.value) ;
        localStorage.setItem("password" , password.value) ;
        setTimeout (() => {
            window.location = 'login.html' ; 
        } , 2000 )
    }
})