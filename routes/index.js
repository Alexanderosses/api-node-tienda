const express = require('express'),
router = express.Router(),
userRoutes = require('./User.router'),
postRoutes = require('./Post.router')

router.use('/user', userRoutes)
router.use('/post', postRoutes)


module.exports = router;