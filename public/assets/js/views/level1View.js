import view from "../views/view.js";

export default class level1View extends view {
  level1Controller;
  #newImageArray = [];
  #times;
  #tonesArray = [];

  constructor() {
    super();
  }

  startTimer() {
    var tone;
    this.#times = document.querySelector(".level1__game--timer--time");
    var that = this;
    const tik = function() {
      const minimum = String(Math.trunc(clock / 60)).padStart(2, 0);
      const seconds = String(clock % 60).padStart(2, 0);

      that.#times.textContent = `${minimum}:${seconds}`;

      if (clock === 2) {
        tone = new Audio(
          `http://tones7.97tech.tk/stream/${that.#tonesArray[5]}` //http://tones7.97tech.tk/
        );
        tone.play();
      }

      if (clock === 0) {
        // tone.pause();
        clearInterval(timeClock);
        that.level1Controller.renderLevel2Handler();
      }

      clock--;
    };

    let clock = 15;

    tik();
    const timeClock = setInterval(tik, 1000);
  }

  _generatePageMarkup(imageArray, tonesArray) {
    this.#newImageArray = imageArray;
    this.#tonesArray = tonesArray;

    //method overriding
    this.data = `
    <section class="level1">  
    <header>
      <div class="logo">
        <img src="/assets/logo.png" alt="" />
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
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[0].name}"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[1].name}"
            alt="Gallery image 2"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[2].name}"
            alt="Gallery image 3"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[3].name}"
            alt="Gallery image 4"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[4].name}"
            alt="Gallery image 5"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[5].name}"
            alt="Gallery image 6"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--11">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[6].name}"
            alt="Gallery image 11"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--8">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[7].name}"
            alt="Gallery image 8"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--13">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[8].name}"
            alt="Gallery image 13"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--12">
          <img
            src="http://127.0.0.1:3000/assets/${this.#newImageArray[9].name}"
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
    

  </section>
      `;

    super._generatePageMarkup();
    super.logo();

    let scrollTo = document.querySelector(".gallery");
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }

  addHandlerlevel1Init(level1Controller) {
    this.level1Controller = level1Controller;
  }
}
