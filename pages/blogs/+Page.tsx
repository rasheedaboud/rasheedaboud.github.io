import "./Page.css";
import { useEffect, useMemo, useState } from "react";
import { Blog } from "../../types/Blog";
import { BlogCard } from "./BlogCard";
import { usePageContext } from "../../renderer/usePageContext";
export { Page };

const filterByTag = (tag: string, blogs: Blog[] | undefined) => {
  if (!blogs) return [];
  return blogs
    .filter((blog) =>
      blog.tags.toUpperCase().includes(tag.toLocaleUpperCase().trim())
    )
    .flatMap((item) => item);
};

const filterByTitle = (title: string, blogs: Blog[] | undefined) => {
  if (!blogs) return [];
  return blogs?.filter((blog) =>
    blog.title.toUpperCase().includes(title.toLocaleUpperCase().trim())
  );
};

function Page() {
  const pageContext = usePageContext();

  const blogs = useMemo(
    () => (pageContext.pageProps?.blogs as unknown as Blog[]) ?? [],
    []
  );

  const [data, setData] = useState(blogs);
  const [tags, setTags] = useState<string[]>();
  const [title, setTitle] = useState("");

  const handleSearch = (evt: React.FocusEvent<HTMLInputElement, Element>) => {
    evt.preventDefault();
    const value = evt.target.value;
    setTitle(value);
  };

  const handleTagClick = (tag: string) => {
    setTags([...new Set(tags).add(tag)]);
  };
  const removeTag = (tag: string) => {
    const filter = tags?.filter((curr) => curr !== tag);
    setTags(filter);
  };

  useEffect(() => {
    const result: Set<Blog> = new Set();

    tags?.map((tag) => {
      filterByTag(tag, blogs).map((blog) => result.add(blog));
    });

    if (title === "" && result.size > 0) setData([...result]);
    else if (title === "" && result.size <= 0) setData(blogs);
    else if (result.size > 0 && title != "") {
      setData(filterByTitle(title, [...result]));
    } else {
      setData(filterByTitle(title, blogs));
    }
  }, [tags, title, blogs]);

  return (
    <div className='min-h-svh'>
      {data ? (
        <div className='mb-3 mt-10'>
          <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
            <input
              type='search'
              className='relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
              placeholder='Search'
              aria-label='Search'
              value={title}
              aria-describedby='button-addon1'
              onChange={handleSearch}
            />

            <button
              className='relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
              type='button'
              id='button-addon1'
              data-te-ripple-init
              data-te-ripple-color='light'
              onClick={() => setTitle("")}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div>
            {tags
              ? tags.map((tag) => {
                  return (
                    <button
                      key={tag}
                      className='badge badge-primary badge-lg mx-1'
                      onClick={() => removeTag(tag)}
                    >
                      {tag}
                      <i className='fa-solid fa-rectangle-xmark ms-3'></i>
                    </button>
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        <div className=' absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
          <div className='border-t-transparent border-solid animate-spin  rounded-full border-black border-8 h-32 w-32'></div>
        </div>
      )}

      <section>
        <div style={{ minWidth: "100% !important" }} className='prose'>
          {data
            ? data.map((blog) => {
                return (
                  <BlogCard
                    blog={blog}
                    key={blog.title}
                    handleTagClick={handleTagClick}
                  />
                );
              })
            : null}
        </div>
      </section>
    </div>
  );
}
