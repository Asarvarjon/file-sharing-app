const router = require("express").Router()
const expressFileUpload = require("express-fileupload") 
const path = require("path") 
const fs = require("fs/promises")
const Database = path.join(__dirname, "..", "database.json")

router.post("/", async (req, res) => { 
    let data = await fs.readFile(Database, "utf-8") 
     data = await JSON.parse(data)
    data = await data.find( e => e.password == req.body.password)  
     
    let fileName = data["file"]; 
    let filePathData = path.join(__dirname, "..", "public", "files", fileName)

    res.download(filePathData)
    
})


module.exports = router; 
