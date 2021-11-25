
const card = document.getElementsByClassName("card");
const moves = document.querySelector("#moves");
const timer= document.querySelector("#timer");
const restart = document.querySelector("#restart");
const heart = document.querySelectorAll("#heart li");
const deck = document.querySelector("#deck");
let cards = [...card];


let time = 0;
let timerId = 0;
let timerOut = true;

let openedCards = []

const initClock = () => {
timerOut = false;
timerId = setInterval(() => {
time++;
timerCount();
}, 1000);
};

const timerCount = () => {
const min = Math.floor(time / 60);
const sec = time % 60;
if (sec < 10) {
timer.innerHTML = `${min}:0${sec}`;
} else {
timer.innerHTML = `${min}:${sec}`;
}
};

const stopClock = () => {
clearInterval(timerId);
};

restart.addEventListener("click", function () {
stopClock();
timerOut = true;
time = 0;
timerCount();
});



// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
cards[i].addEventListener("click", displayCard);
    if (timerOut) {
        initClock();
    }

console.log(card);

    var displayCard = function (){
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
    }
};


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // shuffle deck
  cards = shuffle(cards);
  // remove all exisiting classes from each card
  for (var i = 0; i < cards.length; i++){
      deck.innerHTML = "";
      [].forEach.call(cards, function(item) {
          deck.appendChild(item);
      });
      cards[i].classList.remove("show", "open", "match", "disabled");

      
  }