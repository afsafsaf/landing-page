import { Button } from "@nextui-org/button";
import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-full items-center justify-center ">
        <div className="navbar bg-amber-800">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">MY PORTFOLIO</a>
          </div>
          <div className="flex-none sm:mr-10 mr-10 md:mr-10 ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>My Project</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto ">
        <div className=" ">
          <div className=" md:h-[10px] h-[100px] ">
            <Image
              src="/working.jpg"
              alt="background.jpg"
              width={1500}
              height={1000}
              className="rounded-xl"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
