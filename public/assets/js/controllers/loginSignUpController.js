import loginSignUpView from "../views/loginSignUpView.js";

export default class loginSignUpController {
  #mainController;
  loginSignUpViewCls;

  constructor(Controller) {
    this.mainController = Controller;
    this.loginSignUpViewCls = new loginSignUpView();
    this.loginSignUpViewCls.addHandlerLoginSignUpInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
  }
  generateLoginSignUp() {
    this.loginSignUpViewCls._generatePageMarkup();
  }

  loginUser(email, password) {
    this.mainController.loginUser(email, password);
  }

  signUpUser(email, password, passwordConfirm) {
    this.mainController.signUpUser(email, password, passwordConfirm);
  }
}
