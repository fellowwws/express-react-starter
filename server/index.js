const express = require('express');
const tasks = require("./routes/tasks.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('build'));
app.use("/api", tasks);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});