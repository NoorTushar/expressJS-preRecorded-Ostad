// 1. import express

const express = require("express");

// 2. we will now create an application

const app = express();

// 3. listen the app to a port

const port = 8000;
app.listen(port, () => {
   console.log(`Server running successfully at port: ${port}`);
});

// 4. get request to root directory and send response

app.get("/", (req, res) => {
   res.send("Hello World! First Express JS response.");
});
