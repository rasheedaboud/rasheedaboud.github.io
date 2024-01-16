import "./Page.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { usePageContext } from "../../../renderer/usePageContext";
import { Blog } from "../../../types/Blog";
import { Pre } from "./Pre";
import { BlogDetailsMobile } from "./BlogDetails";

export { Page };
function Page() {
  const pageContext = usePageContext();
  const data = pageContext.pageProps?.blog as Blog;

  // useEffect(() => {
  //   document.title = data?.title ?? "Rasheed Aboud";
  //   const description = document.getElementsByName("description")[0];
  //   description.setAttribute(
  //     "content",
  //     data?.description ?? "Welcome to my personal site."
  //   );
  // });

  return (
    <div className='min-h-svh sm:px-10 md:px-24 lg:px-48'>
      <article>
        <div style={{ minWidth: "100% !important" }} className='prose'>
          {data ? (
            <>
              <h1 className='text-2xl font-black text-pretty uppercase my-5 text-center'>
                {data.title}
              </h1>
              <BlogDetailsMobile {...data} />
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  pre: Pre as any,
                  code(props) {
                    // eslint-disable-next-line react/prop-types
                    const { children, className, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        PreTag='div'
                        style={vscDarkPlus}
                        language={match[1]}
                        showInlineLineNumbers={true}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {data.markdown}
              </Markdown>
              <div className='my-5 py-5'>
                <a className='btn btn-neutral' href='/blogs'>
                  Go Back
                </a>
              </div>
            </>
          ) : (
            <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
              <div className='border-t-transparent border-solid animate-spin  rounded-full border-black border-8 h-32 w-32'></div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
