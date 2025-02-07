const express = require("express");
const app = express();
const port = 4444;

app.listen(port, () => {
    console.log(`SERVER RUNING PORT http://localhost:${port}`)
});

