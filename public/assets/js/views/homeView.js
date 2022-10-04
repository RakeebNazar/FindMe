import view from "../views/view.js";

export default class homeView extends view {
  #account__loginSignup = document.querySelector(".account__loginSignup");
  #account__logout = document.querySelector(".account__logout");
  #account__scoreBoard = document.querySelector(".account__scoreBoard");
  #gameStart = document.querySelector(".homePage__game--start");
  #helpBtn = document.querySelector(".homePage__game--help");
  #help = document.querySelector(".help");
  #helpClose = document.querySelector(".close");

  homePageController;

  constructor() {
    super();
    super.logo();
  }
  //homePage Initializer
  addHandlerGameInit(homePageController, currentUser) {
    let that = this;
    this.homePageController = homePageController;
    if (currentUser) {
      //if there is a user exist thn show the view as logged in
      this.#account__loginSignup.classList.add("hidden");
      this.#account__logout.classList.remove("hidden");

      this.#account__logout.style.textAlign = "center";
    }

    this.login(); //login button initilizer
    this.logout(); //login button initilizer
    this.scoreBoard(); //scoreboard button initilizer

    //how to play listener
    this.#helpBtn.addEventListener("click", function() {
      that.#help.classList.add("visibility");
    });

    this.#helpClose.addEventListener("click", function() {
      that.#help.classList.remove("visibility");
    });

    this.#gameStart.addEventListener("click", function(e) {
      //starting the game
      e.preventDefault();
      if (currentUser) {
        that.homePageController.renderLevel1Handler();
      } else {
        alert("Please Login to Play");
      }
    });
  }

  login() {
    let that = this;
    this.#account__loginSignup.addEventListener("click", function(event) {
      that.homePageController.renderLoginSignUpHandler();
    });
  }

  logout() {
    let that = this;
    this.#account__logout.addEventListener("click", function(event) {
      that.homePageController.logoutUserHandler();
    });
  }

  scoreBoard() {
    var that = this;
    this.#account__scoreBoard.addEventListener("click", function(event) {
      //renderScoreboard
      that.homePageController.renderScoreboarddHandler();
    });
  }
}
