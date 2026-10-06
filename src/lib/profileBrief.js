import { timeline } from "../compoents/EducationSection.jsx";

const range = (item) => `${item.start} to ${item.end === "Present" ? "present" : item.end}`;

const stop = new Set(
  "the and for with you your his her him what who how when where why does did can about from that this have has are was were jayanga palihena tell please into over".split(
    " "
  )
);

const words = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9+#]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stop.has(word));

const clip = (text) => (text.length > 240 ? `${text.slice(0, 237).trim()}…` : text);

export const answerFromProfile = (question) => {
  const q = question.toLowerCase();

  if (/^(hi|hello|hey)\b/.test(q.trim())) {
    return "Jayanga Palihena is a senior software engineer and AI engineer in Colombo, currently at Arenberg AG. Ask about a role, his studies, his stack, or how to reach him.";
  }

  if (/\b(email|e-mail|phone|mobile|call|contact|reach|linkedin|github|instagram|researchgate|hire)\b/.test(q)) {
    return "Reach Jayanga at jayanga.sl@gmail.com, +94 766 628 878, or +94 112 412 427. LinkedIn is https://www.linkedin.com/in/jayanga-palihena-33a69716a/ and GitHub is https://github.com/MrSriJay.";
  }

  if (/\b(where|based|live|lives|location|colombo)\b/.test(q)) {
    return "Jayanga is based in Colombo, Sri Lanka.";
  }

  if (/\b(stack|skill|skills|tech|tools|language|languages)\b/.test(q)) {
    return "His main languages are Python, Java, SQL, JavaScript, TypeScript, PHP, and C#. Backend work uses FastAPI, Spring Boot, Django, Node.js, and Laravel. AI work uses OpenAI, Anthropic, Ollama, PyTorch, and TensorFlow. Data and cloud work includes PostgreSQL, MongoDB, Redis, BigQuery, Kafka, AWS, Docker, and Kubernetes.";
  }

  if (/^(study|degree|education|university|school)$/.test(q.trim())) {
    return timeline
      .filter((item) => item.kind === "study")
      .map((item) => {
        const notes = item.points?.length ? ` ${item.points.join(" ")}` : "";
        return `${item.title}, ${item.org} (${range(item)}).${notes}`;
      })
      .join("\n");
  }

  if (/\b(project|chatbot|hashtag|carbon|publication|paper)\b/.test(q)) {
    return "Projects on the site include an AI customer-service chatbot (FastAPI, OpenAI, Supabase), #Find hashtag prediction (CNN-LSTM), a carbon footprint system for JAT Holdings, a Spring Boot REST API, an Android bullet-trajectory tool published with Elsevier in July 2021, and whole-slide image research at NUIST.";
  }

  const query = words(question);
  const ranked = timeline
    .map((item) => {
      const hay = `${item.kind} ${item.title} ${item.org} ${(item.points || []).join(" ")}`.toLowerCase();
      let score = 0;
      for (const word of query) if (hay.includes(word)) score += word.length > 5 ? 2 : 1;
      if (/\b(study|degree|education|university|msc|bsc|diploma|school)\b/.test(q) && item.kind === "study") score += 4;
      if (/\b(now|current|present|today)\b/.test(q) && item.org === "Arenberg AG") score += 8;
      return { item, score };
    })
    .sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score < 2) {
    return "That detail is not in the CV on this site. Jayanga can answer it directly at jayanga.sl@gmail.com.";
  }

  return ranked
    .filter((row) => row.score >= Math.max(2, ranked[0].score - 1))
    .slice(0, 2)
    .map(({ item }) => {
      const bullets = (item.points || []).slice(0, 2).map(clip);
      const head = `${item.title} at ${item.org} (${range(item)}).`;
      return bullets.length ? `${head} ${bullets.join(" ")}` : head;
    })
    .join("\n\n");
};
