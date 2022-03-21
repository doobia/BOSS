const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// Register new users

router.post("/signup", async (req, res) => {
  try {
    // generate new password
    let salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(req.body.password, salt);

    //  We are creating new user here
    let newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: newPassword,
    });

    let user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Users

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    //if not user respnd with 404 in json format
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //if not password respnd with 404 in json format else with 200
    !validPassword && res.status(404).json("Password doesnt match");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
