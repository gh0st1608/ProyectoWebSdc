const path = require('path');
const dotenv = require('dotenv');

/*
dotenv.config({
  path: path.join(__dirname,'/./../../.env')
})
*/


dotenv.config({
  path: path.join(__dirname,'../../','.env')
})


const vars = {
    ENV: process.env.NODE_ENV,
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
    TOKEN_JWT: process.env.TOKEN_ADMIN,
    MONGO_ENV: {
      MONGO_URI: process.env.DB_MONGO_URI,
    },
    AWS_ENV: {
      KEY_ID: process.env.AWS_KEY_ID,
      SECRET_KEY: process.env.AWS_SECRET_KEY,
      REGION_ID : process.env.AWS_REGION_ID
    },
  };
  
module.exports = vars;