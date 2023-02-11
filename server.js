const express = require("express");

const app = express();

const ProgLang = class {
  constructor(title, dateCreated, description, imageURL) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.description = description;
    this.imageURL = imageURL;
  }
};

const progLangData = require("./assets/prog-lan.json");

const objInstance = progLangData.map((element) => {
  let obj = new ProgLang(
    element.title,
    element.dateCreated,
    element.description,
    element.imageUrl
  );
  return obj;
});

console.log(objInstance);

app.listen(3000, () => console.log("listening on port 3000!"));

app.get("/getData", (req, res) => {
  try {
    res.status(200).send(objInstance);
  } catch (error) {
    res.status(400).send(error);
  }
});
