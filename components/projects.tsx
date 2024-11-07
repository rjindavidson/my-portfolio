import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import authAppImage from "@/public/images/auth-app.png"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ProjectSection = () => {
    return (
        <section id="projects">
            <div className="flex justify-center items-center pt-24">
                <div className="text-4xl font-bold tracking-wide pb-2 text-slate-50">
                    Projects
                </div>
            </div>
            <hr className="w-6 h-1 mx-auto my-4 bg-yellow-300 border-0 rounded"></hr>
            <div className="flex h-full flex-col items-center justify-evenly pt-12 md:flex-row">
                <Card className="w-3/4 mb-4 md:w-1/4">
                    <CardHeader>
                        <CardTitle className="text-xl">Auth Web App</CardTitle>
                        <CardDescription>
                            Web app created to include all the common securities. Email verification, 2FA,
                            Password Reset, Session Tokens, and Protected Routing
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                        {/* <Image src={authAppImage} placeholder="blur" alt="auth app" width={400} height={400}/> */}
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                        <Button size={"lg"}>
                            <Link href="https://github.com/rjindavidson/next-auth/tree/main">GitHub</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-3/4 md:w-1/4">
                    <CardHeader>
                        <CardTitle className="text-xl">Bobar</CardTitle>
                        <CardDescription>
                            Web app created for my friend to order and list their favorite boba spots by geospatial data.
                            Can add and remove drinks and select options to be randomly selected!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                    <Link href="https://github.com/rjindavidson/next-auth/tree/main">GitHub</Link>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                        <Button size={"lg"}>
                            <Link href="https://github.com/rjindavidson/bobar/tree/main">Unavailable</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default ProjectSection;