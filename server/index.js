const express = require("express");
const PORT = process.env.PORT || 3001
const app = express();
// const cors = require('cors')
// app.use(cors())

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from server!",
        name: "Migeon Tony"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is listening on port: ${PORT}`);
})

