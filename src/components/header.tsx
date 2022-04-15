import defireIcon from "../images/defireIcon.svg";
import defireTypography from "../images/defireTypography.svg";

function Header() {
  return (
    <nav className="container flex items-start py-4">
      <div className="py-1 flex justify-between w-full">
        <img src={defireIcon} alt="" />
        <img src={defireTypography} alt="" />
      </div>
    </nav>
  );
}

export default Header;
