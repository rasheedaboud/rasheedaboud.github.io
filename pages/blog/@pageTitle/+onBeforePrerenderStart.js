export { onBeforePrerenderStart };
import { readBlogs } from "../../../types/AzureStorage";

async function onBeforePrerenderStart() {
  const movies = await readBlogs();
  const moviePageURLs = movies.map((blog) => "/blog/" + blog.title);
  return moviePageURLs;
}
