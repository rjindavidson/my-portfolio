import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full fixed bg-secondary bg-slate-900 text-white flex justify-between items-center p-4 rounded-xl shadow-sm">
            <div>
                <Button variant="ghost">
                    <Link href="#home">
                        Ryan Davidson
                    </Link>
                </Button>
            </div>
            <div>
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
                    About
                </Button>
                <Button variant="ghost">
                    Contact
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;