const express = require("express")
const User = require("../models/user")
const router = express.Router()



// router.post("/nutrition", async (req, res, next) => {
//     try {
        
//         const nutrition = await User.fetchNutritonById(req.body.nutrition_id)
        
//         return res.status(201).json({ nutrition })
//     } catch (err) {
//         next(err)
//     }
// })

module.exports = router