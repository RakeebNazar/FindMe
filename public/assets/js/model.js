class model {
  state = {
    imageArray: [],
    smashTheCodeScore: 0,
    tonesArray: [],
    currentUser: null,
    myScore: {},
    globalScores: [],
  };

  //getters to return state
  get currentState() {
    return this.state;
  }

  //gets level1 images
  async getImages() {
    let tempArray;
    let that = this;
    let response = await fetch("/api/v1/images", {
      method: "GET",
    });

    let res = await response.json();

    tempArray = res.data.data;
    //creating random array with elements of 16 digits from 1-16
    let randomArray = this.UniqueRandomNum(16, 10);

    randomArray.forEach(function(element, index, array) {
      //selecting 10 random images from the imageArray (images are names as 1-16.jpg)
      that.state.imageArray.push(tempArray[element - 1]);
    });

    console.log(this.state.imageArray);
    return;
  }

  //gets level1 tones
  async getTones() {
    let Howmany = 10;

    let response = await fetch(
      `http://tones7.97tech.tk/tones/?tones = ${Howmany}`,
      {
        method: "GET",
      }
    );

    let res = await response.json();

    this.state.tonesArray = res.data.tones;

    return;
  }

  async signUpUser(email, password, passwordConfirm) {
    const data = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      highScore: 0,
    };

    let response;
    let res;
    try {
      const response = await fetch(`api/v1/users/signUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res = await response.json();

      if (res.status === "success") {
        location.reload(true);
      } else throw new Error();
    } catch (err) {
      if (
        res.message ===
        'E11000 duplicate key error collection: findme.users index: email_1 dup key: { email: "mohamednazar032@gmail.com" }'
      ) {
        alert("User Already Exist");
      } else alert(res.message);
    }
  }

  async loginUser(email, password) {
    const data = { email: email, password: password };
    let res;
    try {
      const response = await fetch(`/api/v1/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res = await response.json();

      if (res.status === "success") {
        location.reload(true);
      } else throw new Error();
    } catch (err) {
      alert(res.message);
    }
  }

  async logoutUser() {
    let response;
    let res;
    try {
      response = await fetch(`/api/v1/users/logout`);
      res = await response.json();
      if ((res.status = "success")) location.reload(true);
    } catch (err) {
      alert("error", "Error logging out! Try again.");
    }
  }

  async isLoggedIn() {
    let res;
    try {
      const response = await fetch(`/api/v1/users/isLoggedin`, {
        method: "GET",
      });
      res = await response.json();

      if (res.status === "success") {
        this.state.currentUser = res.data.currentUser;
      } else throw new Error();
    } catch (err) {
      this.state.currentUser = null;
    }
  }

  async getScores(finalScore) {
    //post current score. we wont recieve a final score, if this getScores is called from homePage.
    let that = this;
    if (finalScore) {
      let res;
      let response;
      let data = {
        currentUser: this.state.currentUser,
        currentScore: finalScore,
      };

      try {
        const response = await fetch(`/api/v1/users/uploadScore`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        res = await response.json();

        if (res.status === "success") {
        } else throw new Error();
      } catch (err) {
        alert(res.message);
      }
    }

    let res;
    let response;

    //getting all Scores
    try {
      const response = await fetch(`/api/v1/users/getScores`, {
        method: "GET",
      });

      res = await response.json();

      if (res.status === "success") {
        //1) building my scores and global scores by seperating my score from all score array

        this.state.myScore = res.data.data[0];

        res.data.data.forEach(function(userScore) {
          that.state.globalScores.push(userScore);
        });
      } else throw new Error();
    } catch (err) {
      this.state.myScore = [];
    }
  }

  UniqueRandomNum(limit, howMany) {
    let array = [];
    for (let i = 1; i <= limit; i++) {
      array.push(i);
    }

    let res = [];

    for (let i = 1; i <= howMany; i++) {
      const rand = Math.floor(Math.random() * (limit - i));
      res.push(array[rand]);
      array[rand] = array[limit - i];
    }

    return res;
  }
}

export default new model();
