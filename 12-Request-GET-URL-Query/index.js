const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
   const firstName = req.query.firstName;
   const lastName = req.query.lastName;

   res.send(`Hello ${firstName} ${lastName}`);
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
