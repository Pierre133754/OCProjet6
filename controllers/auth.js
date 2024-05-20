const User = require("../models/User");

exports.signIn = (req, res, next) => {
    const user = new User({
      ...req.body
    });
    user.save()
    .then(() => res.status(201).json({ message: "Utilisateur enregistré" }))
    .catch(error => res.status(400).json({ error }));
};