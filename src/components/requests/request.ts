const url =
  "https://ominous-space-goldfish-979x54x469wg29p6j-8000.app.github.dev/data/temp";

interface Welcome {
  title: string;
  description: string;
  image_url: ImageURL;
  upvotes: number;
}

enum ImageURL {
  PlaceholderSVG = "placeholder.svg",
}

export const getData = async () => {
  const data: Welcome[] = await fetch(url, { next: { revalidate: 21600 } }).then(
    (response) => response.json()
  );
  return data;
};
