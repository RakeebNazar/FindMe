import view from "../views/view.js";

export default class loginSignUpView extends view {
  parentElement = "";
  loginSignUpController;

  constructor() {
    super();
  }

  _generatePageMarkup() {
    // method overriding
    document.querySelector(
      "body"
    ).style.cssText = ` font-family: "Press Start 2P", sans-serif;
     background-image: linear-gradient(to top left, #753682 0%, #bf2e34 100%);`;

    this.data = ` <section class="login__signUp">
    <div class="form__wrapper">
      <input type="radio" class="radio" name="radio" id="login" checked />
      <input type="radio" class="radio" name="radio" id="signup" />
      <div class="tile">
        <h3 class="login">Login</h3>
        <h3 class="signup">Signup</h3>
      </div>

      <label class="tab login__tab" for="login"> Login </label>

      <label class="tab signup__tab" for="signup"> Signup </label>
      <span class="shape"></span>
      <div class="form__wrap">
        <div class="form__fild login__form">
          <div class="input__group">
            <input type="email" class="input emailLogin" placeholder="Email Address" />
          </div>
          <div class="input__group">
            <input type="password" class="input passwordLogin" placeholder="Password" />
          </div>

         

          <input type="submit" class="btn login__but" id="login__but" value="Login" />

          <div class="not__mem">
            <label for="signup">Not a member? <span> Signup now</span></label>
          </div>
        </div>

        <div class="form__fild signup__form">
          <div class="input__group">
            <input type="email" class="input emailSignUp" placeholder="Email Address" />
          </div>
          <div class="input__group">
            <input type="password" class="input passwordSignUp" placeholder="Password" />
          </div>

          <div class="input__group">
            <input
              type="password"
              class="input passwordConfirm"
              placeholder="Confirm Password"
            />
          </div>

          <input type="submit" class="btn" id="signUp__but" value="Signup" />
        </div>
      </div>
    </div>
  </section> 
      `;
    super._generatePageMarkup();
    this.login();
    this.signUp();
  }

  login() {
    let loginBtn = document.querySelector(".login__but");
    let email = document.querySelector(".emailLogin");
    let password = document.querySelector(".passwordLogin");
    let that = this;
    console.log(loginBtn);

    loginBtn.addEventListener("click", function(e) {
      that.loginSignUpController.loginUser(email.value, password.value);
    });
  }

  signUp() {
    let signUpBtn = document.querySelector("#signUp__but");
    let email = document.querySelector(".emailSignUp");
    let password = document.querySelector(".passwordSignUp");
    let passwordConfirm = document.querySelector(".passwordConfirm");
    let that = this;

    signUpBtn.addEventListener("click", function(e) {
      that.loginSignUpController.signUpUser(
        email.value,
        password.value,
        passwordConfirm.value
      );
    });
  }

  addHandlerLoginSignUpInit(loginSignUpController) {
    this.loginSignUpController = loginSignUpController;
  }
}
