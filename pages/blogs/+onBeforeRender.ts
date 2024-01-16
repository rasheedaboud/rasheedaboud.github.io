export default onBeforeRender;

import type { PageContextClient } from "vike/types";
import { readBlogs } from "../../types/AzureStorage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function onBeforeRender(pageContext: PageContextClient) {
  const blogs = await readBlogs();

  return {
    pageContext: {
      pageProps: {
        blogs,
      },
      documentProps: {
        title: "Rasheed's Blog",
        description:
          "Discover a treasure trove of insightful blogs covering a range of topics, including F#, C#, TypeScript, React, ASP.NET Core, and Web APIs. Dive deep into the world of programming languages and web development, as I share my knowledge and experiences. Stay up-to-date with the latest developments and enhance your skills in these powerful technologies. Start exploring now and unleash your potential in the ever-evolving world of software development.",
      },
    },
  };
}
