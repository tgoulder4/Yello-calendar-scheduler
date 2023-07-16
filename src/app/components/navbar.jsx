import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <nav className="flex justify-between h-[1.5rem]">
      <img
        src="/assets/manjo.png"
        draggable="false"
        alt="Manjo"
        className="object-fill h-[inherit]"
      />
      <FontAwesomeIcon className="max-w-[30px]" icon={faBars} color="#C8C8C8" />
      {/* this hamburger needs to be animated */}
    </nav>
  );
}

export default NavBar;
