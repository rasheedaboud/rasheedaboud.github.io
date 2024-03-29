export { onBeforePrerenderStart };
import { readBlogs } from "../../../types/AzureStorage";

async function onBeforePrerenderStart() {
  const blogs = (await readBlogs()) ?? [];
  const blogPageURLs = blogs.map(
    (blog) => "/blog/" + blog.title.toLowerCase().replace(/\s/g, "-")
  );
  return blogPageURLs;
}
