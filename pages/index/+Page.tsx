import { GetinTouch } from "./GetinTouch";
import "./index.css";

import Workingathome from "./workingathome.webp";

export { Page };

function Page() {
  return (
    <>
      <section>
        <div className='grid auto-rows-max sm:grid-col-3  sm:grid-flow-row lg:grid-rows-3  lg:grid-flow-col sm:gap-4 sm:py-5 '>
          <div className='py-1 sm:py-5  lg:row-span-1 sm:items-center'>
            <h1 className='text-2xl font-black text-pretty uppercase fade-in-left'>
              Hey there! 👋 I&apos;m Rasheed!
            </h1>
          </div>

          <div className='leading-tight py-5 lg:row-span-2 text-slate-700 font-semibold fade-in-right'>
            <p>
              I&apos;m an experienced developer with a passion for creating
              innovative solutions. With a strong background in F#, C#,
              JavaScript (TypeScript), and more, I bring a wealth of knowledge
              to the table.
            </p>
            <br />
            <p>
              Specializing in Web development, I take pride in building robust
              and scalable applications. If you&apos;re in need of a highly
              skilled developer who can bring your projects to life with a mix
              of creativity, efficiency, and a touch of finesse, look no
              further. Let&apos;s work together to create something awesome! 🚀
            </p>
          </div>
          <div className='xl:hidden xl:row-span-4 slide-in relative'>
            <figure className='text-xs text-stone-400 mt-10'>
              <img
                className='object-cover'
                alt='man working at home looking to book a trip'
                src={Workingathome}
              ></img>
              <figcaption>
                <a href='https://www.freepik.com/free-vector/man-going-trip-booking-tour-online-guy-sitting-front-computer-table-looking-voyage-summer-vacation_24758680.htm#page=2&query=person%20working%20computer&position=7&from_view=keyword&track=ais&uuid=5c0d4a41-ce76-45d5-b8f7-edb57c64ddae'>
                  Image by studio4rt
                </a>{" "}
                on Freepik
              </figcaption>
            </figure>
            <div className='w-1/2 h-1/2 absolute top-0 left-1/4 rounded-lg p-4'>
              <GetinTouch />
            </div>
          </div>

          <div className='hidden lg:flex max-h-1  my-3 fade-in-right'>
            <GetinTouch />
          </div>

          <div className='hidden xl:flex xl:row-span-4 slide-in'>
            <figure className='text-xs text-stone-400'>
              <img
                className='object-cover'
                alt='man working at home looking to book a trip'
                src={Workingathome}
              ></img>
              <figcaption>
                <a href='https://www.freepik.com/free-vector/man-going-trip-booking-tour-online-guy-sitting-front-computer-table-looking-voyage-summer-vacation_24758680.htm#page=2&query=person%20working%20computer&position=7&from_view=keyword&track=ais&uuid=5c0d4a41-ce76-45d5-b8f7-edb57c64ddae'>
                  Image by studio4rt
                </a>{" "}
                on Freepik
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
