import { Button } from "@/components/ui/button";

export default function Contacts() {
    return (
        <main className="flex flex-col p-4  bg-slate-800">
            <div className="flex justify-center items-center">
                <Button>
                    Click Me
                </Button>
                {/* REDEPLOY WHEN DONE HERE with vercel --prod*/}
            </div>
        </main>
    )
}