import view from "../views/view.js";

export default class level2View extends view {
  parentElement = "";
  level2Controller;
  imagesArray = [];
  times;
  correctAnswer = [];
  userAnswer = [];
  tries = 1;
  currentInputCount = 0;
  currentInput;
  clock = 180;
  timeClock;

  constructor() {
    super();
  }

  _generatePageMarkup() {
    //method overriding

    this.data = `
    <section class="level2">
      <header>
        <div class="logo">
          <img src="https://findme-lk.herokuapp.com/assets/logo.png" alt="" />
          <h2 class="gameName">ind Me</h2>
        </div>

        <div class="level2__account account">
          <p class="account__profile">Scoreboard</p>
        </div>
      </header>

      <div class="level2__game">
        <p>Guess The 4 Digit Code to Earn Some Clues</p>
        <div class="right--bar">
          <div class="smashTheCode__timer">00:28</div>
          <div class="smashTheCode__numberPad">
            <div class="smashTheCode__numberPad--number">
              <div class="number1">1</div>
              <div class="number2">2</div>
              <div class="number3">3</div>
              <div class="number4">4</div>
              <div class="number5">5</div>
              <div class="number6">6</div>
              <div class="number7">7</div>
              <div class="number8">8</div>
              <div class="number9">9</div>
            </div>
            <div class="smashTheCode__numberPad--options">
              <div class="wrong">⌫</div>
              <div class="right">✔</div>
            </div>
          </div>
        </div>
        <div class="smashTheCode">
          <div class="tries">
            <div class="try10">
              <div class="try10__count">10</div>
              <div class="try10__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try10__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try9">
              <div class="try9__count">9</div>
              <div class="try9__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try9__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>

            <div class="try8">
              <div class="try8__count">8</div>
              <div class="try8__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try8__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try7">
              <div class="try7__count">7</div>
              <div class="try7__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try7__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try6">
              <div class="try6__count">6</div>
              <div class="try6__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try6__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try5">
              <div class="try5__count">5</div>
              <div class="try5__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try5__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try4">
              <div class="try4__count">4</div>
              <div class="try4__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try4__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try3">
              <div class="try3__count">3</div>
              <div class="try3__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try3__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try2">
              <div class="try2__count">2</div>
              <div class="try2__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try2__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try1">
              <div class="try1__count">1</div>
              <div class="try1__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try1__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
      <div class="lost">
        <p>Sorry, You ran out of time<br/> and you Lost The Game <br/> Please try Again</p>
      </div>
    </section>
      `;

    super._generatePageMarkup();
    super.logo();
  }

  startLevel2Game() {
    let right = document.querySelector(".right");
    let wrong = document.querySelector(".wrong");
    let that = this;

    this.correctAnswer = this.UniqueRandomNum(9, 4); //generating a random number for the game this.UniqueRandomNum(9, 4)
    console.log(this.correctAnswer);
    //allowing users to submit their answer
    right.addEventListener("click", function(event) {
      if (that.currentInputCount === 4) {
        //resetting the current try.

        //next level if correct answer is guessed
        if (that.areEqual(that.correctAnswer, that.userAnswer)) {
          let smashTheCodeScore = (10 - that.tries) * 10 + 10;

          that.level2Controller.renderLevel3Handler(smashTheCodeScore);
          return;
        }
        that.changeColor(that.correctAnswer, that.userAnswer, that.tries);

        that.currentInputCount = 0;
        that.tries++;
        that.userAnswer = [];

        if (that.tries === 11) {
          console.log("somethings yuo");
          clearInterval(that.timeClock);
          document.querySelector(".lost").classList.add("visibility");
        } else {
          return;
        }
      }
    });
    //allowing users to delete their answer
    wrong.addEventListener("click", function(event) {
      if (that.userAnswer !== "" && that.currentInputCount !== 0) {
        that.userAnswer.pop();
        document.querySelector(
          `.try${that.tries}__code .code__${that.currentInputCount}`
        ).textContent = ".";
        that.currentInputCount--;
      }
    });

    this.playMouse();
  }

  startTimer() {
    let lost = document.querySelector(".lost");
    this.times = document.querySelector(".smashTheCode__timer");
    var that = this;
    const tik = function() {
      const minimum = String(Math.trunc(that.clock / 60)).padStart(2, 0);
      const seconds = String(that.clock % 60).padStart(2, 0);

      that.times.textContent = `${minimum}:${seconds}`;

      if (that.clock === 0) {
        clearInterval(timeClock);
        lost.classList.add("visibility");
      }

      that.clock--;
    };

    tik();
    that.timeClock = setInterval(tik, 1000);
  }

  UniqueRandomNum(limit, howMany) {
    let array = [];
    for (let i = 1; i <= limit; i++) {
      array.push(i);
    }

    let res = [];

    for (let i = 1; i <= howMany; i++) {
      const rand = Math.floor(Math.random() * (limit - i));
      res.push(array[rand]);
      array[rand] = array[limit - i];
    }

    return res;
  }

  //to play the game with keyboard

  // playKeyboard() {
  //   let that = this;
  //   document.addEventListener("keyup", function (event) {
  //     if (that.currentInputCount === 4) return; //forcing users to click the right button
  //     that.currentInput = Number(event.key);
  //     //verifying the input is number and also not a duplicate one
  //     if (
  //       !isNaN(that.currentInput) &&
  //       !that.userAnswer.includes(that.currentInput) &&
  //       that.currentInput !== 0
  //     ) {
  //       that.currentInputCount++;
  //       that.userAnswer.push(that.currentInput);
  //       document.querySelector(
  //         `.try${that.tries}__code .code__${that.currentInputCount}`
  //       ).textContent = that.currentInput;
  //     }
  //   });
  // }

  //top play the game with mouse

  playMouse() {
    let that = this;
    let numberPad = document.querySelector(".smashTheCode__numberPad--number");

    numberPad.addEventListener("click", function(event) {
      if (that.currentInputCount === 4) return; //forcing users to click the right button
      that.currentInput = Number(event.target.textContent);
      if (
        !isNaN(that.currentInput) &&
        !that.userAnswer.includes(that.currentInput) &&
        that.currentInput !== 0
      ) {
        //verifying the input is number and also not a duplicate one

        that.currentInputCount++;
        that.userAnswer.push(that.currentInput);
        document.querySelector(
          `.try${that.tries}__code .code__${that.currentInputCount}`
        ).textContent = that.currentInput;
      }
    });
  }

  //function to chec kwhether the user answer is correct
  areEqual(correctAnswer, userAnswer) {
    for (let i = 0; i < userAnswer.length; i++) {
      if (correctAnswer[i] === userAnswer[i]) {
        continue;
      } else return false;
    }
    return true;
  }

  //function to change the result color(circle colors) according to user's try
  changeColor(correctAnswer, userAnswer, tries) {
    var random = Math.floor(Math.random() * 4) + 1;
    var randomArray = [];
    for (let i = 0; i < userAnswer.length; i++) {
      while (randomArray.includes(random)) {
        //slecting a result box to change color randomly
        random = Math.floor(Math.random() * 4) + 1;
      }
      if (correctAnswer[i] === userAnswer[i]) {
        //checking whether the position and number both are same
        //change color of the circle according to number
        document.querySelector(
          `.try${tries}__result .result__${random}`
        ).style.color = "red";
        randomArray.push(random);
        continue;
      } else if (correctAnswer.includes(userAnswer[i])) {
        //change color grey
        document.querySelector(
          `.try${tries}__result .result__${random}`
        ).style.color = "grey";
        randomArray.push(random);
        continue;
      }
    }
  }

  addHandlerlevel2Init(level2Controller) {
    this.level2Controller = level2Controller;
  }
}
