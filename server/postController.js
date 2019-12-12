module.exports = {
    async getPosts(req, res) {
        const db = req.app.get('db')
        const allPosts = await db.get_posts(req.params.id)
        res.status(200).send(allPosts)
    },

    async addPost(req, res) {
        const db = req.app.get('db')
        const {userId} = req.session.user
        console.log(userId)
        const {title, message, resort_id} = req.body
        console.log(req.body)
         await db.add_post([title, message, userId, resort_id])
        .then(res => {res.Status(200)}).catch(err => {
        })
    },
    async getOnePost(req, res) {
        const db = req.app.get('db')
        const {id} = req.params
        // console.log(id)
        const result = await db.get_one_post(id)
        // console.log(result)
        res.status(200).send(result)
    },
    async delete(req,res) {
        const db = req.app.get('db')
        let {id} = req.params
        const deletePost = db.delete_post([id])
        res.status(200).send(deletePost)
        
    },

    async editPost(req, res) {
        const db = req.app.get('db')
        let {title, message} = req.body
        let {id} = req.params
        db.edit_post(id, title, message)
        .then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(`error: ${err}`)
            res.status(500).send('Error updating')
        })
    }
}
