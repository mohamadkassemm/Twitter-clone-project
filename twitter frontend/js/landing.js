//for sign up
const signup =document.getElementById("signup")
const signup2 =document.getElementById("signup2")
const createAcc= document.getElementById("createAcc")
const nextSignup =document.getElementById("nxt-signup")
const signupModal=document.getElementById("signup-modal")
const signinModal=document.getElementById("signin-modal")
const passPage=document.getElementById("passPage")
const fname=document.getElementById("name")
const email=document.getElementById("email")
const password=document.getElementById("password")
const gender=document.getElementById("gender")
const dobYear=document.getElementById("dob-year")
const dobMonth=document.getElementById("dob-month")
const dobDay=document.getElementById("dob-day")
const signupFirstPage=document.getElementById('signup-p1')
const signupSecondPage=document.getElementById('signup-p2')
const missingFields= document.getElementById('missing-fields')
const invalidEmail= document.getElementById('invalid-email')
const missingFields2= document.getElementById('missing-fields2')
const invalidPassword= document.getElementById('invalid-password')
const takenEmail= document.getElementById('taken-email')
const userName= document.getElementById('username')
const invalidUserName= document.getElementById('invalid-usernm')
// for sign in
const signin =document.getElementById("signin")
const nextSignin =document.getElementById("nxt-signin")
const warning=document.getElementById("warning")
// constant values needed
const UE = document.getElementById("UserameOrEmail")
const pass = document.getElementById("pass")



/***************************************************signin part*******************************************************/
// after clicking on signin the modal appears
signin.addEventListener("click",()=>{
    signinModal.style.display="flex"
})



console.log(window.localStorage)
//  moves us to home page
 nextSignin.onclick= function (event){
    event.preventDefault()
    if (UE.value && pass.value){
        let loginInfo={
            method: 'POST',
            body: new URLSearchParams({email:UE.value, password:pass.value})   
        }
        console.log(pass.value)
        fetch("http://localhost/twitter-testing/login-2.php",loginInfo)
        .then(Response => Response.json())
        .then(data => {
            if (data.valid){
                console.log(data.id)
                localStorage.setItem('id', data.id)
                console.log(localStorage)
                window.location.replace('home.html')
            }
            else{
                warning.innerHTML="Please enter valid username and password"
            }
        })
    }
}
/*******************************************signup part*************************************************/
// after clicking on signup the modal appears
signup.addEventListener("click",()=>{
    signupModal.style.display="flex"
})

signup2.addEventListener("click",()=>{
    signupModal.style.display="flex";
    signinModal.style.display="none"
})

// after clicking it shows the pass modal (Done by Nour)

nextSignup.onclick= (event)=>{
    event.preventDefault()
    invalidEmail.style.display='none'
    missingFields.style.display='none'
    if (fname.value && email.value && dobDay.value && dobMonth.value && dobYear.value){
        if (validEmail(email.value)){
            signupModal.style.display="none"
            passPage.style.display="flex"
        }
        else{
            invalidEmail.style.display='block'
        }
    }
    else{
        missingFields.style.display='block'
    }
}

//Check if the email has the right format (by Nour)
function validEmail(email){
    let valid =/^([a-z0-9A-Z.-_*$~#%?]{3,})+[@]+([a-z])+[.]+([a-z])*$/
    console.log (valid.test(email))
    return (valid.test(email))
}


//signup modal second page (by Nour)
createAcc.onclick=(event)=>{
    const birthdate= dobYear.value+'-'+ dobMonth.value+'-'+dobDay.value
    const info={
        fullname:fname.value, email:email.value, username:userName.value, password:password.value, birthdate: birthdate, gender:gender.value
    }
    event.preventDefault()
    invalidPassword.style.display='none'
    missingFields2.style.display='none'
    if(password.value && gender.value){
        if(validPassword(password.value)){
            let emailinfo={
                method: 'POST',
                body: new URLSearchParams({email:email.value,})
            }
            fetch("http://localhost/twitter-testing/valid-email.php",emailinfo)
            .then(Response => Response.json())
            .then(data => {
                if (data.valid){ //email data
                    //search for username
                    let usernameinfo={
                        method: 'POST',
                        body: new URLSearchParams({username:userName.value,})
                    }
                    fetch("http://localhost/twitter-testing/valid-username.php",usernameinfo)
                    .then(Response => Response.json())
                    .then(data => {
                        console.log(data)
                        if (data.valid){ //username data
                            if(validPassword(password.value)){//create a new account
                                information={
                                    method: 'POST',
                                    body: new URLSearchParams(info)
                                }
                                fetch("http://localhost/twitter-testing/create.php",information)
                                .then(Response => Response.json())
                                .then(data => {
                                    localStorage.setItem('id', data.id)
                                    console.log(data.id)
                                    window.location.replace('home.html')
                                })
                            }
                            else{
                                invalidPassword.style.display='block'
                            }
                        }
                        else{
                            invalidUserName.style.display='block'
                        }
                    })
                } 
                else{
                    takenEmail.style.display='block'
                }  
            })    
        }
    else{
        missingFields2.style.display='block'}
    }
}
//check if password is valid 
function validPassword(password){
    return (password.length>=8)
}
/****************************************************************************************************/



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

}