import { useTableStorage } from "./useTableStorage";
import "./Page.css";
import { useEffect, useState } from "react";
import { Blog } from "../../types/Blog";

export { Page };

function Page() {
  const blogs = useTableStorage();

  const [data, setData] = useState(blogs);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setData(blogs);
  }, [blogs]);

  const handleSearch = (evt: React.FocusEvent<HTMLInputElement, Element>) => {
    evt.preventDefault();
    const value = evt.target.value;
    const data = blogs?.filter((blog) =>
      blog.title.toUpperCase().includes(value.toLocaleUpperCase().trim())
    );
    if (data) {
      setData(data);
    }
  };

  const handleTagClick = (tag: string) => {
    const data = blogs?.filter((blog) =>
      blog.tags.toUpperCase().includes(tag.toLocaleUpperCase().trim())
    );
    if (data) {
      const filterTags = new Set(tags).add(tag);
      setTags([...filterTags]);
      setData(data);
    }
  };
  const removeTag = (tag: string) => {
    const filter = tags.filter((curr) => curr !== tag);
    setTags(filter);
  };

  useEffect(() => {
    let result: Set<Blog> = new Set();
    for (let index = 0; index < tags.length; index++) {
      const tag = tags[index];
      const data = blogs?.filter((blog) =>
        blog.tags.toUpperCase().includes(tag.toLocaleUpperCase().trim())
      );
      if (data) {
        data.map((blog) => result.add(blog));
      }
    }
    if ([...result].length >= 1) {
      setData([...result]);
    } else {
      setData(blogs);
    }
  }, [tags]);

  return (
    <>
      {data ? (
        <div className='mb-3 mt-10'>
          <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
            <input
              type='search'
              className='relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='button-addon1'
              onChange={handleSearch}
            />

            <button
              className='relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
              type='button'
              id='button-addon1'
              data-te-ripple-init
              data-te-ripple-color='light'
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
        <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
          <div className='border-t-transparent border-solid animate-spin  rounded-full border-black border-8 h-32 w-32'></div>
        </div>
      )}

      <section>
        <div style={{ minWidth: "100% !important" }} className='prose'>
          {data
            ? data.map((blog) => {
                return (
                  <div key={blog.title}>
                    <div className=' sm:hidden card grid-rows-3 grid-flow-col bg-base-100 shadow-xl my-5'>
                      <figure className='max-w-xs px-3 py-2 min-w-xs'>
                        <img
                          style={{ maxWidth: "500px", maxHeight: "600px;" }}
                          src={blog.thumbnail}
                          alt='Movie'
                        />
                      </figure>
                      <div className='block px-5 py-5'>
                        {blog.tags.split(",").map((tag) => (
                          <div className='badge badge-primary badge-lg mx-1'>
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className='grid grid-rows-3 grid-flow-col px-5 py-1'>
                        <div className='avatar placeholder row-span-3'>
                          <div className='bg-neutral text-neutral-content rounded-full w-24'>
                            <span className='text-3xl'>RA</span>
                          </div>
                        </div>
                        <div className='font-bold uppercase'>{blog.author}</div>
                        <div className='uppercase'>{blog.readTime} read</div>
                        <div className='uppercase'>{blog.date}</div>
                      </div>
                      <div className='card-body  max-w-sm'>
                        <h2 className='card-title'>{blog.title}</h2>
                        <p className=''>{blog.description}</p>
                        <div className='card-actions justify-end'>
                          <a
                            href={`/blog/${blog.title}`}
                            className='btn btn-primary'
                          >
                            Read more -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='hidden sm:flex card card-side bg-base-100  shadow-xl my-5'>
                      <figure className='max-w-xs px-3 py-2 min-w-xs'>
                        <img
                          style={{ maxWidth: "500px", maxHeight: "600px;" }}
                          src={blog.thumbnail}
                          alt='Movie'
                        />
                      </figure>
                      <div className='card-body '>
                        <h2 className='card-title'>{blog.title}</h2>

                        <div className='grid grid-rows-3 grid-flow-col px-5 py-1'>
                          <div className='avatar w-16 h-16 placeholder row-span-3'>
                            <div className='bg-neutral text-neutral-content rounded-full w-24'>
                              <span className='text-3xl'>RA</span>
                            </div>
                          </div>
                          <div className='font-bold uppercase'>
                            {blog.author}
                          </div>
                          <div className='uppercase'>{blog.readTime} read</div>
                          <div className='uppercase'>{blog.date}</div>
                        </div>
                        <div className='block'>
                          {blog.tags.split(",").map((tag) => (
                            <button
                              className='badge badge-primary badge-lg mx-1'
                              onClick={() => handleTagClick(tag)}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                        <p className=''>{blog.description}</p>
                        <div className='card-actions justify-end'>
                          <a
                            href={`/blog/${blog.title}`}
                            className='btn btn-primary'
                          >
                            Read more -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </section>
    </>
  );
}
