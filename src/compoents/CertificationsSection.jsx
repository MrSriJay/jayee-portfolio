import { ArrowUpRight, Award } from "lucide-react";

const certifications = [
  {
    index: "01",
    title: "Claude Academy: AI Fluency — Framework and Foundations",
    issuer: "Anthropic",
    when: "Nov 2026",
    href: "https://academy.claude.com/verify/64be2d4334a91ef1fbcd2a2227d16bec",
  },
  {
    index: "02",
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    when: "Nov 2026 – Nov 2028",
  },
  {
    index: "03",
    title: "AI Reasoning Models in Practice: Building an AI-Powered Coach",
    issuer: "LinkedIn",
    when: "Dec 2025",
  },
  {
    index: "04",
    title: "Introduction to IoT",
    issuer: "Cisco",
    when: "Mar 2021",
  },
];

const Card = ({ item }) => {
  const body = (
    <>
      <span className="w-6 shrink-0 text-[11px] text-muted-foreground">{item.index}</span>
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
        <Award className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <h3 className="text-sm leading-snug text-foreground">{item.title}</h3>
        <p className="mt-2 text-[12px] text-muted-foreground">
          {item.issuer}
          <span className="px-1.5 text-border">·</span>
          {item.when}
        </p>
        {item.href && (
          <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-primary sm:hidden">
            verify
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        )}
      </span>
      {item.href && (
        <span className="hidden shrink-0 items-center gap-1 self-center text-[11px] text-primary sm:inline-flex">
          verify
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      )}
    </>
  );

  const className =
    "flex items-center gap-5 rounded-lg border border-border bg-background/40 px-5 py-5 transition-colors duration-200 hover:border-primary/40 sm:px-6 sm:py-6";

  if (!item.href) {
    return <article className={className}>{body}</article>;
  }

  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  );
};

export const CertificationsSection = () => {
  return (
    <section id="licenses" className="screen">
      <div className="container reveal flex min-h-0 w-full flex-1 flex-col">
        <h2 className="section-title">Licenses</h2>
        <div className="screen-body">
          <div className="ide-panel">
            <div className="ide-bar">
              <span className="ide-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>~/portfolio/licenses</span>
            </div>
            <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-6">
              {certifications.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
