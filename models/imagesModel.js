
const mongoose = require('mongoose');


const imagesSchema = new mongoose.Schema(
  {
      name: {
        type: String,
              },
      clue: {
        type: String,
      },
      objName:{
        type: String,
      }
    
     
  }
);


const images = mongoose.model('images', imagesSchema);

module.exports = images;
