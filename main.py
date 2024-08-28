from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def welocme():
    return (
        {
            "message": "Hello world"
        }
    )

