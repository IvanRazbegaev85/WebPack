(()=>{"use strict";(function(e){const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),l=setInterval((()=>{let e=(()=>{let e=Date.now(),t=new Date("30 november 2021").getTime(),n=(t-e)/1e3,r=Math.floor(n/60/60),l=Math.floor(n/60%60),o=Math.floor(n%60);return t<e?{timeRemaining:0,hours:"00",minutes:"00",seconds:"00"}:{timeRemaining:n,hours:r,minutes:l,seconds:o}})();1==e.hours.length?t.textContent=("0"+e.hours).slice(-2):t.textContent=e.hours,n.textContent=("0"+e.minutes).slice(-2),r.textContent=("0"+e.seconds).slice(-2),e.timeRemaining<=0&&clearInterval(l)}),1e3)})(),function(){const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),l=document.querySelector("main>a"),o=document.querySelector("#service-block"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),r.forEach((e=>{e.addEventListener("click",(t=>{const n=document.querySelector(e.getAttribute("href"));c(),t.preventDefault(),n.scrollIntoView({block:"center",behavior:"smooth"})}))})),l.addEventListener("click",(e=>{e.preventDefault(),o.scrollIntoView({block:"center",behavior:"smooth"})}))}(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),r=document.documentElement.offsetWidth;let l,o=0;const c=()=>{t.style.display?t.style.display="":(t.style.transform="translateX(100%)",t.style.display="block",r>=738?a():t.style.transform="translateX(0%)")},a=()=>{o+=5,l=requestAnimationFrame(a),o<=100?t.style.transform=`translateX(${100-o}%)`:(cancelAnimationFrame(l),t.style.display="block",o=0)};e.forEach((e=>e.addEventListener("click",c))),n.addEventListener("click",c)})(),document.querySelectorAll(".calc-block input[type=text]").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),(()=>{const e=document.querySelector("#form2-message"),t=document.querySelectorAll("input[type=email]"),n=document.querySelectorAll("input[type=tel]"),r=document.querySelectorAll("[name=user_name]");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яё\s-]/gi,"")})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яё\s-]/gi,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z@_.!~*'-]/gi,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+\d()-]/gi,"")}))}))})()})();