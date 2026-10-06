import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { Footer } from "./Footer";

const ResearchGateIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="8.25" />
    <path d="M9.2 16.2V7.8h3.15a2.55 2.55 0 0 1 0 5.1H9.2" />
  </svg>
);

const details = [
  {
    label: "Email",
    value: "jayanga.sl@gmail.com",
    href: "mailto:jayanga.sl@gmail.com",
    icon: Mail,
  },
  {
    label: "Mobile",
    value: "+94 766 628 878",
    href: "tel:+94766628878",
    icon: Smartphone,
  },
  {
    label: "Phone",
    value: "+94 112 412 427",
    href: "tel:+94112412427",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Colombo, Sri Lanka",
    icon: MapPin,
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jayanga-palihena-33a69716a/",
    icon: Linkedin,
  },
  { name: "Instagram", href: "https://www.instagram.com/jayanga.palihena/", icon: Instagram },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Jayanga-Palihena",
    icon: ResearchGateIcon,
  },
  { name: "GitHub", href: "https://github.com/MrSriJay", icon: Github },
];

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const address = "jayanga.sl@gmail.com";
    let ok = false;
    try {
      await navigator.clipboard.writeText(address);
      ok = true;
    } catch {
      const field = document.createElement("textarea");
      field.value = address;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.append(field);
      field.select();
      ok = document.execCommand("copy");
      field.remove();
    }
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="contact" className="screen">
      <div className="container reveal flex min-h-0 w-full flex-1 flex-col">
        <h2 className="section-title">Contact</h2>
        <div className="screen-body">
        <div className="ide-panel">
          <div className="ide-bar">
            <span className="ide-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>~/portfolio/contact.sh</span>
          </div>
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="border-b border-border px-4 py-6 sm:px-6 lg:col-span-5 lg:border-r lg:border-b-0">
              <p className="text-[12px]">
                <span className="prompt-user">jayanga</span>
                <span className="prompt-path">@portfolio:~$</span> ./contact
              </p>
              <p className="copy mt-4 text-sm leading-relaxed text-muted-foreground">
                I work on AI-driven backend systems for finance and healthcare. For backend, cloud,
                or applied AI roles, write directly.
              </p>
            </div>
            <div className="px-4 py-2 sm:px-6 lg:col-span-7">
              <dl>
                {details.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="grid grid-cols-[1.25rem_5.5rem_1fr] items-center gap-3 border-b border-border py-3 text-[12px] last:border-b-0">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                      <dt className="text-muted-foreground">{item.label.toLowerCase()}</dt>
                      <dd className="flex flex-wrap items-center gap-2">
                        {item.href ? (
                          <a href={item.href} className="text-primary hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                        {item.label === "Email" && (
                          <button
                            type="button"
                            onClick={copyEmail}
                            className="btn-cmd-quiet px-2 py-1"
                          >
                            {copied ? "copied" : "copy"}
                          </button>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-4 sm:px-6">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={item.name}
                >
                  <Icon className="h-4 w-4" />
                  {item.name.toLowerCase()}
                </a>
              );
            })}
          </div>
        </div>
        <Footer />
        </div>
      </div>
    </section>
  );
};
