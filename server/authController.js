const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {firstName, lastName, profile_pic, regPassword2, email} = req.body
        // Checking to see if user already is registered
        // console.log(req.body)
        const user = await db.find_email(email)
        if (user[0]) return res.status(200).send({message: 'Use another email bro'}) 
        // if not, salt and hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(regPassword2, salt)
        // Add the new user in the DB
        const newUser = await db.add_user(
        {firstName, lastName, email, profile_pic, hash, regPassword2}).catch(err => {
            // console.log(newUser)
            return res.status(503)
        })
        // Store new user on session
        req.session.user = {
            name: firstName + ' ' + lastName,
            email,
            profile_pic,
            userId: newUser[0].id
        }
        // Send session to the front end
        res.status(200).send({message:`You're all logged in`,loggedIn: true, user: req.session.user })
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, loginPassword} = req.body
        // console.log(req.body)
        const user = await db.find_user(email)
        // console.log(user)
        if (!user[0]) return res.status(200).send({message: `Can't find your username`})
        const result = bcrypt.compareSync(loginPassword, user[0].hash)
        if(!result) return res.status(200).send({message: `Password ain't right bro. Try again`})
        const {user_id: userId} = user[0]
        req.session.user = {email,  profile_pic: user[0].profile_pic, userId: user[0].id, name: user[0].first_name + ' ' + user[0].last_name}

        res.status(200).send({message: `You're all logged in`, user: req.session.user, loggedIn: true})
    },

    logout(req,res) {
        req.session.destroy()
        res.status(200).send({message:'Peace out bro', loggedIn: false})
    },

    async editProfilePic(req,res) {
        const db = req.app.get('db')
        let profile_pic = req.session
        // console.log(profile_pic)
        // let userId = req.params
        const newPic = await db.update_pic(profile_pic)
        // console.log(profile_pic)
        res.status(200).send(newPic)
    },
    
    async getMyGroups(req, res) {
        const db = req.app.get('db')
        let userId = req.session
        const myGroups = await db.get_my_groups()
        res.status(200).send(myGroups)
    }
}