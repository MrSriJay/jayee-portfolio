import { useEffect, useId, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { createPortal } from "react-dom";
import nanjingLogo from "../assets/timeline_logos/nanjing-logo.png";
import axiataLogo from "../assets/timeline_logos/axiata-logo.png";
import esoftLogo from "../assets/timeline_logos/esoft-logo.png";
import plyLogo from "../assets/timeline_logos/ply-logo.png";
import cdrdLogo from "../assets/timeline_logos/cdrdt-logo.png";
import freelancerLogo from "../assets/timeline_logos/freelancer-logo.png";
import arenbergLogo from "../assets/timeline_logos/arenberg-logo.png";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (value) => {
  if (!value || value === "Present") return value || "";
  if (/^\d{4}$/.test(value)) return value;
  const [year, month] = value.split("-");
  const index = Number(month) - 1;
  if (!year || Number.isNaN(index) || !months[index]) return value;
  return `${months[index]} ${year}`;
};

const sortKey = (item) => (item.start.length === 4 ? `${item.start}-01` : item.start);

export const timeline = [
  {
    kind: "work",
    title: "Senior Software Engineer — Backend & AI Systems",
    org: "Arenberg AG",
    start: "2026-01",
    end: "Present",
    logo: arenbergLogo,
    points: [
      "Contributing to the development of Arenberg, a financial intelligence and trading/market monitoring platform that processes market news, economic indicators, financial events, and real-time market data to provide data-driven and AI-assisted insights.",
      "Designing and implementing scalable backend services and data pipelines using Python, FastAPI, PostgreSQL, MongoDB, Redis, and Google BigQuery.",
      "Developing Xyron, the trading and market monitoring component of the platform, supporting real-time monitoring of financial markets, trading activity, order flow, options flow, commodities, cryptocurrencies, and live market data.",
      "Developing APIs and backend services for real-time market monitoring, financial data processing, market layers, trading workflows, and analytics.",
      "Building asynchronous and event-driven processing systems using AWS SQS, Redis, RabbitMQ, Apache Kafka, and ActiveMQ for distributed processing and background workloads.",
      "Building ETL and data-processing pipelines to transform and structure large volumes of financial data for analytics, monitoring, and AI-driven applications.",
      "Integrating AI and LLM technologies, including OpenAI APIs, Anthropic, Ollama, and other AI models, into backend workflows for intelligent data analysis and natural-language interaction with structured data.",
      "Integrating AI assistants with Google BigQuery to enable natural-language querying and analysis of structured financial datasets.",
      "Contributing to AXIVIS, an AI-powered medical platform, developing backend services and AI-enabled healthcare workflows for patient data, laboratory reports, medical information processing, and personalized health intelligence.",
      "Implementing asynchronous AXIVIS workflows using AWS SQS, Redis, WebSockets, and background workers for long-running AI and healthcare data-processing tasks.",
      "Working with medical AI technologies including MedGemma, OpenAI APIs, Anthropic, and Ollama to support AI-assisted medical data analysis and healthcare workflows.",
      "Working extensively with AWS cloud services, including Elastic Beanstalk, ECS, SQS, CloudFront, S3, and Secrets Manager, for application deployment, asynchronous processing, configuration, and production infrastructure.",
      "Working with Google Cloud Platform, particularly BigQuery and data-streaming services, for large-scale data processing, analytics, and AI applications.",
      "Managing containerized and distributed applications using Docker and Kubernetes across development, staging, and production environments.",
      "Implementing CI/CD and engineering workflows using GitHub, automated testing, database migrations, deployment pipelines, health checks, and staging validation.",
      "Troubleshooting and maintaining cloud-hosted applications across development, staging, and production environments, including AWS infrastructure, application configuration, databases, Redis, message queues, APIs, and deployment issues.",
      "Collaborating across backend engineering, AI/ML, cloud infrastructure, DevOps, and data engineering to design, implement, test, deploy, and maintain production systems.",
    ],
  },
  {
    kind: "work",
    title: "Research Analyst in AI",
    org: "Nanjing University of Information Science and Technology",
    start: "2025-01",
    end: "2025-07",
    logo: nanjingLogo,
    points: [
      "Conducted research on AI-based medical imaging analysis, focusing on histopathology and prostate cancer grading.",
      "Worked with deep learning models such as UNet and SegGini for weakly supervised semantic segmentation of whole-slide images.",
      "Preprocessed large-scale histology datasets (.mrxs format) and implemented pipeline components for tile selection, annotation, and training.",
      "Evaluated segmentation and classification performance using metrics like Dice score, accuracy, and per-class analysis.",
      "Integrated RabbitMQ, ActiveMQ, and Apache Kafka for messaging, queuing, and data streaming solutions.",
      "Collaborated with supervisors and domain experts to integrate AI techniques into clinical research workflows.",
    ],
  },
  {
    kind: "work",
    title: "Senior Software Engineer",
    org: "Axiata Digital Labs, Sri Lanka",
    start: "2023-04",
    end: "2024-11",
    logo: axiataLogo,
    points: [
      "Developed and maintained telecom applications including NCell DMS (Distribution Management System), NCell PG (Payment Gateway), and Dialog StarPoints, by designing and implementing Java Spring Boot-based backend services using microservices architecture and deploying them as cloud-hosted REST APIs.",
      "Worked with multiple databases including Oracle SQL, PostgreSQL, and Microsoft SQL Server.",
      "Deployed services in a Kubernetes and Docker cluster environment, enabling efficient containerized application management.",
      "Utilized Kibana and Grafana for real-time system monitoring, log analysis, and debugging of production issues.",
      "Integrated RabbitMQ, ActiveMQ, and Apache Kafka for messaging, queuing, and data streaming solutions.",
      "Analyzed, implemented, and deployed new Customer Requirements (CRs) across multiple systems, ensuring alignment with business needs and minimal disruption to production environments.",
      "Provided Level 3 support for business-critical telecom and fintech applications, ensuring minimal downtime and optimal performance.",
      "Managed customer interactions by addressing technical concerns, gathering feedback, and resolving issues in line with SLAs.",
      "Conducted training sessions for team members on system usage and troubleshooting.",
      "Analyzed distribution metrics to drive continuous improvement and enhance overall customer experience.",
      "Delivered Knowledge Transfer (KT) sessions to share system overviews and ensure smooth onboarding for new team members.",
    ],
  },
  {
    kind: "study",
    title: "MSc in Artificial Intelligence",
    org: "Nanjing University of Information Science and Technology, China",
    start: "2022-09",
    end: "2024-07",
    logo: nanjingLogo,
  },
  {
    kind: "work",
    title: "Software Engineer",
    org: "Axiata Digital Labs, Sri Lanka",
    start: "2021-08",
    end: "2023-03",
    logo: axiataLogo,
    points: [
      "Contributed to the development of NCell Payment Gateway (PG) and Dialog DMS (Distribution Management System) as part of the backend and integration teams.",
      "Gained hands-on experience with Java Spring Boot, including Spring Security, Spring Data JPA, Spring MVC, and Spring Cloud, through self-learning and project work.",
      "Worked on frontend development using Angular, contributing to feature implementation and UI enhancements.",
      "Developed modules using ASP.NET and ASP.NET Core within the Dialog DMS project, handling both backend logic and service integration.",
      "Handled database components such as stored procedures, views, and triggers across Oracle, PostgreSQL, and SQL Server environments.",
      "Managed server deployments and configurations in Linux environments, including application hosting, log monitoring, and basic shell scripting.",
      "Participated in smaller-scale projects using Python, contributing to automation scripts and backend service tasks.",
      "Provided timely responses to business support requests and user inquiries, delivering support in alignment with established SLAs.",
    ],
  },
  {
    kind: "work",
    title: "Software Engineer | Research Officer",
    org: "Centre for Defence Research & Development",
    start: "2021-04",
    end: "2021-08",
    logo: cdrdLogo,
    points: [
      "Developed and maintained the Performance Monitoring and Fault Management (PMFM) System using the PHP Laravel framework, implementing backend functionalities including CRUD operations, email handling, file upload and storage, authentication management, and server configuration. Utilized MySQL for database management and handled deployment and hosting.",
      "Developed the Foreigner Safety Management System, a PHP Laravel-based web application featuring CRUD operations and real-time tracking using location-based services. Leveraged MySQL and MongoDB, integrated Google Location APIs, and handled server hosting and deployment.",
    ],
  },
  {
    kind: "work",
    title: "Software Engineering Intern",
    org: "Centre for Defence Research & Development",
    start: "2020-09",
    end: "2021-03",
    logo: cdrdLogo,
    points: [
      "Designed and developed a comprehensive Android application using Java and the Android SDK to analyze bullet impact images and accurately calculate the angle of incidence.",
      "Utilized SQLite for local data storage and built the application to support forensic investigations.",
      "Delivered to the Sri Lanka Police for field implementation upon successful development, testing, and validation.",
      "Publication (Elsevier): https://authors.elsevier.com/c/1dVKI9UFWMsVTm",
    ],
  },
  {
    kind: "study",
    title: "Diploma in Web Engineering",
    org: "ESOFT Metro Campus, Sri Lanka",
    start: "2018-01",
    end: "2019-12",
    logo: esoftLogo,
    points: ["Offered by Pearson."],
  },
  {
    kind: "study",
    title: "BSc (Hons) Software Engineering",
    org: "University of Plymouth, UK",
    start: "2017-09",
    end: "2020-07",
    logo: plyLogo,
    points: ["Awarded First Class Honours.", "Aggregate final mark 77.19, GPA 4.0."],
  },
  {
    kind: "work",
    title: "Freelance Graphic Designer",
    org: "Independent",
    start: "2017",
    end: "Present",
    logo: freelancerLogo,
    points: [
      "Worked with diverse local businesses, YouTube channels, and international clients on graphic design and video editing projects.",
      "Delivered creative solutions for branding, social media, promotional content, and visual storytelling.",
      "Proficient in Adobe Photoshop, Illustrator, Premiere Pro, and After Effects to produce high-quality visuals tailored to client needs.",
    ],
  },
].sort((a, b) => sortKey(b).localeCompare(sortKey(a)));

const itemId = (item) => `${item.title}-${item.start}`;

const CardFace = ({ item, study, current }) => {
  const Icon = study ? GraduationCap : Briefcase;
  return (
    <>
      <img
        src={item.logo}
        alt=""
        className="mt-0.5 h-8 w-8 shrink-0 rounded-md border border-border bg-white object-contain p-1"
      />
      <span className="min-w-0 flex-1">
        <span className={study ? "tl-kind is-study" : "tl-kind is-work"}>
          <Icon strokeWidth={1.75} aria-hidden="true" />
          {study ? "study" : "work"}
        </span>
        <span className="block text-[13px] leading-snug text-foreground">{item.title}</span>
        <span className="mt-0.5 block text-[12px] text-muted-foreground">{item.org}</span>
        <span
          className={
            study
              ? "tl-when mt-0.5 flex items-center justify-end gap-1.5"
              : "tl-when mt-0.5 flex items-center gap-1.5"
          }
        >
          {formatDate(item.start)} — {formatDate(item.end)}
          {current ? " · now" : ""}
          {current && <span className="status-ok" aria-hidden="true" />}
        </span>
      </span>
    </>
  );
};

const DetailCard = ({ item, onClose }) => {
  const titleId = useId();
  const closeRef = useRef(null);
  const current = item.end === "Present";

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="tl-pop">
      <button type="button" className="tl-pop-bg" aria-label="Close details" onClick={onClose} />
      <article className="tl-card ide-panel" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="ide-bar tl-card-bar">
          <button ref={closeRef} type="button" className="tl-close" aria-label="Close details" onClick={onClose} />
          <span className="tl-card-title">{item.title}</span>
        </div>
        <div className="tl-card-body">
        <div className="flex gap-3">
          <img
            src={item.logo}
            alt=""
            className="h-11 w-11 shrink-0 rounded-md border border-border bg-white object-contain p-1"
          />
          <div className="min-w-0">
            <p className={item.kind === "study" ? "tl-kind is-study" : "tl-kind is-work"}>
              {item.kind === "study" ? (
                <GraduationCap strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Briefcase strokeWidth={1.75} aria-hidden="true" />
              )}
              {item.kind}
            </p>
            <p className="mt-1 text-[13px] text-primary">
              {formatDate(item.start)} — {formatDate(item.end)}
              {current ? " · now" : ""}
            </p>
            <h3 id={titleId} className="mt-1 text-[18px] leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-[14px] text-muted-foreground">{item.org}</p>
          </div>
        </div>
        {item.points?.length > 0 && (
          <ul className="tl-points copy text-[14px] leading-relaxed text-muted-foreground">
            {item.points.map((point) => {
              const url = point.match(/https?:\/\/\S+/)?.[0];
              if (!url) return <li key={point}>{point}</li>;
              const [before, after] = point.split(url);
              return (
                <li key={point}>
                  {before}
                  <a href={url} target="_blank" rel="noreferrer">
                    {url}
                  </a>
                  {after}
                </li>
              );
            })}
          </ul>
        )}
        </div>
      </article>
    </div>,
    document.body
  );
};

export const EducationSection = () => {
  const sectionRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [openId, setOpenId] = useState(null);
  const open = timeline.find((item) => itemId(item) === openId) ?? null;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDrawn(true);
      return undefined;
    }
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDrawn(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const close = () => {
    const id = openId;
    setOpenId(null);
    if (id) document.getElementById(`step-${id}`)?.focus();
  };

  return (
    <section id="highlights" className="screen" ref={sectionRef}>
      <div className="container reveal flex min-h-0 w-full flex-1 flex-col">
        <h2 className="section-title">Experience</h2>
        <div className="screen-body">
          <div className="ide-panel">
            <div className="ide-bar">
              <span className="ide-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>career path</span>
              <span className="ml-auto">now → earlier</span>
            </div>
            <div className="p-4">
              <div className="tl-heads">
                <p>study</p>
                <span />
                <p>work</p>
              </div>
              <ol className={drawn ? "tl-track is-drawn" : "tl-track"}>
                {timeline.map((item, index) => {
                  const id = itemId(item);
                  const current = item.end === "Present";
                  const study = item.kind === "study";
                  return (
                    <li
                      key={id}
                      className={current ? `tl-step is-now is-${item.kind}` : `tl-step is-${item.kind}`}
                      style={{ "--i": index }}
                    >
                      <span className="tl-dot" aria-hidden="true" />
                      {study ? (
                      <article className="tl-item is-plain">
                        <CardFace item={item} study current={current} />
                      </article>
                      ) : (
                      <button
                        id={`step-${id}`}
                        type="button"
                        className={openId === id ? "tl-item is-open" : "tl-item"}
                        aria-haspopup="dialog"
                        aria-expanded={openId === id}
                        onClick={() => setOpenId(id)}
                      >
                        <CardFace item={item} study={false} current={current} />
                      </button>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      {open && <DetailCard item={open} onClose={close} />}
    </section>
  );
};
