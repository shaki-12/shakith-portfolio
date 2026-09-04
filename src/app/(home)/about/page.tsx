import { config } from "@/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ContactCard from "@/components/contact-card";

export const metadata = {
  title: "About",
  description: "About Shakith A",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <Avatar className="size-32 md:size-40">
            <AvatarImage src={config.developer.avatar} alt="Avatar" />
            <AvatarFallback className="text-4xl">SA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{config.developer.name}</h1>
            <p className="text-xl text-muted-foreground mb-1">{config.developer.title}</p>
            <p className="text-sm text-muted-foreground opacity-70 mb-4">{config.developer.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{config.developer.bio}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <ContactCard title="GitHub" href={`https://github.com/${config.social.github}`} icon={<FaGithub className="w-4 h-4" />} />
          <ContactCard title="LinkedIn" href={`https://linkedin.com/in/${config.social.linkedin}`} icon={<FaLinkedin className="w-4 h-4" />} />
          <ContactCard title="Email" href={`mailto:${config.social.email}`} icon={<HiMail className="w-4 h-4" />} />
          <div className="p-6 bg-muted rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaMapPin className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-muted-foreground">{config.social.location}</p>
          </div>
        </div>

        <div className="bg-muted rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">{config.developer.about}</p>
        </div>

        <div className="bg-muted rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          {config.education.map((edu) => (
            <div key={edu.id} className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{edu.institution}</h3>
              <p className="text-muted-foreground">{edu.degree}</p>
              <div className="flex gap-4 text-sm text-muted-foreground opacity-70">
                <span>{edu.period}</span>
                <span>-</span>
                <span>{edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="flex flex-col gap-8">
            {config.experience.map((exp) => (
              <div key={exp.id} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <p className="text-muted-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground opacity-70">{exp.period}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-background rounded-md">{skill}</span>
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
