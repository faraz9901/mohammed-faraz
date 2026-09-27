import React from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

function Experience() {
  const education = [
    {
      degree: "Bachelor of Engineering (ECE)",
      institution: "ISL Engineering College",
      location: "Hyderabad",
      year: "2022",
      gpa: "CGPA: 7.3",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Diploma in Engineering (ECE)",
      institution: "Nawab Shah Alam Khan College",
      location: "Hyderabad",
      year: "2019",
      gpa: "CGPA: 7.6",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Pripton Innovations",
      period: "Aug 2025 – Present",
      location: "Remote",
      type: "Full-time",
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Building an online exam proctoring platform with NestJS, PostgreSQL (Prisma), Redis, BullMQ, and Socket.IO on the backend.",
        "Developed Next.js App Router monorepo with Turborepo, shared internal packages, subdomain-based multi-tenancy, and role-based dashboards.",
        "Built secure Electron desktop client with kiosk mode, process monitoring, webcam/screen chunk-based recording uploads to S3, and heartbeat reporting.",
        "Implemented Better Auth with email OTP, magic links, social OAuth, and cookie-based sessions with runtime RBAC.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Fly Your Tech",
      period: "Aug 2024 – Aug 2025",
      location: "Remote",
      type: "Full-time",
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-blue-500 to-purple-500",
      achievements: [
        "Built an e-commerce saree platform with Next.js, Redux Toolkit, Tailwind CSS, dynamic homepage management, coupon workflows, and PayU integrations.",
        "Developed a multi-tenant construction management platform using React, Vite, ShadCN UI, NestJS, and PostgreSQL with role-based access control.",
        "Implemented auth, subscription billing, Redis rate limiting, background jobs, and file uploads using AWS Cognito, S3, BullMQ, and Razorpay.",
        "Integrated OCR document processing pipelines using Python and Gemini APIs. Deployed on GCP, later migrated to Dokploy for cost optimization.",
      ],
    },
    {
      title: "Software Developer",
      company: "Devmind IT Solutions",
      period: "Apr 2024 – Jul 2024",
      location: "Remote",
      type: "Full-time",
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500",
      achievements: [
        "Developed features for a live medical education platform using Next.js, Firebase, Zustand, and Tailwind CSS.",
        "Built quiz and event modules. Improved Lighthouse scores from ~70 to 90+ through lazy loading and rendering optimization.",
      ],
    },
    {
      title: "Freelance MERN Stack Developer",
      company: "Self-Employed",
      period: "Nov 2023 – Jan 2025",
      location: "Hyderabad",
      type: "Freelance",
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Developed a job portal with user authentication (JWT), Nest.js backend, and Recharts dashboard",
        "Built secure and scalable REST APIs with MongoDB for CRUD operations and user roles",
        "Delivered client projects including e-commerce stores, social media apps, and SaaS dashboards",
      ],
    },
  ];

  return (
    <>
      <section id="education" className="section-padding relative scroll-mt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
              <span className="">Education</span> &amp; Experience
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
              My academic background and professional journey
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-10 text-center section-heading">
              Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                    }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <div className="text-white">{edu.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1 card hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-800">
                        {edu.degree}
                      </h4>
                      <span className="text-sm font-semibold text-purple-600 mt-1 sm:mt-0 bg-purple-50 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 font-semibold text-sm">{edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-10 text-center section-heading">
              Professional Experience
            </h3>
            <div className="flex flex-col gap-8">
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-start ${index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                    }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${work.color} rounded-full flex items-center justify-center`}>
                      <div className="text-white">{work.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1 card hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">
                          {work.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase className="h-4 w-4 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-600 font-medium">
                            {work.company}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${work.type === 'Full-time'
                            ? 'bg-green-100 text-green-700'
                            : work.type === 'Internship'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-purple-100 text-purple-700'
                            }`}>
                            {work.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 mt-2 sm:mt-0">
                        <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                          {work.period}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{work.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2 mt-4">
                      {work.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-2"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${work.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
