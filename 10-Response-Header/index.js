const express = require("express");
const app = express();
const port = 3000;

app.get("/header", (req, res) => {
   res.append("author", "Tushar Khan");
   res.append("author-country", "Bangladesh");
   res.append("author-age", "16");

   res.send(`Check the headers section!`);
   res.status(201);
   res.end();
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
