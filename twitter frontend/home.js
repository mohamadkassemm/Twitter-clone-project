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
profile.addEventListener('click',()=>{
    window.location.replace('profile.html')
})
themes.addEventListener('click',()=>{
    body.classList.toggle("black-back")
    
})
console.log(window.localStorage)
logout.onclick = function() {
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
logOutBtn.onclick= ()=>{
    localStorage.clear()
    window.location.replace('landing.html')
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

let targetTweets={
    method: 'POST',
    body: new URLSearchParams({users_id:localStorage['id']})   
}
fetch("http://localhost/twitter-testing/getfollowtweets.php",targetTweets)
.then(Response => Response.json())
.then(data => {
    for (let i=0; i< data.length;i++){
        let div = document.createElement('div')
        div.style.display='flex'
        let img = document.createElement('img')
        img.src = "profile.jpg"
        img.setAttribute('class','profile-pic')
        img.style.position='initial'
        let name = document.createElement('p')
        name.setAttribute('class','tweet-contents')
        name.innerText= `${data[i].users_name}`
        name.style.fontWeight='bold'
        div.appendChild(img)
        div.appendChild(name)
        div.style.marginTop='25px'
        tweets.appendChild(div)
        let para= document.createElement('p')
        para.setAttribute('class','tweet-contents')
        para.innerText= `${data[i].tweets_content}`
        para.style.fontSize='14px'
        para.style.marginLeft='15px'
        tweets.appendChild(para)
        let heart = document.createElement('i')
        heart.setAttribute('class',"fa fa-thumbs-up")
        heart.style.marginBottom='25px'
        tweets.appendChild(heart)
        tweets.appendChild(document.createElement("hr"))
    }
})

submitTweet.onclick=()=>{

    if (tweetContents.value!=''){
        console.log('hello')
        let tweet={
            method: 'POST',
            body: new URLSearchParams({tweets_content:tweetContents.value, users_id: localStorage['id']})   
        }
        fetch("http://localhost/twitter-testing/tweet.php",tweet)
        location.reload()
    }
}
    

