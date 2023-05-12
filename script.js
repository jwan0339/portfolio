let width="100%";
let height="100%";
let svg=document.getElementById("mysvg");
console.log(svg);
svg.setAttribute("width", width);
svg.setAttribute("height", height);
console.log(svg);



function makeRGB(redInputValue, greenInputValue, blueInputValue){
    let redOutputValue = redInputValue ?? Math.round(Math.random() * 255);
    let greenOutputValue = greenInputValue ?? Math.round(Math.random() * 255);
    let blueOutputValue = blueInputValue ?? Math.round(Math.random() * 255);

    return `rgb(${redOutputValue},${greenOutputValue},${blueOutputValue})`
}

function drawCircle(){
    let _cx="50%";
    let _cy="50%";
    let _r="100";
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", _cx);
    newCircle.setAttribute("cy", _cy);
    newCircle.setAttribute("r", _r);
    newCircle.setAttribute("fill", makeRGB());
  
    svg.appendChild(newCircle);
  
}

const circleButton=document.getElementById("button-cir");
circleButton.addEventListener("click", function(e){
    svg.replaceChildren();
    drawCircle();
   
});

const clearButton=document.getElementById("button-clear");
clearButton.addEventListener("click", function(e){
    svg.replaceChildren();
   
});
