const express = require('express')
const multer = require('multer')
const { uploadFile } = require('./services/storage-service')
const postModel = require('./models/post.model')
const cors = require('cors')

const app = express()

// middleware backend ko frontend se connect krne ke liye
app.use(cors())

// middleware text/json format ko read krne ke liye
app.use(express.json())

// middleware file upload ke liye
const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), async (req, res) => {
    
        const result = await uploadFile(req.file.buffer)
         const post = await postModel.create({
            image: result,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: 'Post created successfully',
            // imageUrl: result,
            post
        })
    } 
)

app.get('/posts', async (req, res) => {
    const posts = await postModel.find()
    return res.status(200).json({
        message: 'Posts fetched successfully',
        posts
    })
})

     

module.exports = app