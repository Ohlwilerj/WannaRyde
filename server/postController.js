module.exports = {
    async getPosts(req, res) {
        const db = req.app.get('db')
        console.log(req.params)
        const allPosts = await db.get_posts(req.params.id)
        console.log(allPosts)
        res.status(200).send(allPosts)
    },

    async addPost(req, res) {
        const db = req.app.get('db')
        const postId = req.session.user.id
        console.log(postId)
        const {title, content} = req.body
        await db.add_post([title, content, postId])
        res.status(200)

    }
}