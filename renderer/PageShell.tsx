import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "vike/types";
import "./PageShell.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen'>
      <NavBar />
      <div className='container mx-auto px-4 py-1'>{children}</div>
      <Footer />
    </main>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
