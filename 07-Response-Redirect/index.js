const express = require("express");
const app = express();

app.get("/india", (req, res) => {
   res.redirect("/bangladesh");
});

app.get("/bangladesh", (req, res) => {
   res.send("We are in Bangladesh");
});

const port = 5500;

app.listen(port, () => {
   console.log(`server is running`);
});
