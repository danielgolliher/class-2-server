const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static("/public"))

app.get("/", (req, res) => {
    const filepath = __dirname + "/public/index.html"
    console.log(filepath)
    console.log("hello from inside the index route")
    res.sendFile(filepath)
})

app.listen(port, () => {
    console.log("server is running at port 3000, http://localhost:3000")
})