import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
function NavBar() {
  return (
    <nav className="flex justify-between h-[1.5rem]">
      <img
        src="/assets/manjo.png"
        draggable="false"
        alt="Manjo"
        className="object-fill h-[inherit]"
      />
      <div className="actionContainer flex gap-3">
        <Button
          paddingX="px-[20px]"
          paddingY="py-[5px]"
          buttonText="Login"
          bg="bg-black"
          bgHover="hover:bg-[#000000]"
          stroke="stroke-[#A8A8A8]"
          textColor="text-white"
          textWeight="font-medium"
        ></Button>
        <FontAwesomeIcon className="w-[30px]" icon={faBars} color="#C8C8C8" />
      </div>
      {/* this hamburger needs to be animated */}
    </nav>
  );
}

export default NavBar;
