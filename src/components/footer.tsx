import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import medium from "../images/medium.svg";
import defireLogo from "../images/defireLogo.svg";

function Footer() {
  return (
    <footer>
      <section className='px-7 mt-32 sm:mt-52'>
        <div className='flex justify-between '>
          <img src={defireLogo} alt='defire logo' className='w-52 self-baseline sm:self-center' />
          <ul className='text-defire-water sm:grid sm:grid-cols-4 px-5'>
            {/* <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li>
            <li className='py-2 pl-4 pr-0 uppercase text-xsExtra sm:text-xs'>External Link</li> */}
          </ul>
        </div>
      </section>
      <div className=' text-defire-water flex justify-between mt-28 pb-20 px-7'>
        <p className='text-xs sm:text-s pt-3 pr-5'>© DeFIRE . One Ecosystem, the best of DeFi</p>
        <ul className='grid grid-cols-3 gap-9 sm:gap-20 pr-5'>
          <li>
            <a className='' href='https://twitter.com/DeFIRE_ORG' target='_blank' rel='noreferrer'>
              <img className='h-10' src={twitter} alt='twitter' />
            </a>
          </li>
          <li>
            <a className='' href='https://discord.gg/DeFIRE' target='_blank' rel='noreferrer'>
              <img className='h-10' src={discord} alt='discord' />
            </a>
          </li>
          <li>
            <a className='' href='https://medium.com/@defire.org' target='_blank' rel='noreferrer'>
              <img className='h-10' src={medium} alt='medium' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
