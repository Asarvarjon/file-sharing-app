const router = require("express").Router()
const expressFileUpload = require("express-fileupload") 
const path = require("path")
const data =  require("../modules/database")
const filesPath = path.join(__dirname, "..", "public/files");
const fs = require("fs/promises")

router.post("/", expressFileUpload(), async (req, res) => {
    // console.log(req.body.password, req.files.file.name); 
    const DatabasePath = path.join(__dirname, "..", "database.json")
    let readFile = await fs.readFile(DatabasePath, "utf-8")
    readFile = await JSON.parse(readFile)

    readFile.push({
        password: req.body.password,
        file: req.files.file.name
    })
   

    await fs.writeFile(DatabasePath, JSON.stringify(
        readFile,
    ))


    req.files.file.mv(path.join("public", "files", req.files.file.name))  
    res.redirect("/")
})


module.exports = router;