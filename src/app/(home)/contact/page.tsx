import { config } from "@/config";
import ContactCard from "@/components/contact-card";
import { FaGithub, FaLinkedin, FaMapPin, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Shakith A",
};

const ContactPage = () => {
  const emailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=shakith2004@gmail.com";

  return (
    <div className="container mx-auto px-6 py-10 lg:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Get In Touch
        </h1>

        <p className="text-muted-foreground mb-7 text-lg">
          Open to discussing new projects, creative ideas, or opportunities to
          collaborate.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
          {/* GitHub */}
          <ContactCard
            title="GitHub"
            href={`https://github.com/${config.social.github}`}
            icon={<FaGithub className="w-4 h-4" />}
          />

          {/* LinkedIn */}
          <ContactCard
            title="LinkedIn"
            href={`https://linkedin.com/in/${config.social.linkedin}`}
            icon={<FaLinkedin className="w-4 h-4" />}
          />

          {/* Email */}
          <ContactCard
            title="Email"
            href={emailUrl}
            icon={<HiMail className="w-4 h-4" />}
          />

          {/* Phone */}
          <a
            href="tel:+916382049125"
            className="flex items-center gap-4 p-6 bg-muted rounded-xl hover:bg-muted-foreground/10 transition-all duration-150"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background">
              <FaPhone className="w-4 h-4" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">
                +91 63820 49125
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-6 bg-muted rounded-xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background">
              <FaMapPin className="w-4 h-4 text-muted-foreground" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">
                {config.social.location}
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-4 p-6 bg-muted rounded-xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">Availability</h3>
              <p className="text-sm text-muted-foreground">
                Open to opportunities
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-muted rounded-xl p-7 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Let&apos;s work together
          </h2>

          <p className="text-muted-foreground mb-5 max-w-2xl mx-auto">
            Have a project in mind or a development opportunity? Feel free to
            reach out and let&apos;s connect.
          </p>

          <a
            href={emailUrl}
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