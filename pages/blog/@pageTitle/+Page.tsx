import { useBlobStorage } from "./useBlobStorage";
import "./Page.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { usePageContext } from "../../../renderer/usePageContext";

export { Page };
function Page() {
  const pageContext = usePageContext();
  const title = pageContext.routeParams?.pageTitle;

  const data = useBlobStorage({ title: title });
  return (
    <>
      <section>
        <div style={{ minWidth: "100% !important" }} className='prose'>
          {data ? (
            <>
              <h1 className='text-2xl font-black text-pretty uppercase my-5'>
                {data.title}
              </h1>
              <Markdown
                children={data.markdown}
                remarkPlugins={[remarkGfm]}
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        PreTag='div'
                        children={String(children).replace(/\n$/, "")}
                        language={match[1]}
                        showInlineLineNumbers={true}
                      />
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
