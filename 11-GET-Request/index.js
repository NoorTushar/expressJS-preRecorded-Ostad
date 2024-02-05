const express = require("express");
const app = express();
const port = 8000;

/**
 * Simple GET Request
 * app.get("url",(req,response) => { })
 */
app.get("/", (req, res) => {
   res.send("Hello World!");
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
