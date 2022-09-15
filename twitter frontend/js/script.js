const signin =document.getElementById("signin")
const signup =document.getElementById("signup")
const nextSignin =document.getElementById("nxt-signin")
const nextSignup =document.getElementById("nxt-signup")
const signinModal=document.getElementById("signin-modal")
const signupModal=document.getElementById("signup-modal")
const passPage=document.getElementById("passPage")

// after clicking on signin the modal appears
signin.addEventListener("click",()=>{
    signinModal.style.display="flex"
})
// after clicking on signin the modal appears
signup.addEventListener("click",()=>{
    signupModal.style.display="flex"
})
// after clicking it shows the pass modal
nextSignup.onclick= function (event){
    event.preventDefault();
    signupModal.style.display="none"
    passPage.style.display="flex"
} 
// closing the modal whenever we click outside the border of the modals
window.onclick = function(event) {

    if (event.target == signinModal) {
 
        signinModal.style.display = "none";
 
     }
 
     if (event.target == signupModal) {
 
        signupModal.style.display = "none";
 
     }

     if(event.target == passPage){
        passPage.style.display= "none";
     }
 
 }
//  moves us to home page
 nextSignin.onclick= function (event){
    event.preventDefault();
    window.location.replace('home.html')
} 