let card=document.getElementById('card');
let card1=document.getElementById('card1');
let card2=document.getElementById('card2');
let card3=document.getElementById('card3');
let card4=document.getElementById('card4');
let card5=document.getElementById('card5');
let card6=document.getElementById('card6');
let card7=document.getElementById('card7');
let card8=document.getElementById('card8');
let card9=document.getElementById('card9');

card.addEventListener('mouseenter',myfun);
card.addEventListener('mouseleave',leave)
card1.addEventListener('mouseover',myfun1);
card1.addEventListener('mouseleave',leave1);
card2.addEventListener('mouseover',myfun2);
card2.addEventListener('mouseleave',leave2);
card3.addEventListener('mouseover',myfun3);
card3.addEventListener('mouseleave',leave3);
card4.addEventListener('mouseover',myfun4);
card4.addEventListener('mouseleave',leave4);
card5.addEventListener('mouseover',myfun5);
card5.addEventListener('mouseleave',leave5);
card6.addEventListener('mouseover',myfun6);
card6.addEventListener('mouseleave',leave6);
card7.addEventListener('mouseover',myfun7);
card7.addEventListener('mouseleave',leave7);
card8.addEventListener('mouseover',myfun8);
card8.addEventListener('mouseleave',leave8);
card9.addEventListener('mouseover',myfun9);
card9.addEventListener('mouseleave',leave9);

function myfun(){
    
    card.style.transform="rotateY(180deg)";
    
}

function myfun1(){
    card1.style.transform="rotateY(180deg)";
}

function myfun2(){
    card2.style.transform="rotateY(180deg)";
}

function myfun3(){
    card3.style.transform="rotateY(180deg)";
}

function myfun4(){
    card4.style.transform="rotateY(180deg)";
}

function myfun5(){
    card5.style.transform="rotateY(180deg)";
}

function myfun6(){
    card6.style.transform="rotateY(180deg)";
}

function myfun7(){
    card7.style.transform="rotateY(180deg)";
}

function myfun8(){
    card8.style.transform="rotateY(180deg)";
}

function myfun9(){
    card9.style.transform="rotateY(180deg)";
}

function leave(){
    card.style.transform="rotateY(360deg)";
}


function leave1(){
    card1.style.transform="rotateY(360deg)";
}


function leave2(){
    card2.style.transform="rotateY(360deg)";
}


function leave3(){
    card3.style.transform="rotateY(360deg)";
}


function leave4(){
    card4.style.transform="rotateY(360deg)";
}


function leave5(){
    card5.style.transform="rotateY(360deg)";
}


function leave6(){
    card6.style.transform="rotateY(360deg)";
}


function leave7(){
    card7.style.transform="rotateY(360deg)";
}


function leave8(){
    card8.style.transform="rotateY(360deg)";
}


function leave9(){
    card9.style.transform="rotateY(360deg)";
}