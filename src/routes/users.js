const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users page')
})

router.post('/', (req, res) => {
    console.log('Request Body:', req.body); 
    res.send('you have reached the POST request !')
})

module.exports = router