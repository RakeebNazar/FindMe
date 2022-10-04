import homeView from "../views/homeView.js";
export default class homePageController {
  #mainController;
  homeViewCls;

  constructor(Controller, currentUser) {
    this.mainController = Controller;
    this.homeViewCls = new homeView();
    this.homeViewCls.addHandlerGameInit(this, currentUser); //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  renderLevel1Handler = function() {
    this.mainController.renderLevel1();
  };
  renderLoginSignUpHandler = function() {
    this.mainController.renderLoginSignUp();
  };

  logoutUserHandler = function() {
    this.mainController.logoutUser();
  };

  renderScoreboarddHandler = function() {
    this.mainController.renderScoreboard();
  };
}
