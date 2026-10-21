# Image Sharing App

A full-stack web app where users can create image posts with captions and view them in a feed.

## Features

- Create a post by selecting an image and entering a caption.
- Upload images to ImageKit and store the resulting image URL with the caption in MongoDB.
- Fetch and display posts in the feed.
- Navigate between the Create Post and Feed pages.
- Use a responsive layout for the post form and feed.

## Tech Stack

- **Frontend:** React, React Router, Axios, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Image storage:** ImageKit
- **File handling:** Multer with in-memory storage

## How it works

1. The React form sends the selected image and caption to the backend's `POST /create-post` endpoint.
2. Express and Multer receive the image; the backend uploads it to ImageKit.
3. MongoDB stores the ImageKit image URL and caption as a post.
4. The Feed page requests posts from `GET /posts` and displays them.

## Environment Variables

Configure these in the backend environment. Do not commit secret values:

- `MONGODB_URI`
- `IMAGEKIT_PRIVATE_KEY`

## Run Locally

Start the backend on port `8000`, then start the frontend using its Vite development server.
