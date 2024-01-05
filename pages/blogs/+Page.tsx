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
            data.map((item) => {
              return (
                <>
                  <div
                    key={item.title}
                    className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
                  >
                    <a href='#'>
                      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {item.title}
                      </h5>
                    </a>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      {item.description}
                    </p>
                    <a
                      href={`/blog/${item.title}`}
                      className='btn btn-primary btn-sm'
                    >
                      Read more
                      <svg
                        className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                      </svg>
                    </a>
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
