"use client";

import { motion } from "motion/react";
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

export const SkillsShowcase = () => {
  const skills = config.skills;

  return (
    <div className="p-4 bg-muted rounded-xl">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Skills & Technologies</h3>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon.toLowerCase()] || SiDotnet;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl bg-muted hover:bg-muted-foreground/10 transition-all duration-150 ease-[cubic-bezier(0.22, 1, 0.36, 1)]"
            >
              <div className="relative aspect-square flex items-center justify-center p-6">
                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                  <IconComponent className="w-full h-full text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 pb-5 z-10">
                <h4 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
