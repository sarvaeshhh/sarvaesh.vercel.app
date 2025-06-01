# Project Documentation

## Overview

This project is a personal portfolio website showcasing projects and skills. It is built using a modern web development stack, focusing on simplicity and ease of deployment.

## Technology Stack

-   **Backend:** FastAPI (Python) - A modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.
-   **Frontend:**
    -   HTML
    -   CSS
    -   JavaScript
-   **Deployment:** Designed for easy deployment on platforms like Vercel.
- **Virtual Environment**: venv

## Project Structure

-   `main.py`: The main application file containing the FastAPI server logic.
-   `requirements.txt`: Lists the Python dependencies for the project.
-   `static/`: Directory containing static assets.
    -   `index.html`: The main HTML file for the portfolio.
    -   `styles.css`: CSS file for styling the portfolio.
    -   `scripts.js`: JavaScript file for interactive elements (if any).
- `README.md`: Contains the setup and installation guide.

## Features

-   Displays a list of projects with titles, descriptions, and links. (Currently, the links are placeholders).
-   Serves static HTML, CSS, and JavaScript files.

## API Endpoints

-   `/`: Serves the main `index.html` page.
-   `/projects`: Returns a JSON array of project data.
- `/static`: Serves the static files

## Future Improvements

-   Add more detailed project information.
-   Implement dynamic content loading.
-   Potentially integrate a database for project management.