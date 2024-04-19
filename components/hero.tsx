import Image from "next/image";
import pfp from '@/public/images/profile.jpg'
import { LuMousePointerClick, LuArrowDownToDot } from "react-icons/lu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

interface HeroSectionProps {
    title: String,
};

const HeroSection = ({ title }: HeroSectionProps) => {
    return (
        <section id="home">
            <h2 className="w-full flex justify-evenly items-center p-4 py-24">
                <div className="p-4 w-full text-center lg:text-start xl:w-1/3">
                    <div className="text-5xl font-bold tracking-wide pb-2 text-slate-50">
                        {title}
                    </div>
                    <div className="text-lg text-slate-400">
                        Hi there! I&apos;m a SoCal-based software engineer with a passion for coding, soccer, gyming, and travelling! Balancing my tech expertise with my love for sports and travel keeps me energized and inspired. Let&apos;s connect and share stories about our adventures!
                    </div>
                    <div className="pt-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center p-2 border border-solid border-yellow-300 h-7 rounded-sm bg-yellow-300 text-black">
                                    <p className="font-semibold mr-2">Socials</p>
                                    <LuMousePointerClick />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="start">
                                <DropdownMenuItem>
                                    <Link href="https://www.linkedin.com/in/ryan-j-davidson/">LinkedIn</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="https://github.com/rjindavidson">GitHub</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="p-4 hidden md:block w-[400px] lg:w-[600px] xl:w-[800px]">
                    <Image
                        className="rounded-xl"
                        placeholder="blur"
                        src={pfp} 
                        alt="Portfolio Picture" 
                        width={800} 
                        height={800} 
                    />
                </div>
            </h2>
            <div className="flex justify-center items-center py-12">
                <LuArrowDownToDot color="white" size={30} className="animate-bounce" />
            </div>
        </section>
    )
}

export default HeroSection;