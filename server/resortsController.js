module.exports = {
    async getResorts(req,res) {
        const db = req.app.get('db')
        const resorts = await db.get_resorts()
        res.status(200).send(resorts)
    },

    async editProfilePic(req,res) {
        const db = req.app.get('db')
        let profile_pic = req.session
        console.log(profile_pic)
        let userId = req.params
        const newPic = await db.update_pic(profile_pic)
        res.status(200).send(newPic)
    },
}