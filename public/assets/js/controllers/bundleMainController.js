var $8fy8C$axios = require("axios");

class $908a68b335c8eb69$export$2e2bcd8739ae039 {
    _parentElement = document.querySelector("body");
    data;
    constructor(){}
    _generatePageMarkup() {
        this._clear();
        this._parentElement.innerHTML = this.data;
    // if (footer) this.generateHelp(); //determining whether the child class needs help footer or not
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
}


class $7b79546320a9ad6b$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = document.querySelector(".homePage__game--start");
    homePageController;
    constructor(){
        super();
    }
    login() {
        let login = document.querySelector(".login");
        let that = this;
        login.addEventListener("click", function(event) {
            that.homePageController.renderLoginHandler();
        });
    }
    addHandlerGameInit(homePageController) {
        this.homePageController = homePageController;
        this.login();
        this.parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            homePageController.renderLevel1Handler();
        });
    }
}


class $ae07b97d3d66d158$export$2e2bcd8739ae039 {
    #mainController;
    homeViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.homeViewCls = new $7b79546320a9ad6b$export$2e2bcd8739ae039();
        this.homeViewCls.addHandlerGameInit(this); //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    renderLevel1Handler = function() {
        this.mainController.renderLevel1();
    };
    renderLoginHandler = function() {
        this.mainController.renderLogin();
    };
}



class $d2dd5b59dbf3372c$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    level1Controller;
    newImageArray = [];
    times;
    tonesArray = [];
    constructor(){
        super();
    }
    parentElement = "";
    startTimer() {
        var tone;
        this.times = document.querySelector(".level1__game--timer--time");
        var that = this;
        const tik = function() {
            const minimum = String(Math.trunc(clock / 60)).padStart(2, 0);
            const seconds = String(clock % 60).padStart(2, 0);
            console.log(that.times);
            that.times.textContent = `${minimum}:${seconds}`;
            if (clock === 2) {
                tone = new Audio(`http://127.0.0.1:5000/stream/${that.tonesArray[5]}` //http://tones7.97tech.tk/
                );
                tone.play();
            }
            if (clock === 0) {
                tone.pause();
                clearInterval(timeClock);
                that.level1Controller.renderLevel2Handler();
            }
            clock--;
        };
        let clock = 3;
        tik();
        const timeClock = setInterval(tik, 1000);
    }
    _generatePageMarkup(imageArray, tonesArray) {
        this.newImageArray = imageArray;
        this.tonesArray = tonesArray;
        //method overriding
        this.data = `
    <section class="level1">  
    <header>
      <div class="logo">
        <img src="/Logo.f876a1b8.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>

      <div class="level1__account account">
        <p class="account__profile">Scoreboard</p>
      </div>
    </header>
   
    <div class="level1__game">
      <p>Keep track of the images and the tone</p>
      <div class="gallery">
        <figure class="gallery__item gallery__item--1">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[0].name}"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[1].name}"
            alt="Gallery image 2"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[2].name}"
            alt="Gallery image 3"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[3].name}"
            alt="Gallery image 4"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[4].name}"
            alt="Gallery image 5"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[5].name}"
            alt="Gallery image 6"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--11">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[6].name}"
            alt="Gallery image 11"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--8">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[7].name}"
            alt="Gallery image 8"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--13">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[8].name}"
            alt="Gallery image 13"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--12">
          <img
            src="http://127.0.0.1:3000/assets/${this.newImageArray[9].name}"
            alt="Gallery image 12"
            class="gallery__img"
          />
        </figure>
        
      </div>
      <div class="level1__game--timer">
        The images will disappear in :
        <div class="level1__game--timer--time">1</div>
        sec followed by a tone
      </div>
    </div>
    <div class="footer">?</div>
    <div class="help">
      <p>allahu akbar<br />alhamdulillah</p>
    </div>
  </section>
      `;
        super._generatePageMarkup();
    }
    addHandlerlevel1Init(level1Controller) {
        this.level1Controller = level1Controller;
    }
}


var $7586712bd29cb0b0$export$4392391ac1c37c9c;

class $7586712bd29cb0b0$var$model {
    state = {
        imageArray: [],
        smashTheCodeScore: 0,
        tonesArray: []
    };
    //getters to return state
    get currentState() {
        return this.state;
    }
    //gets level1 images
    async getImages() {
        var tempArray;
        var that = this;
        var res = await $8fy8C$axios.get("api/v1/images");
        tempArray = res.data.data.data;
        let randomArray = this.UniqueRandomNum(10, tempArray.length);
        randomArray.forEach(function(element, index, array) {
            //selecting 10 random images from the imageArray
            that.state.imageArray.push(tempArray[element - 1]);
        });
        return;
    }
    //gets level1 tones
    async getTones() {
        var Howmany = 10;
        var res = await $8fy8C$axios.get(`http://127.0.0.1:5000/getTones/?tones = ${Howmany}` //http://tones7.97tech.tk/
        );
        this.state.tonesArray = res.data.data.tones;
        return;
    }
    UniqueRandomNum(limit, howMany) {
        let array = [];
        for(let i = 1; i <= limit; i++)array.push(i);
        let res = [];
        for(let i1 = 1; i1 <= howMany; i1++){
            const rand = Math.floor(Math.random() * (limit - i1));
            res.push(array[rand]);
            array[rand] = array[limit - i1];
        }
        return res;
    }
    async loginUser(email, password) {
        $8fy8C$axios.defaults.withCredentials = true;
        try {
            const res = await $8fy8C$axios({
                method: "POST",
                url: "http://127.0.0.1:3000/api/v1/users/login",
                data: {
                    email: email,
                    password: password
                }
            });
            if (res.data.status === "success") console.log(res);
        } catch (err) {
            alert("error", err.response.data.message);
        }
        await $8fy8C$axios.get("http://127.0.0.1:3000/api/v1/users/isLoggedin");
    }
}
$7586712bd29cb0b0$export$4392391ac1c37c9c = new $7586712bd29cb0b0$var$model();


class $f89e703d1f514a05$export$2e2bcd8739ae039 {
    #mainController;
    level1ViewCls;
    state;
    constructor(Controller){
        this.mainController = Controller;
        this.level1ViewCls = new $d2dd5b59dbf3372c$export$2e2bcd8739ae039();
        this.level1ViewCls.addHandlerlevel1Init(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    async generateLevel1() {
        this.state = await this.mainController.getCurrenState();
        this.level1ViewCls._generatePageMarkup(this.state.imageArray, this.state.tonesArray);
        this.level1ViewCls.startTimer();
    }
    renderLevel2Handler = function() {
        this.mainController.renderLevel2();
    };
}



class $c8436ffa9525da60$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    level2Controller;
    imagesArray = [];
    times;
    correctAnswer = [
        1,
        2,
        3,
        4
    ];
    userAnswer = [];
    tries = 1;
    currentInputCount = 0;
    currentInput;
    clock = 15;
    constructor(){
        super();
    }
    _generatePageMarkup() {
        //method overriding
        this.data = `
    <section class="level2">
      <header>
        <div class="logo">
          <img src="/Logo.f876a1b8.png" alt="" />
          <h2 class="gameName">ind Me</h2>
        </div>

        <div class="level2__account account">
          <p class="account__profile">Scoreboard</p>
        </div>
      </header>

      <div class="level2__game">
        <p>Guess The 4 Digit Code to Earn Some Clues</p>
        <div class="right--bar">
          <div class="smashTheCode__timer">00:28</div>
          <div class="smashTheCode__numberPad">
            <div class="smashTheCode__numberPad--number">
              <div class="number1">1</div>
              <div class="number2">2</div>
              <div class="number3">3</div>
              <div class="number4">4</div>
              <div class="number5">5</div>
              <div class="number6">6</div>
              <div class="number7">7</div>
              <div class="number8">8</div>
              <div class="number9">9</div>
            </div>
            <div class="smashTheCode__numberPad--options">
              <div class="wrong">⌫</div>
              <div class="right">✔</div>
            </div>
          </div>
        </div>
        <div class="smashTheCode">
          <div class="tries">
            <div class="try10">
              <div class="try10__count">10</div>
              <div class="try10__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try10__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try9">
              <div class="try9__count">9</div>
              <div class="try9__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try9__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>

            <div class="try8">
              <div class="try8__count">8</div>
              <div class="try8__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try8__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try7">
              <div class="try7__count">7</div>
              <div class="try7__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try7__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try6">
              <div class="try6__count">6</div>
              <div class="try6__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try6__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try5">
              <div class="try5__count">5</div>
              <div class="try5__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try5__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try4">
              <div class="try4__count">4</div>
              <div class="try4__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try4__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try3">
              <div class="try3__count">3</div>
              <div class="try3__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try3__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try2">
              <div class="try2__count">2</div>
              <div class="try2__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try2__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
            <div class="try1">
              <div class="try1__count">1</div>
              <div class="try1__code codes">
                <div class="code__1">.</div>
                <div class="code__2">.</div>
                <div class="code__3">.</div>
                <div class="code__4">.</div>
              </div>
              <div class="try1__result results">
                <div class="result__1">.</div>
                <div class="result__2">.</div>
                <div class="result__3">.</div>
                <div class="result__4">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">?</div>
      <div class="help">
        <p>allahu akbar<br />alhamdulillah</p>
      </div>
      <div class="lost">
        <p>Sorry, You ran out of time<br/> and you Lost The Game <br/> Please try Again</p>
      </div>
    </section>
      `;
        super._generatePageMarkup();
    }
    startLevel2Game() {
        let right = document.querySelector(".right");
        let wrong = document.querySelector(".wrong");
        let that = this;
        //allowing users to submit their answer
        right.addEventListener("click", function(event) {
            if (that.currentInputCount === 4) {
                //resetting the current try.
                //next level if correct answer is guessed
                if (that.areEqual(that.correctAnswer, that.userAnswer)) {
                    let smashTheCodeScore = (10 - that.tries) * 10 + 10;
                    that.level2Controller.renderLevel3Handler(smashTheCodeScore);
                    return;
                }
                that.changeColor(that.correctAnswer, that.userAnswer, that.tries);
                that.currentInputCount = 0;
                that.tries++;
                that.userAnswer = [];
            }
        });
        //allowing users to delete their answer
        wrong.addEventListener("click", function(event) {
            if (that.userAnswer !== "" && that.currentInputCount !== 0) {
                that.userAnswer.pop();
                document.querySelector(`.try${that.tries}__code .code__${that.currentInputCount}`).textContent = ".";
                that.currentInputCount--;
            }
        });
        this.playMouse();
    }
    startTimer() {
        let lost = document.querySelector(".lost");
        this.times = document.querySelector(".smashTheCode__timer");
        var that = this;
        const tik = function() {
            const minimum = String(Math.trunc(that.clock / 60)).padStart(2, 0);
            const seconds = String(that.clock % 60).padStart(2, 0);
            that.times.textContent = `${minimum}:${seconds}`;
            if (that.clock === 0) {
                clearInterval(timeClock);
                lost.classList.add("visibility");
            }
            that.clock--;
        };
        tik();
        const timeClock = setInterval(tik, 1000);
    }
    //to play the game with keyboard
    // playKeyboard() {
    //   let that = this;
    //   document.addEventListener("keyup", function (event) {
    //     if (that.currentInputCount === 4) return; //forcing users to click the right button
    //     that.currentInput = Number(event.key);
    //     //verifying the input is number and also not a duplicate one
    //     if (
    //       !isNaN(that.currentInput) &&
    //       !that.userAnswer.includes(that.currentInput) &&
    //       that.currentInput !== 0
    //     ) {
    //       that.currentInputCount++;
    //       that.userAnswer.push(that.currentInput);
    //       document.querySelector(
    //         `.try${that.tries}__code .code__${that.currentInputCount}`
    //       ).textContent = that.currentInput;
    //     }
    //   });
    // }
    //top play the game with mouse
    playMouse() {
        let that = this;
        let numberPad = document.querySelector(".smashTheCode__numberPad--number");
        numberPad.addEventListener("click", function(event) {
            if (that.currentInputCount === 4) return; //forcing users to click the right button
            that.currentInput = Number(event.target.textContent);
            if (!isNaN(that.currentInput) && !that.userAnswer.includes(that.currentInput) && that.currentInput !== 0) {
                //verifying the input is number and also not a duplicate one
                that.currentInputCount++;
                that.userAnswer.push(that.currentInput);
                document.querySelector(`.try${that.tries}__code .code__${that.currentInputCount}`).textContent = that.currentInput;
            }
        });
    }
    //function to chec kwhether the user answer is correct
    areEqual(correctAnswer, userAnswer) {
        for(let i = 0; i < userAnswer.length; i++){
            if (correctAnswer[i] === userAnswer[i]) continue;
            else return false;
        }
        return true;
    }
    //function to change the result color(circle colors) according to user's try
    changeColor(correctAnswer, userAnswer, tries) {
        var random = Math.floor(Math.random() * 4) + 1;
        var randomArray = [];
        for(let i = 0; i < userAnswer.length; i++){
            while(randomArray.includes(random))//slecting a result box to change color randomly
            random = Math.floor(Math.random() * 4) + 1;
            if (correctAnswer[i] === userAnswer[i]) {
                //checking whether the position and number both are same
                //change color of the circle according to number
                document.querySelector(`.try${tries}__result .result__${random}`).style.color = "red";
                randomArray.push(random);
                continue;
            } else if (correctAnswer.includes(userAnswer[i])) {
                //change color grey
                document.querySelector(`.try${tries}__result .result__${random}`).style.color = "grey";
                randomArray.push(random);
                continue;
            }
        }
    }
    addHandlerlevel2Init(level2Controller) {
        this.level2Controller = level2Controller;
    }
}


class $56cc8369f9c938f7$export$2e2bcd8739ae039 {
    #mainController;
    level2ViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.level2ViewCls = new $c8436ffa9525da60$export$2e2bcd8739ae039();
        this.level2ViewCls.addHandlerlevel2Init(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generateLevel2() {
        this.level2ViewCls._generatePageMarkup();
        this.level2ViewCls.startLevel2Game();
        this.level2ViewCls.startTimer();
    }
    renderLevel3Handler = function(smashTheCodeScore) {
        this.mainController.renderLevel3(smashTheCodeScore);
    };
}




class $0f2053c82fb69246$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    level3Controller;
    tonesArray = [];
    tonesShuffledArray = [];
    constructor(){
        super();
    }
    _generatePageMarkup(smashTheCodeScore, tonesArray) {
        //method overriding
        this.tonesArray = tonesArray;
        this.data = `<section class="level3">
    <header>
      <div class="logo">
        <img src="./Logo.f876a1b8.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>

      <div class="level3__account account">
        <p class="account__profile">Scoreboard</p>
      </div>
    </header>
    <div class="level3__game">
      <div class="score">Score <span class="score__results">${smashTheCodeScore}</span></div>
      <div class="greetings">Congratulations You Have Earned Some Clues</div>
      <div class="tones">
        <div class="title">Find The Correct Tone To Unlock The Clue</div>

        <div class="tones__btn">
          <button class="tone1" id="tone1">1</button>
          <button class="tone2">2</button>
          <button class="tone3">3</button>
          <button class="tone4">4</button>
          <button class="tone5" id="tone5">5</button>
          <button class="tone6" id="tone6">6</button>
          <button class="tone7">7</button>
          <button class="tone8">8</button>
          <button class="tone9">9</button>
          <button class="tone10" id="tone10">10</button>
        </div>
      </div>
      <div class="options">
        <div class="options__answer">
           <input type="text" class="options__answer--input" />
        </div>
        <button class="options__btn1">Submit</button>
      </div>
    </div>
    <div class="footer">?</div>
    <div class="help">
      <p>allahu akbar<br />alhamdulillah</p>
    </div>
    <div class="lost">
      <p>Sorry, You chose the wrong answer <br/> and you Lost The Game <br/> Please try Again</p>
    </div>
  </section>
      `;
        super._generatePageMarkup();
    }
    startLevel3Game() {
        let options__btn1 = document.querySelector(".options__btn1");
        let answer = document.querySelector(".options__answer--input");
        let lost = document.querySelector(".lost");
        let tones__btns = document.querySelector(".tones__btn");
        let that = this;
        let tone;
        let timeOut;
        this.shuffleTones(10, 10);
        //playing the tone as per the clicked buttons
        tones__btns.addEventListener("click", function(event) {
            tone = new Audio(`http://127.0.0.1:5000/stream/${that.tonesShuffledArray[event.target.textContent - 1]}` //http://tones7.97tech.tk/
            );
            tone.play();
            timeOut = setTimeout(function() {
                tone.pause();
            }, 2000);
        });
        //checking whetherr the submitted answer is correct or not
        options__btn1.addEventListener("click", function(event) {
            if (that.tonesShuffledArray[Number(answer.value) - 1] === that.tonesArray[5]) //change 1 to tone number
            that.level3Controller.renderLevel4Handler();
            else lost.classList.add("visibility");
        });
    }
    shuffleTones(limit, howMany) {
        let that = this;
        let array = [];
        for(let i = 1; i <= limit; i++)array.push(i);
        let res = [];
        for(let i1 = 1; i1 <= howMany; i1++){
            const rand = Math.floor(Math.random() * (limit - i1));
            res.push(array[rand]);
            array[rand] = array[limit - i1];
        }
        res.forEach(function(randomIndex, index) {
            that.tonesShuffledArray[index] = that.tonesArray[randomIndex - 1];
        });
    }
    addHandlerlevel3Init(level3Controller) {
        this.level3Controller = level3Controller;
    }
}


class $ad0dabbdf664450a$export$2e2bcd8739ae039 {
    #mainController;
    level3ViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.level3ViewCls = new $0f2053c82fb69246$export$2e2bcd8739ae039();
        this.level3ViewCls.addHandlerlevel3Init(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generateLevel3(smashTheCodeScore, tonesArray) {
        this.level3ViewCls._generatePageMarkup(smashTheCodeScore, tonesArray);
        this.level3ViewCls.startLevel3Game();
    }
    renderLevel4Handler = function() {
        this.mainController.renderLevel4();
    };
}




class $dc57d8f2f172cc0e$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    level4ClueController;
    constructor(){
        super();
    }
    _generatePageMarkup(smashTheCodeScore, imageArray) {
        //method overriding
        var clueVisible = smashTheCodeScore / 10;
        this.data = `<section class="level4">
    <header>
      <div class="logo">
        <img src="./Logo.f876a1b8.png" alt="" />
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
        for(let index = 1; index <= clueVisible; index++)//inserting the earned clues in html
        document.querySelector(`.clue${index} span`).textContent = imageArray[index - 1].clue;
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


class $664a7e2baa1ed312$export$2e2bcd8739ae039 {
    #mainController;
    level4ClueViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.level4ClueViewCls = new $dc57d8f2f172cc0e$export$2e2bcd8739ae039();
        this.level4ClueViewCls.addHandlerlevel4ClueInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generatelevel4Clue(smashTheCodeScore, imageArray) {
        this.level4ClueViewCls._generatePageMarkup(smashTheCodeScore, imageArray);
    }
    renderlevel5SubmitAnswerHandler = function() {
        this.mainController.renderLevel5();
    };
}




class $3b74b1d9428b2c4d$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    level5SubmitAnswerController;
    constructor(){
        super();
    }
    _generatePageMarkup() {
        //method overriding
        this.data = `<section class="level5">
    <header>
      <div class="logo">
        <img src="./Logo.f876a1b8.png" alt="" />
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
                if (e.value !== "") finalAnswers.push(e.value.trim().toLowerCase());
            });
            that.level5SubmitAnswerController.renderlevel6EndHandler(finalAnswers);
        });
    }
    addHandlerlevel5SubmitAnswerInit(level5SubmitAnswerController) {
        this.level5SubmitAnswerController = level5SubmitAnswerController;
    }
}


class $88eb36c2093053b4$export$2e2bcd8739ae039 {
    #mainController;
    level5SubmitAnswerViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.level5SubmitAnswerViewCls = new $3b74b1d9428b2c4d$export$2e2bcd8739ae039();
        this.level5SubmitAnswerViewCls.addHandlerlevel5SubmitAnswerInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generatelevel5SubmitAnswer() {
        this.level5SubmitAnswerViewCls._generatePageMarkup();
    }
    renderlevel6EndHandler = function(finalAnswers) {
        this.mainController.renderLevel6(finalAnswers);
    };
}




class $05a8a4f3f823c9d3$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    level6EndController;
    constructor(){
        super();
    }
    _generatePageMarkup(finalAnswers, smashTheCodeScore, imageArray) {
        let imageScore = 0;
        let finalScore = 0;
        finalAnswers.forEach(function(answer) {
            //checking the answers are correct
            for(let index = 0; index < imageArray.length; index++)if (imageArray[index].objName.includes(answer) && answer.length >= 3) {
                imageArray.splice(index, 1);
                imageScore++;
            }
        });
        imageScore = imageScore * 10;
        finalScore = (imageScore + smashTheCodeScore) / 2;
        //method overriding
        this.data = `<section class="level6">
    <header>
      <div class="logo">
        <img src="/Logo.f876a1b8.png" alt="" />
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
        <img src="/Logo.f876a1b8.png" alt="" />
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
        //inserting the solutions could not be found in html
        for(let index1 = 0; index1 < imageArray.length; index1++)document.querySelector(`.solution${index1 + 1} span`).textContent = imageArray[index1].objName;
        this.initializeScoreboard();
    }
    initializeScoreboard() {
        let account = document.querySelector(".account");
        let that = this;
        account.addEventListener("click", function(event) {
            that.level6EndController.renderScoreboarddHandler();
        });
    }
    addHandlerlevel6EndInit(level6EndController) {
        this.level6EndController = level6EndController;
    }
}


class $a8da7d3e24eed507$export$2e2bcd8739ae039 {
    #mainController;
    level6EndViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.level6EndViewCls = new $05a8a4f3f823c9d3$export$2e2bcd8739ae039();
        this.level6EndViewCls.addHandlerlevel6EndInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generatelevel6End(finalAnswers, smashTheCodeScore, imageArray) {
        this.level6EndViewCls._generatePageMarkup(finalAnswers, smashTheCodeScore, imageArray);
    }
    renderScoreboarddHandler = function() {
        this.mainController.renderScoreboard();
    };
}




class $d209f0fa107862fe$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    scoreboardController;
    constructor(){
        super();
    }
    _generatePageMarkup() {
        // method overriding
        this.data = `<section class="Scoreboard">
    <header>
      <div class="logo">
        <img src="/Logo.f876a1b8.png" alt="" />
        <h2 class="gameName">ind Me</h2>
      </div>
    </header>
    <p class="Scoreboard__title">Scoreboard</p>
    <div class="global__scoredboard">
      <p class="global__scoredboard--title">Global Scoreboard</p>
      <div class="globalScoreboard__statistics">
        <p class="one">User</p>
        <p class="two">Highest Score</p>
     
  
        <p class="user1 user">Rakee</p>
        <p class="user1 highScore">95</p>
     
      </div>
    </div>
    <div class="My__scoredboard">
      <p class="My__scoredboard--title">My Scoreboard</p>
      <div class="MyScoreboard__statistics">
        <p class="one">Rank</p>
        <p class="two">Highest Score</p>
      
  
        <p class="my rank">8</p>
        <p class="my highScore">95</p>
      
      </div>
    </div>
  </section> 
      `;
        super._generatePageMarkup();
    }
    addHandlerscoreboardInit(scoreboardController) {
        this.scoreboardController = scoreboardController;
    }
}


class $9dd25bbdfb1de119$export$2e2bcd8739ae039 {
    #mainController;
    scoreboardViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.scoreboardViewCls = new $d209f0fa107862fe$export$2e2bcd8739ae039();
        this.scoreboardViewCls.addHandlerscoreboardInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generateScoreboard() {
        this.scoreboardViewCls._generatePageMarkup();
    }
}




class $8b8e29ab11f29398$export$2e2bcd8739ae039 extends $908a68b335c8eb69$export$2e2bcd8739ae039 {
    parentElement = "";
    loginController;
    constructor(){
        super();
    }
    _generatePageMarkup() {
        // method overriding
        document.querySelector("body").style.cssText = ` font-family: "Press Start 2P", sans-serif;
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

          <a href="#forgot" class="forgot">Forgot password?</a>

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
              class="input"
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
    }
    login() {
        let loginBtn = document.querySelector(".login__but");
        let email = document.querySelector(".emailLogin");
        let password = document.querySelector(".passwordLogin");
        let that = this;
        console.log(loginBtn);
        loginBtn.addEventListener("click", function(e) {
            that.loginController.loginUser(email.value, password.value);
        });
    }
    addHandlerloginInit(loginController) {
        this.loginController = loginController;
    }
}


class $70edede377b6dc15$export$2e2bcd8739ae039 {
    #mainController;
    loginViewCls;
    constructor(Controller){
        this.mainController = Controller;
        this.loginViewCls = new $8b8e29ab11f29398$export$2e2bcd8739ae039();
        this.loginViewCls.addHandlerloginInit(this); //initializing the view
    //could have passed just the function - but have to bind this. and it would prevent it from being oop.
    }
    generateLogin() {
        this.loginViewCls._generatePageMarkup();
    }
    loginUser(email, password) {
        this.mainController.loginUser(email, password);
    }
}



//initializing controllers (MVS - Publisher subscriber pattern)
class $31223038d40cd9f9$var$mainController {
    constructor(){
        if (null) null.accept();
        this.homePageControllerCls = new $ae07b97d3d66d158$export$2e2bcd8739ae039(this);
        this.level1ControllerCls = new $f89e703d1f514a05$export$2e2bcd8739ae039(this);
        this.level2ControllerCls = new $56cc8369f9c938f7$export$2e2bcd8739ae039(this);
        this.level3ControllerCls = new $ad0dabbdf664450a$export$2e2bcd8739ae039(this);
        this.level4ControllerCls = new $664a7e2baa1ed312$export$2e2bcd8739ae039(this);
        this.level5ControllerCls = new $88eb36c2093053b4$export$2e2bcd8739ae039(this);
        this.level6ControllerCls = new $a8da7d3e24eed507$export$2e2bcd8739ae039(this);
        this.scoreboardControllerCls = new $9dd25bbdfb1de119$export$2e2bcd8739ae039(this);
        this.loginControllerCls = new $70edede377b6dc15$export$2e2bcd8739ae039(this);
        this.currentState = $7586712bd29cb0b0$export$4392391ac1c37c9c.currentState; //accessing the current state with getters - this is a live connection - bcz pass by refernce
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
        this.level3ControllerCls.generateLevel3(this.currentState.smashTheCodeScore, this.currentState.tonesArray);
    };
    renderLevel4 = function() {
        this.level4ControllerCls.generatelevel4Clue(this.currentState.smashTheCodeScore, this.currentState.imageArray);
    };
    renderLevel5 = function() {
        this.level5ControllerCls.generatelevel5SubmitAnswer();
    };
    renderLevel6 = function(finalAnswers) {
        this.level6ControllerCls.generatelevel6End(finalAnswers, this.currentState.smashTheCodeScore, this.currentState.imageArray);
    };
    renderScoreboard = function() {
        this.scoreboardControllerCls.generateScoreboard();
    };
    renderLogin = function() {
        this.loginControllerCls.generateLogin();
    };
    loginUser = function(email, password) {
        $7586712bd29cb0b0$export$4392391ac1c37c9c.loginUser(email, password);
    };
    //communincating with modelClass and exchanging backened state data
    async getCurrenState() {
        await $7586712bd29cb0b0$export$4392391ac1c37c9c.getImages();
        await $7586712bd29cb0b0$export$4392391ac1c37c9c.getTones();
        return this.currentState;
    }
}
new $31223038d40cd9f9$var$mainController();


//# sourceMappingURL=bundleMainController.js.map
