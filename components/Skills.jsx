import React from "react";
import { Code2, Database, Palette, Settings, Globe, Zap, Server, Cloud } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      color: "from-violet-500 to-purple-500",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Technologies",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "React.js",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "ShadCN UI",
        "Bootstrap",
        "Redux Toolkit",
        "Zustand",
        "React Query",
        "Framer Motion",
        "Recharts",
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend & APIs",
      color: "from-emerald-500 to-green-500",
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "REST APIs",
        "JWT / OAuth",
        "WebSockets",
        "Rate Limiting",
        "RBAC",
        "AWS Cognito",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases & ORMs",
      color: "from-orange-500 to-amber-500",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Mongoose",
        "TypeORM",
        "Prisma",
        "Redis",
        "BullMQ",
      ],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      color: "from-sky-500 to-blue-500",
      skills: [
        "AWS (S3, EC2, RDS, Lambda)",
        "GCP",
        "Docker",
        "Terraform",
        "CI/CD",
        "Vercel",
        "Render",
        "Firebase",
        "GitHub Actions",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Integrations & Services",
      color: "from-pink-500 to-rose-500",
      skills: [
        "Stripe",
        "Razorpay",
        "PayU",
        "Brevo",
        "Google Analytics",
        "Meta Pixel",
      ],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Tools & Platforms",
      color: "from-indigo-500 to-violet-500",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Cron Jobs",
        "BullMQ",
        "Webhooks",
        "SEO",
        "Linux",
        "Figma",
      ],
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design & Other",
      color: "from-fuchsia-500 to-pink-500",
      skills: ["Responsive Design", "UI/UX", "Figma", "SEO", "Web Analytics", "Lighthouse Optimization"],
    },
  ];

  return (
    <section id="skills" className="section-padding relative scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
            Technical <span className="">Skills</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 animate-fade-in-up">
          {skillCategories.map((category, index) => (
            <div key={index} className="card hover-lift group">
              <div className="flex items-center mb-5">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-base font-bold text-gray-800 leading-tight">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge font-semibold text-sm px-3 py-1 hover:scale-105 transition-all duration-300"
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

export default Skills;
