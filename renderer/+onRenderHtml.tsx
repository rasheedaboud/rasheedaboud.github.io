// https://vike.dev/onRenderHtml
export { onRenderHtml };

import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import logoUrl from "./favicon.ico";
import type { OnRenderHtmlAsync, PageContextServer } from "vike/types";

const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext: PageContextServer
): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext;
  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vike.dev/head
  const documentProps = pageContext.documentProps;
  console.log(JSON.stringify(pageContext?.documentProps));
  const title = (documentProps && documentProps.title) || "Rasheed Aboud";
  const desc =
    (documentProps && documentProps.description) ||
    "Hey there! 👋 I'm Rasheed, an experienced developer with a passion for creating innovative solutions.  With a strong background in F#, C#, JavaScript (TypeScript), and more, I bring a wealth of knowledge to the table.";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html data-theme="light" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="google-site-verification" content="tasigl22802n6H-QTcOM1o96ZEKow4vzIU36DCZwO4g" />
        <meta http-equiv='cache-control' content='no-cache'> 
        <meta http-equiv='expires' content='0'> 
        <meta http-equiv='pragma' content='no-cache'>
        <link rel="icon" href="${logoUrl}" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
};
