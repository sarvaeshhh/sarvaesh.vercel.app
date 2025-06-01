# My Portfolio Website

This is a personal portfolio website to showcase my projects and skills.

## Features

*   Displays a list of projects.
*   Includes an "About Me" section.
*   Provides contact information.
*   Uses FastAPI for the backend API.
*   Features animations using GSAP.

## Technologies Used

*   **Backend:** Python, FastAPI
*   **Frontend:** HTML, CSS, JavaScript
*   **ASGI Server:** Uvicorn
*   **Animation Library:** GSAP

## Setup and Running Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repository-name.git
    cd my-portfolio
    ```
2.  **Create and activate a virtual environment (recommended):**
    ```bash
    python -m venv venv
    # On Windows
    venv\Scripts\activate
    # On macOS/Linux
    source venv/bin/activate
    ```
3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Run the application:**
    Navigate to the `my-portfolio` directory where `main.py` is located.
    ```bash
    uvicorn main:app --reload
    ```
5.  **Access the website:**
    Open your web browser and go to `http://127.0.0.1:8000/static/index.html`.

## Project Structure

```
my-portfolio/
├── main.py             # FastAPI application setup and API endpoints.
├── requirements.txt    # Python dependencies for the project.
├── static/             # Contains all static assets.
│   ├── index.html      # Main HTML file for the portfolio.
│   ├── styles.css      # CSS styles for the website.
│   └── scripts.js      # JavaScript for dynamic content and animations.
└── README.md           # This file.
```
