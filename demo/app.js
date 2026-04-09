const express = require('express');
const app = express();
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.set("view engine","ejs");
app.use(express.json());

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
    res.render("home", {
        header: homePageContent.header,
        content: homePageContent.content,
        footer: homePageContent.footer,
        universityName: homePageContent.data.universityName,
        students: homePageContent.data.students,
    });
});

app.get("/header", (req, res) => {
    res.render("header", { header: homePageContent.header });
});

app.get("/footer", (req, res) => {
    res.render("footer", { footer: homePageContent.footer });
});

app.get("/content", (req, res) => {
    res.render("content", { content: homePageContent.content });
});

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

module.exports = app;