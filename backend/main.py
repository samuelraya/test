from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Sample API")
app.add_middleware(
    CORSMiddleware, allow_origins=["http://localhost:3000"], allow_methods=["*"], allow_headers=["*"]
)
items: list[dict] = []


class Item(BaseModel):
    name: str
    price: float


@app.get("/")
def root():
    return {"message": "Hello from FastAPI"}


@app.get("/items")
def list_items():
    return items


@app.post("/items")
def add_item(item: Item):
    items.append(item.model_dump())
    return item
