import { useState } from "react";
import Logo from "../assets/MemoireLogo.png";
import { NavLink } from "react-router-dom";

// import ToggleSidebar from '../components/ToggleSidebar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="bg-[#f27638]    w-full flex justify-around items-center p-3 box-border ">
        <img src={Logo} alt="Logo" className="w-[25vw] h-[10vh]" />
        <div className="flex">
          <ul className="flex text-[15px] gap-5 text-white font-semibold max-[850px]:hidden ">
            <li>
              <NavLink
                to={"/home"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/crafts"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                OurCrafts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/testimonials"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
          <i
            id="menu"
            className="material-icons  text-4xl text-white   min-[850px]:hidden "
            onClick={toggleSidebar}
          >
            menu
          </i>
        </div>
      </div>

      <div className="flex">
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-full bg-[#f27638] text-white w-64 z-50 transition-transform duration-300 ease-in-out`}
        >
          {/* Sidebar content */}
          <ul className="m-5 flex flex-col items-center justify-evenly">
            <li className="pt-10">
              <NavLink
                to={"/home"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="pt-10">
              <NavLink
                to={"/about"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li className="pt-10">
              <NavLink
                to={"/crafts"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                OurCrafts
              </NavLink>
            </li>
            <li className="pt-10">
              <NavLink
                to={"/testimonials"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li className="pt-10">
              <NavLink
                to={"/contact"}
                className={({isActive}) =>
                  ` hover:cursor-pointer ${
                    isActive
                      ? "bg-white rounded-2xl text-black p-2"
                      : "bg-orange-500"
                  }`
                }
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
}
