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
// const profilePhoto= document.getElementById('profile-photo')
// const Username= document.getElementById('user-name')
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


let users=JSON.parse(localStorage.getItem('data'))

for (let i=0; i<users.length;i++){
    let img = document.createElement('img')
    img.src = "profile.jpg"
    img.setAttribute('class','profile-pic')
    img.style.position='initial'
    let para= document.createElement('p')
    para.setAttribute('class','name-username')
    searchOutput.appendChild(img)
    para.innerText= `${users[i].users_name} \n @ ${users[i].users_username} `
    searchOutput.appendChild(para)
}
    
localStorage.removeItem('data')


const userNames= document.getElementsByClassName('name-username')
for (let i=0;i<userNames.length;i++){
    userNames[i].onclick= ()=>{
        let targetid= users[i].id
        localStorage.setItem('searched-id', targetid)
        console.log(targetid)
        window.location.replace('users-profile.html')
    }
}
