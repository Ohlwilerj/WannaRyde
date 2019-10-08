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
        const userId = req.session.user
        const name = req.session.user
        const {title, message, resort_id} = req.body
        // console.log(title, message, name, userId, resort_id)
         await db.add_post([title, message, userId, name, resort_id])
        .then(res => {res.status(200)}).catch(err => {
            // console.log(err)
        })
        console.log(req.body)
    },
    async getOnePost(req, res) {
        const db = req.app.get('db')
        const id = req.id
        const result = await db.get_one_post(id)
        res.status(200).send(result)
    },
    async delete(req,res) {
        const db = req.app.get('db')
        const {id} = req.params
        await db.delete_post()
        posts.splice(index, 1)
        res.status(200).send(posts)
    }
}
