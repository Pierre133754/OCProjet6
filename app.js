const express = require('express');
const mongoose = require("mongoose");

const Book = require("./models/Book");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://froxy:pass@cluster0.c9txkoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/auth", authRoutes);

module.exports = app;