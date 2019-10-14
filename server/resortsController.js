module.exports = {
    async getResorts(req,res) {
        const db = req.app.get('db')
        const resorts = await db.get_resorts()
        res.status(200).send(resorts)
    },

    
}