"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full fixed bg-secondary bg-slate-900 text-white flex justify-between items-center p-4 rounded-xl shadow-sm">
            <div>
                <Button variant="ghost">
                    <Link className="font-semibold text-xl" href="#home">
                        Ryan Davidson
                    </Link>
                </Button>
            </div>
            <div>
                <div className="md:hidden">
                    <button onClick={() => setNavbar(!navbar)}>
                        {navbar ? <MdClose size={30} /> : <MdMenu size={30}/>}
                    </button>
                </div>
                <div className={`${navbar ? "block" : "hidden"} md:block`}>
                    <Button variant="ghost">
                        <Link href="#home">
                            Home
                        </Link>
                    </Button>
                    <Button variant="ghost">
                        <Link href="#projects">
                            Projects
                        </Link>
                    </Button>
                    <Button variant="ghost">
                        <Link href="#">
                            Photos
                        </Link>
                    </Button>
                    <Button variant="ghost">
                        Contact
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;