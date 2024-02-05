const express = require("express");
// import "body-parser"
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

/**
 * We have to use on our app the bodyparser.json() method.
 */

app.use(bodyParser.json());

/**
 * now we can use the BODY through request.
 */

app.post("/json", (req, res) => {
   const jsonHead = req.body;
   const jsonString = JSON.stringify(jsonHead);

   res.send(jsonString);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
