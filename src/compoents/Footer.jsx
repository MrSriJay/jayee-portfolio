import { Github, Linkedin, Mail } from "lucide-react";

const year = new Date().getFullYear();

const links = [
  { name: "GitHub", href: "https://github.com/MrSriJay", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jayanga-palihena-33a69716a/", icon: Linkedin },
  { name: "email", href: "mailto:jayanga.sl@gmail.com", icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="mt-5 border-t border-border pt-4 text-[12px]">
      <p>
        <span className="prompt-user">jayanga</span>
        <span className="prompt-path">@portfolio:~$</span> exit
      </p>
      <p className="copy mt-3 text-sm text-foreground">Thanks for visiting.</p>
      <p className="mt-3 text-muted-foreground">
        connection_status: <span className="text-foreground">CLOSED</span>
      </p>
      <p className="mt-1 inline-flex items-center gap-2 text-muted-foreground">
        system_status: <span className="text-foreground">ONLINE</span>
        <span className="status-ok" aria-hidden="true" />
      </p>
      <p className="mt-3 text-muted-foreground">© {year} Jayanga Palihena</p>
      <p className="mt-3 flex flex-wrap gap-4">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
          >
            <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
            {item.name}
          </a>
        ))}
      </p>
    </footer>
  );
};
