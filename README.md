![thumbnail](/frontend/public/thumbnail.png)

<div align="center">
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb">
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="expressjs">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs">
    <img src="https://img.shields.io/badge/inngest-white?style=for-the-badge&logoColor=white&color=black" alt="Inngest">
    <img src="https://img.shields.io/badge/Stream-white?style=for-the-badge&logoColor=white&color=blue" alt="Stream">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
    <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI">
</div>

<h1 align="center">Zilean - A Coding Interview Platform</h1>

### Features:

- Authentication via Clerk
- 1-on-1 video interview rooms, mic & camera toggle, screen sharing & recording, secure code execution in isolated environment, real-time chat messaging
- Dashboard with live stats
- Practice problems page (solo coding mode), room locking - allows only 2 participants
- Background jobs with Inngest (async tasks)
- REST API with Node.js & Express
- Data fetching & caching via TanStack Query
- Monaco-editor and Piston for web editor

## Setup

Clone these step to install and set up the project.
```bash
git clone https://github.com/conbopk/Zilean.git
cd Zilean
```

### Backend

1. Create file .env follow .env.example in **/backend**
```bash
# Dev env
PORT=<your-port>
NODE_ENV=development

# Client
CLIENT_URL=http://localhost:5173

# Clerk
CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
CLERK_WEBHOOK_SECRET=<your-webhook-secret-from-Clerk>

# MongoDB
DATABASE_URL=<your-mongodb-database-url>

# Sevalla
NIXPACKS_NODE_VERSION=22

# Inngest
INNGEST_SIGNING_KEY=<your-inngest-key>
INNGEST_EVENT_KEY=<your-event-key>

# Stream
STREAM_API_KEY=<your-stream-api-key>
STREAM_SECRET_KEY=<your-stream-secret-key>
```

For dev environment, you need expose port to the internet by **[Ngrok](https://ngrok.com/)**, follow their docs to install and setup Ngrok on local.
Then register your Clerk Webhook using the URL from Ngrok.

2. Run backend server
```bash
cd backend
npm install
npm run dev 
```

### Frontend

1. Create file .env follow .env.example in **/frontend**
```bash
# Clerk
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>

# BACKEND API URL
VITE_API_URL=<http://localhost:3000/api>

# PISTON API
VITE_PISTON_API=https://emkc.org/api/v2/piston

# STREAM API
VITE_STREAM_API_KEY=<your-stream-api-key>
```

2. Run the frontend
```bash
cd frontend
npm install
npm run dev 
```

Now you can see frontend run on [http://localhost:5173](localhost)
and backend run on [http://localhost:3000](localhost)

You can interact through the UI to test great features from the project.