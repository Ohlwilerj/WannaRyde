const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, email, password, firstName, lastName, profilePic} = req.body
        // Checking to see if rider already is registered
        const rider = await db.find_email(email)
        if (rider[0]) return res.status(200).send({message: 'User another email bro'})
        // 
        // if not salt and hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // Store the new rider in the DB
        const riderId = await db.add_rider({username, email, firstName, lastName, profilePic})
        db.add_hash({rider_id: riderId[0].rider_id, hash}).catch(err => {
            return res.sendStatus(503)
        })
        // Store new rider on session
        req.session.user = {
            username,
            email,
            name, 
            riderId: riderId[0].riderId
        }
        // Send session to the front end
        res.status(200).send({message:`You're all logged in`, rider: req.session.rider, loggedIn: true})
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const rider = await db.find_rider(username)
        if (!rider[0]) return res.status.send({message: `Can't find your username`})
        const result = bcrypt.compareSync(password, rider[0].hash)
        if(!result) return res.status(200).send({message: `Password ain't right bro. Try again`})
        const {username, rider_id: riderId} = rider[0]
        req.session.rider = {email, firstName, lastName, riderId, username}

        res.status(200).send({message: `You're all logged in`, rider: res.session.rider, loggedIn: true})
    }
}