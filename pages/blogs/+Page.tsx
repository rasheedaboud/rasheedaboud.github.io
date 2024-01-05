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
                  <div className='card card-side bg-base-100 shadow-xl my-5'>
                    <figure>
                      <img src={blog.thumbnail} alt='Movie' />
                    </figure>
                    <div className='card-body max-w-1/2'>
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
