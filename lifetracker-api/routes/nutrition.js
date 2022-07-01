const express = require("express")
const Nutrition = require("../models/nutrition")
const router = express.Router()


router.get("/", async (req, res, next) => {
    try {
        const user = 1
        const nutrition = await Nutrition.listNutritionForUser(user)
        
        return res.status(200).json({ "nutrition": nutrition })
    } catch (err) {
        next(err)
    }
})
router.post("/", async (req, res, next) => {
    try {
        const nutrition = await Nutrition.createNutrition(req.body)
        
        return res.status(201).json({ "nutrition": {nutrition} })
    } catch (err) {
        next(err)
    }
})
router.get("/id/:nutritionId", async (req, res, next) => {
    try {
        const nutritionId = Number(req.params.nutritionId)
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        
        return res.status(201).json( {nutrition} )
    } catch (err) {
        next(err)
    }
})


module.exports = router