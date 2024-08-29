import PostsFormatter from "./posts-formatter";

const temp = [
  {
    title: "Exploring the Streets of Tokyo",
    description:
      "A fantastic day wandering through Tokyo's vibrant neighborhoods. Don't miss the local markets and street food!",
    image_url: "placeholder.svg",
    upvotes: 102,
  },
  {
    title: "Breathtaking Views of the Grand Canyon",
    description:
      "The Grand Canyon offers some of the most stunning vistas in the world. A must-see for any nature lover!",
    image_url: "placeholder.svg",
    upvotes: 89,
  },
  {
    title: "A Hidden Gem in Paris",
    description:
      "Discover a lesser-known but beautiful park in Paris. Perfect for a peaceful afternoon away from the crowds.",
    image_url: "placeholder.svg",
    upvotes: 75,
  },
  {
    title: "Snorkeling in the Great Barrier Reef",
    description:
      "The Great Barrier Reef is a paradise for underwater exploration. Colorful fish and coral make it unforgettable.",
    image_url: "placeholder.svg",
    upvotes: 120,
  },
  {
    title: "Wanderlust in Rome",
    description:
      "Rome's ancient ruins and vibrant street life make it a city full of history and excitement.",
    image_url: "placeholder.svg",
    upvotes: 95,
  },
  {
    title: "The Magic of Kyoto's Temples",
    description:
      "Kyoto's temples offer a serene escape and stunning architecture. A truly magical experience!",
    image_url: "placeholder.svg",
    upvotes: 88,
  },
  {
    title: "A Culinary Adventure in Barcelona",
    description:
      "Barcelona's food scene is diverse and delicious. From tapas to seafood, there's something for everyone!",
    image_url: "placeholder.svg",
    upvotes: 103,
  },
  {
    title: "The Charm of Edinburgh",
    description:
      "Edinburgh's historic buildings and scenic views make it a charming destination for any traveler.",
    image_url: "placeholder.svg",
    upvotes: 67,
  },
  {
    title: "Safari in Kenya",
    description:
      "Experience the thrill of a safari and see the incredible wildlife of Kenya up close.",
    image_url: "placeholder.svg",
    upvotes: 110,
  },
  {
    title: "The Beauty of Iceland's Waterfalls",
    description:
      "Iceland is home to some of the most stunning waterfalls. A photographer's paradise!",
    image_url: "placeholder.svg",
    upvotes: 125,
  },
  {
    title: "Exploring New York's Hidden Spots",
    description:
      "Beyond the tourist hotspots, New York has countless hidden gems waiting to be discovered.",
    image_url: "placeholder.svg",
    upvotes: 82,
  },
  {
    title: "Relaxing in Bali's Beaches",
    description:
      "Bali's beaches offer the perfect escape for relaxation and water sports. A tropical paradise!",
    image_url: "placeholder.svg",
    upvotes: 90,
  },
  {
    title: "Historic Sites of Athens",
    description:
      "Athens is rich with history and ancient landmarks. A must-visit for history enthusiasts.",
    image_url: "placeholder.svg",
    upvotes: 76,
  },
  {
    title: "The Vibrant Culture of Mexico City",
    description:
      "Experience the vibrant culture, art, and cuisine of Mexico City. There's always something new to explore.",
    image_url: "placeholder.svg",
    upvotes: 98,
  },
  {
    title: "Scenic Train Ride in Switzerland",
    description:
      "Switzerland's train routes offer some of the most picturesque views in Europe. A scenic journey you won't forget.",
    image_url: "placeholder.svg",
    upvotes: 85,
  },
  {
    title: "Adventure in the Australian Outback",
    description:
      "The Australian Outback is full of adventure, from rugged landscapes to unique wildlife encounters.",
    image_url: "placeholder.svg",
    upvotes: 101,
  },
  {
    title: "Exploring Vancouver's Outdoors",
    description:
      "Vancouver offers beautiful outdoor activities, from hiking trails to scenic waterfronts.",
    image_url: "placeholder.svg",
    upvotes: 70,
  },
  {
    title: "Strolling Through Amsterdam's Canals",
    description:
      "Amsterdam's canals offer a picturesque and relaxing way to explore the city. Don’t miss a boat tour!",
    image_url: "placeholder.svg",
    upvotes: 80,
  },
  {
    title: "The Wonders of Dubai",
    description:
      "Dubai’s skyline and modern attractions are truly impressive. A blend of luxury and innovation.",
    image_url: "placeholder.svg",
    upvotes: 93,
  },
  {
    title: "A Trip to Santorini",
    description:
      "Santorini’s stunning sunsets and white-washed buildings make it a dream destination for many travelers.",
    image_url: "placeholder.svg",
    upvotes: 112,
  },
  {
    title: "Cultural Experience in Istanbul",
    description:
      "Istanbul is a city of rich history and vibrant culture. Explore its bazaars, mosques, and diverse neighborhoods.",
    image_url: "placeholder.svg",
    upvotes: 104,
  },
];

const recent = [
  {
    title: "Charming Streets of Lisbon",
    description:
      "Lisbon’s colorful streets and historic trams offer a unique European charm. Perfect for a leisurely stroll.",
    image_url: "placeholder.svg",
    upvotes: 78,
  },
  {
    title: "Magical Northern Lights in Norway",
    description:
      "Witness the breathtaking northern lights in Norway. A natural spectacle that’s truly unforgettable.",
    image_url: "placeholder.svg",
    upvotes: 135,
  },
  {
    title: "Exploring the Temples of Angkor Wat",
    description:
      "Angkor Wat in Cambodia is a vast temple complex with incredible historical and architectural significance.",
    image_url: "placeholder.svg",
    upvotes: 119,
  },
  {
    title: "Wonders of the Serengeti",
    description:
      "The Serengeti offers an unparalleled safari experience with abundant wildlife and stunning landscapes.",
    image_url: "placeholder.svg",
    upvotes: 127,
  },
  {
    title: "Historic Charm of Prague",
    description:
      "Prague's medieval architecture and charming streets make it a fairy-tale destination.",
    image_url: "placeholder.svg",
    upvotes: 82,
  },
  {
    title: "Adventure in New Zealand",
    description:
      "New Zealand's diverse landscapes provide endless opportunities for adventure and exploration.",
    image_url: "placeholder.svg",
    upvotes: 109,
  },
  {
    title: "Discovering Dubai’s Desert",
    description:
      "Experience the vast deserts of Dubai with thrilling dune bashing and camel rides.",
    image_url: "placeholder.svg",
    upvotes: 96,
  },
  {
    title: "The Allure of Buenos Aires",
    description:
      "Buenos Aires is known for its rich cultural scene and vibrant nightlife. A city full of passion and energy.",
    image_url: "placeholder.svg",
    upvotes: 74,
  },
  {
    title: "Exploring Cape Town’s Coastline",
    description:
      "Cape Town’s stunning coastline and beaches offer both relaxation and adventure. A picturesque destination.",
    image_url: "placeholder.svg",
    upvotes: 88,
  },
  {
    title: "A Stroll Through Vienna’s Gardens",
    description:
      "Vienna’s beautiful gardens and imperial palaces make it a perfect destination for a leisurely day out.",
    image_url: "placeholder.svg",
    upvotes: 77,
  },
  {
    title: "Skiing in the Swiss Alps",
    description:
      "The Swiss Alps provide world-class skiing and stunning winter landscapes for outdoor enthusiasts.",
    image_url: "placeholder.svg",
    upvotes: 111,
  },
  {
    title: "Historic Sights of Washington, D.C.",
    description:
      "Washington, D.C. is rich in American history with iconic landmarks and museums to explore.",
    image_url: "placeholder.svg",
    upvotes: 90,
  },
  {
    title: "Relaxing in the Maldives",
    description:
      "The Maldives offers pristine beaches and luxurious resorts, perfect for a relaxing getaway.",
    image_url: "placeholder.svg",
    upvotes: 120,
  },
  {
    title: "Exploring the Canadian Rockies",
    description:
      "The Canadian Rockies are known for their breathtaking natural beauty and outdoor activities.",
    image_url: "placeholder.svg",
    upvotes: 97,
  },
  {
    title: "Cultural Richness of Marrakech",
    description:
      "Marrakech’s vibrant markets and historic palaces offer a deep dive into Moroccan culture.",
    image_url: "placeholder.svg",
    upvotes: 84,
  },
  {
    title: "A Culinary Journey in Rome",
    description:
      "Rome’s food scene is full of delicious Italian dishes and local specialties. A treat for food lovers.",
    image_url: "placeholder.svg",
    upvotes: 105,
  },
  {
    title: "Sunset Views in Santorini",
    description:
      "Santorini’s sunsets are legendary, offering spectacular views over the caldera.",
    image_url: "placeholder.svg",
    upvotes: 130,
  },
  {
    title: "Exploring South Africa’s Wine Country",
    description:
      "South Africa’s wine regions offer beautiful scenery and world-class wines. A perfect destination for wine enthusiasts.",
    image_url: "placeholder.svg",
    upvotes: 83,
  },
  {
    title: "The Beauty of Kyoto’s Cherry Blossoms",
    description:
      "Kyoto’s cherry blossoms create a stunning display of pink and white. A must-see in springtime.",
    image_url: "placeholder.svg",
    upvotes: 101,
  },
  {
    title: "Vibrant Nightlife in Bangkok",
    description:
      "Bangkok’s nightlife is energetic and diverse, with countless bars, clubs, and street food vendors.",
    image_url: "placeholder.svg",
    upvotes: 92,
  },
  {
    title: "Ancient Wonders of Petra",
    description:
      "Petra in Jordan is a marvel of ancient architecture and a breathtaking historical site.",
    image_url: "placeholder.svg",
    upvotes: 126,
  },
];

const HomepageCards = async ({ config }: { config: string }) => {
  return (
    <main className={`${config} w-full`}>
      <div role="tablist" className="tabs tabs-lifted w-full">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Popular"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-2"
        >
          <p className="py-2 text-xl">Posts sorted by popularity</p>
          <PostsFormatter data={temp} />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Recent"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-2"
        >
          <p className="py-2 text-xl">Posts sorted by time</p>
          <PostsFormatter data={recent} />
        </div>

        {/* <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Journals"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div> */}
      </div>
    </main>
  );
};

export default HomepageCards;
