const mongoose = require('mongoose');
const connection = encodeURIComponent( process.env.MONGODB_URI )

mongoose.connect(
  connection || 'mongodb://127.0.0.1:27017/ebay-buddy',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;