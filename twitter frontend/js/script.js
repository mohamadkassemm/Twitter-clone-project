// constants used from html
const signin =document.getElementById("signin")
const signup =document.getElementById("signup")
const signup2 =document.getElementById("signup2")
const createAcc= document.getElementById("createAcc")
const nextSignin =document.getElementById("nxt-signin")
const nextSignup =document.getElementById("nxt-signup")
const signinModal=document.getElementById("signin-modal")
const signupModal=document.getElementById("signup-modal")
const passPage=document.getElementById("passPage")
const warning=document.getElementById("warning")
// constant values needed
const UE = document.getElementById("UserameOrEmail")
const pass = document.getElementById("pass")

// after clicking on signin the modal appears
signin.addEventListener("click",()=>{
    signinModal.style.display="flex"
})


// closing the modal whenever we click outside the border of the modals
window.onclick = function(event) {

    if (event.target == signinModal) {
 
        signinModal.style.display = "none"
 
     }
 
     if (event.target == signupModal) {
 
        signupModal.style.display = "none"
 
     }

     if(event.target == passPage){
        passPage.style.display= "none"
     }
     if(event.target == passPage){
        passPage.style.display= "none"
     }
 
 }
 
//  moves us to home page
 nextSignin.onclick= function (event){
    event.preventDefault()
    if (UE.value && pass.value){
        let loginInfo={
            method: 'POST',
            body: new URLSearchParams({email:UE.value, username:UE.value, password:pass.value})   
        }
        console.log(pass.value)
        fetch("http://localhost/Twitter%20Team%20Project/twitter%20backend/login.php",loginInfo)
        .then(Response => Response.json())
        .then(data => {
            if (data.valid){
                console.log("success")
                localStorage.setItem("id",data.id)
                console.log("id",data.id)
                window.location.replace('home.html')
            }
            else{
                warning.innerHTML="Please enter valid username and password"
            }
        })
    }
}
