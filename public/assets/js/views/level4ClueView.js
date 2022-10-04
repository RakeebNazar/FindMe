import view from "../views/view.js";

export default class level4ClueView extends view {
  parentElement = "";
  level4ClueController;

  constructor() {
    super();
  }

  _generatePageMarkup(smashTheCodeScore, imageArray) {
    //method overriding
    var clueVisible = smashTheCodeScore / 10;

    this.data = `<section class="level4">
    <header>
      <div class="logo">
        <img src="assets/Logo.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>

      <div class="level4__account account">
        <p class="account__profile">Scoreboard</p>
      </div>
    </header>
    <div class="level4__game">
      <div class="level4__game--title">Clues</div>
      <div class="clues__sentence">
        <div class="clue1">1.  <span></span></div>
        <div class="clue2">2.  <span></span></div>
        <div class="clue3">3.  <span></span></div>
        <div class="clue4">4.  <span></span></div>
        <div class="clue5">5.  <span></span></div>
        <div class="clue6">6.  <span></span></div>
        <div class="clue7">7.  <span></span></div>
        <div class="clue8">8.  <span></span></div>
        <div class="clue9">9.  <span></span></div>
        <div class="clue10">10.  <span></span></div>
      </div>
      <div class="Clues__btn">click</div>
    </div>
  
  </section> 
      `;
    super._generatePageMarkup();
    super.logo();
    for (let index = 1; index <= clueVisible; index++) {
      //inserting the earned clues in html
      document.querySelector(`.clue${index} span`).textContent =
        imageArray[index - 1].clue;
    }

    this.level4btn();
  }

  level4btn() {
    let Clues__btn = document.querySelector(".Clues__btn");
    let that = this;
    Clues__btn.addEventListener("click", function(event) {
      that.level4ClueController.renderlevel5SubmitAnswerHandler();
    });
  }

  addHandlerlevel4ClueInit(level4ClueController) {
    this.level4ClueController = level4ClueController;
  }
}
