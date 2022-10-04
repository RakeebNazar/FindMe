import level3View from "../views/level3View.js";

export default class level3Controller {
  #mainController;
  level3ViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.level3ViewCls = new level3View();
    this.level3ViewCls.addHandlerlevel3Init(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generateLevel3(smashTheCodeScore, tonesArray) {
    this.level3ViewCls._generatePageMarkup(smashTheCodeScore, tonesArray);
    this.level3ViewCls.startLevel3Game();
  }

  renderLevel4Handler = function () {
    this.mainController.renderLevel4();
  };
}
