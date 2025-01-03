import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/contact", (req, res) => {

  res.render("contact.ejs");
    
})

app.get("/projects", (req, res) => {
    res.render("projects.ejs");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});        