import {
  weOfferSection,
  ecosystemSection,
  DAOSection,
  RoadmapSection,
} from "../utils/texts";

import arrowRight from "../images/arrowRight.svg";
import partners from "../images/partners.svg";
import defireLogo from "../images/defireLogo.svg";

//TODO Some sections uses Roc Grotesk which is a paid adobe font. wtd?

function Content() {
  return (
    <>
      {/* Hero area Section */}
      <section className="sm:px-7 relative mt-64 sm:mt-20 text-defire-water">
        <div className="px-7 sm:px-7 relative flex justify-end ">
          <h1 className="text-3xl sm:text-7xl text-left font-medium w-630">
            Low Touch Wealth Optimisation
          </h1>
          <span className="text-xs sm:text-md w-44 absolute top-24">
            [ [ LEARN, INVERST AND F.I.R.E. – Financial Independence, Retire
            Early ] ]
          </span>
        </div>
        <div className="flex justify-between mt-28 sm:mt-0 bg-white/5 sm:bg-transparent overflow-x-scroll sm:overflow-x-auto sm:absolute sm:top-0 sm:z-10">
          <ul className="font-thin text-xs flex justify-between sm:block ">
            <li className="px-2 sm:px-0 py-1">
              <a href="#features">FEATURES</a>
            </li>
            <li className="px-2 sm:px-0 py-1">
              <a href="#ecosystem">ECOSYSTEM</a>
            </li>
            <li className="px-2 sm:px-0 py-1">
              <a href="#dao">DAO</a>
            </li>
            <li className="px-2 sm:px-0 py-1">
              <a href="#roadmap">ROADMAP</a>
            </li>
            <li className="px-2 sm:px-0 py-1">
              <a href="#rd">R&D</a>
            </li>
            <li className="w-24 px-2 sm:px-0 py-1">
              <a href="#getInvolved">GET INVOLVED</a>
            </li>
          </ul>
        </div>
      </section>

      {/* FEATURES Section */}
      <section id="features" className="container px-4  mt-32 sm:mt-52">
        <div className="relative flex text-defire-water mb-28">
          <p className="flex flex-col text-3xl sm:text-5xl text-defire-light-purple text-left font-medium">
            <span>
              <span className="text-xs sm:text-sm mr-2 text-defire-water">
                [ WHAT WE OFFER ]
              </span>
              Main Features of our
            </span>
            <span>system, that help you get financial</span>
            <span>independence</span>
          </p>
        </div>
        <div className=" flex overflow-x-scroll sm:grid sm:grid-cols-2 sm:gap-4 text-defire-water">
          {weOfferSection &&
            weOfferSection.map((data, i) => (
              <div
                key={i}
                className="shrink-0 w-48 sm:w-full sm:flex sm:justify-center mb-2 sm:mb-40 mr-10"
              >
                <p className="w-20 text-xs sm:text-base">{data.number}</p>
                <div className="w-full sm:w-1/2 font-normal text-lg sm:text-2xl uppercase">
                  <p className="mb-4">{data.title}</p>
                  <p className="text-base pt-4 normal-case">{data.body}</p>
                </div>
              </div>
            ))}
        </div>
        <img className="pr-2 sm:hidden" src={arrowRight} alt="arrow right" />
      </section>

      {/* ECOSYSTEM Section */}
      <section id="ecosystem" className="container mt-32 sm:mt-52">
        <div className="relative flex text-defire-water">
          <p className="flex flex-col text-3xl sm:text-5xl text-defire-light-purple text-left font-medium">
            <p>
              <span className="text-sm text-defire-water sm:pr-10">
                [ BLAZE ]
              </span>{" "}
              DeFIRE is on track to
            </p>
            <p> revolutionise how you engage</p>
            <p> with financial services.</p>
          </p>
        </div>

        <div className="sm:grid sm:grid-cols-3 mt-12 sm:mt-52">
          {ecosystemSection &&
            ecosystemSection.map((data, i) => (
              <div
                key={i}
                className="flex justify-center text-defire-water mb-10 sm:mb-0 sm:px-16"
              >
                <div>
                  <div className="flex">
                    <img src={data.icon} alt={data.title} />
                    <p className="pt-4 pl-8 text-2xl">{data.title}</p>
                  </div>
                  <p className="text-base mt-7">{data.body}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* DAO Section */}
      <section id="dao" className="container mt-32 sm:mt-52">
        <div className="relative flex flex-col text-defire-water">
          <p className="flex flex-col text-xl sm:text-3xl font-medium uppercase mb-10">
            <p>
              <span className="text-xs sm:text-sm pr-12">
                {DAOSection.title_small}{" "}
              </span>
              {DAOSection.title_normal}
            </p>
            <p>{DAOSection.title_normal_2}</p>
          </p>
          <div className="sm:grid sm:grid-cols-2">
            <img src={DAOSection.image} alt="DAO" />
            <p className="text-base sm:ml-28 flex flex-col self-end">
              <span className="text-2xl pb-2">{DAOSection.subtitle}</span>
              <span className="pb-5">{DAOSection.content}</span>
              <span>{DAOSection.content_2}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ROADMAP Section */}
      <section className="mt-52 text-defire-water">
        <p className=" text-3xl sm:text-6xl text-right flex flex-col px-7 sm:pr-7">
          <span className="py-1 sm:py-4">
            Modular _ Extensible _ Highly Scalable
          </span>
          <span className="py-1 sm:py-4 sm:mr-20">
            Open _ Inclusive _ Fluid Participation _
          </span>
          <span className="py-1 sm:py-4">Adaptable _ Emergent Hierarchy</span>
        </p>

        <div id="roadmap" className="container">
          <div className="sm:grid sm:grid-cols-2 mt-52">
            <div className="flex flex-col justify-between">
              <p className="text-3xl sm:text-5xl sm:w-485 text-defire-cyan font-medium">
                <span className="text-xs sm:text-sm pr-2 sm:pr-8 uppercase">
                  [ our plan ]
                </span>
                A true DAO 2.0 is born, with the $7.8M valuation.
              </p>
            </div>
            <div className="mt-10 sm:ml-0 flex sm:block overflow-x-scroll sm:overflow-x-auto">
              {RoadmapSection &&
                RoadmapSection.map((data, i) => (
                  <div
                    key={i}
                    className="shrink-0 sm:border-l-2 w-56 sm:w-352 px-4 pb-20 last:pb-0"
                  >
                    <div className="sm:flex sm:flex-row-reverse justify-between">
                      <span className="font-thin text-xs">{data.date}</span>
                      <p className="uppercase text-lg">{data.title}</p>
                    </div>
                    <p className="font-medium">{data.body}</p>
                  </div>
                ))}
            </div>
            <a className="flex text-lg sm:text-2xl" href="/">
              <img className="pr-2" src={arrowRight} alt="arrow right" /> LEARN
              MORE
            </a>
          </div>
        </div>
      </section>

      {/* BLOG Section */}
      <section id="rd" className=" sm:container mt-52 text-defire-water">
        <div className=" text-3xl sm:text-6xl flex flex-col px-7 sm:px-0">
          <p className="text-defire-cyan text-left sm:text-justify">
            <span className="text-sm pr-2">#FUTURE</span>
            Calling all Digital Nomads
          </p>
          <p className="text-defire-cyan sm:pl-80 sm:ml-20 text-right sm:text-justify">
            <span className="text-sm pr-2">#EDUCATION</span> Your F.I.R.E
            Journey
          </p>
          <p>
            <span className="text-sm pr-2 text-left sm:text-justify ">
              #TOKENOMICS
            </span>{" "}
            One Token Endles Utility
          </p>
          <p className="text-defire-cyan text-right sm:text-justify">
            <span className="text-sm pr-2">#FUTURE</span> DeFIRE Academy: Safety
          </p>
          <p className="text-defire-cyan text-left sm:text-justify">
            Measures <span className="text-sm ml-4">#EDUCATION</span> BLAZE
            Protocol
          </p>
          <p className="text-defire-cyan text-righ sm:text-justifyt">
            <span className="text-sm pr-2">#EDUCATION</span> Your Journey to
            Financial
          </p>
          <p className="text-defire-cyan text-right sm:text-justify">
            Independence Through DeFi
          </p>
        </div>

        <a className="flex text-lg sm:text-2xl mt-12 px-7 sm:px-0" href="/">
          <img className="pr-2" src={arrowRight} alt="arrow right" /> GO TO BLOG
        </a>
      </section>

      {/* GET INVOLVED Section */}
      <section id="getInvolved" className="px-7 mt-32 sm:mt-52">
        <div className="sm:container relative flex mb-10 sm:mb-28">
          <p className="flex flex-col text-lg sm:text-3xl text-defire-water text-left font-medium uppercase">
            <span>
              <span className="font-thin text-xs sm:text-sm pr-2 sm:pr-10">
                [ GET INVOLVED ]
              </span>
              Invest. Contribute. Govern.
            </span>
            <span>Join our ecosystem to build financial independence, as</span>
            <span>those partners:</span>
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src={partners}
            alt="partnersImg"
            className="max-w-3xl sm:max-w-full"
          />
        </div>
      </section>

      {/* LINKS Section */}
      <section className="px-7 mt-32 sm:mt-52">
        <div className="flex justify-between ">
          <img
            src={defireLogo}
            alt="defire logo"
            className="w-16 sm:w-52 self-baseline sm:self-center"
          />
          <ul className="text-defire-water sm:grid sm:grid-cols-4">
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
            <li className="p-2 uppercase text-xsExtra sm:text-xs">
              External Link
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Content;
