from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="my-portfolio/static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    with open("my-portfolio/static/index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content)


# Example API endpoint
@app.get("/projects")
async def get_projects():
    return [
        {"title": "Project 1", "description": "A cool project", "link": "#"},
        {"title": "Project 2", "description": "Another cool project", "link": "#"},
    ]