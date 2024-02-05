const express = require("express");
const app = express();

app.post("/login", (req, res) => {
   const userName = req.query.userName;
   const password = req.query.password;

   res.send(`${userName} ${password}`);
});

const port = 7700;
app.listen(port, () => console.log(`server is running`));
