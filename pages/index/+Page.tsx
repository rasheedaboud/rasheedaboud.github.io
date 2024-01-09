import { Banner } from "./Banner";
import { GetinTouch } from "./GetinTouch";
import "./index.css";

import Workingathome from "./workingathome.webp";
import FelizSyncfusion from "./fsharp_syncfusion.webp";

export { Page };

function Page() {
  return (
    <>
      <section className='min-h-svh'>
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
      <section className='min-h-svh'>
        <h2 className='text-center font-black text-2xl uppercase'>Projects</h2>
        <div className='flex justify-center items-center mt-5'>
          {/* <!-- Centered Arrow SVG wrapped inside a div --> */}
          <div className='border-t border-gray-400 w-full flex justify-center'>
            {/* <!-- Downward Arrow SVG --> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6 -mt-3 bg-white'
            >
              <path d='M6 9l6 6 6-6' />
            </svg>
          </div>
        </div>
        {/* Feliz.Syncfusion */}
        <div className='card card-side bg-base-100 shadow-xl my-5 mb-5 scale-95 hover:scale-110'>
          <div className='card-body'>
            <h2 className='card-title uppercase'>Feliz.Syncfusion!</h2>
            <p className='text-gray-400'>
              Elevate your F# web applications with Feliz.Syncfusion—a
              comprehensive F# library tailored for the Feliz ecosystem. This
              library brings the power of Syncfusion controls to your
              fingertips, enabling you to construct beautifully polished UIs
              with ease. Whether you're designing interactive charts, grids, or
              complex dashboards, Feliz.Syncfusion makes it swift and
              effortless. Join the growing community of F# developers who are
              harnessing the flexibility and performance of Syncfusion controls
              and make your web apps stand out!
            </p>
            <div className='card-actions justify-end'>
              <a
                aria-label='Learn More'
                href='https://github.com/rasheedaboud/Feliz.Syncfusion'
                className='btn btn-primary'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className='card card-side bg-base-100 shadow-xl my-5 mb-5 scale-95 hover:scale-110'>
          {/* <figure className='hidden sm:block max-w-xs px-3 py-2 min-w-xs '>
            <img
              style={{ minHeight: "100px", minWidth: "100px" }}
              src={FelizSyncfusion}
            />
          </figure> */}

          <div className='ms-auto card-body sm:w-3/4'>
            <h2 className='card-title uppercase'>Feliz.React.Msal!</h2>
            <p className='text-gray-400'>
              Secure your F# web apps with confidence using Feliz.React.Msal.
              This top-notch package is your gateway to integrating Microsoft's
              MSAL library seamlessly within your React applications. With
              Feliz.React.Msal, leverage the security of Azure AD and Azure B2C
              by merely swapping the configuration object to match your
              endpoints. Get started in minutes with our minimal repository
              guide, which walks you through each step of the setup using the
              Feliz minimal template. Pre-register your application, and you're
              all set to safeguard your applications like a pro.
            </p>
            <div className='card-actions justify-end'>
              <a
                aria-label='Learn More'
                href='https://github.com/rasheedaboud/Feliz.React.Msal'
                className='btn btn-primary'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className='card card-side bg-base-100 shadow-xl my-5 mb-5 scale-95 hover:scale-110'>
          <div className='card-body'>
            <h2 className='card-title uppercase'>ARMM Weld Tracking!</h2>
            <p className='text-gray-400'>
              A pioneering Quality Assurance/Quality Control (QA/QC) app
              tailored for the pressure piping construction sector. This
              cloud-hosted, secure app brings a suite of functionalities to
              refine and optimize pressure piping fabrication processes. By
              leveraging this state-of-the-art application, companies can
              enhance their operational efficiency, ensure compliance with
              stringent regulations, and uphold the highest standards of safety
              for pressure piping systems management.
            </p>
            <div className='card-actions justify-end'>
              <a
                aria-label='Learn More'
                href='https://www.armm-services.com/News/Blog/WeldTracking.md'
                className='btn btn-primary'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className='card card-side bg-base-100 shadow-xl my-5 mb-5 scale-95 hover:scale-110'>
          <div className='card-body'>
            <h2 className='card-title uppercase'>VisionsTools!</h2>
            <p className='text-gray-400'>
              Make the task of memo generation for Visions IT | WR quick and
              painless with VisionsTools. Our app, designed with a synergy of
              F#, C#, and Winforms, is the ultimate tool for generating bulk
              memos on any x64 Windows device. With VisionsTools, simply
              download, launch, and follow the integrated step-by-step guide to
              maximize efficiency. Say goodbye to the tedious, manual memo
              creation process and welcome a streamlined solution that saves you
              time and minimizes errors.
            </p>
            <div className='card-actions justify-end'>
              <a
                aria-label='Learn More'
                href='https://github.com/rasheedaboud/VisionsTools'
                className='btn btn-primary'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className='card card-side bg-base-100 shadow-xl my-5 mb-5 scale-95 hover:scale-110'>
          <div className='card-body'>
            <h2 className='card-title uppercase'>Savy Savers!</h2>
            <p className='text-gray-400'>
              Are you ready to revolutionize the way Canadians shop for
              groceries? Meet Savy Savers, the web and Android app designed to
              help consumers find the best deals on their grocery needs. Powered
              by React and backed with Azure Functions and F#, Savy Savers
              brings budget-friendly shopping to your fingertips. Delve into a
              world where comparative price shopping is not only easy but also
              engaging. Don't let your groceries break the bank—join the Savy
              Savers community and embrace the era of smart, economical grocery
              shopping.
            </p>
            <div className='card-actions justify-end'>
              <a
                aria-label='Learn More'
                href='https://www.savysavers.ca/'
                className='btn btn-primary'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
}
