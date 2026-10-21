const ImageKit = require('@imagekit/nodejs/index.js')

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(buffer) {
    // if (!Buffer.isBuffer(buffer)) {
    //     throw new Error('A valid file buffer is required for upload')
    // }

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg',
    })

    return result.url
}

module.exports = { imagekit, uploadFile }