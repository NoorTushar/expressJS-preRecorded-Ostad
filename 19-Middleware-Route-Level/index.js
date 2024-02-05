const express = require("express");
const app = express();

//
const port = 3000;

app.use("/about", (req, res, next) => {
   console.log(`i am route level middleware at about url`);
   next();
});

app.get("/", (req, res) => {
   res.send("This is the homepage");
});
app.get("/about", (req, res) => {
   res.send("This is the about page");
});
app.get("/contact", (req, res) => {
   res.send("This is the contact page");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
