import { useEffect, useRef, useState } from "react";
import { Brain, Cloud, FileCode2, FileText, Folder, Mail, MapPin, ScrollText, Server, Terminal } from "lucide-react";

const focus = [
  {
    label: "01",
    title: "backend",
    icon: Server,
    text: "APIs, microservices, and event-driven processing with Python, FastAPI, and Java Spring Boot.",
  },
  {
    label: "02",
    title: "applied_ai",
    icon: Brain,
    text: "LLM workflows for financial and healthcare data, alongside earlier research in medical imaging.",
  },
  {
    label: "03",
    title: "cloud",
    icon: Cloud,
    text: "AWS and Google Cloud, containerized services, and CI/CD from staging through production.",
  },
];

const files = [
  { name: "engineer.ts", icon: FileCode2 },
  { name: "README.md", icon: FileText },
  { name: "roles.log", icon: ScrollText },
  { name: "contact.sh", icon: Terminal },
];

const lines = [
  { kind: "cmt", text: "// production profile" },
  { kind: "code", text: "export const engineer = {" },
  { kind: "prop", name: "name", value: "Jayanga Palihena" },
  { kind: "prop", name: "role", value: "Senior Software Engineer" },
  { kind: "prop", name: "org", value: "Arenberg AG" },
  { kind: "prop", name: "base", value: "Colombo, Sri Lanka" },
  { kind: "focus" },
  { kind: "end" },
];

const Line = ({ line }) => {
  if (line.kind === "cmt") return <span className="syn-cmt">{line.text}</span>;
  if (line.kind === "code") {
    return (
      <>
        <span className="syn-key">export const</span> engineer = {"{"}
      </>
    );
  }
  if (line.kind === "prop") {
    return (
      <span className="pl-4">
        {line.name}: <span className="syn-str">&quot;{line.value}&quot;</span>,
      </span>
    );
  }
  if (line.kind === "focus") {
    return (
      <span className="pl-4">
        focus: [<span className="syn-str">&quot;backend&quot;</span>,{" "}
        <span className="syn-str">&quot;ai&quot;</span>, <span className="syn-str">&quot;cloud&quot;</span>],
      </span>
    );
  }
  return (
    <span>
      {"}"}
      <span className="caret" aria-hidden="true" />
    </span>
  );
};

export const AboutMeSection = () => {
  const sectionRef = useRef(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(reduce);

  useEffect(() => {
    if (reduce) return undefined;
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.28 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <section id="about" ref={sectionRef} className="screen">
      <div className={shown ? "about-stage is-shown container reveal flex min-h-0 w-full flex-1 flex-col" : "about-stage container reveal flex min-h-0 w-full flex-1 flex-col"}>
        <h2 className="section-title">About</h2>
        <div className="screen-body">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="about-panel ide-panel lg:col-span-7" style={{ "--i": 0 }}>
              <div className="ide-bar">
                <span className="ide-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileCode2 size={13} strokeWidth={1.75} aria-hidden="true" />
                  ~/portfolio/engineer.ts
                </span>
              </div>
              <div className="grid lg:grid-cols-[9.25rem_1fr]">
                <aside className="file-tree hidden lg:block" aria-label="Files">
                  <p>
                    <Folder size={13} strokeWidth={1.75} aria-hidden="true" />
                    portfolio
                  </p>
                  {files.map((file) => (
                    <span key={file.name} className={file.name === "engineer.ts" ? "is-open" : undefined}>
                      <file.icon size={13} strokeWidth={1.75} aria-hidden="true" />
                      {file.name}
                    </span>
                  ))}
                </aside>
                <div className="px-4 py-4 text-[12px] leading-7 sm:px-5 sm:text-[13px]">
                  {lines.map((line, index) => (
                    <p key={line.kind === "prop" ? line.name : line.kind} className="code-row about-line" style={{ "--i": index }}>
                      <span className="ln">{index + 1}</span>
                      <Line line={line} />
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-panel ide-panel lg:col-span-5" style={{ "--i": 1 }}>
              <div className="ide-bar">
                <span className="ide-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileText size={13} strokeWidth={1.75} aria-hidden="true" />
                  ~/portfolio/README.md
                </span>
              </div>
              <div className="about-bit flex items-center gap-3 border-b border-border px-4 py-4" style={{ "--i": 0 }}>
                <img
                  src="/1619099561066.png"
                  alt="Jayanga Palihena"
                  className="h-12 w-12 rounded-md border border-border object-cover"
                />
                <div>
                  <p className="text-sm">Jayanga Palihena</p>
                  <p className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="space-y-4 px-4 py-5">
                <p className="about-bit copy text-sm leading-relaxed text-muted-foreground" style={{ "--i": 1 }}>
                  I build backend and AI systems for financial intelligence and healthcare platforms:
                  APIs, data pipelines, and cloud infrastructure in Python, FastAPI, Java, PostgreSQL,
                  and AWS.
                </p>
                <p className="about-bit copy text-sm leading-relaxed text-muted-foreground" style={{ "--i": 2 }}>
                  Before Arenberg I spent over three years at Axiata Digital Labs on telecom
                  microservices, and worked on medical imaging research and defence software.
                </p>
                <a href="#contact" className="about-bit btn-cmd gap-2" style={{ "--i": 3 }}>
                  <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
                  contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {focus.map((item, index) => (
              <article key={item.label} className="about-card ide-panel p-5" style={{ "--i": index }}>
                <p className="flex items-center gap-2 text-[11px] text-primary">
                  <item.icon size={14} strokeWidth={1.75} aria-hidden="true" />
                  [{item.label}] {item.title}
                </p>
                <p className="copy mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
