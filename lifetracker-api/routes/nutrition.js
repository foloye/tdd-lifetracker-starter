const express = require("express")
const Nutrition = require("../models/nutrition")
const router = express.Router()
const security = require("../middleware/security")
const User = require("../models/user")


router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {username} = res.locals.user
        
        const user = await User.fetchUserByUsername(username) 
        
        const nutrition = await Nutrition.listNutritionForUser(user)
        
        return res.status(200).json({ "nutrition": nutrition })
    } catch (err) {
        next(err)
    }
})
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        console.log("This is post req.body ", req.body)
        const nutrition = await Nutrition.createNutrition(req.body)
        
        return res.status(201).json({ "nutrition": {nutrition} })
    } catch (err) {
        next(err)
    }
})
router.get("/id/:nutritionId", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const nutritionId = Number(req.params.nutritionId)
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        
        return res.status(201).json( {nutrition} )
    } catch (err) {
        next(err)
    }
})

  

module.exports = router