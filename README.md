# Smart College Event Hub

🎓 **Smart College Event Hub** is a modern web application that helps manage and explore college events seamlessly. It offers a responsive interface, event dashboards, interactive features, and a chatbot for real-time assistance.

🔗 **Live Demo:** [https://smart-college-event-hub00.netlify.app/](https://smart-college-event-hub00.netlify.app/)

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Folder Structure](#folder-structure)  
- [Installation & Setup](#installation--setup)  
- [Running the Project](#running-the-project)  
- [Deployment](#deployment)  
- [Environment Variables](#environment-variables)  
- [Contributing](#contributing)  
- [License](#license)

---

## Project Overview

Smart College Event Hub provides an intuitive platform for students and event organizers to:

- Explore and register for college events
- Get real-time updates about ongoing events
- Interact with a chatbot for event-related queries
- Enjoy smooth animations and responsive design for a modern user experience

It’s a **frontend-focused project**, built with React and Tailwind CSS, and can be connected to a backend for storing event data, user info, and chat logs.

---

## Features

- **Event Dashboard**: Browse upcoming college events  
- **Interactive Chatbot**: Get instant help and suggestions  
- **Responsive UI**: Works on mobile, tablet, and desktop  
- **Smooth Animations**: Buttons, cards, and messages have hover/fade effects  
- **Custom Scrollbars**: Styled scrollbar for a modern look  
- **Hero Section**: Attractive gradient hero with background image  

---

## Tech Stack

- **Frontend**: React.js, Vite  
- **Styling**: Tailwind CSS  
- **Build Tool**: Vite  
- **Deployment**: Netlify (frontend)  
- **Backend (Optional)**: Railway or any Node.js backend  
- **Package Management**: npm  

---

## Folder Structure
smart-college-event-hub/
├── frontend/
│ ├── index.html # Main HTML file for development
│ ├── package.json # Frontend dependencies
│ ├── package-lock.json
│ ├── src/
│ │ ├── App.jsx # Root React component
│ │ ├── main.jsx # ReactDOM entry point
│ │ ├── components/ # Reusable React components
│ │ ├── styles.css # Global Tailwind CSS + custom styles
│ │ └── assets/ # Images, icons, and static files
│ └── vite.config.js # Vite configuration
├── backend/ (optional)
│ ├── server.js # Node.js/Express backend server
│ ├── routes/ # API routes
│ └── models/ # Database models (MongoDB or SQL)
└── README.md



**Note:** The `dist/` folder is generated after `npm run build` and contains the production-ready frontend.

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/tejasjundre/smart-college-event-hub.git
cd smart-college-event-hub/frontend


Install frontend dependencies:

npm install


Start the development server:

npm run dev


Visit http://localhost:5173
 to view the app locally.

Running the Project

Development Mode: npm run dev

Build for Production: npm run build

Preview Production Build: npm run preview

Make sure your backend (if any) is running on the correct port and VITE_API_URL is set in .env.

Deployment

Frontend is deployed on Netlify: https://smart-college-event-hub00.netlify.app/

Backend (optional) can be deployed on Railway, Render, or Heroku.

Steps for Netlify Deployment:

Connect your GitHub repository to Netlify

Set frontend/dist as the publish directory

Trigger deployment

Environment Variables

Create a .env file in the frontend/ folder for any environment variables:

VITE_API_URL=https://your-backend-api-url


For backend deployment on Railway, specify the port your server listens on and any DB credentials.

Contributing

We welcome contributions to improve this project:

Fork the repository

Create a new branch: git checkout -b feature-name

Make your changes

Commit changes: git commit -m "Add feature"

Push: git push origin feature-name

Open a Pull Request

License

This project is licensed under the MIT License. See the LICENSE
 file for details.

✅ Developer Notes

Ensure node_modules are installed before starting the server.

Vite uses localhost:5173 by default; change with --host if needed.

Tailwind classes are in styles.css; customize animations and layouts there.

For production, always build (npm run build) before deploying.

