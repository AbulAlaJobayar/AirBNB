import Container from "../Container/Container";
import Logo from "./Logo";
import MenuDropdown from "./MenueDropdown";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className=" py-4 border-b-[1px]">
        <Container>
            <div className="flex justify-between items-center">
                <Logo></Logo>
                <Search></Search>
                <MenuDropdown></MenuDropdown>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
