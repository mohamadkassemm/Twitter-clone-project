const search=document.getElementById('search')
const searchIcon= document.getElementById('search-icon')
const home=document.getElementById('home')
const twitter=document.getElementById('twitter')
const profile=document.getElementById('profile')
const themes=document.getElementById('themes')
const more=document.getElementById('more')
const tweetContents=document.getElementById('tweet-contents')
const submitTweet=document.getElementById('submit-tweet')
const body=document.getElementById('body')
const modal = document.getElementById("myModal");
<<<<<<< HEAD
const logOut = document.getElementById("logout-btn");
const cancel = document.getElementById("cancel-btn");

=======
const logOut = document.getElementById("logout-btn")
const cancel = document.getElementById("cancel-btn")
const searchOutput = document.getElementById('search-output')
>>>>>>> 0c79fc8d7d97ee50ddd81941cc2d96c011695211
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

searchIcon.onclick= ()=>{
    let userName=search.value
    let url='http://localhost/twitter-testing/searchusers.php/?users_name='+userName
    console.log(url)
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        localStorage.setItem('data',JSON.stringify(data))
        window.location.replace('search.html')
    })  
}
