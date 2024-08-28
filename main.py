from fastapi import FastAPI
from src.tourist import Locations
app = FastAPI()

@app.get("/")
def welocme():
    return (
        {
            "message": "Hello world"
        }
    )


@app.get("/{city}")
def getLocationsCity(city: str):
    data = Locations(city).contentFetcher()
    return data

@app.get("/places/{path:path}")
def locationInfo(path: str):
    data = Locations("dummy city").placesInfo(path)
    return data