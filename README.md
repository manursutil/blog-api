# Simple Blog API

Simple Blog REST API using node.js and express. Connected to MongoDB

## API Endpoints

- GET /blogs → List all blogs
- POST /blogs → Create a new blog
- PUT /blogs/:id → Update a blog
- DELETE /blogs/:id → Delete a blog

## How to Run

1. Clone the repo
2. Run `npm install`
3. Add a `.env` file with:

- MONGODB_URI=your_mongo_uri
- PORT=3000

4. Run `npm run dev`
