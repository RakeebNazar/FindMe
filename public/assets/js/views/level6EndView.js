import view from "../views/view.js";

export default class level6EndView extends view {
  parentElement = "";
  level6EndController;

  constructor() {
    super();
  }

  _generatePageMarkup(finalAnswers, smashTheCodeScore, imageArray) {
    let imageScore = 0;
    let finalScore = 0;

    finalAnswers.forEach(function(answer) {
      //checking the answers are correct
      for (let index = 0; index < imageArray.length; index++) {
        if (imageArray[index].objName.includes(answer) && answer.length >= 3) {
          imageArray.splice(index, 1);

          imageScore++;
        }
      }
    });
    imageScore = imageScore * 10;
    finalScore = (imageScore + smashTheCodeScore) / 2;

    //method overriding
    this.data = `<section class="level6">
    <header>
      <div class="logo">
        <img src="assets/Logo.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>

      <div class="level6__account account">
        <p class="account__profile">Scoreboard</p>
      </div>
    </header>
    <div class="level6__score">Score : <span>${imageScore}</span></br></br>Overall Score : <span>${finalScore}</span></div>
    <div class="level6__greetings">
      <p>congratulations !!!</p>
      <div class="level6__logo">
        <span>You Have</span>
        <img src="assets/Logo.png" alt="" />
        <span class="gameName">ound Me</span>
      </div>
    </div>
    <div class="level6__solution ">
      <p>The images you could not find are</p>
      <div class="unfindList">
        <div class="solution1">1  <span></span></div>
        <div class="solution2">2  <span></span></div>
        <div class="solution3">3  <span></span></div>
        <div class="solution4">4  <span></span></div>
        <div class="solution5">5  <span></span></div>
        <div class="solution6">6  <span></span></div>
        <div class="solution7">7  <span></span></div>
        <div class="solution8">8  <span></span></div>
        <div class="solution9">9  <span></span></div>
        <div class="solution10">10  <span></span></div>
      </div>
    </div>
  </section>
      `;
    super._generatePageMarkup();
    super.logo();
    //inserting the solutions could not be found in html
    for (let index = 0; index < imageArray.length; index++) {
      document.querySelector(`.solution${index + 1} span`).textContent =
        imageArray[index].objName;
    }

    //ScoreBoard initialize

    this.initializeScoreboard(finalScore);
  }
  initializeScoreboard(finalScore) {
    let account = document.querySelector(".account");
    let that = this;
    account.addEventListener("click", function(event) {
      //renderScoreboard
      that.level6EndController.renderScoreboarddHandler(finalScore);
    });
  }

  addHandlerlevel6EndInit(level6EndController) {
    this.level6EndController = level6EndController;
  }
}
