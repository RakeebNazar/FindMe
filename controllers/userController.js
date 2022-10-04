const { promisify } = require("util");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const jwt = require("jsonwebtoken");

exports.uploadScore = catchAsync(async (req, res, next) => {
  let { currentUser, currentScore } = req.body;

  let _id = currentUser._id;
  currentScore = Number(currentScore);

  // 1) getting the user
  const user = await User.findById({ _id });
  // 2) checking whether the curent game score is higher than the existing score. if yes update the high score.
  if (currentScore > user.highScore) {
    await User.findByIdAndUpdate({ _id: _id }, { highScore: currentScore });
    res.status(200).json({
      status: "success",
    });
  } else {
    res.status(200).json({
      status: "success",
    });
  }
});

exports.getScores = catchAsync(async (req, res, next) => {
  let currentUser = {};

  if (req.cookies.jwt) {
    // 1) verify token
    const decoded = await promisify(jwt.verify)(
      req.cookies.jwt,
      process.env.JWT_SECRET
    );

    // 2) Check if user still exists

    currentUser = await User.findById(decoded.id);
  }

  const doc = await User.find().sort({ highScore: -1 });

  doc.forEach(function(user, index) {
    user.rank = index + 1; //creating the user rank
    //filter the name from the email of the user
    if (currentUser.email === user.email) {
      //placing the current logged in user's doc in [0] position
      doc.splice(index, 1);
      doc.unshift(user);
    }

    user.email = user.email.slice(0, user.email.indexOf("@"));
  });
  //if there is no user logged in thn , set the current user Score to empty

  if (Object.keys(currentUser).length === 0) {
    doc.unshift(currentUser);
  }

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: doc.length,
    data: {
      data: doc,
    },
  });
});
