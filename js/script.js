// Query Selectors
const easyBtn = document.querySelector("#easyDifficultyButton");
const hardBtn = document.querySelector("#hardDifficultyButton");
const secondParent = document.getElementById("secondParent")
const secondThreeColors = document.querySelector("#secondThreeColors");
const redDisplay = document.querySelector("#red");
const greenDisplay = document.querySelector("#green");
const blueDisplay = document.querySelector("#blue");
const winner = document.getElementsByClassName(".winner");
const reset = document.querySelector("#resetButton");
const box1 = document.querySelector("#box1"); // Maybe I can create a loop for all of the boxes?
const box2 = document.querySelector("#box2"); // Add a common class for all of them?
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");


// Variable Declarations
let correctBoxArray = []
let boxArray = [box1, box2, box3, box4, box5, box6];
let correctBoxEasy = Math.floor(Math.random() * 3);
let correctBoxHard = Math.floor(Math.random() * 6);
let numberOfBoxes = 6;
let removeListenerButtons = [easyBtn, hardBtn, reset];



// Event Listeners
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("active");
    hardBtn.classList.remove("active");
    if(!hardBtn.classList.contains("active")){
        numberOfBoxes = 3;
        updateBoxes(numberOfBoxes);
    };
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("active");
    hardBtn.classList.add("active");
    if(!easyBtn.classList.contains("active")){
        numberOfBoxes = 6;
        updateBoxes(numberOfBoxes);
    };
});

for(i = 0; i < removeListenerButtons.length; i++){
    let element = removeListenerButtons[i];
    element.removeEventListener("click", winner);
}

// function declareWinner(){
//     for(i = 0; i < boxArray.length; i++){
//         if(boxArray[i].classList.contains("winner")){
//             document.querySelector(".winner").addEventListener("click", function(){
//                 console.log("winner...");
//             })
//         }
//     }
// }





// Functions
function updateDisplay(){ // Updates HTML (and correct box) with correct RGB
    correctBoxArray = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]
    redDisplay.textContent = correctBoxArray[0];
    greenDisplay.textContent = correctBoxArray[1];
    blueDisplay.textContent = correctBoxArray[2];
    return correctBoxArray;
};

function updateBoxes(numberOfBoxes){ //Updates all boxes with random colors
    updateDisplay();
    for(let i = 0; i <= numberOfBoxes-1; i++){
        let wrongBoxArray = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)];
        boxArray[i].style.backgroundColor = "rgb(" + wrongBoxArray[0] + "," + wrongBoxArray[1] + "," + wrongBoxArray[2] + ")";
        if(boxArray[i].classList.contains("winner")){
            boxArray[i].classList.remove("winner");
        };
    };
    createCorrectBox(numberOfBoxes);
};

function createCorrectBox(numberOfBoxes){ // Out of the options, chooses a random box to match the RGB displayed
    if(numberOfBoxes == 3){
        let correctBoxEasy = Math.floor(Math.random() * 3);
        let correctBox = boxArray[correctBoxEasy];
        correctBox.style.backgroundColor = "rgb(" + correctBoxArray[0] + "," + correctBoxArray[1] + "," + correctBoxArray[2] + ")";
        correctBox.classList.add("winner");
        // winner.addEventListener("click", function(){
        //     console.log("WINNER!!!");
        // });
        boxArray[correctBoxEasy].addEventListener("click", function winner(){
            console.log("WINNER");
        });
        deleteBoxesForEasy();
    } else if(numberOfBoxes == 6){
        let correctBoxHard = Math.floor(Math.random() * 6);
        let correctBox = boxArray[correctBoxHard];
        correctBox.style.backgroundColor = "rgb(" + correctBoxArray[0] + "," + correctBoxArray[1] + "," + correctBoxArray[2] + ")";
        correctBox.classList.add("winner");
        // winner.addEventListener("click", function(){
        //     console.log("WINNER!!!");
        // });
        boxArray[correctBoxHard].addEventListener("click", function winner(){
            console.log("WINNER");
        });
    };
    // declareWinner();
};



// for(i = 0; i < boxArray.length; i++){
//     boxArray[i].addEventListener("click", function(){
//         if(numberOfBoxes == 3){
//             if(i == correctBoxEasy){
//                 console.log("WINNER");
//             } else console.log("loser");
//         } else if(numberOfBoxes == 6){
//             if(i == correctBoxHard){
//                 console.log("WINNER");
//             } else console.log("loser");
//         }
//     })
// }

function deleteBoxesForEasy(){ // "Deletes" second three color boxes for easy mode
    for(let i = 3; i < 6; i++){
        boxArray[i].style.backgroundColor = "rgb(34,34,34)";
        // add command that removes clicking event listener for these boxes
        // element2.removeEventListener();
    };
};

updateBoxes(numberOfBoxes);