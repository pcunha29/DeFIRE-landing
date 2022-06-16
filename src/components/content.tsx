import { weOfferSection, ecosystemSection, DAOSection, RoadmapSection, ecosystemEarnOwn } from "../utils/texts";

import arrowRight from "../images/arrowRight.svg";

function Content() {
  return (
    <>
      {/* FEATURES Section */}
      <section id='features' className='container px-4  mt-32 sm:mt-52'>
        <div className='relative flex text-defire-water mb-20 px-5'>
          <p className='flex flex-col text-3xl sm:text-5xl text-defire-light-purple text-left font-medium'>
            <span>
              <span className='text-xs sm:text-sm mr-5 text-defire-water'>.FEATURES</span>
              On track to revolutionise how you engage with financial services.
            </span>
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 text-defire-water px-5'>
          {weOfferSection &&
            weOfferSection.map((data, i) => (
              <div key={i} className='shrink-0 w-full mb-20 px-5'>
                <p className='w-20 text-xs sm:text-base'>{data.number}</p>
                <div className='font-normal text-lg sm:text-2xl uppercase'>
                  <p className='mb-4'>{data.title}</p>
                  <p className='text-base pt-4 normal-case'>{data.body}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ECOSYSTEM Section */}
      <section id='ecosystem' className='container mt-32 sm:mt-52'>
        <div className='relative flex text-defire-water px-5'>
          <p className='flex flex-col text-3xl sm:text-5xl text-defire-light-purple text-left font-medium'>
            <span>
              <span className='text-xs sm:text-sm mr-5 text-defire-water'>.ECOSYSTEM</span>
              Time for premium Decentralised Finance
            </span>
          </p>
        </div>

        <div className='sm:grid sm:grid-cols-3 gap-5 mt-12 sm:mt-52  px-5'>
          {ecosystemSection &&
            ecosystemSection.map((data, i) => (
              <div key={i} className='flex justify-center text-defire-water mb-10 sm:mb-0 px-5'>
                <div>
                  <div className='flex'>
                    <img src={data.icon} alt={data.title} />
                    <p className='pt-4 pl-8 text-2xl'>{data.title}</p>
                  </div>
                  <p className='text-base mt-7'>{data.body}</p>
                </div>
              </div>
            ))}
        </div>

        {/* ROADMAP Section */}
        <div id='roadmap' className='sm:grid sm:grid-cols-2 gap-3 mt-52  px-5'>
          <div className='flex flex-col justify-between'>
            <p className='text-3xl sm:text-5xl  text-defire-cyan font-medium'>
              <span className='text-xs sm:text-sm pr-2 sm:pr-10 uppercase'>.ROADMAP</span>A true DAO 2.0 is born, at a $7.8M valuation.
            </p>
          </div>
          <div className='mt-10  px-5'>
            {RoadmapSection &&
              RoadmapSection.map((data, i) => (
                <div key={i} className='sm:border-l-2 sm:pl-3 pb-20 last:pb-0 text-defire-water'>
                  <div className='sm:flex sm:flex-row-reverse justify-between'>
                    <span className='font-thin text-xs'>{data.date}</span>
                    <p className='uppercase text-lg'>{data.title}</p>
                  </div>
                  <p className='font-medium pt-5 pl-5'>{data.body}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* DAO Section */}
      <section id='dao' className='container mt-32 sm:mt-52'>
        <div className='relative flex flex-col text-defire-water  px-5'>
          <p className='text-3xl sm:text-5xl  text-defire-cyan font-medium'>
            <span className='text-xs sm:text-sm pr-2 sm:pr-10 uppercase'>{DAOSection.title_small}</span>
            {DAOSection.title_normal}
          </p>
          <div className='sm:grid sm:grid-cols-2 gap-3'>
            <img src={DAOSection.image} alt='DAO' />
            <p className='text-base flex flex-col self-end px-5 '>
              <span className='text-3xl pb-10'>{DAOSection.subtitle}</span>
              <span className='pb-5'>{DAOSection.content}</span>
              <span>{DAOSection.content_2}</span>
            </p>
          </div>
        </div>
        <div className='sm:grid sm:grid-cols-3 gap-5 mt-12 sm:mt-20 px-5'>
          {ecosystemEarnOwn &&
            ecosystemEarnOwn.map((data, i) => (
              <div key={i} className='flex justify-center text-defire-water mb-10 sm:mb-0 px-5'>
                <div>
                  <p className='pt-4 text-4xl'>_{data.title}</p>
                  <p className='text-base mt-7'>{data.body}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className='container mt-52 text-defire-water'>
        <p className='text-3xl sm:text-4xl text-center flex flex-col px-7'>
          <span className='py-4'>Modular _ Extensible _ Highly Scalable</span>
          <span className='py-4 '>Open _ Inclusive _ Fluid Participation _</span>
          <span className='py-4'>Adaptable _ Emergent Hierarchy</span>
        </p>
      </section>

      {/* BLOG Section */}
      <section id='rd' className='container mt-52 text-defire-water px-10'>
        <p className='text-defire-cyan text-3xl sm:text-6xl sm:px-0'>
          <span className='text-sm px-5 text-defire-water'>#FUTURE</span>Calling all Digital Nomads
          <span className='text-sm px-5 text-defire-water'>#EDUCATION</span> Your F.I.R.E Journey
          <span className='text-sm px-5 text-defire-water'>#TOKENOMICS</span> One Token Endles Utility
          <span className='text-sm px-5 text-defire-water'>#FUTURE</span> DeFIRE Academy
          <span className='text-sm px-5 text-defire-water'>#EDUCATION</span> The BLAZE protocol
          <span className='text-sm px-5 text-defire-water'>#EDUCATION</span> Your Journey to Financial Independence Through DeFi
        </p>

        <a className='flex text-xl sm:text-2xl mt-12 px-5' href='https://medium.com/@defire.org' target='_blank' rel='noreferrer'>
          <img className='pr-2' src={arrowRight} alt='arrow right' /> RESEARCH & DEVELOPMENT
        </a>
      </section>

      {/* GET INVOLVED Section */}
      <section id='getInvolved' className='container mt-32 sm:mt-52'>
        <div className='sm:container relative flex mb-10 sm:mb-28 px-10'>
          <a className='' href='mailto:team@defire.org' target='_blank' rel='noreferrer'>
            <p className='flex flex-col text-lg sm:text-3xl text-defire-water text-left font-medium uppercase'>
              <span>
                <span className='font-thin text-xs sm:text-sm pr-2 sm:pr-10'>.GET INVOLVED</span>
                Brainstorm. Invest. Contribute. OWN. Govern.
              </span>
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Content;
