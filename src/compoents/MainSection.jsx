import { useEffect, useRef, useState } from "react";
import { Bot, Brain, Cloud, Code2, Download, FolderGit2, Loader2, Server } from "lucide-react";

const signals = [
  { label: "Python", icon: Code2 },
  { label: "AI", icon: Brain },
  { label: "Cloud", icon: Cloud },
  { label: "Backend", icon: Server },
  { label: "LLM", icon: Bot },
];
const GREETING = "Hello I am";
const NAME = "Jayanga Palihena";
const ENTER_MS = 1680;
const HELLO_DELAY = ENTER_MS;
const HELLO_DUR = 980;
const NAME_DELAY = ENTER_MS + HELLO_DUR + 220;
const NAME_DUR = 1280;

export const MainSection = () => {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [saving, setSaving] = useState(false);
  const statusRef = useRef(null);

  useEffect(() => {
    const node = statusRef.current;
    if (!node) return undefined;
    if (reduce) {
      node.textContent = `Ln 2, Col ${NAME.length}`;
      return undefined;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now) => {
      const t = now - start;
      let line = 1;
      let col = 1;
      if (t < HELLO_DELAY) {
        col = 1;
      } else if (t < HELLO_DELAY + HELLO_DUR) {
        col = Math.max(1, Math.round(((t - HELLO_DELAY) / HELLO_DUR) * GREETING.length));
      } else if (t < NAME_DELAY) {
        col = GREETING.length;
      } else if (t < NAME_DELAY + NAME_DUR) {
        line = 2;
        col = Math.max(1, Math.round(((t - NAME_DELAY) / NAME_DUR) * NAME.length));
      } else {
        node.textContent = `Ln 2, Col ${NAME.length}`;
        return;
      }
      node.textContent = `Ln ${line}, Col ${col}`;
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduce]);

  return (
    <section id="main" className="screen relative w-full">
      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-center px-3 sm:px-4">
        <div className="hero-card ide-panel relative my-auto max-h-[calc(100%-2.75rem)] w-full max-w-[1080px] overflow-y-auto">
          <span className="drag-cursor" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5.2 3.2 19.4 12.2 12.7 13.5 10.1 20.4 5.2 3.2Z"
                fill="#fff"
                stroke="#141416"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="ide-bar">
            <span className="ide-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>~/portfolio — zsh</span>
            <span className="ml-auto hidden sm:inline">main</span>
          </div>

          <div
            className="hero-stage space-y-6 px-4 py-6 sm:px-8 sm:py-9"
            style={{
              "--hello-delay": `${HELLO_DELAY}ms`,
              "--hello-dur": `${HELLO_DUR}ms`,
              "--name-delay": `${NAME_DELAY}ms`,
              "--name-dur": `${NAME_DUR}ms`,
              "--rest-delay": `${NAME_DELAY + NAME_DUR - 80}ms`,
            }}
          >
            <div>
              <p className="hero-line text-lg text-muted-foreground sm:text-2xl">
                <span className="type-run" style={{ "--n": GREETING.length, "--dur": "var(--hello-dur)", "--delay": "var(--hello-delay)" }}>
                  {GREETING}
                </span>
                <span className="caret caret-hello" aria-hidden="true" />
              </p>
              <h1 className="hero-line mt-2 min-h-[1.15em] text-4xl leading-tight text-foreground sm:text-6xl" aria-label={NAME}>
                <span className="type-run" style={{ "--n": NAME.length, "--dur": "var(--name-dur)", "--delay": "var(--name-delay)" }}>
                  {NAME}
                </span>
                <span className="caret caret-name" aria-hidden="true" />
              </h1>
            </div>

            <div className="hero-rest space-y-5">
              <p className="text-sm text-primary sm:text-base">Senior Software Engineer / AI Engineer</p>
              <p className="text-[12px] sm:text-[13px]">
                <span className="prompt-user">jayanga</span>
                <span className="prompt-path">@portfolio:~$</span> cat introduction.txt
              </p>
              <p className="copy max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Building intelligent software systems at the intersection of AI, backend engineering,
                and cloud infrastructure. Currently at Arenberg AG, shipping production services with
                Python, FastAPI, Java, and AWS.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="btn-cmd gap-2">
                  <FolderGit2 size={14} strokeWidth={1.75} aria-hidden="true" />
                  view projects
                </a>
                <a
                  href="/Jayanga-Chathurya-CV.pdf"
                  download="Jayanga-Chathurya-CV.pdf"
                  className="btn-cmd-quiet gap-2"
                  onClick={() => {
                    setSaving(true);
                    window.setTimeout(() => setSaving(false), 1400);
                  }}
                >
                  {saving ? (
                    <Loader2 size={14} strokeWidth={1.75} className="btn-spin" aria-hidden="true" />
                  ) : (
                    <Download size={14} strokeWidth={1.75} aria-hidden="true" />
                  )}
                  {saving ? "saving Jayanga-Chathurya-CV.pdf" : "download resume"}
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-[11px] text-muted-foreground">
                {signals.map((signal) => (
                  <li key={signal.label} className="hero-signal">
                    <signal.icon size={13} strokeWidth={1.75} aria-hidden="true" />
                    {signal.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ide-status">
            <span>main</span>
            <span>utf-8</span>
            <span ref={statusRef}>Ln 1, Col 1</span>
            <span className="ml-auto">zsh</span>
          </div>
        </div>
        <a href="#about" className="scroll-cue" style={{ animationDelay: `${NAME_DELAY + NAME_DUR + 220}ms` }}>
          scroll down to see about me
          <span className="scroll-stem" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
