import { useTableStorage } from "./useTableStorage";
import "./Page.css";

export { Page };

function Page() {
  const data = useTableStorage();
  return (
    <>
      <section>
        <div style={{ minWidth: "100% !important" }} className='prose'>
          {data ? (
            data.map((blog) => {
              return (
                <>
                  <div className=' sm:hidden card grid-rows-3 grid-flow-col bg-base-100 shadow-xl my-5'>
                    <figure className='max-w-xs px-3 py-2 min-w-xs'>
                      <img src={blog.thumbnail} alt='Movie' />
                    </figure>
                    <div className='block px-5 py-5'>
                      {blog.tags.split(",").map((tag) => (
                        <div className='badge badge-primary mx-1'>{tag}</div>
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
                      <img src={blog.thumbnail} alt='Movie' />
                    </figure>
                    <div className='card-body '>
                      <h2 className='card-title'>{blog.title}</h2>

                      <div className='grid grid-rows-3 grid-flow-col px-5 py-1'>
                        <div className='avatar w-16 h-16 placeholder row-span-3'>
                          <div className='bg-neutral text-neutral-content rounded-full w-24'>
                            <span className='text-3xl'>RA</span>
                          </div>
                        </div>
                        <div className='font-bold uppercase'>{blog.author}</div>
                        <div className='uppercase'>{blog.readTime} read</div>
                        <div className='uppercase'>{blog.date}</div>
                      </div>
                      <div className='block'>
                        {blog.tags.split(",").map((tag) => (
                          <div className='badge badge-primary mx-1'>{tag}</div>
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
                </>
              );
            })
          ) : (
            <div>NO DATA</div>
          )}
        </div>
      </section>
    </>
  );
}
