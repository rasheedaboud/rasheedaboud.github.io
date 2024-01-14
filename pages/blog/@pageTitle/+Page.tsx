import { useBlobStorage } from "./useBlobStorage";
import "./Page.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { usePageContext } from "../../../renderer/usePageContext";
import { useEffect, useState } from "react";
import { Blog } from "../../../types/Blog";

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

export const Tag = ({ tag }: { tag: string }) => {
  return (
    <button
      key={tag}
      className='badge badge-primary badge-lg mx-1 text-sm sm:text-base'
    >
      {tag}
    </button>
  );
};

const BlogDetailsMobile = (blog: Blog) => {
  return (
    <div className='grid-rows-3 grid-flow-col'>
      <div className='flex justify-center items-center'>
        {" "}
        <figure className='max-w-xs px-3 py-2 min-w-xs '>
          <img
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            src={blog.thumbnail}
            alt='Movie'
          />
        </figure>
      </div>

      <div className='grid grid-rows-4 grid-flow-col gap-0 align-middle items-center sm:px-10'>
        <div className='avatar placeholder row-span-4 mx-auto'>
          <div className='bg-neutral text-neutral-content rounded-full w-24'>
            <span className='text-3xl'>RA</span>
          </div>
        </div>
        <div className='font-bold uppercase mx-5 sm:mx-0'>{blog.author}</div>
        <div className='uppercase mx-5 lg:mx-0'>{blog.readTime} read</div>
        <div className='uppercase mx-5 lg:mx-0'>{blog.date}</div>
        <div className='hidden md:block mx-5 lg:mx-0'>
          {blog.tags.split(",").map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Page };
function Page() {
  const pageContext = usePageContext();
  const title = pageContext.routeParams?.pageTitle;
  const data = useBlobStorage({ title: title });

  useEffect(() => {
    document.title = data?.title ?? "Rasheed Aboud";
    const description = document.getElementsByName("description")[0];
    description.setAttribute(
      "content",
      data?.description ?? "Welcome to my personal site."
    );
  });

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
