export default onBeforeRender;

import type { PageContextClient } from "vike/types";
import { readBlog } from "../../../types/AzureStorage";

async function onBeforeRender(pageContext: PageContextClient) {
  console.log(pageContext.routeParams?.pageTitle);
  const blog = await readBlog(pageContext.routeParams?.pageTitle ?? "");

  return {
    pageContext: {
      pageProps: {
        blog,
      },
      documentProps: {
        title: blog?.title,
        description: blog?.description,
      },
    },
  };
}
