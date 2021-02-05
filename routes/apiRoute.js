const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const noteData = require("../db/db.json");

module.exports = (app) => {
  // GRAB NOTES AND DISPLAY ON PAGE \\
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
    // console.log("hello");
    // res.json(tableData);
  });

  // RECEIVE NEW NOTE/ADD ID/ADD TO ARRAY \\
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuid.v4();
    const recallArr = JSON.parse(fs.readFileSync("db/db.json"));
    recallArr.push(newNote);
    console.log(newNote);
    // console.log(recallArr);
    fs.writeFileSync("db/db.json", JSON.stringify(recallArr));
    res.json(newNote);
  });

  // DELETE NOTE BY ID \\
  app.delete("/api/notes:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("db/db.json"));

    // const deletedNote = notes.filter(
    //   (removeNote) => removeNote.id != req.params.id
    // );
    // fs.writeFileSync("db/db.json", JSON.stringify(deletedNote));

    for (let i = 0; i < notes.length; i++)
      if (notes[i].id === req.params.id) {
        let removedNote = notes.splice([i], 1);
        console.log(notes);
        fs.writeFileSync("db/db.json", JSON.stringify(notes));
        res.json(true);
      }
    // res.json(newNotesArr);
  });
};
