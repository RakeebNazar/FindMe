import view from "../views/view.js";

export default class level3View extends view {
  parentElement = "";
  level3Controller;
  tonesArray = [];
  tonesShuffledArray = []; //variable to shuffle the tones array to play random songs on 1-10 tones buttons

  constructor() {
    super();
  }

  _generatePageMarkup(smashTheCodeScore, tonesArray) {
    //method overriding
    this.tonesArray = tonesArray;
    this.data = `<section class="level3">
    <header>
      <div class="logo">
        <img src="/assets/logo.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>

      <div class="level3__account account">
        <p class="account__profile">Scoreboard</p>
      </div>
    </header>
    <div class="level3__game">
      <div class="score">Score <span class="score__results">${smashTheCodeScore}</span></div>
      <div class="greetings">Congratulations You Have Earned Some Clues</div>
      <div class="tones">
        <div class="title">Find The Correct Tone To Unlock The Clue</div>

        <div class="tones__btn">
          <button class="tone1" id="tone1">1</button>
          <button class="tone2">2</button>
          <button class="tone3">3</button>
          <button class="tone4">4</button>
          <button class="tone5" id="tone5">5</button>
          <button class="tone6" id="tone6">6</button>
          <button class="tone7">7</button>
          <button class="tone8">8</button>
          <button class="tone9">9</button>
          <button class="tone10" id="tone10">10</button>
        </div>
      </div>
      <div class="options">
        <div class="options__answer">
           <input type="text" class="options__answer--input" />
        </div>
        <button class="options__btn1">Submit</button>
      </div>
    </div>
  
    <div class="lost">
      <p>Sorry, You chose the wrong answer <br/> and you Lost The Game <br/> Please try Again</p>
    </div>
  </section>
      `;

    super._generatePageMarkup();
    super.logo();
  }

  startLevel3Game() {
    let options__btn1 = document.querySelector(".options__btn1");
    let answer = document.querySelector(".options__answer--input");
    let lost = document.querySelector(".lost");
    let tones__btns = document.querySelector(".tones__btn");

    let that = this;
    let tone;
    let timeOut;

    this.shuffleTones(10, 10);

    //playing the tone as per the clicked buttons
    tones__btns.addEventListener("click", function(event) {
      tone = new Audio(
        `http://tones7.97tech.tk/stream/${
          that.tonesShuffledArray[event.target.textContent - 1]
        }`
      );

      tone.play();
      timeOut = setTimeout(function() {
        tone.pause();
      }, 2000);
    });

    //checking whetherr the submitted answer is correct or not
    options__btn1.addEventListener("click", function(event) {
      if (
        that.tonesShuffledArray[Number(answer.value) - 1] === that.tonesArray[5]
      ) {
        //change 1 to tone number
        that.level3Controller.renderLevel4Handler();
      } else lost.classList.add("visibility");
    });
  }

  shuffleTones(limit, howMany) {
    let that = this;
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

    res.forEach(function(randomIndex, index) {
      that.tonesShuffledArray[index] = that.tonesArray[randomIndex - 1];
    });
  }

  addHandlerlevel3Init(level3Controller) {
    this.level3Controller = level3Controller;
  }
}
