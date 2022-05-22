const router = require('express').Router();
const { User, Post } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dpPostData => res.json(dpPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;