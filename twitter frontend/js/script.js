const signin =document.getElementById("signin")
const signup =document.getElementById("signup")
const signup2 =document.getElementById("signup2")
const createAcc= document.getElementById("createAcc")
const nextSignin =document.getElementById("nxt-signin")
const nextSignup =document.getElementById("nxt-signup")
const signinModal=document.getElementById("signin-modal")
const signupModal=document.getElementById("signup-modal")
const passPage=document.getElementById("passPage")

// after clicking on signin the modal appears
signin.addEventListener("click",()=>{
    signinModal.style.display="flex"
})
// after clicking on signup the modal appears
signup.addEventListener("click",()=>{
    signupModal.style.display="flex"
})

signup2.addEventListener("click",()=>{
    signupModal.style.display="flex";
    signinModal.style.display="none"
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
createAcc.onclick= function (event){
    event.preventDefault();
    window.location.replace('home.html')
} 