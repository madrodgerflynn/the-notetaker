const notes = require("express").Router();
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

notes.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

notes.post("/", (req, res) => {
  console.log(req.body.title);

  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
    };
    console.log(newNote);

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully 🚀`);
  } else {
    res.error("Error in adding note");
  }
  // to DELETE -- must call the handleNoteDelete()
  // must then provide a way for the function to find the id number and remove it from the db.json file
  const dele = new deleteNote();
  notes
    .delete("/db/db.json", id)
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});
module.exports = notes;
