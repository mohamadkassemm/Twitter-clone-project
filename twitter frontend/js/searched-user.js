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
const logOutBtn = document.getElementById("logout-btn")
const logout =document.getElementById('logout')
const cancel = document.getElementById("cancel-btn")
const searchOutput = document.getElementById('search-output')
const tweets = document.getElementById('tweets')
const followButton = document.getElementById('follow-btn')
const blockbtn= document.getElementById('block-btn')
profile.addEventListener('click',()=>{
    localStorage.removeItem('searched-id')
    window.location.replace('profile.html')
})
themes.addEventListener('click',()=>{
    body.classList.toggle("black-back")
    
})
logout.onclick = function() {
    modal.style.display = "block";
}
cancel.onclick = function() {
    modal.style.display = "none";
}
home.onclick=()=>{
    window.location.replace('home.html')
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

logOutBtn.onclick= ()=>{
    localStorage.clear()
    window.location.replace('landing.html')
}

searchIcon.onclick= ()=>{
    let userName=search.value
    let url='http://localhost/Twitter Team Project/twitter backend/searchusers.php/?users_name='+userName
    console.log(url)
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        localStorage.setItem('data',JSON.stringify(data))
        window.location.replace('search.html')
    })  
}
console.log(localStorage['searched-id'])
console.log(localStorage)
let tweetsInfo={
    method: 'POST',
    body: new URLSearchParams({users_id:localStorage['searched-id']})   
}
fetch("http://localhost/Twitter Team Project/twitter backend/gettweets.php",tweetsInfo)
.then(Response => Response.json())
.then(data => {
    for (let i=0; i< data.length;i++){
        let para= document.createElement('p')
        let heart = document.createElement('i')
        heart.setAttribute('class',"fa fa-thumbs-up")
        para.setAttribute('class','tweet-contents')
        console.log(data[i].tweets_content)
        para.innerText= `${data[i].tweets_content} \n created at ${data[i].tweets_created_at} `
        tweets.appendChild(para)
        tweets.appendChild(heart)
        tweets.appendChild(document.createElement("hr"))
        heart.onclick=()=>{
            let likeInfo={
                method: 'POST',
                body: new URLSearchParams({users_id:localStorage['id'],tweets_tweet_id:data[i].tweet_id})   
            }
            fetch("http://localhost/Twitter Team Project/twitter backend/likes.php",likeInfo)
            heart.style.color='blue'
        }
    }
})

console.log(followButton.innerText)
followButton.onclick= ()=>{
    let idsInfo={
        method: 'POST',
        body: new URLSearchParams({follower_id:localStorage['id'],followed_id:localStorage['searched-id']})   
    }
    fetch("http://localhost/Twitter Team Project/twitter backend/follow.php",idsInfo)
    if (followButton.innerText=='follow'){
        followButton.innerText='unfollow'
        followButton.classList.add('unfollow')
    }
    else{
        followButton.innerText='follow'
        followButton.classList.remove('unfollow')
    }
}
console.log(blockbtn.innerText)
blockbtn.onclick= ()=>{
    console.log("hi")
    let blockingInfo={
        method: 'POST',
        body: new URLSearchParams({blocker_id:localStorage['blocker_id'],blocked_id:localStorage['blocked_id']})   
    }
    fetch("http://localhost/Twitter Team Project/twitter backend/block.php",blockingInfo)
    if (blockbtn.innerText=='block'){
        blockbtn.innerText='unblock'
        // blockbtn.classList.add('block')
    }else{
        blockbtn.innerText='block'
        // blockbtn.classList.remove('block')
    }
}