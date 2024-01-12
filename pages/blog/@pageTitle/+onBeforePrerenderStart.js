export { onBeforePrerenderStart };
import { readBlogs } from "../../../types/AzureStorage";

function canonicalize(input: string): string {
  if(!input) return '';
  return input.toLowerCase().replace(/\s/g, '-');
}

async function onBeforePrerenderStart() {
  const blogs = await readBlogs();
  const blogPageURLs = blogs.map((blog) => "/blog/" + canonicalize(blog.title));
  return blogPageURLs;
}
