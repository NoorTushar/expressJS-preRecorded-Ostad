const express = require("express");
const app = express();
const port = 3000;

app.get("/cookie", (req, res) => {
   res.cookie("name", "Tushar");
   res.cookie("city", "Dhaka");
   res.cookie("age", "16");

   res.send("Cookies are Set");

   res.end();
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
