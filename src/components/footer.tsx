import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import medium from "../images/medium.svg";

function Footer() {
  return (
    <footer className=" text-defire-water flex justify-between mt-28 pb-7 pl-7 w-4/6">
      <p className="text-xs">© 2022 DeFIRE. All right reserved.</p>
      <ul className="grid grid-cols-3">
        <li className="pr-20">
          <img src={twitter} alt="twitter" />
        </li>
        <li className="pr-20">
          <img src={discord} alt="discord" />
        </li>
        <li className="pr-20">
          <img src={medium} alt="medium" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
