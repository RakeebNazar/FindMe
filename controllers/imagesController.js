const images = require('./../models/imagesModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');



exports.getAllimages = factory.getAll(images);
exports.createimages = factory.createOne(images);


