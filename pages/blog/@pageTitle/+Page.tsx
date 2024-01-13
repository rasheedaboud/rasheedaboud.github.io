import { useBlobStorage } from "./useBlobStorage";
import "./Page.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { usePageContext } from "../../../renderer/usePageContext";
import { useState } from "react";

const CodeCopyBtn = ({ children }: { children: React.ReactElement }) => {
  const [copyOk, setCopyOk] = useState(false);
  const icon = copyOk ? "fa-square-check" : "fa-copy";
  const copy = copyOk ? "Copied" : "Copy";
  const handleClick = () => {
    navigator.clipboard.writeText(children?.props?.children);

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div className='absolute -top-1  right-7 h-10 w-10 m-5'>
      <button className={"btn btn-xs btn-active"} onClick={handleClick}>
        <span className=''>
          <i className={`fa-solid ${icon}`}> {copy}</i>
        </span>
      </button>
    </div>
  );
};

const Pre = ({ children }: { children: any }) => (
  <pre className='mb-3 relative box-shadow shadow-2xl'>
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);
export { Page };
function Page() {
  const pageContext = usePageContext();
  const title = pageContext.routeParams?.pageTitle;

  const data = useBlobStorage({ title: title });
  return (
    <>
      <article>
        <div style={{ minWidth: "100% !important" }} className='prose'>
          {data ? (
            <>
              <h1 className='text-2xl font-black text-pretty uppercase my-5'>
                {data.title}
              </h1>
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre: Pre,
                  code(props) {
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
          ) : null}
        </div>
      </article>
      {""}
    </>
  );
}
