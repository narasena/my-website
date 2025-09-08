# Personal Portfolio & Blog Website

> A personal website showcasing a portfolio of coding projects and a blog covering hobbies: RPG games, high fantasy novels, cooking, and coding. Built with Next.js (frontend), Gin (backend), MongoDB (database), and supporting GraphQL (or REST) and OAuth for authentication.

## Project Structure

This project uses a monorepo with separate frontend/ and backend/ directories:

**frontend/**: Next.js (TypeScript) for the portfolio, blog, and hobby pages (RPG, recipes, coding).  
**backend/**: Gin (Go) for the API, handling portfolio projects, blog posts, and user authentication.  
**docs/**: Additional documentation (if needed).

## Features

***Portfolio***: Showcase professional coding projects with details (title, description, tech stack, links).  
***Blog***: Share posts on RPG games, high fantasy novels, cooking recipes, and coding tutorials.  
***Authentication***: OAuth login (e.g., GitHub) via NextAuth.js (frontend) and goth (backend).  
***Interactive Features***: RPG character builder, recipe cards, and code editor (using CodeMirror).  
***Database***: MongoDB for flexible storage of portfolio projects, blog posts, and user data.  
***API***: GraphQL (via gqlgen) or REST, served by Gin.  

## Tech Stack

***Frontend***: Next.js (App Router), TypeScript, React Query, NextAuth.js, Tailwind CSS, Shadcn/UI, CodeMirror.  
***Backend***: Gin, Go, mongo-go-driver, gqlgen (GraphQL), goth (OAuth), validator.  
***Database***: MongoDB (Atlas recommended).  
***Deployment***: Vercel (frontend), Render/Fly.io (backend).  
***Optional***: Cloudinary for image hosting.  

## Prerequisites

**Node.js**: v18 or later (for frontend).  
**Go**: v1.20 or later (for backend).  
**MongoDB**: Local instance or MongoDB Atlas account.  
**Git**: For version control.  
**OAuth Credentials**: Client ID and secret (e.g., GitHub) for authentication.  

## Setup

Clone the Repository:

```bash
git clone <repository-url>
cd my-website
```

### Frontend Setup (frontend/)

```bash
cd frontend
npm install
cp .env.example .env.local
```

Edit `.env.local` with:

```text
NEXT_PUBLIC_API_URL: Backend API URL (e.g., http://localhost:8080).
NEXTAUTH_URL: Frontend URL (e.g., http://localhost:3000).
NEXTAUTH_SECRET: Random string for NextAuth.js.
GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET: OAuth credentials.
```

### Backend Setup (backend/)

```bash
cd backend
go mod tidy
cp .env.example .env
```

Edit .env with:

```text
MONGODB_URI: MongoDB connection string (e.g., mongodb://localhost:27017/yourdb).
PORT: API port (e.g., 8080).
GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET: OAuth credentials.
```

### MongoDB Setup

Use MongoDB Atlas or a local instance.
Create collections: portfolio, posts, rpg, recipes, coding, users.

## Development

Run Frontend:

```bash
cd frontend
npm run dev
```

Open `http://localhost:3000` for the Next.js app.

Run Backend:

```bash
cd backend
go run cmd/main.go
```

API available at `http://localhost:8080` (or configured port).
GraphQL endpoint (if used): `http://localhost:8080/graphql`.

## Testing

***Frontend***: Add Jest/Testing Library (npm test).  
***Backend***: Run Go tests (`go test ./...`).  

## Deployment

### Frontend (Vercel)

Push to a GitHub repository.
Connect to Vercel, set environment variables (from .env.local).
Deploy with `vercel --prod`.

### Backend (Render/Fly.io)

Deploy to Render or Fly.io.
Set environment variables (from .env).
Ensure MongoDB Atlas is accessible.

### Domain

Register a domain (e.g., EpicCodeCraft.com) via Namecheap/GoDaddy.
Configure DNS to point to Vercel (frontend) and Render/Fly.io (backend).

## Folder Structure

```text
my-website/
├── frontend/               # Next.js frontend
│   ├── app/                # Pages (portfolio, blog, rpg, recipes, coding)
│   ├── components/         # React components
│   ├── lib/                # API clients, auth, queries
│   ├── types/              # TypeScript types
│   └── public/             # Static assets
├── backend/                # Gin backend
│   ├── api/                # Handlers, GraphQL
│   ├── models/             # Data models
│   ├── db/                 # MongoDB queries
│   ├── utils/              # Utilities (validator, OAuth)
│   └── cmd/                # Main server
├── docs/                   # Additional documentation
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variable template
└── README.md               # This file
```

## Contributing

Fork the repository.  
Create a feature branch (`git checkout -b feature/branch-name`).  
Commit changes (`git commit -m "Add feature"`).  
Push to the branch (`git push origin feature/branch-name`).  
Open a pull request.  

## License

MIT License. See LICENSE for details.
