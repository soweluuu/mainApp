const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=4da6325d0bf54712a8e72cc86ae0816d";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
