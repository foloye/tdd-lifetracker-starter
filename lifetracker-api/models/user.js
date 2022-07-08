const bcrypt = require("bcrypt")
const db = require("../db")
const { dbBcrypt} = require("../config")
const {BadRequestError, UnauthorizedError} = require("../utils/errors")

class User {
    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name
        }
    }
    static async login (credentials) {

        //user should submit email and pass
        //if anything missing throw error
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })

        const user = await User.fetchUserByEmail(credentials.email)

        //look up user in database
        //if user found, compare pass with db
        //if they === return user

        if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid) {
                return User.makePublicUser(user)
            }
        }

        //if anything wrong throw err
        throw new UnauthorizedError("Invalid Email/Password Combination")

    }
    static async register(credentials) {
        //user should submit their email, pass, locaiton, and date
        // if any fields are missing throw err
        const requiredFields = ["email", "password", "username", "first_name", "last_name"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`missing ${field} in request body.`)
            }
        })

        if (credentials.email.indexOf("@" )<= 0 ) {
            throw new BadRequestError("invalid email.")
        }

        //make sure no user already exists in the system with that email
        //if does, throw err
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }
        const existingUsername = await User.fetchUserByUsername(credentials.username)
        if (existingUsername) {
            throw new BadRequestError(`Duplicate username: ${credentials.username}`)
        }
        //take the users pass and hash it
        const hashedPassword = await bcrypt.hash(credentials.password, parseInt(dbBcrypt) )

        //take the users email, and lowercase it
        const lowercasedEmail = credentials.email.toLowerCase()
        //create a new user in the db with all info

        const result = await db.query(`
            INSERT INTO users (
                email,
                password,
                username,
                first_name,
                last_name
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, username, first_name, last_name;
        `, [lowercasedEmail, hashedPassword, credentials.username,credentials.first_name, credentials.last_name])

        //return the user
        const user = result.rows[0]
        return  User.makePublicUser(user)


    }
    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }
        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }
    static async fetchUserByUsername(username) {
        if (!username) {
            throw new BadRequestError("No username provided")
        }
        const query = `SELECT * FROM users WHERE username = $1`

        const result = await db.query(query, [username.toLowerCase()])

        const user = result.rows[0]

        return user
    }
    // static async fetchSleepById(credentials) {
    //     const userId = await User.fetchUserByEmail(credentials.email)

    //     const query = `SELECT * FROM users LEFT JOIN sleep ON sleep.id=users.id WHERE users.id =$1 `

    //     const result = await db.query(query, [id])

    //     const user = result.rows[0]

    //     return user
    // }
    // static async fetchExerciseById(credentials) {
    //     const existingUser = await User.fetchUserByEmail(credentials.email)

    //     const query = `SELECT * FROM users LEFT JOIN exercise ON exercise.id=users.id WHERE users.id =$1 `

    //     const result = await db.query(query, [id])

    //     const user = result.rows[0]

    //     return user
    // }
}

//join nutrition and users line
//`SELECT first_name, username,calories FROM users LEFT JOIN nutrition ON nutrition.id=users.id LIMIT 4; `
//SELECT * FROM users LEFT JOIN nutrition ON nutrition.id=users.id LIMIT 4;


module.exports = User