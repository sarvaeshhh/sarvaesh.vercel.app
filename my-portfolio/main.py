from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Example API endpoint
@app.get("/projects")
async def get_projects():
    return [
        {"title": "Project 1", "description": "A cool project", "link": "#"},
        {"title": "Project 2", "description": "Another cool project", "link": "#"},
    ]