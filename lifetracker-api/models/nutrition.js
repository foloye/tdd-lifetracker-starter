const db = require("../db")
const { dbBcrypt} = require("../config")
const {BadRequestError, UnauthorizedError, NotFoundError} = require("../utils/errors")

class Nutrition {
    static async makeNutrition(nutrition) {
        return {
            user_id: nutrition.user_id,
            name: nutrition.email,
            category: nutrition.username,
            calories: nutrition.first_name,
            image_url: nutrition.last_name
        }
    }


    static async createNutrition(credentials){
        const requiredFields = ["category", "calories", "image_url","name", "user_id"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })
        const result = await db.query(`
        INSERT INTO nutrition (
            user_id,
            name,
            category,
            calories,
            image_url
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING user_id, name, category, calories, image_url;
        `, [credentials.user_id, credentials.name, credentials.category,credentials.calories, credentials.image_url])

        //return the user
        const nutrition = result.rows
        return  Nutrition.makeNutrition(nutrition)



    }
    static async listNutritionForUser(user) {

        if(!user) {
            throw new BadRequestError("bad user provided")
        }

        const userId = await db.query(`SELECT id FROM users where email = $1`, [user.email])
        const id = userId.rows[0].id

        const query = `SELECT * FROM nutrition WHERE user_id =$1 `

        const result = await db.query(query, [id])

        const nutrition = result.rows

        return nutrition
    }

    static async fetchNutritionById(nutrition_id) {

        if(!nutrition_id){
            throw new NotFoundError("no nutrition id")
        }

        const query = `SELECT nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url
        FROM nutrition WHERE nutrition.id = $1`


        const result = await db.query(query, [nutrition_id])

        // const nutrition = result.rows[0]

        return result.rows
    }
}

module.exports = Nutrition