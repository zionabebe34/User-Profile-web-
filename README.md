# User Profile Website

## Description
This project is a homework assignment that fetches user data from a public API and displays it in a clean profile page. The app shows the user's name, avatar, email, bio, and a list of their posts — all rendered dynamically in the browser.

## Technologies
- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, JavaScript
- **APIs:**
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com) — fake user and post data
  - [DiceBear](https://www.dicebear.com) — cartoon avatar illustrations

## Features
- Insert Member's ID (number between 1–10)
- Displays user profile: name, picture, email, and bio
- Lists the user's posts
- Data is fetched from a free public REST API

## Installation
```bash
# Navigate to the backend directory
cd ./backend

# Make the server script executable
chmod +x run-server.sh

# Start the server
./run-server.sh

# Open your browser and navigate to:
http://127.0.0.1:5000
```

## Project Structure
```
user_profile-ZION-ABEBE/
├── backend/
│   ├── app.py              # Flask application & API routes
│   ├── requirements.txt    # Python dependencies
│   ├── run-server.sh       # Script to start the server
│   ├── static/             # Static files served by Flask
│   │   ├── index.html      # Main HTML page
│   │   ├── script.js       # Fetch & render user data
│   │   └── style.css       # Page styling
│   └── venv/               # Python virtual environment
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── script.js           # Fetch & render user data
│   └── style.css           # Page styling
└── README.md
```

## APIs
- **JSONPlaceholder**: Provides fake user and post data.
  - **User Profile Endpoint**: `https://jsonplaceholder.typicode.com/users/{user_id}`
    - Data fetched:
      - `name`: User's full name
      - `username`: User's username
      - `email`: User's email address
      - `bio`: User's company catchphrase (`company["catchPhrase"]`)
  - **User Posts Endpoint**: `https://jsonplaceholder.typicode.com/posts`
    - Query Parameter: `userId={user_id}`
    - Data fetched:
      - `title`: Title of the post
      - `body`: Content of the post

- **DiceBear**: Generates cartoon avatars.
  - **Avatar Endpoint**: `https://api.dicebear.com/9.x/big-smile/svg?seed={username}`
    - Data fetched:
      - `avatar`: A dynamically generated cartoon avatar based on the user's username.
