const express = require("express")
const User = require("../models/user")
const tokens = require("../utils/tokens")
const router = express.Router()
const security = require("../middleware/security")
const Nutrition = require("../models/nutrition")



router.post("/login", async (req, res, next) => {
    try {
        //take the users email and password and attempting to authenticate this
        const user = await User.login(req.body)
        const token = tokens.createUserJwt(user)
        return res.status(200).json({ user, token })
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        //take the users email, pass, date, and location
        //and create new user in database
        const user = await User.register(req.body)
        const token = tokens.createUserJwt(user)
        return res.status(201).json({ user, token })
    } catch (err) {
        next(err)
    }
})

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      const { username } = res.locals.user
      const user = await User.fetchUserByUsername(username)
      const publicUser = await User.makePublicUser(user)
      const nutrition = await Nutrition.listNutritionForUser(user)
      return res.status(200).json({ user: publicUser, nutrition: nutrition })
    } catch (err) {
      next(err)
    }
  })
  
  
module.exports = router