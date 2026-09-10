import { config } from "@/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ContactCard from "@/components/contact-card";

export const metadata = {
  title: "About",
  description: "About Shakith A - Software Developer",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">

        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
          <Avatar className="size-32 md:size-40 shrink-0">
            <AvatarImage
              src={config.developer.avatar}
              alt={config.developer.name}
            />
            <AvatarFallback className="text-4xl">
              SA
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              SOFTWARE DEVELOPER
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {config.developer.name}
            </h1>

            <p className="text-xl text-muted-foreground mb-2">
              {config.developer.title}
            </p>

            <p className="text-sm text-muted-foreground opacity-70 mb-5">
              {config.developer.subtitle}
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              I build practical and scalable software solutions using
              modern backend, frontend, database, and AI technologies.
              My primary focus is .NET full-stack development with
              C#, ASP.NET Core, Angular, and SQL Server.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <ContactCard
            title="GitHub"
            href={`https://github.com/${config.social.github}`}
            icon={<FaGithub className="w-4 h-4" />}
          />

          <ContactCard
            title="LinkedIn"
            href={`https://linkedin.com/in/${config.social.linkedin}`}
            icon={<FaLinkedin className="w-4 h-4" />}
          />

          <ContactCard
            title="Email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shakith2004@gmail.com"
            icon={<HiMail className="w-4 h-4" />}
          />

          <div className="flex items-center gap-4 p-6 bg-muted rounded-xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background">
              <FaMapPin className="w-4 h-4 text-muted-foreground" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Location
              </h3>

              <p className="text-sm text-muted-foreground">
                {config.social.location}
              </p>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-muted rounded-xl p-7 md:p-8 mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            PROFILE
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            About Me
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I am a Computer Science and Engineering graduate with
            hands-on experience in software development and a strong
            interest in building real-world applications.

            <br />
            <br />

            My development experience includes building RESTful APIs,
            database-driven applications, and responsive web interfaces.
            I work primarily with C#, ASP.NET Core, Entity Framework Core,
            SQL Server, Angular, and TypeScript.

            <br />
            <br />

            I also have an interest in Generative AI and have worked with
            LLMs, OpenAI, prompt engineering, and Retrieval-Augmented
            Generation (RAG) to build AI-powered applications.
          </p>
        </div>

        {/* Development Focus */}
        <div className="bg-muted rounded-xl p-7 md:p-8 mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            WHAT I DO
          </p>

          <h2 className="text-2xl font-semibold mb-6">
            Development Focus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                Backend Development
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Building REST APIs and backend applications using C#,
                ASP.NET Core, Entity Framework Core, LINQ, authentication,
                and authorization.
              </p>
            </div>

            <div className="bg-background rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                Full-Stack Development
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Connecting Angular frontends with .NET APIs and SQL
                databases to create complete full-stack applications.
              </p>
            </div>

            <div className="bg-background rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                Database Development
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing and working with relational databases,
                SQL queries, relationships, CRUD operations, and
                Entity Framework Core.
              </p>
            </div>

            <div className="bg-background rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                AI & GenAI
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Exploring LLMs, OpenAI, prompt engineering, and RAG
                to build practical AI-powered software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-muted rounded-xl p-7 md:p-8 mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            EDUCATION
          </p>

          <h2 className="text-2xl font-semibold mb-6">
            Education
          </h2>

          {config.education.map((edu) => (
            <div key={edu.id} className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Aalim Muhammed Salegh College of Engineering
                </h3>

                <p className="text-muted-foreground mt-1">
                  B.E. Computer Science and Engineering
                </p>

                <div className="flex flex-col gap-1 text-sm text-muted-foreground opacity-70 mt-1">
                  <span>{edu.period}</span>
                  <span>CGPA: 8.0 / 10</span>
                </div>
              </div>

              {/* Institution Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-background rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    Institution Status
                  </p>

                  <p className="text-sm font-medium">
                    Autonomous Institution
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    UGC Autonomous Status • 2025–2035
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    University
                  </p>

                  <p className="text-sm font-medium">
                    Affiliated to Anna University
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Chennai, Tamil Nadu
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    Approval
                  </p>

                  <p className="text-sm font-medium">
                    AICTE Approved
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    Accreditation
                  </p>

                  <p className="text-sm font-medium">
                    NAAC Accredited
                  </p>
                </div>
              </div>

              {/* Degree */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs px-3 py-1.5 bg-background rounded-md">
                  Computer Science & Engineering
                </span>


                <span className="text-xs px-3 py-1.5 bg-background rounded-md">
                  B.E.
                </span>

                <span className="text-xs px-3 py-1.5 bg-background rounded-md">
                  Anna University
                </span>

                <span className="text-xs px-3 py-1.5 bg-background rounded-md">
                  Autonomous Institution
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-muted rounded-xl p-7 md:p-8">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            EXPERIENCE
          </p>

          <h2 className="text-2xl font-semibold mb-6">
            Experience
          </h2>

          <div className="flex flex-col gap-8">
            {config.experience.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-5 border-l border-border"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">
                    {exp.company}
                  </h3>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.location}
                  </span>
                </div>

                <p className="text-muted-foreground">
                  {exp.role}
                </p>

                <p className="text-sm text-muted-foreground opacity-70 mt-1">
                  {exp.period}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-background rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;