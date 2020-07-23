// document.querySelector("#easyDifficultyButton").addEventListener("click", event =>{
//     event.classList.toggle("active");
// });
// document.querySelector("#hardDifficultyButton").addEventListener("click", event =>{
//     event.classList.toggle("active");
// });

const easyBtn = document.querySelector("#easyDifficultyButton");
const hardBtn = document.querySelector("#hardDifficultyButton");
const secondThreeColors = document.querySelector("#secondThreeColors");
const redDisplay = document.querySelector("#red");
const greenDisplay = document.querySelector("#green");
const blueDisplay = document.querySelector("#blue");

let redNumber = Math.floor(Math.random() * 256);
let greenNumber = Math.floor(Math.random() * 256);
let blueNumber = Math.floor(Math.random() * 256);

redDisplay.textContent = redNumber;
greenDisplay.textContent = greenNumber;
blueDisplay.textContent = blueNumber;




easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("active");
    hardBtn.classList.remove("active");
});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("active");
    hardBtn.classList.add("active");
})


