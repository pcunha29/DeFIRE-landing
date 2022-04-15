import blazeIcon from "../images/blazeIcon.svg";
import gDEFIREIcon from "../images/gDEFIREIcon.svg";
import igniteIcon from "../images/igniteIcon.svg";
import DAO from "../images/DAO.svg";

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
      {/* 3rd Text Section */}
      <section className="container px-4">
        <div className="grid grid-cols-2 gap-4 text-defire-water">
          <div className="flex mb-40">
            <p className="w-20">[ 01 ]</p>
            <div className="w-1/2 font-normal text-2xl uppercase">
              <p className="mb-4">
                Build a Portfolio of Containerised Strategies
              </p>
              <p className="text-base pt-4 normal-case">
                The complexity of yield opportunities In DeFi is rising, Many
                investors do not have the time, effort, or technical knowledge
                to monitor, conceive, and implement these strategies themselves.
                DeFIRE offers exposure to the market through a diversified
                marketplace of containers with varying risk, yield and security
                levels.
              </p>
            </div>
          </div>
          <div className="flex mb-40">
            <p className="w-20">[ 02 ]</p>
            <div className="w-1/2 font-normal text-2xl uppercase">
              <p className="mb-4"> The Most Efficient Way to Invest </p>
              <p className="text-base pt-4 normal-case">
                Shape your future and build a portfolio with composable
                allocation strategies. Maximise your returns while remaining
                inside your risk comfort zone.
              </p>
            </div>
          </div>
          <div className="flex mb-40">
            <p className="w-20">[ 03 ]</p>
            <p className="w-1/2 font-normal text-2xl uppercase">
              <p className="mb-4">
                Market Leaders Compete to Optimise Your Capital
              </p>
              <p className="text-base pt-4 normal-case">
                A marketplace as your single point of contact to the world of
                DeFi. From the most daring strategies to the ones that fit your
                risk appetite and capital growth profile, let leading protocols
                and professional fund managers compete to offer you the most
                competitive yield for your investment.
              </p>
            </p>
          </div>
          <div className="flex mb-40">
            <p className="w-20">[ 04 ]</p>
            <div className="w-1/2 font-normal text-2xl uppercase">
              <p className="mb-4 flex flex-col">
                <span>Fixed Supply;</span> <span>Expanding Utility </span>
              </p>
              <p className="text-base pt-4 normal-case">
                The two key factors in value accrual and positive price action.
                Governed by a multipurpose $DFIRE crypto token that aggregates a
                reward share from all the ecosystem protocols. Truly low touch,
                passive income.
              </p>
            </div>
          </div>
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
      {/* 5th Text Section */}
      <section className="container">
        <div className="grid grid-cols-3">
          <div className="text-defire-water w-80">
            <div className="flex">
              <img src={blazeIcon} alt="" />
              <p className="pt-4 pl-20 text-2xl">DEFIRE BLAZE</p>
            </div>
            <p className="text-base mt-7">
              BLAZE is a marketplace where you can deposit your assets in
              exchange for full-on strategies utilising various assets and
              protocols. Strategy containers offer both precision in the
              selected strategies and extensive exposure to a diversity of
              market capital. Create a personalised portfolio to achieve your
              investment goals by selecting containers matching your risk
              appetite.
            </p>
          </div>

          <div className="text-defire-water w-80">
            <div className="flex">
              <img src={gDEFIREIcon} alt="" />
              <p className="pt-4 pl-20 text-2xl">gDEFIRE</p>
            </div>
            <p className="text-base mt-7">
              DeFIRE is an ecosystem of synergistic protocols governed by a
              single token. Locking $DFIRE into $gDFIRE provides investors with
              governance power over DeFIRE’s ecosystem. gDFIRE holders receive a
              share of the revenue generated across all current and future
              protocols.
            </p>
          </div>

          <div className="text-defire-water w-80">
            <div className="flex">
              <img src={igniteIcon} alt="" />
              <p className="pt-4 pl-20 text-2xl">DEFIRE IGNITE</p>
            </div>
            <p className="text-base mt-7">
              IGNITE is a lending platform which enables investors in BLAZE
              containers to use their container shares as collateral. Unlock
              your investments by making them liquid without selling them.
              IGNITE will automatically repay your loan using the yield
              generated from your collateral.
            </p>
          </div>
        </div>
      </section>
      {/* 6th Section */}
      <section className="container mt-52">
        <div className="relative flex flex-col text-defire-water">
          <p className="flex flex-col text-3xl text-left font-medium uppercase mb-10">
            <p>
              <span className="text-sm pr-12">[ DeFIRE is governed as a ]</span>
              modular and highly scalable
            </p>
            <p> Decentralized Autonomous Organization</p>
          </p>
          <div className="grid grid-cols-2">
            <img src={DAO} alt="" />
            <p className="text-base ml-28 w-80 flex flex-col self-end">
              <span className="text-2xl pb-2">DAO</span>
              <span className="pb-5">
                The new generation of decentralised autonomous organisation
                features contributors working in self-organised groups. Fair
                compensation attracts top talent and retains it.
              </span>
              <span>
                Transparently and fairly governed by $gDFIRE holders, DeFIRE DAO
                empowers individuals to realise their potential by creating new
                opportunities, borderless communities, and inclusive financial
                products. DeFIRE is changing the relationship between capital
                providers, protocols, and their end users.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
