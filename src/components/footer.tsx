import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import medium from "../images/medium.svg";

function Footer() {
  return (
    <footer className=" text-defire-water flex justify-between mt-28 pb-7 px-7 sm:pr-0 w-full sm:w-4/6 ">
      <p className="text-xsTiny sm:text-xs pt-2">
        © 2022 DeFIRE. All right reserved.
      </p>
      <ul className="grid grid-cols-3 gap-9 sm:gap-20 ">
        <li>
          <img src={twitter} alt="twitter" />
        </li>
        <li>
          <img src={discord} alt="discord" />
        </li>
        <li>
          <img src={medium} alt="medium" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
