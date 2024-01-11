/* === Vars === */

const links = document.querySelector("#links"); 
const userInfo = document.querySelector(".userName a") ; 
const userSX = localStorage.getItem("username") ; 
const LogOut = document.getElementById("logOut") ; 

if (userSX) {
   links.remove() ; 
   userInfo.innerHTML = userSX ; 
}

/* Log Out Btn */

LogOut.addEventListener("click" , function () {
   localStorage.clear () ; 
   setTimeout(() => {
     window.location = 'register.html' ; 
   } , 2000)
})

