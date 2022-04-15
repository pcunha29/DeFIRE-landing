import {
  weOfferSection,
  tokensSection,
  DAOSection,
  LearnMoreSection,
} from "../utils/texts";

import arrowRight from "../images/arrowRight.svg";

function Content() {
  return (
    <>
      {/* Some sections uses Roc Grotesk which is a paid adobe font */}
      {/* 1st Text Section */}
      <section className="container relative mt-20">
        <div className="container relative flex justify-end text-defire-water">
          <h1 className="text-7xl text-left font-medium w-630">
            Low Touch Wealth Optimisation
          </h1>
          <span className="text-md w-44 absolute top-24">
            [ [ LEARN, INVERST AND F.I.R.E. – Financial Independence, Retire
            Early ] ]
          </span>
        </div>
      </section>

      {/* 2nd Text Section */}
      <section className="container h-80 mt-52">
        <div className="relative flex text-defire-water">
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
      </section>

      {/* WHAT WE OFFER Section */}
      <section className="container px-4">
        <div className="grid grid-cols-2 gap-4 text-defire-water">
          {weOfferSection &&
            weOfferSection.map((data, i) => (
              <div key={i} className="flex mb-40">
                <p className="w-20">{data.number}</p>
                <div className="w-1/2 font-normal text-2xl uppercase">
                  <p className="mb-4">{data.title}</p>
                  <p className="text-base pt-4 normal-case">{data.body}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 4th Text Section */}
      <section className="container h-80 mt-52">
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
      </section>

      {/* TOKEN Section */}
      <section className="container">
        <div className="grid grid-cols-3">
          {tokensSection &&
            tokensSection.map((data, i) => (
              <div key={i} className="text-defire-water w-80">
                <div className="flex">
                  <img src={data.icon} alt="" />
                  <p className="pt-4 pl-20 text-2xl">{data.title}</p>
                </div>
                <p className="text-base mt-7">{data.body}</p>
              </div>
            ))}
        </div>
      </section>

      {/* DAO Section */}
      <section className="container mt-52">
        <div className="relative flex flex-col text-defire-water">
          <p className="flex flex-col text-3xl text-left font-medium uppercase mb-10">
            <p>
              <span className="text-sm pr-12">{DAOSection.title_small}</span>
              {DAOSection.title_normal}
            </p>
            <p>{DAOSection.title_normal_2}</p>
          </p>
          <div className="grid grid-cols-2">
            <img src={DAOSection.image} alt="" />
            <p className="text-base ml-28 w-80 flex flex-col self-end">
              <span className="text-2xl pb-2">{DAOSection.subtitle}</span>
              <span className="pb-5">{DAOSection.content}</span>
              <span>{DAOSection.content_2}</span>
            </p>
          </div>
        </div>
      </section>

      {/* LEARN MORE Section */}
      <section className="container mt-52 text-defire-water">
        <p className=" text-6xl text-right flex flex-col">
          <span className="py-4">Modular _ Extensible _ Highly Scalable</span>
          <span className="py-4 mr-20">
            Open _ Inclusive _ Fluid Participation _
          </span>
          <span className="py-4">Adaptable _ Emergent Hierarchy</span>
        </p>

        <div className="grid grid-cols-2 mt-52">
          <div className="flex flex-col justify-between">
            <p className="text-5xl w-485 text-defire-cyan font-medium">
              <span className="text-sm pr-8 uppercase">[ our plan ]</span>A true
              DAO 2.0 is born, with the $7.8M valuation.
            </p>

            <a className="flex text-2xl" href="/">
              <img className="pr-2" src={arrowRight} alt="" /> LEARN MORE
            </a>
          </div>
          <div>
            {LearnMoreSection &&
              LearnMoreSection.map((data, i) => (
                <div key={i} className="border-l-2 w-80 px-4 pb-20 last:pb-0">
                  <div className="flex justify-between">
                    <p className="uppercase text-lg">{data.title}</p>
                    <span className="font-thin text-xs">{data.date}</span>
                  </div>
                  <p className="font-medium">{data.body}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
