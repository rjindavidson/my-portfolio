import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import authAppImage from "@/public/images/auth-app.png"
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const ProjectSection = () => {
    return (
        <section id="projects">
            <div className="flex justify-center items-center pt-24">
                <div className="text-4xl font-bold tracking-wide pb-2 text-slate-50">
                    Projects
                </div>
            </div>
            <div className="flex justify-evenly pt-12">
                <Card className="w-5/12">
                    <CardHeader>
                        <CardTitle>Authentication Web App</CardTitle>
                        <CardDescription>Web app created to include all the common securities. Email verification, 2FA,
                            Password Reset, Session Tokens, and Protected Routing
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                        <Image src={authAppImage} alt="auth app" width={400} height={400}/>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                        <Button>
                            <Link href="https://github.com/rjindavidson/next-auth/tree/main">GitHub</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-5/12">
                    <CardHeader>
                        <CardTitle>Full Stack E-commerce + Dashboard & CMS</CardTitle>
                        <CardDescription>Full stack application using Next.js, MySQL + Prisma, Stripe, and Next&apos;s
                            app router to create a functioning E-commerce web app
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                        {/* TODO: UPDATE APP IMAGE AND GITHUB HREF ONCE COMPLETED */}
                        <Image src={authAppImage} alt="auth app" width={400} height={400}/>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                        <Button>
                            <Link href="https://github.com/rjindavidson/next-auth/tree/main">GitHub</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default ProjectSection;