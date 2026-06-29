/* =====================================
   TYPEWRITER EFFECT
===================================== */

const typingElement = document.getElementById("typing");

const message =
"To Someone Very Special ❤️";

let letterIndex = 0;

function typeWriter(){

    if(letterIndex < message.length){

        typingElement.innerHTML += message.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeWriter,90);

    }

}

typeWriter();



/* =====================================
   LIVE RELATIONSHIP COUNTER
===================================== */

/*
Replace this with the date you first met.

Format:
Year, Month-1, Day, Hour, Minute

Example:
new Date(2025,5,16,15,0)
means
June 16 2025 3:00PM
*/

const startDate = new Date(2026,5,2,14,0);

const counter = document.getElementById("timeTogether");

function updateCounter(){

    const now = new Date();

    const diff = now-startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor(diff/(1000*60*60)%24);

    const mins = Math.floor(diff/(1000*60)%60);

    const secs = Math.floor(diff/1000%60);

    counter.innerHTML =

    `${days} Days ❤️ ${hours} Hours ❤️ ${mins} Minutes ❤️ ${secs} Seconds`;

}

updateCounter();

setInterval(updateCounter,1000);



/* =====================================
   PHOTO CAROUSEL
===================================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(nextSlide,3000);



/* =====================================
   MUSIC PLAYER
===================================== */

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML=
        '<i class="fa-solid fa-pause"></i>';

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML=
        '<i class="fa-solid fa-music"></i>';

        playing=false;

    }

});



/* =====================================
   AUTO PLAY MUSIC
   (starts after first click anywhere)
===================================== */

document.addEventListener("click",function(){

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML=
        '<i class="fa-solid fa-pause"></i>';

    }

},{once:true});



/* =====================================
   SMOOTH FADE-IN OF MAIN CARD
===================================== */

const glass = document.querySelector(".glass");

glass.style.opacity="0";

glass.style.transform="translateY(50px)";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        glass.style.transition="1.2s";

        glass.style.opacity="1";

        glass.style.transform="translateY(0)";

    },300);

});



/* =====================================
   GLOWING TITLE EFFECT
===================================== */

setInterval(()=>{

typingElement.style.textShadow=

`0 0 ${10+Math.random()*20}px hotpink`;

},350);



/* =====================================
   VIDEO AUTO PLAY SAFETY
===================================== */

const videos=document.querySelectorAll("video");

videos.forEach(video=>{

video.muted=true;

video.play().catch(()=>{});

});
/* =====================================
   PART 3B
   Falling Petals
   Hearts on Click
   Scroll Reveal
   Escaping NO Button
===================================== */


/* ===============================
   🌸 FALLING ROSE PETALS
================================ */

const petalsContainer = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    // Different flower emojis
    const flowers = [
        "🌸","🌹","🌺","💮","🌷"
    ];

    petal.innerHTML =
        flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random()*6) + "s";

    petal.style.fontSize =
        (18 + Math.random()*20) + "px";

    petal.style.opacity =
        0.5 + Math.random()*0.5;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,350);



/* ===============================
   💕 HEARTS ON CLICK
================================ */

document.addEventListener("click",(e)=>{

    for(let i=0;i<8;i++){

        const heart=document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML="❤️";

        heart.style.left=
            (e.clientX-10+Math.random()*60-30)+"px";

        heart.style.top=
            (e.clientY-10+Math.random()*60-30)+"px";

        heart.style.fontSize=
            (18+Math.random()*20)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },1600);

    }

});



/* ===============================
   💌 SCROLL REVEAL LETTERS
================================ */

const hiddenLetters =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.25
});

hiddenLetters.forEach(letter=>{

observer.observe(letter);

});



/* ===============================
   😂 ESCAPING "NO" BUTTON
================================ */

const noBtn =
document.getElementById("no");

let moveCount=0;

function moveButton(){

    const padding=80;

    const maxX=
    window.innerWidth-
    noBtn.offsetWidth-padding;

    const maxY=
    window.innerHeight-
    noBtn.offsetHeight-padding;

    const randomX=
    Math.random()*maxX;

    const randomY=
    Math.random()*maxY;

    noBtn.style.position="fixed";

    noBtn.style.left=randomX+"px";

    noBtn.style.top=randomY+"px";

    moveCount++;

}

/* Desktop */
noBtn.addEventListener("mouseover",moveButton);

/* Mobile */
noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveButton();

});



/* ===============================
   😅 AFTER MANY TRIES...
================================ */

const funnyMessages=[

"Nice try 😂",

"You almost got me 😆",

"Still no 😜",

"Catch me first 😝",

"Nope 😂",

"You're too slow 😎",

"Hehe 🤭"

];

const msg=document.createElement("div");

msg.style.position="fixed";

msg.style.left="50%";

msg.style.bottom="30px";

msg.style.transform="translateX(-50%)";

msg.style.padding="12px 20px";

msg.style.background="rgba(255,255,255,.85)";

msg.style.color="#ff2f7a";

msg.style.borderRadius="20px";

msg.style.fontWeight="bold";

msg.style.opacity="0";

msg.style.transition=".4s";

msg.style.zIndex="9999";

document.body.appendChild(msg);

noBtn.addEventListener("mouseover",()=>{

msg.innerHTML=

funnyMessages[
Math.floor(
Math.random()*funnyMessages.length
)
];

msg.style.opacity="1";

setTimeout(()=>{

msg.style.opacity="0";

},1200);

});



/* ===============================
   ❤️ BUTTON HOVER GLOW
================================ */

const yesBtn =
document.getElementById("yes");

yesBtn.addEventListener("mouseenter",()=>{

yesBtn.style.boxShadow=

"0 0 40px hotpink,0 0 80px deeppink";

});

yesBtn.addEventListener("mouseleave",()=>{

yesBtn.style.boxShadow=

"0 0 20px hotpink";

});



/* ===============================
   SMALL HEART BURST
   WHEN YES IS HOVERED
================================ */

yesBtn.addEventListener("mouseenter",()=>{

const rect=
yesBtn.getBoundingClientRect();

for(let i=0;i<5;i++){

const h=
document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=

(rect.left+rect.width/2)+"px";

h.style.top=

(rect.top+rect.height/2)+"px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},1500);

}

});
/* =====================================
   PART 3C
   GRAND FINALE
===================================== */

const yesButton = document.getElementById("yes");

/* =====================================
   CONFETTI + FIREWORKS
===================================== */

function launchFireworks() {

    const duration = 6000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        confetti({
            particleCount: 18,
            spread: 120,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.6
            }
        });

    }, 250);

}


/* =====================================
   HEART RAIN
===================================== */

function heartRain() {

    const rain = setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML =
        ["❤️","💖","💕","💗","💘","💝"][Math.floor(Math.random()*6)];

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100+"vw";
        heart.style.top = "-50px";
        heart.style.fontSize =
            (20+Math.random()*30)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="99999";

        heart.style.transition="7s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="110vh";

        },20);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },180);

    setTimeout(()=>{

        clearInterval(rain);

    },7000);

}



/* =====================================
   ROSE SHOWER
===================================== */

function roseShower(){

    const roses = setInterval(()=>{

        const flower=document.createElement("div");

        flower.innerHTML="🌹";

        flower.style.position="fixed";

        flower.style.left=Math.random()*100+"vw";

        flower.style.top="-30px";

        flower.style.fontSize=(20+Math.random()*30)+"px";

        flower.style.transition="8s linear";

        flower.style.zIndex="99999";

        document.body.appendChild(flower);

        setTimeout(()=>{

            flower.style.top="120vh";

            flower.style.transform="rotate(720deg)";

        },30);

        setTimeout(()=>{

            flower.remove();

        },8000);

    },180);

    setTimeout(()=>{

        clearInterval(roses);

    },7000);

}



/* =====================================
   FINAL SCREEN
===================================== */

function showFinalScreen(){

const final=document.createElement("div");

final.className="final";

final.innerHTML=`

<h1>

🥹❤️

</h1>

<h2>

You just made me

the happiest person alive ❤️

</h2>

<p>

I promise to always cherish,

respect,

and appreciate you.

Thank you for saying YES ❤️

</p>

`;

document.body.appendChild(final);

}



/* =====================================
   CLICKING YES
===================================== */

yesButton.addEventListener("click",()=>{

launchFireworks();

heartRain();

roseShower();

/* Small vibration on supported phones */

if(navigator.vibrate){

navigator.vibrate([100,50,100]);

}

/* Wait before final page */

setTimeout(()=>{

document.body.innerHTML="";

showFinalScreen();

},7000);

});




/* =====================================
   SPARKLES
===================================== */

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(10+Math.random()*20)+"px";

star.style.opacity="0";

star.style.transition="2s";

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="1";

},20);

setTimeout(()=>{

star.style.opacity="0";

},1500);

setTimeout(()=>{

star.remove();

},2200);

}

setInterval(sparkle,350);




/* =====================================
   FLOATING LOVE QUOTES
===================================== */

const quotes=[

"You make every day brighter ❤️",

"My favourite place is with you 🥰",

"You are my happiness 💖",

"I'll always choose you 🌹",

"Forever starts with you ❤️"

];

setInterval(()=>{

const text=document.createElement("div");

text.innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

text.style.position="fixed";

text.style.left=Math.random()*70+10+"vw";

text.style.bottom="-40px";

text.style.color="white";

text.style.fontWeight="bold";

text.style.textShadow="0 0 10px hotpink";

text.style.transition="8s linear";

text.style.pointerEvents="none";

text.style.zIndex="9999";

document.body.appendChild(text);

setTimeout(()=>{

text.style.bottom="110vh";

},50);

setTimeout(()=>{

text.remove();

},8000);

},4000);




/* =====================================
   END
===================================== */