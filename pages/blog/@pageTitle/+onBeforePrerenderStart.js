export { onBeforePrerenderStart };
import { readBlogs } from "../../../types/AzureStorage";

async function onBeforePrerenderStart() {
  const movies = await readBlogs();
  const moviePageURLs = movies.map((movie) => "/blog/" + movie.title);
  return moviePageURLs;
}
