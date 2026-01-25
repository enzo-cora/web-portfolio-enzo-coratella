'use client';


import {IconComponent} from "@/components/utils.type";
import {CloudIcon, CodeBracketIcon, ServerStackIcon, Squares2X2Icon, WindowIcon} from "@heroicons/react/24/outline";


type SkillGroup = {
    category: string;
    items: string[];
    icon: IconComponent;
};


const skills: SkillGroup[] = [
    {
        category: 'Languages',
        items: ['TypeScript', 'Javascript', 'C'],
        icon: CodeBracketIcon,
    },
    {
        category: 'Backend',
        items: [
            "NodeJs",
            "Nestjs",
            "PostgreSQL",
            "DynamoDB",
            "MongoDB",
            "Redis",
            "RabbitMQ",
            "Kafka",
            "SQS",
            "REST API",
        ],
        icon: ServerStackIcon,
    },
    {
        category: 'Frontend',
        items: [
            "React",
            "NextJs",
            "Angular",
            "UI/UX"
        ],
        icon: WindowIcon,
    },
    {
        category: 'Devops & Cloud',
        items: ["AWS",
            "Docker",
            "Terraform",
            "CI/CD",
            "DevOps",
            "ECS"],
        icon: CloudIcon,
    },
    {
        category: 'Architecture & Soft Skills',
        items: [
            "Clean architecture",
            "Hexagonale",
            "DDD",
            "SOLID",
            "TDD",
            "CQRS",
            "Event-Driven",
            "Event Sourcing",
            "Microservices",
            "Agile",
            "Testing"
        ],
        icon: Squares2X2Icon,
    },
];


export function SkillsSection() {

    return (
        <section className="dark:black py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Skills
                    & Technologies</h2>

                <div>
                    {skills.map((skillGroup) => (
                        <div   key={skillGroup.category}>
                            <div className="flex items-center space-x-2 mt-10 justify-center mb-3">
                                <skillGroup.icon
                                    className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF"
                                    strokeWidth="2"/>


                                <h4 className="text-sm font-bold text-gray-600 dark:text-gray-400">{skillGroup.category}</h4>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center max-w-[750px] mx-auto">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-5 py-2 text-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md ring-1 ring-gray-200 dark:ring-gray-700"
                                    >
										{skill}
									</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
