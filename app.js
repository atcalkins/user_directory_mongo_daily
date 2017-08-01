const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const data = require('./data');
const app = express();
const userRoute = require('./routes/users');
const indexRoute = require('./routes/index');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoute);
app.use(userRoute);

  const dbClient = require("./dbConnection")
  dbClient.connect((client) => {
    app.listen(app.get("port"), err => {
      if (err) {
        throw err;
        exit(1);
      }

      console.log(
        `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
          "port"
        )}`
      );
    })
  });
