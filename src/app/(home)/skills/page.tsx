import { config } from "@/config";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiDotnet,
  SiAngular,
  SiTypescript,
  SiOracle,
  SiOpenai,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

import {
  FaJava,
  FaDatabase,
  FaCode,
  FaServer,
  FaRobot,
  FaShieldAlt,
  FaKey,
  FaLayerGroup,
} from "react-icons/fa";

export const metadata = {
  title: "Skills",
  description: "Skills and technologies of Shakith A",
};

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  // Programming Languages
  csharp: SiDotnet,
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  sql: FaDatabase,

  // Backend
  aspnetcore: SiDotnet,
  dotnet: SiDotnet,
  efcore: FaLayerGroup,
  linq: FaCode,

  // Frontend
  angular: SiAngular,
  html: SiHtml5,
  css: SiCss3,

  // Database
  sqlserver: FaDatabase,
  mysql: SiMysql,
  oracle: SiOracle,

  // Tools
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  postman: SiPostman,
  swagger: SiSwagger,

  // AI / GenAI
  openai: SiOpenai,
  rag: FaRobot,
  mlnet: FaRobot,
};

const SkillsPage = () => {
  const skills = config.skills;

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & Technologies
        </h1>

        <p className="text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => {
            const skillName = skill.name.toLowerCase();

            let IconComponent =
              iconMap[skill.icon.toLowerCase()] || FaCode;

            // Specific icons for concepts
            if (skillName === "entity framework core") {
              IconComponent = FaLayerGroup;
            } else if (skillName === "linq") {
              IconComponent = FaCode;
            } else if (skillName === "rest apis") {
              IconComponent = FaServer;
            } else if (skillName === "oop") {
              IconComponent = FaCode;
            } else if (skillName === "crud") {
              IconComponent = FaDatabase;
            } else if (skillName === "mvc architecture") {
              IconComponent = FaLayerGroup;
            } else if (skillName === "dependency injection") {
              IconComponent = FaCode;
            } else if (skillName === "repository pattern") {
              IconComponent = FaDatabase;
            } else if (skillName === "jwt authentication") {
              IconComponent = FaKey;
            } else if (skillName === "role-based authorization") {
              IconComponent = FaShieldAlt;
            } else if (skillName === "generative ai") {
              IconComponent = FaRobot;
            } else if (skillName === "llms") {
              IconComponent = FaRobot;
            } else if (skillName === "rag") {
              IconComponent = FaRobot;
            } else if (skillName === "ml.net") {
              IconComponent = FaRobot;
            }

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-muted hover:bg-muted-foreground/10 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-background dark:bg-gray-800 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <IconComponent className="w-full h-full text-foreground dark:text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-muted rounded-xl p-6">
              <h3 className="text-base font-semibold mb-3">
                {cat.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-background rounded-md text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;