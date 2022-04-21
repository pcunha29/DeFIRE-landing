import defireIcon from "../images/defireIcon.svg";
import defireTypography from "../images/defireTypography.svg";

function Header() {
  return (
    <nav className="flex items-start py-4 px-7 sm:pr-0">
      <div className="py-1 flex justify-between w-full sm:w-4/6">
        <img src={defireIcon} alt="" />
        <img src={defireTypography} alt="" />
      </div>
    </nav>
  );
}

export default Header;
