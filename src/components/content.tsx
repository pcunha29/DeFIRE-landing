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
          <span className="text-md w-44 absolute top-24">
            [ [ LEARN, INVERST AND F.I.R.E. – Financial Independence, Retire
            Early ] ]
          </span>
        </div>
        <div className="flex justify-between bg-white/5 sm:bg-transparent overflow-x-scroll sm:absolute sm:top-0 sm:z-10">
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
      {/* <section id="features" className="container px-4  mt-52">
        <div className="relative flex text-defire-water mb-28">
          <p className="flex flex-col text-5xl text-defire-light-purple text-left font-medium">
            <span>
              <span className="text-sm text-defire-water">
                [ WHAT WE OFFER ]
              </span>{" "}
              Main Features of our{" "}
            </span>
            <span>system, that help you get financial</span>
            <span>independence</span>
          </p>
        </div>
        <div className="  grid grid-cols-2 gap-4 text-defire-water">
          {weOfferSection &&
            weOfferSection.map((data, i) => (
              <div key={i} className="flex justify-center mb-40">
                <p className="w-20">{data.number}</p>
                <div className="w-1/2 font-normal text-2xl uppercase">
                  <p className="mb-4">{data.title}</p>
                  <p className="text-base pt-4 normal-case">{data.body}</p>
                </div>
              </div>
            ))}
        </div>
      </section> */}

      {/* ECOSYSTEM Section */}
      {/* <section id="ecosystem" className="container mt-52">
        <div className="relative flex text-defire-water">
          <p className="flex flex-col text-5xl text-defire-light-purple text-left font-medium">
            <p>
              <span className="text-sm text-defire-water pr-10">[ BLAZE ]</span>{" "}
              DeFIRE is on track to
            </p>
            <p> revolutionise how you engage</p>
            <p> with financial services.</p>
          </p>
        </div>

        <div className="grid grid-cols-3 mt-52">
          {ecosystemSection &&
            ecosystemSection.map((data, i) => (
              <div
                key={i}
                className="flex justify-center text-defire-water px-16"
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
      </section> */}

      {/* DAO Section */}
      {/* <section id="dao" className="container mt-52">
        <div className="relative flex flex-col text-defire-water">
          <p className="flex flex-col text-3xl font-medium uppercase mb-10">
            <p>
              <span className="text-sm pr-12">{DAOSection.title_small}</span>
              {DAOSection.title_normal}
            </p>
            <p>{DAOSection.title_normal_2}</p>
          </p>
          <div className="grid grid-cols-2">
            <img src={DAOSection.image} alt="DAO" />
            <p className="text-base ml-28 flex flex-col self-end">
              <span className="text-2xl pb-2">{DAOSection.subtitle}</span>
              <span className="pb-5">{DAOSection.content}</span>
              <span>{DAOSection.content_2}</span>
            </p>
          </div>
        </div>
      </section> */}

      {/* ROADMAP Section */}
      {/* <section className="mt-52 text-defire-water">
        <p className=" text-6xl text-right flex flex-col pr-7">
          <span className="py-4">Modular _ Extensible _ Highly Scalable</span>
          <span className="py-4 mr-20">
            Open _ Inclusive _ Fluid Participation _
          </span>
          <span className="py-4">Adaptable _ Emergent Hierarchy</span>
        </p>

        <div id="roadmap" className="container">
          <div className="grid grid-cols-2 mt-52">
            <div className="flex flex-col justify-between">
              <p className="text-5xl w-485 text-defire-cyan font-medium">
                <span className="text-sm pr-8 uppercase">[ our plan ]</span>A
                true DAO 2.0 is born, with the $7.8M valuation.
              </p>

              <a className="flex text-2xl" href="/">
                <img className="pr-2" src={arrowRight} alt="arrow right" />{" "}
                LEARN MORE
              </a>
            </div>
            <div>
              {RoadmapSection &&
                RoadmapSection.map((data, i) => (
                  <div
                    key={i}
                    className="border-l-2 w-352 px-4 pb-20 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <p className="uppercase text-lg">{data.title}</p>
                      <span className="font-thin text-xs">{data.date}</span>
                    </div>
                    <p className="font-medium">{data.body}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* BLOG Section */}
      {/* <section id="rd" className=" mt-52 text-defire-water">
        <div className=" text-6xl  flex flex-col">
          <p className="text-defire-cyan">
            <span className="text-sm pr-2">#FUTURE</span>
            Calling all Digital Nomads
          </p>
          <p className="text-defire-cyan pl-80 ml-20">
            <span className="text-sm pr-2">#EDUCATION</span> Your F.I.R.E
            Journey
          </p>
          <p>
            <span className="text-sm pr-2">#TOKENOMICS</span> One Token Endles
            Utility
          </p>
          <p className="text-defire-cyan">
            <span className="text-sm pr-2">#FUTURE</span> DeFIRE Academy: Safety
          </p>
          <p className="text-defire-cyan">
            Measures <span className="text-sm ml-4">#EDUCATION</span> BLAZE
            Protocol
          </p>
          <p className="text-defire-cyan">
            <span className="text-sm pr-2">#EDUCATION</span> Your Journey to
            Financial
          </p>
          <p className="text-defire-cyan">Independence Through DeFi</p>
        </div>

        <a className="flex text-2xl mt-12 " href="/">
          <img className="pr-2" src={arrowRight} alt="arrow right" /> GO TO BLOG
        </a>
      </section> */}

      {/* GET INVOLVED Section */}
      {/* <section id="getInvolved" className="px-7 mt-52">
        <div className="container relative flex mb-28">
          <p className="flex flex-col text-3xl text-defire-water text-left font-medium uppercase">
            <span>
              <span className="text-sm pr-10 ">[ GET INVOLVED ]</span>
              Invest. Contribute. Govern.
            </span>
            <span>Join our ecosystem to build financial independence, as</span>
            <span>those partners:</span>
          </p>
        </div>
        <div className="flex justify-end">
          <img src={partners} alt="" />
        </div>
      </section> */}

      {/* LINKS Section */}
      {/* <section className="px-7 mt-52">
        <div className="flex justify-between ">
          <img src={defireLogo} alt="defire logo" />
          <ul className="text-defire-water grid grid-cols-4">
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
            <li className="p-2 uppercase text-xs">External Link</li>
          </ul>
        </div>
      </section> */}
    </>
  );
}

export default Content;
