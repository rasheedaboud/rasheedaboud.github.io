import type { Config } from "vike/types";

// https://vike.dev/config
export default {
  /* To enable Client-side Routing:
  // !! WARNING !! Before doing so, read https://vike.dev/clientRouting */

  // See https://vike.dev/data-fetching
  //clientRouting: true,
  hydrationCanBeAborted: true,
  passToClient: ["pageProps", "urlPathname", "routeParams"],
} satisfies Config;
