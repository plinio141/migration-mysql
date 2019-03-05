const Sequelize = require('sequelize');
const sequelize = new Sequelize('icdl', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
});

const fs = require('fs'); 
const csv = require('csv-parser');

fs.createReadStream(inputFilePath)
.pipe(csv())
.on('data', function(data){
    try {
      console.log(data);
      
        //perform the operation
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    //some final operation
}); 

User.findOne({},{});

