function getRandomNum(){
    var num = Math.random(); //* window.innerWidth;
    return num;
}

function moveBox(){
    catchMe.style.top = getRandomNum() * (window.innerHeight - 150) + "px";
    catchMe.style.left = getRandomNum() * (window.innerWidth - 150) + "px";
}

var catchMe = document.getElementById('box');
catchMe.addEventListener('mouseover', function(){
    moveBox();
});