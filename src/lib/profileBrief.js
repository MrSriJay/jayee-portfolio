import { timeline } from "../compoents/EducationSection.jsx";

const range = (item) => `${item.start} to ${item.end === "Present" ? "present" : item.end}`;

const stop = new Set(
  "the and for with you your his her him what who how when where why does did can about from that this have has are was were jayanga palihena tell please into over his work experience using know knows use uses".split(
    " "
  )
);

const words = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9+#.]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stop.has(word));

const clip = (text) => (text.length > 220 ? `${text.slice(0, 217).trim()}…` : text);

const skills = [
  "python",
  "java",
  "sql",
  "javascript",
  "typescript",
  "php",
  "c#",
  "fastapi",
  "django",
  "spring",
  "node",
  "laravel",
  "aws",
  "docker",
  "kubernetes",
  "postgresql",
  "mongodb",
  "redis",
  "bigquery",
  "kafka",
  "openai",
  "pytorch",
  "tensorflow",
  "react",
  "angular",
];

const describe = (item, query, limit = 2) => {
  const points = item.points || [];
  const ranked = points
    .map((point) => ({
      point,
      score: words(query).reduce((total, word) => total + (point.toLowerCase().includes(word) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score);
  const chosen = (ranked.some((row) => row.score > 0) ? ranked.filter((row) => row.score > 0) : ranked).slice(0, limit);
  const bullets = chosen.map((row) => clip(row.point));
  const head = `${item.title} at ${item.org} (${range(item)}).`;
  return bullets.length ? `${head} ${bullets.join(" ")}` : head;
};

const findItems = (test) => timeline.filter(test);

export const answerFromProfile = (question) => {
  const q = question.toLowerCase().trim();

  if (/^(hi|hello|hey)\b/.test(q)) {
    return "Jayanga Palihena is a senior software engineer and AI engineer in Colombo, currently at Arenberg AG. You can ask about his current role, years of experience, stack, studies, projects, or how to reach him.";
  }

  if (/\b(salary|compensation|notice|visa|sponsor|relocat|age|married)\b/.test(q)) {
    return "That is not in the CV on this site. Jayanga can answer it directly at jayanga.sl@gmail.com.";
  }

  if (/\b(email|e-mail|phone|mobile|call|contact|reach|linkedin|github|instagram|researchgate|hire)\b/.test(q)) {
    return "Reach Jayanga at jayanga.sl@gmail.com, +94 766 628 878, or +94 112 412 427. LinkedIn is https://www.linkedin.com/in/jayanga-palihena-33a69716a/ and GitHub is https://github.com/MrSriJay.";
  }

  if (/\b(available|availability|open to|hiring|looking for)\b/.test(q)) {
    return "The site lists Jayanga as available. For a role, write to jayanga.sl@gmail.com.";
  }

  if (/\b(where|which company|employer)\b/.test(q) && /\b(work|works|working|job|role|company|employ)\b/.test(q)) {
    const role = timeline.find((item) => item.org === "Arenberg AG");
    return `He is in Colombo, and his current role is at Arenberg AG. ${describe(role, question, 1)}`;
  }

  if (/\b(where|based|live|lives|location|colombo)\b/.test(q)) {
    return "Jayanga is based in Colombo, Sri Lanka.";
  }

  if (/\b(how long|how many years|years of|year of experience)\b/.test(q)) {
    return "Software engineering on the CV runs from the internship in September 2020 through the current Arenberg role, which started in January 2026. He was a senior engineer at Axiata Digital Labs from April 2023 to November 2024. Freelance design work goes back to 2017.";
  }

  if (/\b(who is|about him|background|overview|introduce|summary|tell me about)\b/.test(q)) {
    return "Jayanga Palihena is a senior software engineer and AI engineer based in Colombo. He is at Arenberg AG, building backend and AI systems for financial intelligence and healthcare. Before that he spent more than three years at Axiata Digital Labs on telecom platforms, and he has an MSc in Artificial Intelligence from Nanjing and a first-class BSc in Software Engineering from the University of Plymouth.";
  }

  if (/\b(current role|what does he do|what is his role|working on now)\b/.test(q) || /\b(current|present|right now)\b/.test(q)) {
    const role = timeline.find((item) => item.org === "Arenberg AG");
    return describe(role, question, 2);
  }

  if (/^(study|studies|degree|education|university|school)$/.test(q) || /\b(his education|his studies|his degree)\b/.test(q)) {
    return timeline
      .filter((item) => item.kind === "study")
      .map((item) => {
        const notes = item.points?.length ? ` ${item.points.join(" ")}` : "";
        return `${item.title}, ${item.org} (${range(item)}).${notes}`;
      })
      .join("\n");
  }

  if (/\b(gpa|honours|honors|first class|plymouth|bachelor|bsc)\b/.test(q)) {
    return "BSc (Hons) Software Engineering, University of Plymouth, UK (2017-09 to 2020-07). Awarded First Class Honours. Aggregate final mark 77.19, GPA 4.0.";
  }

  if (/\b(msc|master|masters|nanjing)\b/.test(q) && !/\b(research analyst|whole-slide|wsi|unet)\b/.test(q)) {
    const study = timeline.find((item) => item.title.startsWith("MSc"));
    const research = timeline.find((item) => item.title.startsWith("Research Analyst"));
    return `${describe(study, question, 1)}\n\nHe also worked there as a research analyst from January to July 2025. ${describe(research, question, 1)}`;
  }

  if (/\b(projects|portfolio pieces|side project)\b/.test(q)) {
    return "Projects on the site include an AI customer-service chatbot (FastAPI, OpenAI, Supabase), #Find hashtag prediction (CNN-LSTM), a carbon footprint system for JAT Holdings, a Spring Boot REST API, an Android bullet-trajectory tool published with Elsevier in July 2021, and whole-slide image research at NUIST.";
  }

  if (/\b(publication|published|sciencedirect|elsevier|paper|bullet trajectory)\b/.test(q)) {
    return "In July 2021 Elsevier published his work on an Android tool that estimates the angle and trajectory of perforated AK bullets in 1 mm sheet metal. He built it in Java during a defence-research internship and it was delivered to the Sri Lanka Police.";
  }

  if (/\b(stack|skills|skill set|tech stack|technologies|what can he)\b/.test(q)) {
    return "His main languages are Python, Java, SQL, JavaScript, TypeScript, PHP, and C#. Backend work uses FastAPI, Spring Boot, Django, Node.js, and Laravel. AI work uses OpenAI, Anthropic, Ollama, PyTorch, and TensorFlow. Data and cloud work includes PostgreSQL, MongoDB, Redis, BigQuery, Kafka, AWS, Docker, and Kubernetes.";
  }

  const skill = [...skills].sort((a, b) => b.length - a.length).find((name) => q.includes(name));
  if (skill) {
    const needle = skill === "node" ? "node" : skill;
    const hits = timeline.filter((item) =>
      `${item.title} ${(item.points || []).join(" ")}`.toLowerCase().includes(needle)
    );
    const label = skill === "c#" ? "C#" : `${skill[0].toUpperCase()}${skill.slice(1)}`;
    if (!hits.length) {
      return `${label} is not called out in a specific role on the CV. Jayanga can confirm it at jayanga.sl@gmail.com.`;
    }
    return `Yes. ${hits
      .slice(0, 2)
      .map((item) => describe(item, label, 1))
      .join("\n\n")}`;
  }

  if (/\b(arenberg|xyron|axivis)\b/.test(q)) {
    return describe(timeline.find((item) => item.org === "Arenberg AG"), question, 2);
  }

  if (/\b(axiata|ncell|dialog|telecom)\b/.test(q)) {
    return findItems((item) => item.org.includes("Axiata"))
      .map((item) => describe(item, question, 1))
      .join("\n\n");
  }

  if (/\b(defence|defense|cdrd|intern)\b/.test(q)) {
    return findItems((item) => item.org.includes("Defence"))
      .map((item) => describe(item, question, 1))
      .join("\n\n");
  }

  if (/\b(freelance|designer|photoshop|graphic)\b/.test(q)) {
    return describe(timeline.find((item) => item.title.startsWith("Freelance")), question, 2);
  }

  if (/\b(esoft|diploma|pearson)\b/.test(q)) {
    return describe(timeline.find((item) => item.title.startsWith("Diploma")), question, 1);
  }

  const query = words(question);
  const ranked = timeline
    .map((item) => {
      const hay = `${item.kind} ${item.title} ${item.org} ${(item.points || []).join(" ")}`.toLowerCase();
      const score = query.reduce((total, word) => total + (hay.includes(word) ? (word.length > 5 ? 2 : 1) : 0), 0);
      return { item, score };
    })
    .sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score < 2) {
    return "That detail is not in the CV on this site. Jayanga can answer it directly at jayanga.sl@gmail.com.";
  }

  return ranked
    .filter((row) => row.score >= Math.max(2, ranked[0].score - 1))
    .slice(0, 2)
    .map((row) => describe(row.item, question, 2))
    .join("\n\n");
};
