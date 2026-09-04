import { config } from "@/config";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiFigma,
  SiDotnet,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

export const metadata = {
  title: "Skills",
  description: "Skills and technologies of Shakith A",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  csharp: SiDotnet,
  java: FaJava,
  javascript: SiJavascript,
  python: SiPython,
  sql: FaDatabase,
  html: SiHtml5,
  css: SiCss3,
  dotnet: SiDotnet,
  sqlserver: FaDatabase,
  mysql: SiMysql,
  git: SiGit,
  figma: SiFigma,
};

const SkillsPage = () => {
  const skills = config.skills;

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon.toLowerCase()] || SiDotnet;
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
                  <h3 className="text-base font-semibold text-center">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-muted rounded-xl p-6">
              <h3 className="text-base font-semibold mb-3">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-background rounded-md text-muted-foreground">{item}</span>
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
