const dotenv = require('dotenv');
dotenv.config();

const config = {
    paypal:{
        config:{
        mode:process.env.MODE,
        client_id:process.env.CLIENT_ID,
        client_secret:process.env.CLIENT_SECRET
        },
        return_url:"http://localhost:5000/pay/"
    },
    db:{
        mongodb:{
            uri:process.env.MONGOURI
        }
    }
  };

module.exports = config;