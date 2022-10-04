import level1View from "../views/level1View.js";

export default class level1Controller {
  #mainController;
  level1ViewCls;
  state;

  constructor(Controller) {
    this.mainController = Controller;
    this.level1ViewCls = new level1View();
    this.level1ViewCls.addHandlerlevel1Init(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  async generateLevel1() {
    this.state = await this.mainController.getImagesAndTones(); //getting Images and tones as currentState
    this.level1ViewCls._generatePageMarkup(
      this.state.imageArray,
      this.state.tonesArray
    );
    this.level1ViewCls.startTimer();
  }

  renderLevel2Handler = function() {
    this.mainController.renderLevel2();
  };
}
