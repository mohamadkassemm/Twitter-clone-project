const search=document.getElementById('search')
const home=document.getElementById('home')
const twitter=document.getElementById('twitter')
const profile=document.getElementById('profile')
const themes=document.getElementById('themes')
const more=document.getElementById('more')
const body=document.getElementById('body')
const modal = document.getElementById("myModal")
const logOut = document.getElementById("logout-btn")
const cancel = document.getElementById("cancel-btn")
home.addEventListener('click',()=>{
    window.location.replace('./home.html')
})
twitter.addEventListener('click',()=>{
    window.location.replace('home.html')
})
themes.addEventListener('click',()=>{
    body.classList.toggle("black-back")
})

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