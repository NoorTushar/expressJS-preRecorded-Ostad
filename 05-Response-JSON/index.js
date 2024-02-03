const express = require("express");
const app = express();
const port = 3000;

const sampleJSON = [
   { name: "Tushar Khan", country: "Bangladesh" },
   { name: "Lio Messi", country: "Argentina" },
   { name: "C Ronaldo", country: "Portugal" },
];

// Response JSON
app.get("/json-test", (req, res) => {
   res.json(sampleJSON);
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
