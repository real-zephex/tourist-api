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

temp_data = [
  {
    "title": "Exploring the Streets of Tokyo",
    "description": "A fantastic day wandering through Tokyo's vibrant neighborhoods. Don't miss the local markets and street food!",
    "image_url": "placeholder.svg",
    "upvotes": 102
  },
  {
    "title": "Breathtaking Views of the Grand Canyon",
    "description": "The Grand Canyon offers some of the most stunning vistas in the world. A must-see for any nature lover!",
    "image_url": "placeholder.svg",
    "upvotes": 89
  },
  {
    "title": "A Hidden Gem in Paris",
    "description": "Discover a lesser-known but beautiful park in Paris. Perfect for a peaceful afternoon away from the crowds.",
    "image_url": "placeholder.svg",
    "upvotes": 75
  },
  {
    "title": "Snorkeling in the Great Barrier Reef",
    "description": "The Great Barrier Reef is a paradise for underwater exploration. Colorful fish and coral make it unforgettable.",
    "image_url": "placeholder.svg",
    "upvotes": 120
  },
  {
    "title": "Wanderlust in Rome",
    "description": "Rome's ancient ruins and vibrant street life make it a city full of history and excitement.",
    "image_url": "placeholder.svg",
    "upvotes": 95
  },
  {
    "title": "The Magic of Kyoto's Temples",
    "description": "Kyoto's temples offer a serene escape and stunning architecture. A truly magical experience!",
    "image_url": "placeholder.svg",
    "upvotes": 88
  },
  {
    "title": "A Culinary Adventure in Barcelona",
    "description": "Barcelona's food scene is diverse and delicious. From tapas to seafood, there's something for everyone!",
    "image_url": "placeholder.svg",
    "upvotes": 103
  },
  {
    "title": "The Charm of Edinburgh",
    "description": "Edinburgh's historic buildings and scenic views make it a charming destination for any traveler.",
    "image_url": "placeholder.svg",
    "upvotes": 67
  },
  {
    "title": "Safari in Kenya",
    "description": "Experience the thrill of a safari and see the incredible wildlife of Kenya up close.",
    "image_url": "placeholder.svg",
    "upvotes": 110
  },
  {
    "title": "The Beauty of Iceland's Waterfalls",
    "description": "Iceland is home to some of the most stunning waterfalls. A photographer's paradise!",
    "image_url": "placeholder.svg",
    "upvotes": 125
  },
  {
    "title": "Exploring New York's Hidden Spots",
    "description": "Beyond the tourist hotspots, New York has countless hidden gems waiting to be discovered.",
    "image_url": "placeholder.svg",
    "upvotes": 82
  },
  {
    "title": "Relaxing in Bali's Beaches",
    "description": "Bali's beaches offer the perfect escape for relaxation and water sports. A tropical paradise!",
    "image_url": "placeholder.svg",
    "upvotes": 90
  },
  {
    "title": "Historic Sites of Athens",
    "description": "Athens is rich with history and ancient landmarks. A must-visit for history enthusiasts.",
    "image_url": "placeholder.svg",
    "upvotes": 76
  },
  {
    "title": "The Vibrant Culture of Mexico City",
    "description": "Experience the vibrant culture, art, and cuisine of Mexico City. There's always something new to explore.",
    "image_url": "placeholder.svg",
    "upvotes": 98
  },
  {
    "title": "Scenic Train Ride in Switzerland",
    "description": "Switzerland's train routes offer some of the most picturesque views in Europe. A scenic journey you won't forget.",
    "image_url": "placeholder.svg",
    "upvotes": 85
  },
  {
    "title": "Adventure in the Australian Outback",
    "description": "The Australian Outback is full of adventure, from rugged landscapes to unique wildlife encounters.",
    "image_url": "placeholder.svg",
    "upvotes": 101
  },
  {
    "title": "Exploring Vancouver's Outdoors",
    "description": "Vancouver offers beautiful outdoor activities, from hiking trails to scenic waterfronts.",
    "image_url": "placeholder.svg",
    "upvotes": 70
  },
  {
    "title": "Strolling Through Amsterdam's Canals",
    "description": "Amsterdam's canals offer a picturesque and relaxing way to explore the city. Don’t miss a boat tour!",
    "image_url": "placeholder.svg",
    "upvotes": 80
  },
  {
    "title": "The Wonders of Dubai",
    "description": "Dubai’s skyline and modern attractions are truly impressive. A blend of luxury and innovation.",
    "image_url": "placeholder.svg",
    "upvotes": 93
  },
  {
    "title": "A Trip to Santorini",
    "description": "Santorini’s stunning sunsets and white-washed buildings make it a dream destination for many travelers.",
    "image_url": "placeholder.svg",
    "upvotes": 112
  },
  {
    "title": "Cultural Experience in Istanbul",
    "description": "Istanbul is a city of rich history and vibrant culture. Explore its bazaars, mosques, and diverse neighborhoods.",
    "image_url": "placeholder.svg",
    "upvotes": 104
  }
]


@app.get("/{city}")
def getLocationsCity(city: str):
    data = Locations(city).contentFetcher()
    return data

@app.get("/places/{path:path}")
def locationInfo(path: str):
    data = Locations("dummy city").placesInfo(path)
    return data

@app.get("/data/temp")
def tempData():
    return temp_data