import homePageController from "./homePageController.js";
import level1Controller from "./level1Controller.js";
import level2Controller from "./level2Controller.js";
import level3Controller from "./level3Controller.js";
import level4ClueController from "./level4ClueController.js";
import level5SubmitAnswerController from "./level5SubmitAnswerController.js";
import level6EndController from "./level6EndController.js";
import scoreboardController from "./scoreboardController.js";
import loginSignUpController from "./loginSignUpController.js";
import modelObj from "../model.js";
//initializing controllers (MVS - Publisher subscriber pattern)
class mainController {
  #currentState;
  constructor() {
    this.currentState = modelObj.currentState; //accessing the current state with getters - this is a live connection - bcz pass by refernce
    this.level1ControllerCls = new level1Controller(this);
    this.level2ControllerCls = new level2Controller(this);
    this.level3ControllerCls = new level3Controller(this);
    this.level4ControllerCls = new level4ClueController(this);
    this.level5ControllerCls = new level5SubmitAnswerController(this);
    this.level6ControllerCls = new level6EndController(this);
    this.scoreboardControllerCls = new scoreboardController(this);
    this.loginSignUpControllerCls = new loginSignUpController(this);
  }

  async initizeHomePageController() {
    //we cant initilize homePageController inside constructir, bcause we have to call a await method before the initialization.
    //class constructpr wont deal with await. So, here we have a initialize method for the home page class.
    await modelObj.isLoggedIn();
    this.homePageControllerCls = new homePageController(
      this,
      this.currentState.currentUser
    );
  }
  //generating views by telling the specific controllers to generate.
  renderLevel1 = function() {
    this.level1ControllerCls.generateLevel1();
  };
  renderLevel2 = function() {
    this.level2ControllerCls.generateLevel2();
  };
  renderLevel3 = function(smashTheCodeScore) {
    this.currentState.smashTheCodeScore = smashTheCodeScore;
    this.level3ControllerCls.generateLevel3(
      this.currentState.smashTheCodeScore,
      this.currentState.tonesArray
    );
  };
  renderLevel4 = function() {
    this.level4ControllerCls.generatelevel4Clue(
      this.currentState.smashTheCodeScore,
      this.currentState.imageArray
    );
  };
  renderLevel5 = function() {
    this.level5ControllerCls.generatelevel5SubmitAnswer();
  };
  renderLevel6 = function(finalAnswers) {
    this.level6ControllerCls.generatelevel6End(
      finalAnswers,
      this.currentState.smashTheCodeScore,
      this.currentState.imageArray
    );
  };

  renderLoginSignUp = function() {
    this.loginSignUpControllerCls.generateLoginSignUp();
  };

  //authentication functions
  loginUser = function(email, password) {
    //called from login controller
    modelObj.loginUser(email, password);
  };

  signUpUser = function(email, password, passwordConfirm) {
    //called from login controller
    modelObj.signUpUser(email, password, passwordConfirm);
  };
  logoutUser = function() {
    //called from homePage controller
    modelObj.logoutUser();
  };

  //data rendering functions
  renderScoreboard = async function(finalScore) {
    await modelObj.getScores(finalScore); //uploading the final score and getting all the scores of users.
    this.scoreboardControllerCls.generateScoreboard(
      this.currentState.myScore,
      this.currentState.globalScores
    );
  };
  //communincating with modelClass and exchanging backened state data
  async getImagesAndTones() {
    await modelObj.getImages();
    await modelObj.getTones();
    return this.currentState;
  }
}

var mainControllerCls = new mainController();
mainControllerCls.initizeHomePageController();
