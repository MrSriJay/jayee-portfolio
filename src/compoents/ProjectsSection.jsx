import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";

const projects = [
  {
    id: "chatbot",
    index: "01",
    title: "AI customer service chatbot",
    description:
      "A customer assistant on WhatsApp and Instagram. FastAPI routes messages through OpenAI, with history stored in Supabase.",
    skills: ["Python", "FastAPI", "OpenAI", "Supabase"],
  },
  {
    id: "find",
    index: "02",
    title: "#Find — hashtag prediction",
    description:
      "A CNN–LSTM model that classifies short video clips and suggests hashtags, trained on a modified UCF101 set.",
    skills: ["Python", "Computer vision", "CNN", "LSTM"],
  },
  {
    id: "carbon",
    index: "03",
    title: "Carbon footprint management",
    description:
      "An internal system for JAT Holdings to record, calculate, and report carbon emissions, with a monitoring dashboard.",
    skills: ["PHP", "Laravel", "MySQL"],
  },
  {
    id: "rest",
    index: "04",
    title: "RESTful API",
    description:
      "A Java Spring Boot API with PostgreSQL for web and Android clients, from the final-year Bachelor's project. Endpoints cover CRUD, validation, and authentication.",
    skills: ["Java", "Spring Boot", "PostgreSQL", "Android"],
  },
  {
    id: "trajectory",
    index: "05",
    title: "Bullet trajectory field tool",
    description:
      "An Android app that estimates the angle and trajectory of perforated AK bullets in 1 mm sheet metal. ScienceDirect / Elsevier, July 2021.",
    skills: ["Android", "Java", "Geometry"],
    href: "https://www.sciencedirect.com/science/article/abs/pii/S2666281721",
    linkLabel: "ScienceDirect",
  },
  {
    id: "wsi",
    index: "06",
    title: "Whole-slide image research",
    description:
      "Segmentation and deep-learning analysis of whole-slide images at NUIST, using U-Net and SegGini with distributed processing.",
    skills: ["U-Net", "SegGini", "WSI", "Deep learning"],
  },
];

const Cover = ({ id }) => {
  if (id === "chatbot") {
    return (
      <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden="true">
        <rect width="360" height="200" className="cover-plate" />
        <rect x="96" y="22" width="118" height="160" rx="20" className="fill-secondary" />
        <rect x="106" y="38" width="98" height="124" rx="10" className="fill-background" />
        <rect x="142" y="168" width="26" height="4" rx="2" className="fill-background" />
        <g className="cover-mark">
          <rect x="116" y="52" width="58" height="20" rx="9" className="fill-secondary" />
          <rect x="136" y="80" width="58" height="20" rx="9" className="fill-primary" />
          <path d="M230 78h62a12 12 0 0 1 12 12v28a12 12 0 0 1-12 12h-40l-14 12v-12h-8a12 12 0 0 1-12-12V90a12 12 0 0 1 12-12z" className="fill-primary" />
          <rect x="242" y="90" width="34" height="4" rx="2" className="fill-background" />
          <rect x="242" y="100" width="22" height="4" rx="2" className="fill-background" />
        </g>
      </svg>
    );
  }

  if (id === "find") {
    return (
      <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden="true">
        <rect width="360" height="200" className="cover-plate" />
        <g className="cover-mark">
          <rect x="62" y="46" width="18" height="108" rx="5" className="ink-orange" />
          <rect x="104" y="46" width="18" height="108" rx="5" className="ink-orange" />
          <rect x="40" y="74" width="104" height="18" rx="5" className="ink-orange-mid" />
          <rect x="40" y="110" width="104" height="18" rx="5" className="ink-orange-mid" />
        </g>
        <rect x="188" y="32" width="132" height="136" rx="16" className="fill-secondary" />
        <rect x="202" y="46" width="104" height="62" rx="10" className="fill-background" />
        <path d="M228 92c0-6 4-10 8-10 2 0 4 1 5 3 1-2 3-3 5-3 4 0 8 4 8 10 0 8-13 16-13 16s-13-8-13-16z" className="ink-orange" />
        <rect x="202" y="120" width="46" height="18" rx="9" className="ink-orange-mid" />
        <rect x="254" y="120" width="40" height="18" rx="9" className="fill-background" />
        <circle cx="214" cy="150" r="5" className="ink-orange-soft" />
        <rect x="224" y="147" width="36" height="6" rx="3" className="fill-background" />
      </svg>
    );
  }

  if (id === "carbon") {
    return (
      <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden="true">
        <rect width="360" height="200" className="cover-plate" />
        <g className="cover-mark">
          <path
            d="M118 156c0 0-28-36-20-72 8-34 46-48 74-34-18 28-26 58-32 96-6 8-16 12-22 10z"
            className="ink-green-mid"
          />
          <path d="M112 148c6-34 18-62 40-90" className="fill-none stroke-background" strokeWidth="3" />
        </g>
        <rect x="196" y="70" width="28" height="94" rx="5" className="ink-green" />
        <rect x="234" y="96" width="28" height="68" rx="5" className="ink-green-mid" />
        <rect x="272" y="118" width="28" height="46" rx="5" className="ink-green-soft" />
      </svg>
    );
  }

  if (id === "rest") {
    return (
      <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden="true">
        <rect width="360" height="200" className="cover-plate" />
        <g className="cover-mark">
          <path d="M78 46c-22 18-22 90 0 108" className="stroke-red" strokeWidth="14" />
          <path d="M118 46c22 18 22 90 0 108" className="stroke-red-mid" strokeWidth="14" />
        </g>
        <rect x="176" y="48" width="132" height="28" rx="8" className="ink-red" />
        <rect x="176" y="86" width="108" height="28" rx="8" className="ink-red-mid" />
        <rect x="176" y="124" width="84" height="28" rx="8" className="ink-red-soft" />
      </svg>
    );
  }

  if (id === "trajectory") {
    return (
      <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden="true">
        <rect width="360" height="200" className="cover-plate" />
        <rect x="48" y="28" width="92" height="148" rx="16" className="fill-secondary" />
        <rect x="56" y="42" width="76" height="108" rx="8" className="fill-background" />
        <g className="cover-mark">
          <rect x="168" y="58" width="148" height="88" rx="10" className="ink-cyan" />
          <circle cx="242" cy="102" r="14" className="fill-background" />
          <path d="M168 40c36 8 78-6 120 18" className="stroke-cyan" strokeWidth="6" strokeDasharray="2 10" />
          <circle cx="292" cy="56" r="6" className="ink-cyan-mid" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden="true">
      <rect width="360" height="200" className="cover-plate" />
      <rect x="168" y="36" width="132" height="128" rx="12" className="fill-secondary" />
      <rect x="180" y="48" width="108" height="104" rx="6" className="fill-background" />
      <g className="cover-mark">
        <path d="M78 118c8-34 28-58 62-62-8 22-6 46 8 70-24 4-52 2-70-8z" className="ink-purple" />
        <circle cx="206" cy="78" r="8" className="ink-purple-mid" />
        <circle cx="248" cy="96" r="6" className="ink-purple-soft" />
        <circle cx="228" cy="124" r="7" className="ink-purple" />
        <path d="M206 78l22 18M248 96l-20 28" className="stroke-purple" strokeWidth="3" />
      </g>
    </svg>
  );
};

const pageSizeFor = (width) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 4;
};

export const ProjectsSections = () => {
  const sectionRef = useRef(null);
  const [shown, setShown] = useState(false);
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(4);
  const [failed, setFailed] = useState(false);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return undefined;
    }
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setPerView(pageSizeFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [perView]);

  useEffect(() => {
    fetch("https://api.github.com/users/MrSriJay/repos?sort=updated&per_page=20")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setFailed(true);
          return;
        }
        setRepos(data.filter((repo) => !repo.fork).slice(0, 12));
      })
      .catch(() => setFailed(true));
  }, []);

  const pages = Math.max(1, Math.ceil(repos.length / perView));

  useEffect(() => {
    if (pages <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setPage((current) => (current + 1) % pages);
    }, 6500);
    return () => window.clearInterval(id);
  }, [pages]);

  const go = (direction) => {
    setPage((current) => (current + direction + pages) % pages);
  };

  return (
    <section id="projects" className="screen" ref={sectionRef}>
      <div className="container reveal flex min-h-0 w-full flex-1 flex-col">
        <h2 className="section-title">Projects</h2>
        <div className="screen-body space-y-4">
          <div className="ide-panel glass-panel">
            <div className="ide-bar">
              <span className="ide-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>selected work</span>
            </div>
            <div className={shown ? "work-grid is-shown grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3" : "work-grid grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3"}>
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="work-card flex flex-col overflow-hidden rounded-lg border"
                  style={{ "--i": index }}
                >
                  <div className="aspect-video border-b border-border">
                    <Cover id={project.id} />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5">
                    <p className="text-[11px] text-muted-foreground">{project.index}</p>
                    <h3 className="mt-1 text-sm leading-snug text-foreground">{project.title}</h3>
                    <p className="copy mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border bg-background/80 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-[11px] text-primary"
                      >
                        {project.linkLabel}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            className="ide-panel glass-panel"
            onMouseEnter={() => {
              paused.current = true;
            }}
            onMouseLeave={() => {
              paused.current = false;
            }}
          >
            <div className="ide-bar justify-between">
              <span className="inline-flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" />
                github
              </span>
              <div className="ml-auto flex items-center gap-2">
                {pages > 1 && (
                  <span className="text-muted-foreground">
                    {page + 1} / {pages}
                  </span>
                )}
                {pages > 1 && (
                  <span className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground"
                      aria-label="Previous repositories"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      className="rounded-md border border-border p-1 text-muted-foreground hover:text-foreground"
                      aria-label="Next repositories"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </span>
                )}
              </div>
            </div>

            {failed && (
              <p className="px-4 py-5 text-[12px] text-muted-foreground">Repositories are unavailable right now.</p>
            )}

            {repos.length > 0 && (
              <div className="overflow-hidden px-3 py-3">
                <div
                  className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
                  style={{ transform: `translateX(-${page * 100}%)` }}
                >
                  {Array.from({ length: pages }, (_, index) => (
                    <div
                      key={index}
                      className={
                        perView === 1
                          ? "grid w-full shrink-0 grid-cols-1 gap-3"
                          : perView === 2
                            ? "grid w-full shrink-0 grid-cols-2 gap-3"
                            : "grid w-full shrink-0 grid-cols-4 gap-3"
                      }
                    >
                      {repos.slice(index * perView, index * perView + perView).map((repo) => (
                        <a
                          key={repo.id}
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repo-link flex min-h-36 flex-col rounded-lg border border-border px-3 py-3"
                        >
                          <span className="text-[13px] leading-snug text-foreground">{repo.name}</span>
                          <span className="copy mt-2 line-clamp-3 flex-1 text-[12px] leading-relaxed text-muted-foreground">
                            {repo.description || "Repository"}
                          </span>
                          <span className="mt-3 flex items-center justify-between gap-2 text-[11px]">
                            <span className="text-primary">{repo.language || "code"}</span>
                            <span className="inline-flex items-center gap-1 text-muted-foreground">
                              <Github className="h-3 w-3" />
                              view
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center border-t border-border px-3 py-2.5">
              <a
                href="https://github.com/MrSriJay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                View my GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
