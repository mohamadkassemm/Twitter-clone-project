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
const logOut = document.getElementById("logout-btn")
const cancel = document.getElementById("cancel-btn")
const searchOutput = document.getElementById('search-output')
const tweets = document.getElementById('tweets')
const followButton = document.getElementById('follow-btn')

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

// searchIcon.onclick= ()=>{
//     let userName=search.value
//     let url='http://localhost/twitter-testing/searchusers.php/?users_name='+userName
//     console.log(url)
//     fetch(url)
//     .then(Response => Response.json())
//     .then(data => {
//         localStorage.setItem('data',JSON.stringify(data))
//         window.location.replace('search.html')
//     })  
// }
console.log(localStorage['searched-id'])
console.log(localStorage)
let tweetsInfo={
    method: 'POST',
    body: new URLSearchParams({users_id:localStorage['searched-id']})   
}
fetch("http://localhost/twitter-testing/gettweets.php",tweetsInfo)
.then(Response => Response.json())
.then(data => {
    for (let i=0; i< data.length;i++){
        let para= document.createElement('p')
        para.setAttribute('class','tweet-contents')
        console.log(data[i].tweets_content)
        para.innerText= `${data[i].tweets_content} \n created at ${data[i].tweets_created_at} `
        tweets.appendChild(para)
        tweets.appendChild(document.createElement("hr"))
    }
})

console.log(followButton.innerText)
followButton.onclick= ()=>{
    let idsInfo={
        method: 'POST',
        body: new URLSearchParams({follower_id:localStorage['id'],followed_id:localStorage['searched-id']})   
    }
    fetch("http://localhost/twitter-testing/follow.php",idsInfo)
    if (followButton.innerText=='follow'){
        followButton.innerText='unfollow'
        followButton.classList.add('unfollow')
    }
    else{
        followButton.innerText='follow'
        followButton.classList.remove('unfollow')
    }
}