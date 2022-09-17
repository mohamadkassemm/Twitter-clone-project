const search=document.getElementById('search')
const searchIcon= document.getElementById('search-icon')
const home=document.getElementById('home')
const twitter=document.getElementById('twitter')
const profile=document.getElementById('profile')
const themes=document.getElementById('themes')
const more=document.getElementById('more')
const body=document.getElementById('body')
const modal = document.getElementById("myModal");
const logOut = document.getElementById("logout-btn")
const cancel = document.getElementById("cancel-btn")
const searchOutput = document.getElementById('search-output')
const profilePhoto= document.getElementById('profile-photo')
const Username= document.getElementById('user-name')
profile.addEventListener('click',()=>{
    window.location.replace('profile.html')
})
themes.addEventListener('click',()=>{
    body.classList.toggle("black-back")
    
})
console.log(window.localStorage)
more.onclick = function() {
    modal.style.display = "block";
}
cancel.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
/****************************************************************************/

const img = new Image()
img.src = "profile.jpg"
img.setAttribute('class','profile-pic')
img.style.position='initial'
searchOutput.appendChild(img);



let users=JSON.parse(localStorage.getItem('data'))
let profileimg= document.createElement('img')
profileimg.src='profile.jpg'
searchOutput.appendChild(profilePhoto)
// for (let i=0; i<users.length;i++){
//     let user=document.createElement('div')
//     user.id='user'
//     user.appendChild(profilePhoto)
// }