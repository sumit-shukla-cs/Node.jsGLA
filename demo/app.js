const express = require('express') 
const app = express();

app.set("view engine","ejs");

const homePageContent = {
    header: "GLA header",
    content: "GLA content",
    footer: "GLA footer",
    data: {
        universityName: "GLA University",
        students: [
            { name: "Sumit", dept: "CSE" },
            { name: "Rahul", dept: "ECE" },
        ]
    }
}

app.get("/", (req, res) => {
    res.render("home", homePageContent);
});

app.get("/header", (req, res) => {
    res.render("header", { title: homePageContent.header });
});

app.get("/footer", (req, res) => {
    res.render("footer", { footer: homePageContent.footer });
});

app.get("/content", (req, res) => {
    res.render("content", { content: homePageContent.content });
});

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use('/users', userRoutes);

module.exports = app;