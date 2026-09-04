import { config } from "@/config";
import ContactCard from "@/components/contact-card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaMapPin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Shakith A",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
            href={`mailto:${config.social.email}`}
            icon={<HiMail className="w-4 h-4" />}
          />

          <div className="p-6 bg-muted rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaMapPin className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-muted-foreground">{config.social.location}</p>
          </div>
        </div>

        <div className="bg-muted rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Let&apos;s work together</h2>
          <p className="text-muted-foreground mb-6">
            Whether you have a project in mind or just want to chat about technology,
            feel free to reach out. Always interested in new opportunities.
          </p>
          <a
            href={`mailto:${config.social.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary text-white dark:text-black hover:opacity-90 transition-opacity"
            >
              <HiMail className="w-5 h-5 mr-2" />
              Send an Email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
