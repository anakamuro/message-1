
document.addEventListener("DOMContentLoaded", function(){
    output = document.querySelector(".output");
    message1 = document.querySelector(".message");
    init();
})

function clr(){
    return "#" + Math.random().toString(16).substr(-6);
}

function ranNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function init(){
    area = document.querySelector(".area");
    let greeting = "Hello World";
    let multiClr = clr()
    let num = ranNumber(1, 10);
    const weathers = ["sunny", "sunny", "sunny", "cloudy", "cloudy", "rainy"];
    const random = Math.floor(Math.random() * weathers.length);
    console.log(num)
    output.style.backgroundColor = multiClr;
    // output.value = output.textContent;
    output.style.color = "white";
    let textNode = document.createTextNode(`Today's random number is ${num} `)
    let br1 = document.createElement("br");
    let textNode2 = document.createTextNode(`Today's weather forecast is ${weathers[random]}`)
    output.appendChild(textNode);
    output.appendChild(br1);
    output.appendChild(textNode2);
    console.log(output)
    area.appendChild(output)
    message(greeting, "red", "blue")
}

function message(greeting, clr1, clr2){
    message1.innerHTML = greeting;
    message1.style.color = clr1;
    message1.style.backgroundColor = clr2;
    message1.style.padding = "5px";
}

