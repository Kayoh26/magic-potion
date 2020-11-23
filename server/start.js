const db = require('./db');
const app = require('./index');

const port = process.env.PORT || 3000;

db.sync()  // sync our database
  .then(function(){
    app.listen(port, function(){
      console.log(`Listening on port ${port}`)
    })
  }
);
