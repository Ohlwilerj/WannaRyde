const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {email, regPassword2, firstName, lastName, profile_pic} = req.body
        // Checking to see if user already is registered
        // console.log(req.body)
        const user = await db.find_email(email)
        if (user[0]) return res.status(200).send({message: 'User another email bro'}) 
        // if not, salt and hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(regPassword2, salt)
        // Add the new user in the DB
        const newUser = await db.add_user(
        {email, firstName, lastName, profile_pic, regPassword2, hash}).catch(err => {
            return res.status(503)
        })
        // console.log(newUser)
        // Store new user on session
        req.session.user = {
            email,
            firstName,
            lastName,
            profile_pic,
            id: newUser[0].id
        }
        // Send session to the front end
        res.status(200).send({message:`You're all logged in`, user: req.session.user, loggedIn: true})
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {logEmail, loginPassword} = req.body
        // console.log(req.body)
        const user = await db.find_user(logEmail)
        console.log(user)
        if (!user[0]) return res.status(200).send({message: `Can't find your username`})
        const result = bcrypt.compareSync(loginPassword, user[0].hash)
        if(!result) return res.status(200).send({message: `Password ain't right bro. Try again`})
        const {user_id: userId} = user[0]
        req.session.user = {logEmail,  profile_pic: user[0].profile_pic, userId: user[0].id, name: user[0].first_name + ' ' + user[0].last_name}

        res.status(200).send({message: `You're all logged in`, user: req.session.user, loggedIn: true})
    },

    logout(req,res) {
        req.session.destroy()
        res.status(200).send({message:'Peace out bro', loggedIn: false})
    }
}