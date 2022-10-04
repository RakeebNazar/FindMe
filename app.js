const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var useragent = require("express-useragent");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");

const imagesRouter = require("./routes/imagesRoute");

// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES

app.use(cors());
app.options("*", cors());
app.use(useragent.express());
// app.set("view engine", "html");
// Serving static files
app.use(express.static(`${__dirname}/public`));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// 3) ROUTES

app.use("/api/v1/users", userRouter);
app.use("/api/v1/images", imagesRouter);

app.use("/", function(req, res) {
  res.sendFile(`${__dirname}/public/assets/index.html`);
});
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
