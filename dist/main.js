(()=>{"use strict";(function(e){const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),l=setInterval((()=>{let e=(()=>{let e=Date.now(),t=new Date("30 october 2021").getTime(),n=(t-e)/1e3,o=Math.floor(n/60/60),l=Math.floor(n/60%60),c=Math.floor(n%60);return t<e?{timeRemaining:0,hours:"00",minutes:"00",seconds:"00"}:{timeRemaining:n,hours:o,minutes:l,seconds:c}})();t.textContent=("0"+e.hours).slice(-2),n.textContent=("0"+e.minutes).slice(-2),o.textContent=("0"+e.seconds).slice(-2),e.timeRemaining<=0&&clearInterval(l)}),1e3)})(),function(){const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>{e.addEventListener("click",l)}))}(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),o=document.documentElement.offsetWidth,l=document.querySelector("main>a"),c=document.querySelector("#service-block");console.log(c);const s=()=>{t.style.display?t.style.display="":(t.style.transform="translateX(-100%)",t.style.display="block",o>=738?r():t.style.transform="translateX(0)")},r=()=>{let e=0;const n=setInterval((()=>{e+=5,e<=100?t.style.transform=`translateX(${100-e}%)`:(clearInterval(n),t.style.display="block")}),30)};e.forEach((e=>e.addEventListener("click",s))),n.addEventListener("click",s),l.addEventListener("click",(e=>{e.preventDefault(),c.scrollIntoView({block:"center",behavior:"smooth"})}))})()})();