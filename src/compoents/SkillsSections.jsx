import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Inbox,
  KeyRound,
  LayoutGrid,
  Radio,
  Rocket,
  Search,
  Server,
  Workflow,
} from "lucide-react";
import {
  SiAmazon,
  SiAmazonecs,
  SiAmazons3,
  SiAmazonsqs,
  SiAmazonwebservices,
  SiAnthropic,
  SiApachekafka,
  SiApachemaven,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGooglebigquery,
  SiGooglecloud,
  SiGradle,
  SiGrafana,
  SiJavascript,
  SiJenkins,
  SiJunit5,
  SiKeras,
  SiKibana,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOllama,
  SiOpenai,
  SiOpencv,
  SiOpenjdk,
  SiOracle,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPytorch,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiScikitlearn,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

const groups = [
  {
    id: "languages",
    label: "Languages",
    note: "Languages I write production code in.",
    icon: Code2,
    items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "PHP", "C#"],
  },
  {
    id: "backend",
    label: "Backend",
    note: "Frameworks and service patterns for APIs and microservices.",
    icon: Server,
    items: [
      "FastAPI",
      "Django",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "Node.js",
      "Express",
      "Laravel",
      "ASP.NET Core",
      "REST APIs",
      "Microservices",
      "WebSockets",
    ],
  },
  {
    id: "ai",
    label: "AI",
    note: "Model APIs, training libraries, and retrieval.",
    icon: Brain,
    items: [
      "OpenAI APIs",
      "Anthropic",
      "Ollama",
      "MedGemma",
      "LLM integration",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "OpenCV",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Qdrant",
    ],
  },
  {
    id: "data",
    label: "Data",
    note: "Databases, warehouses, and message queues.",
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BigQuery",
      "MySQL",
      "Oracle SQL",
      "SQL Server",
      "Supabase",
      "Kafka",
      "RabbitMQ",
      "ActiveMQ",
      "SQS",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    note: "Cloud platforms and container tooling.",
    icon: Cloud,
    items: [
      "AWS",
      "Elastic Beanstalk",
      "ECS",
      "S3",
      "CloudFront",
      "Secrets Manager",
      "Google Cloud",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    note: "CI, observability, and the tools around a release.",
    icon: Rocket,
    items: [
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Grafana",
      "Kibana",
      "Git",
      "GitHub",
      "GitLab",
      "Maven",
      "Gradle",
      "JUnit",
      "Postman",
      "Linux",
    ],
  },
];

const toolIcons = {
  Python: SiPython,
  Java: SiOpenjdk,
  SQL: Database,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  "C#": SiDotnet,
  FastAPI: SiFastapi,
  Django: SiDjango,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpringsecurity,
  "Spring Cloud": SiSpring,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Laravel: SiLaravel,
  "ASP.NET Core": SiDotnet,
  "REST APIs": Braces,
  Microservices: Boxes,
  WebSockets: Radio,
  "OpenAI APIs": SiOpenai,
  Anthropic: SiAnthropic,
  Ollama: SiOllama,
  MedGemma: Brain,
  "LLM integration": Bot,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  Keras: SiKeras,
  OpenCV: SiOpencv,
  "scikit-learn": SiScikitlearn,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Qdrant: Search,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  BigQuery: SiGooglebigquery,
  MySQL: SiMysql,
  "Oracle SQL": SiOracle,
  "SQL Server": Database,
  Supabase: SiSupabase,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  ActiveMQ: Inbox,
  SQS: SiAmazonsqs,
  AWS: SiAmazonwebservices,
  "Elastic Beanstalk": SiAmazon,
  ECS: SiAmazonecs,
  S3: SiAmazons3,
  CloudFront: Globe,
  "Secrets Manager": KeyRound,
  "Google Cloud": SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "GitHub Actions": SiGithubactions,
  Jenkins: SiJenkins,
  "CI/CD": Workflow,
  Grafana: SiGrafana,
  Kibana: SiKibana,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Maven: SiApachemaven,
  Gradle: SiGradle,
  JUnit: SiJunit5,
  Postman: SiPostman,
  Linux: SiLinux,
};

const Chip = ({ name, index }) => {
  const Icon = toolIcons[name];
  return (
    <li
      className="stack-chip inline-flex items-center gap-1.5 rounded-md border border-border bg-background/80 px-2 py-1 text-[12px] text-foreground transition-colors duration-150"
      style={{ "--j": index }}
    >
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
      {name}
    </li>
  );
};

export const SkillsSections = () => {
  const sectionRef = useRef(null);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState("all");
  const selected = groups.find((group) => group.id === active);

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

  return (
    <section id="skills" className="screen" ref={sectionRef}>
      <div className="container reveal flex min-h-0 w-full flex-1 flex-col">
        <h2 className="section-title">Stack</h2>
        <div className="screen-body">
          <div className="ide-panel">
            <div className="ide-bar justify-between">
              <span className="ide-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="min-w-0 truncate">~/portfolio/package.json</span>
              <span className="ml-auto inline-flex items-center gap-2 text-muted-foreground">
                <span className="status-ok" aria-hidden="true" />
                resolved
              </span>
            </div>

            <div
              className="flex gap-1 overflow-x-auto border-b border-border px-3 py-2.5"
              role="tablist"
              aria-label="Skill groups"
            >
              <button
                type="button"
                role="tab"
                aria-selected={active === "all"}
                onClick={() => setActive("all")}
                className={
                  active === "all"
                    ? "inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary/12 px-2.5 py-1 text-[12px] text-primary"
                    : "inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px] text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
                }
              >
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                All
              </button>
              {groups.map((group) => {
                const Icon = group.icon;
                const on = active === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(group.id)}
                    className={
                      on
                        ? `stack-tab is-on tone-${group.id} inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px]`
                        : `stack-tab tone-${group.id} inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px] text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground`
                    }
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {group.label}
                  </button>
                );
              })}
            </div>

            {selected ? (
              <div key={selected.id} className={shown ? `tone tone-${selected.id} stack-detail is-shown px-4 py-5 sm:px-6` : `tone tone-${selected.id} stack-detail px-4 py-5 sm:px-6`}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-2 text-base text-foreground">
                    <span className="stack-mark inline-flex h-8 w-8 items-center justify-center rounded-md border">
                      <selected.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {selected.label}
                  </h3>
                  <p className="text-[11px] text-muted-foreground">{selected.items.length} tools</p>
                </div>
                <p className="copy mt-2 max-w-xl text-sm text-muted-foreground">{selected.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {selected.items.map((item, index) => (
                    <Chip key={item} name={item} index={index} />
                  ))}
                </ul>
              </div>
            ) : (
              <div
                key="all"
                className={
                  shown
                    ? "stack-grid is-shown grid gap-3 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3"
                    : "stack-grid grid gap-3 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3"
                }
              >
                {groups.map((group, index) => {
                  const Icon = group.icon;
                  return (
                    <article
                      key={group.id}
                      className={`tone tone-${group.id} stack-card glass-card rounded-lg border p-3.5`}
                      style={{ "--i": index }}
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="flex items-center gap-2 text-[13px] text-foreground">
                          <span className="stack-mark inline-flex h-7 w-7 items-center justify-center rounded-md border">
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          {group.label}
                        </h3>
                        <span className="text-[11px] text-muted-foreground">{group.items.length}</span>
                      </div>
                      <ul className="flex flex-wrap gap-1.5">
                        {group.items.map((item, itemIndex) => (
                          <Chip key={item} name={item} index={itemIndex} />
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
