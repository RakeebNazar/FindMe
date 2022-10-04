import view from "../views/view.js";

export default class level5SubmitAnswerView extends view {
  parentElement = "";
  level5SubmitAnswerController;

  constructor() {
    super();
  }

  _generatePageMarkup() {
    //method overriding
    this.data = `<section class="level5">
    <header>
      <div class="logo">
        <img src="assets/Logo.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>

      <div class="level5__account account">
        <p class="account__profile">Scoreboard</p>
      </div>
    </header>
    <div class="level5__game">
      <div class="level5__game--title">Please submit your answers</div>
      <div class="level5__answers">
        <div class="level5__answer1">
          1 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer2">
          2 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer3">
          3 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer4">
          4 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer5">
          5 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer6">
          6 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer7">
          7 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer8">
          8 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer9">
          9 <input type="text" id="input-username" class="login-input" />
        </div>
        <div class="level5__answer10">
          10 <input type="text" id="input-username" class="login-input" />
        </div>
      </div>
      <div class="level5__resultsBtn">Submit</div>
    </div>
  
  </section>
      `;
    super._generatePageMarkup();
    super.logo();
    this.level5btn();
  }

  level5btn() {
    let level5__resultsBtn = document.querySelector(".level5__resultsBtn");
    let userAnswers;
    let finalAnswers = [];

    let that = this;
    level5__resultsBtn.addEventListener("click", function(event) {
      userAnswers = document.querySelectorAll(".level5__answers input");
      userAnswers = Array.from(userAnswers); //converting nodlist to array

      userAnswers.forEach(function(e, i, arr) {
        if (e.value !== "") {
          finalAnswers.push(e.value.trim().toLowerCase());
        }
      });

      that.level5SubmitAnswerController.renderlevel6EndHandler(finalAnswers);
    });
  }
  addHandlerlevel5SubmitAnswerInit(level5SubmitAnswerController) {
    this.level5SubmitAnswerController = level5SubmitAnswerController;
  }
}
