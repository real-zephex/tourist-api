from bs4 import BeautifulSoup
import requests

url = "https://www.holidify.com/places/chandigarh/sightseeing-and-things-to-do.html"
response = requests.get(url)

if response.status_code != 200:
    print("Request failed")

soup = BeautifulSoup(response.content, "html.parser")

cardsSelector = soup.select("#attractionList > div > div.card")
content = []

for card in cardsSelector:
    tempContent = {}
    tempContent["name"] = card.find("h3", class_="card-heading").get_text().split(".")[1].strip()
    try:
        tempContent["image"] = card.find("div" ,class_="position-relative").find("div", class_="collection-scrollable").find("img").get("data-original")
    except Exception as e:
        tempContent["image"] = ""

    content.append(tempContent)

print(content)