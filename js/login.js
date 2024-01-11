
/* === Vars === */

const user = document.querySelector("#user") ; 
const pass = document.querySelector("#pass") ;

const UserS = localStorage.getItem("username") ; 
const PassS = localStorage.getItem("password") ; 

const signIn = document.getElementById("logIn") ; 

/* == if things == */

signIn.addEventListener("click" , function (e) {
    e.preventDefault();
    if (user.value === "" || pass.value === "") {
        alert("Please Fill Data");
    } else {
        if ((UserS === user.value) && (PassS === pass.value)) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1000);
        } 
        else{
            console.log("[ *----------------------- * ] ") ;
        }
    }
})
