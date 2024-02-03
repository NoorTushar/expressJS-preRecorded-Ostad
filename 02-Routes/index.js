const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("this is the homepage");
});
app.post("/about", (req, res) => {
   res.send("this is the about page");
});
app.put("/contact", (req, res) => {
   res.send("this is the contact page");
});
app.delete("/delete", (req, res) => {
   res.send("this is the delete page");
});

const port = 8000;

app.listen(port, () => {
   console.log(`server is running`);
});
