const express = require('express');
const imagesController = require('./../controllers/imagesController');
const router = express.Router();

router
  .route('/')
  .get(imagesController.getAllimages)
  .post(
    imagesController.createimages
  );
  

module.exports = router;
