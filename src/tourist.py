from bs4 import BeautifulSoup
import requests
import re

class Locations:
  def __init__(self, city: str) -> None:
    self.city = city
    self.url = f"https://www.holidify.com/places/{city}/sightseeing-and-things-to-do.html"
    self.distance_check = r'\d+ km\s*from city center'
    self.rankings_check = r'\d+\s+out\s+of\s+\d+\s*Places\s+To\s+Visit\s+in\s+Goa'
    self.failed_message = {
      "message": "request failed",
    }
    self.info_url = "https://www.holidify.com/places/{0}"

  def makeRequest(self, url: str):
    print(url)
    response = requests.get(url)
    statusCode = response.status_code

    if statusCode != 200:
      return False
    return response.content
  
  def contentFetcher(self):
    try:
      response = self.makeRequest(self.url)
      if response is False:
        return self.failed_message

      print(f"Fetching information for city {self.city}")
      soup =  BeautifulSoup(response, "html.parser")

      cardsSelector = soup.select("#attractionList > div > div.card")
      content = []

      for card in cardsSelector:
          tempContent = {}
          tempContent["name"] = card.find("h3", class_="card-heading").get_text().split(".")[1].strip()
          try:
              tempContent["image"] = card.find("div" ,class_="position-relative").find("div", class_="collection-scrollable").find("img").get("data-original")
          except Exception as e:
              tempContent["image"] = ""
          tempContent["description"] = card.select_one("div.card-body > p.card-text").get_text()
          otherInfo = card.select_one("div.card-body > p.objective").find_all("span")
          for i in otherInfo:
            tempText = i.get_text().strip()
            if re.search(self.distance_check, tempText):
              tempContent["distance"] = tempText.split(" ")[0]
            elif re.search(self.rankings_check, tempText):
              tempContent["rankings"] = tempText.split(" ")[0]

          tempContent["id"] = card.find("a").get("href").split("/", 4)[-1]
            
          content.append(tempContent)
      return content
    except Exception as e:
      return self.failed_message

  def placesInfo(self, id:str):
    try:
      content = self.makeRequest(self.info_url.format(id))
      if content is False:
        return self.failed_message
      
      soup = BeautifulSoup(content, "html.parser")
      content = {}
      
      commonCss = "body > div.container > div > div.col-lg-8.pr-lg-2 > div.row.no-gutters.destination-atf.negative-margin-mobile > div.col-12.atf-details"
      content["title"] = soup.select_one(f"{commonCss} > h1").get_text()
      content["rankings"] = soup.select_one(f"{commonCss} > div > div.col-12.row.attraction-atf.font-smaller.align-items-center > div.col-12.d-md-flex.align-items-center.mb-3.col-md-6 > span.mr-2.rank > b").get_text().strip()
      content["vote_average"] = soup.select_one(f"{commonCss} > div > div.col-12.row.attraction-atf.font-smaller.align-items-center > div:nth-child(3) > div > div.text-center > span.rating-badge > b").get_text()
      content["total_votes"] = soup.select_one(f"{commonCss} > div > div.col-12.row.attraction-atf.font-smaller.align-items-center > div:nth-child(3) > div > div.text-center > span.text-muted.num-reviews").get_text().removeprefix("(").removesuffix(")")
      content["description"] = soup.find("div", class_="readMoreText compact").get_text().replace("\xa0", "").replace("Read More", "").strip().replace("\n", "")
      content["price"] = soup.select_one("body > div.container > div > div.col-lg-8.pr-lg-2 > div.row.no-gutters.destination-atf.negative-margin-mobile > div.col-12.atf-details > div > div.col-12.mb-2.text-center-mobile > p > span").get_text()

      return content
    except Exception as e:
      print(e)
      return self.failed_message
    
# l = Locations("goa").placesInfo("goa/calangute-beach-sightseeing-6227.html")
# print(l)
