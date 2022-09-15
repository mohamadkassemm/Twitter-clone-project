const signin =document.getElementById("signin")
const signup =document.getElementById("signup")
const signinModal=document.getElementById("signin-modal")
const signupModal=document.getElementById("signup-modal")

// after clicking on signin the modal appears
signin.addEventListener("click",()=>{
    signinModal.style.display="flex"
})
// after clicking on signin the modal appears
signup.addEventListener("click",()=>{
    signupModal.style.display="flex"
})
// closing the modal whenever we click outside the border of the modals
window.onclick = function(event) {

    if (event.target == signinModal) {
 
        signinModal.style.display = "none";
 
     }
 
     if (event.target == signupModal) {
 
        signupModal.style.display = "none";
 
     }
 
 }