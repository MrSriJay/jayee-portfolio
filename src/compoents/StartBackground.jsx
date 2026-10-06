import { HeroNetwork } from "./HeroNetwork";

export const StartBackground = () => {
  return (
    <div className="site-bg pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="tech-field absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(var(--background)/0.35)_100%)]" />
      <HeroNetwork />
    </div>
  );
};
