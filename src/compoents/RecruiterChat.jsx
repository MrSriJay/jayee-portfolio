import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { answerFromProfile } from "../lib/profileBrief";

const starters = ["Current role", "Years of experience", "Stack", "Education", "Projects"];

export const RecruiterChat = () => {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Ask about Jayanga’s work, studies, stack, or how to reach him. Replies use his CV.",
    },
  ]);
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const waitRef = useRef(0);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, open, pending]);

  useEffect(() => () => window.clearTimeout(waitRef.current), []);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (value) => {
    const text = value.trim();
    if (!text || pending) return;
    const reply = answerFromProfile(text);
    setDraft("");
    setPending(true);
    setMessages((current) => [...current, { role: "user", text }]);
    window.clearTimeout(waitRef.current);
    waitRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", text: reply }]);
      setPending(false);
    }, 900);
  };

  return (
    <div className="ask-dock">
      {open && (
        <section className="ask-panel ide-panel" aria-label="Ask about Jayanga">
          <div className="ide-bar">
            <Bot className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} aria-hidden="true" />
            <span>ask.sh</span>
            <button type="button" className="ask-close" aria-label="Close chat" onClick={() => setOpen(false)}>
              <X className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
          </div>
          <div className="ask-log" ref={logRef}>
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={message.role === "user" ? "ask-user" : "ask-bot"}>
                {message.text}
              </p>
            ))}
            {pending && (
              <p className="ask-bot ask-wait" role="status">
                thinking…
              </p>
            )}
          </div>
          {messages.length === 1 && (
            <div className="ask-starters">
              {starters.map((prompt) => (
                <button key={prompt} type="button" onClick={() => send(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
          )}
          <form
            className="ask-form"
            onSubmit={(event) => {
              event.preventDefault();
              send(draft);
            }}
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="ask about his experience"
              aria-label="Question about Jayanga"
              disabled={pending}
            />
            <button type="submit" aria-label="Send question" disabled={pending || !draft.trim()}>
              <Send className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
          </form>
        </section>
      )}
      <button
        type="button"
        className="ask-open"
        aria-expanded={open}
        aria-label={open ? "Hide chat" : "Ask about Jayanga"}
        onClick={() => setOpen((value) => !value)}
      >
        <Bot className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        ask
      </button>
    </div>
  );
};
