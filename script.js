let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }
}

function setupSquares(){
    for(let i=0; i<squares.length; i++){
        //add initial colors
        // squares[i].style.backgroundColor = colors[i];
    
        //add click listeners
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = genererateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        } 
    }
    h1.style.backgroundColor = "#570395";
    
}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
    //loop through all squares
    for(let i = 0; i < colors.length; i++){
        //change color of each squares
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function genererateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to arr
    for(let i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    let r = Math.floor(Math.random()*256);
    //pick a green from 0 to 255
    let g = Math.floor(Math.random()*256);
    //pick a blue from 0 to 255
    let b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

