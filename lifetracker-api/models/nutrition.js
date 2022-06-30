const db = require("../db")
const { dbBcrypt} = require("../config")
const {BadRequestError, UnauthorizedError} = require("../utils/errors")

class Nutrition {
    static async createNutrition(credentials){
        const requiredFields = ["category", "calories", "image_url"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })
    }


    static async fetchNutritonByUsername(id) {

        const query = `SELECT category, calories, image_url FROM users LEFT JOIN nutrition ON nutrition.id=users.id WHERE users.id =$1 `

        const result = await db.query(query, [id])

        const nutrition = result.rows[0]

        return nutrition
    }
}

module.exports = Nutrition