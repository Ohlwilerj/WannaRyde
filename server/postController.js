module.exports = {
    async getPosts(req, res) {
        const db = req.app.get('db')
        // console.log(req.params)
        const allPosts = await db.get_posts(req.params.id)
        // console.log(allPosts)
        res.status(200).send(allPosts)
    },

    async addPost(req, res) {

        const db = req.app.get('db')
        const {userId} = req.session.user
        // console.log(req.session)
        const {title, message, resort_id} = req.body
        console.log(title, message, userId, resort_id)
        await db.add_post([title, message, userId, resort_id])
        .then(response => {
            // console.log(response)
            res.status(200)
        }).catch(err => {
            // console.log(err)
        })
        // console.log(req.body)
    },
    async delete(req,res) {
        const db = req.app.get('db')
        const {id} = req.params
        await db.delete_post()
        posts.splice(index, 1)
        res.status(200).send(posts)
    }
}
