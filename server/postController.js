module.exports = {
    async getPosts(req, res) {
        const db = req.app.get('db')
        const allPosts = await db.get_posts()
        res.status(200).send(posts)
    },

    async addPost(req, res) {
        const db = req.app.get('db')
        const userId = req.session
        console.log(userId)
        const {title, content} = req.body
        await db.add_post([title, content, userId])
        res.status(200)

    }
}