import React from "react"

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Prisma" },
    { skill: "Prismic" },
    { skill: "Jenkins" },
    { skill: "Agile" },
    { skill: "Storybook" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="flex flex-col justify-center items-center py-24">
                <h1 className="text-slate-50 text-center font-bold text-4xl">
                    Skills
                    <hr className="w-6 h-1 mx-auto my-4 bg-yellow-300 border-0 rounded"></hr>
                </h1>
                <div className="text-center md:w-1/2">
                    <div className="flex flex-wrap flex-row justify-center z-10">
                        {skills.map((item, idx) => {
                            return (
                                <p
                                    key={idx}
                                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-semibold"
                                >
                                    {item.skill}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection