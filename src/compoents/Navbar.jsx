import { cn } from "../lib/Utils";
import { useEffect, useState } from "react";
import { Briefcase, FolderGit2, Home, Layers, Mail, Terminal, User } from "lucide-react";
import { ThemeToggle } from "../compoents/ThemeToggle";

const dockItems = [
  { id: "00", name: "home", href: "#main", icon: Home },
];

const navItems = [
  { id: "01", name: "about", href: "#about", icon: User },
  { id: "02", name: "stack", href: "#skills", icon: Layers },
  { id: "03", name: "projects", href: "#projects", icon: FolderGit2 },
  { id: "04", name: "experience", href: "#highlights", icon: Briefcase },
  { id: "05", name: "contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const mark = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const item of navItems) {
        const node = document.getElementById(item.href.slice(1));
        if (node && node.offsetTop <= mark) current = item.href.slice(1);
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="ide-panel relative z-50 mx-auto max-w-[1080px]">
        <div className="ide-bar justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <a href="#main" className="inline-flex min-w-0 items-center gap-2 text-foreground">
              <Terminal className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <span className="max-w-[7.5rem] truncate sm:max-w-none">jayee.me</span>
            </a>
            <span className="hidden text-muted-foreground md:inline">main</span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <p className="hidden items-center gap-2 text-[10px] text-muted-foreground sm:flex">
              <span className="status-ok" aria-hidden="true" />
              available
            </p>
            <span className="status-ok sm:hidden" aria-hidden="true" />
            <ThemeToggle />
          </div>
        </div>

        <nav className="hidden flex-wrap gap-1 px-2 py-2 text-[12px] lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const Icon = item.icon;
            const on = active === item.href.slice(1);
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-muted-foreground transition-colors duration-200 hover:text-primary",
                  on && "bg-primary/12 text-primary"
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="text-primary/80">[{item.id}]</span> {item.name}
              </a>
            );
          })}
        </nav>
      </div>

    </header>

    <nav className="ios-dock flex lg:hidden" aria-label="Sections">
      {[...dockItems, ...navItems].map((item) => {
        const Icon = item.icon;
        const on = item.href === "#main" ? active === "" : active === item.href.slice(1);
        return (
          <a key={item.id} href={item.href} aria-current={on ? "true" : undefined}>
            <Icon strokeWidth={1.75} aria-hidden="true" />
            <span>{item.name}</span>
          </a>
        );
      })}
    </nav>
    </>
  );
};
