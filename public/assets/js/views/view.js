export default class view {
  #_parentElement = document.querySelector("body");

  data;

  constructor() {}

  _generatePageMarkup() {
    this.#_clear();
    this.#_parentElement.innerHTML = this.data;
  }
  #_clear() {
    //  encapsulation
    this.#_parentElement.innerHTML = "";
  }

  logo() {
    var logo = document.querySelector(".logo");
    logo.addEventListener("click", function(e) {
      location.reload(true);
    });
  }
}
