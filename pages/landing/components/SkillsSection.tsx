'use client';

export function SkillsSection() {
    const skills = [
        "NodeJs",
        "Typescript",
        "Clean architecture",
        "Testing",
        "REST API",
        "PostgreSQL",
        "AWS",
        "CI/CD",
        "TDD",
        "Redis",
        "RabbitMQ",
        "Terraform",
        "DevOps",
        "SQS",
        "MongoDB",
        "DDD",
        "Nestjs",
        "SOLID",
        "Event-Driven",
        "CQRS",
        "Event Sourcing",
        "Docker",
        "React",
        "NextJs",
        "Angular",
        "Agile",
        "Microservices",
        "NoSQL",
        "GraphQL",
        'UI/UX',
        'ECS',
        'Kafka',
    ]

    return (
        <section className="dark:black py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Skills
                    & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow dark:hover:shadow-gray-500 text-sm sm:text-base text-gray-900 dark:text-gray-200"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
