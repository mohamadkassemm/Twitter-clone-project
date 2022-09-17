// home page js

const search=document.getElementById('search')
const home=document.getElementById('home')
const twitter=document.getElementById('twitter')
const profile=document.getElementById('profile')
const themes=document.getElementById('themes')
const more=document.getElementById('more')
const tweetContents=document.getElementById('tweet-contents')
const submitTweet=document.getElementById('submit-tweet')
const body=document.getElementById('body')
const modal = document.getElementById("myModal");
const logOut = document.getElementById("logout-btn");
const cancel = document.getElementById("cancel-btn");

const users_id =localStorage.getItem("id")

profile.addEventListener('click',()=>{
    window.location.replace('profile.html')
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
logOut.onclick= ()=> {
    window.location.replace('log in.html')
}

submitTweet.onclick =(event)=>{
    event.preventDefault()
    let tweetInfo={
        method: 'POST',
        body: new URLSearchParams({tweets_content: tweetContents.value, usersid: users_id})   
    }
    fetch("http://localhost/Twitter%20Team%20Project/twitter%20backend/tweet.php",tweetInfo)
        .then(Response => Response.json())
        .then(data => {
            console.log(tweetContents.value)
            console.log(users_id)
        })

}
