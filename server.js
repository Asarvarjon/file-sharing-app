const express = require("express")
const server = express()
const HomeRoute = require("./routes/HomeRoute")
const SendData = require("./routes/SendData") 
const path = require("path") 
const Receive = require("./routes/Receive")

const PORT = process.env.PORT || 5000;

server.listen(PORT, (req, res) => {
    `Server is runnig on ${PORT}`
})


server.set("view engine", "ejs")

server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))

server.use(express.static(path.join(__dirname, "public")))


server.use("/", HomeRoute)
server.use("/send_data", SendData) 
server.use("/receive", Receive)

 








 