/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});
router.use((req, res, next) => {
  console.log(req.user);
  next();
});

router.get("/user", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).send({ error: `Error getting user: ${error.message}` });
  }
});

//   if (!req.user) {
//     return res.status(401).send({ error: "Not logged in" });
//   }

//   try {
//     const user = await User.findById(req.user._id);
//     res.send({ user: user });
//   } catch (error) {
//     console.error("Error getting points:", error);
//     res.status(500).send({ error: `Error getting points: ${error.message}` });
//   }
// });

router.post("/updatePoints", async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Not logged in" });
  }
  const points = req.body.points;

  try {
    const user = await User.findById(req.user._id);
    const updatedUser = await user.updatePoints(points);
    res.send(updatedUser);
  } catch (error) {
    console.error("Error updating points:", error);
    res.status(500).send({ error: `Error updating points: ${error.message}` });
  }
});

router.get("/getPoints", async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Not logged in" });
  }

  try {
    const user = await User.findById(req.user._id);
    res.send({ points: user.points });
  } catch (error) {
    console.error("Error getting points:", error);
    res.status(500).send({ error: `Error getting points: ${error.message}` });
  }
});

router.post("/api/updateLevels", (req, res) => {
  const { userId, levelPawn, levelQueen, levelKing, levelKnight } = req.body;
  User.findById(userId)
    .then((user) => {
      user.levelPawn = levelPawn;
      user.levelQueen = levelQueen;
      user.levelKing = levelKing;
      user.levelKnight = levelKnight;
      return user.save();
    })
    .then(() => res.send({ success: true }))
    .catch((error) => res.status(500).send({ error: error.message }));
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
