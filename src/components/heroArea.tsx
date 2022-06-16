import defireIcon from "../images/defireIcon.svg";
import defireTypography from "../images/defireTypography.svg";
import { useEffect, useState } from "react";

function HeroArea() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.screen.height) {
        setHide(true);
      } else {
        setHide(false);
      }
    });
  }, []);
  return (
    <nav className='flex flex-col items-start py-4 px-7 h-screen'>
      <div className='py-1 flex justify-between w-full'>
        <img className='w-20 mt-5' src={defireIcon} alt='' />
        <img className='h-5 px-5 mt-12' src={defireTypography} alt='' />
      </div>
      <div
        className={hide ? " text-defire-water top-60 fixed text-left transition-all opacity-0 invisible" : "text-defire-water top-60 fixed text-left transition-all opacity-100 "}>
        <ul className='font-thin text-xs'>
          <li className='px-2 sm:px-0 py-1'>
            <a href='#features'>FEATURES</a>
          </li>
          <li className='px-2 sm:px-0 py-1'>
            <a href='#ecosystem'>ECOSYSTEM</a>
          </li>
          <li className='px-2 sm:px-0 py-1'>
            <a href='#dao'>DAO 2.0</a>
          </li>
          <li className='px-2 sm:px-0 py-1'>
            <a href='#roadmap'>ROADMAP</a>
          </li>
          <li className='px-2 sm:px-0 py-1'>
            <a href='#rd'>RESEARCH</a>
          </li>
          <li className='w-24 px-2 sm:px-0 py-1'>
            <a href='#getInvolved'>GET INVOLVED</a>
          </li>
        </ul>
      </div>
      <section className=''>{/* graphic will be added here */}</section>

      <section className='flex grid-cols-2 h-full w-full flex-col justify-end bottom-10 mb-60 mt-64  sm:mt-20 text-defire-water'>
        <div className='text-right mr-5 sm:mr-20'>
          <h1 className='text-5xl sm:text-7xl font-medium mb-5'>Low Touch Wealth Optimisation</h1>
          <span className='text-s sm:text-md mr-1'>The Future of Financial Independence</span>
        </div>
      </section>
    </nav>
  );
}

export default HeroArea;
