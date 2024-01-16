export type { PageProps };

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page;
      pageProps?: PageProps;
      urlPathname: string;
      documentProps?: DocumentProps;
    }
  }
}

type Page = (pageProps: PageProps) => React.ReactElement;
type DocumentProps = {
  title?: string;
  description?: string;
};
type PageProps = Record<string, unknown>;
