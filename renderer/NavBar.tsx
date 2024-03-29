import { useState } from "react";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <nav className='bg-black'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-1'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                type='button'
                className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={() => setNavOpen(!navOpen)}
              >
                <span className='absolute -inset-0.5'></span>
                <span className='sr-only'>Open main menu</span>

                {navOpen ? (
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className='flex flex-1 items-center justify-end sm:items-stretch sm:justify-start'>
              <div className='hidden sm:flex flex-shrink-0 items-center'>
                <svg
                  className='me-auto'
                  width={50}
                  height={50}
                  viewBox='-20 -20 100 100'
                >
                  <g id='SvgjsG1201' transform='scale(1.0)' fill='#fff'>
                    <path
                      xmlns='http://www.w3.org/2000/svg'
                      d='M2.61,37.02a1.45852,1.45852,0,0,1-.11-.55V4A1.498,1.498,0,0,1,4,2.5H15.77a1.50728,1.50728,0,0,1,1.06.44L27.18,13.29a1.49682,1.49682,0,0,1,0,2.12L5.06,37.53A1.50653,1.50653,0,0,1,2.61,37.02Z'
                    ></path>
                    <path
                      xmlns='http://www.w3.org/2000/svg'
                      d='M61.5,4V15.77a1.809,1.809,0,0,1-.11.57,1.62577,1.62577,0,0,1-.33.49L50.71,27.18a1.50713,1.50713,0,0,1-2.12,0L26.47,5.06a1.5155,1.5155,0,0,1,.4901-2.45,1.79313,1.79313,0,0,1,.57-.11L60,2.5A1.498,1.498,0,0,1,61.5,4Z'
                    ></path>
                    <path
                      xmlns='http://www.w3.org/2000/svg'
                      d='M61.39,26.98a1.45841,1.45841,0,0,1,.11.55V60A1.498,1.498,0,0,1,60,61.5H48.23a1.50747,1.50747,0,0,1-1.06-.44L36.82,50.71a1.49678,1.49678,0,0,1,0-2.12L58.94,26.47A1.50658,1.50658,0,0,1,61.39,26.98Z'
                    ></path>
                    <path
                      xmlns='http://www.w3.org/2000/svg'
                      d='M19.17,30.94,30.94,19.17a1.509,1.509,0,0,1,2.12,0L44.83,30.94a1.50907,1.50907,0,0,1,0,2.12L33.06,44.83a1.51876,1.51876,0,0,1-2.12,0L19.17,33.06A1.50906,1.50906,0,0,1,19.17,30.94Z'
                    ></path>
                    <path
                      xmlns='http://www.w3.org/2000/svg'
                      d='M37.86,59.45a1.50661,1.50661,0,0,1-1.39,2.05L4,61.5A1.498,1.498,0,0,1,2.5,60V48.23a1.81029,1.81029,0,0,1,.11-.57,1.62669,1.62669,0,0,1,.33-.49L13.29,36.82a1.54761,1.54761,0,0,1,2.12,0L37.53,58.94A1.28931,1.28931,0,0,1,37.86,59.45Z'
                    ></path>
                  </g>
                </svg>
              </div>
              <div className='sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-1 py-3 text-lg font-black'
                    aria-current='page'
                  >
                    Rasheed Aboud
                  </a>
                </div>
              </div>
            </div>
            <div className='hidden  sm:flex absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <a
                href='/blogs'
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-black'
              >
                Blog
              </a>
              <a
                href='/about'
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-black'
              >
                About
              </a>
              <a
                href='/contact'
                className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-black'
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {navOpen ? (
          <div className='sm:hidden' id='mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href='/blogs'
                className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
                aria-current='page'
              >
                Blog
              </a>
              <a
                href='/about'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
              >
                About
              </a>
              <a
                href='/contact'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
              >
                Contact
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};
