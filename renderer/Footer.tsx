import Twitter from "./twitter.webp";

export const Footer = () => {
  return (
    <footer className='footer p-10 bg-black text-neutral-content'>
      <aside>
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
        <p>
          Rasheed Aboud.
          <br />
          Providing reliable tech solutions since 2017.
        </p>
      </aside>
      <nav>
        <header className='footer-title'>Social</header>
        <div className='grid grid-flow-col gap-4'>
          <a href='https://twitter.com/@rasheed_aboud'>
            <img
              style={{ maxWidth: "20px", maxHeight: "25px" }}
              src={Twitter}
            />
          </a>
          <a href='https://www.youtube.com/channel/UCtdi6hMM5p6gAchK67qYPqQ'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
            </svg>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100078327618426'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};
