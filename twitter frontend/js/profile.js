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
home.onclick=()=>{
    window.location.replace('home.html')
}
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
    let url='http://localhost/Twitter Team Project/twitter backend/searchusers.php/?users_name='+userName
    console.log(url)
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        localStorage.setItem('data',JSON.stringify(data))
        window.location.replace('search.html')
    })  
}
console.log(localStorage.id)

let tweetsInfo={
    method: 'POST',
    body: new URLSearchParams({users_id:localStorage.id})   
}
fetch("http://localhost/Twitter Team Project/twitter backend/gettweets.php",tweetsInfo)
.then(Response => Response.json())
.then(data => {
    for (let i=0; i< data.length;i++){
        let para= document.createElement('p')
        para.setAttribute('class','tweet-contents')
        console.log(data[i].tweets_content)
        para.innerText= `${data[i].tweets_content} \n`
        para.style.fontWeight='bold'
        tweets.appendChild(para)
        let date= document.createElement('p')
        date.setAttribute('class','tweet-contents')
        console.log(data[i].tweets_content)
        date.innerText= `created at ${data[i].tweets_created_at} `
        date.style.fontSize='12px'        
        tweets.appendChild(date)
        tweets.appendChild(document.createElement("hr"))
    }
})