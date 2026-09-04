import { MarqueeCard } from "./marquee-card";
import {
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const technologies = [
  { icon: SiDotnet, name: "ASP.NET MVC" },
  { icon: FaJava, name: "Java" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: FaDatabase, name: "SQL Server" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiGit, name: "Git" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiPython, name: "Python" },
  { icon: FaDatabase, name: "Azure" },
];

const TechMarquee = () => {
  return (
    <div className="bg-muted flex items-center gap-12 p-8 rounded-xl">
      <h2 className="text-lg font-light">Stack</h2>

      <div className="relative flex-1 overflow-hidden">
        <MarqueeCard pauseOnHover className="[--duration:30s]">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4">
              <tech.icon className="size-8" />
              <span className="select-none">{tech.name}</span>
            </div>
          ))}
        </MarqueeCard>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-muted"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-muted"></div>
      </div>
    </div>
  );
};

export default TechMarquee;
