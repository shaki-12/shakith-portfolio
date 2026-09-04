"use client";

import Carousel from "@/components/photo-carousel";
import { config } from "@/config";
import { Skeleton } from "@/components/ui/skeleton";

export const SliderView = () => {
  const projects = config.projects;

  if (projects.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-xl">
        <p className="text-gray-500">No projects to display</p>
      </div>
    );
  }

  const bgColors = [
    "bg-zinc-900 dark:bg-zinc-800",
    "bg-stone-900 dark:bg-stone-800",
    "bg-neutral-900 dark:bg-neutral-800",
  ];

  return (
    <Carousel
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      containerClassName="h-full"
      autoplayDelay={5000}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex-[0_0_100%] h-full relative group ${bgColors[index % bgColors.length]} rounded-xl`}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 rounded-xl" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 rounded-xl">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-md text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export const SliderViewLoadingStatus = () => {
  return (
    <div className="w-full lg:w-1/2 h-[70vh] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3 rounded-xl">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
