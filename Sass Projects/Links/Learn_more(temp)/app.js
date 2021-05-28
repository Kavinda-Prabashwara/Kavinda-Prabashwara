function scroll() {
    if(window.scrollY > 400) return
    triger();
    circle_ani();
    console.log ("scroll:");
}

window.addEventListener('scroll', scroll);

function triger() {
    let animation = document.getElementById("under_line");
    animation.style.animation = "none";
    setTimeout(
        () => animation.style.animation = "",
        0
    )
};

function circle_ani() {
    let circle = document.getElementById("over_circle");
    circle.style.animation = "none";
    setTimeout(
        () => circle.style.animation = "",
        0
    )
};

let value = document.getElementById("before");
let currentValue = -1;

setInterval(() => numberSet(), 100);

function numberSet() {
    currentValue += 1;
    console.log(currentValue)
    value.innerHTML= ` <span id = "content"> ${currentValue}`;
}