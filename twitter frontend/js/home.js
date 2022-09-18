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
    let url='http://localhost/Twitter Team Project/twitter backend/searchusers.php/?users_name='+userName
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
fetch("http://localhost/Twitter Team Project/twitter backend/getfollowtweets.php",targetTweets)
.then(Response => Response.json())
.then(data => {
    for (let i=0; i< data.length;i++){
        let div = document.createElement('div')
        div.style.display='flex'
        let img = document.createElement('img')
        img.src = "assets/profile.jpg"
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
        fetch("http://localhost/Twitter Team Project/twitter backend/tweet.php",tweet)
        location.reload()
    }
}
    






// const Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// const encodedimg = Base64.encode(url);

// let tweetinfo={
//     method: 'POST',
//     body: new URLSearchParams({ tweets_tweet_id: tweetid, tweets_picture_url:url})
// }
// console.log(pass.value)
// fetch("http://localhost/Twitter%20Team%20Project/twitter%20backend/base64.php",tweetinfo)
// .then(Response => Response.json())
// .then(data => {
// })