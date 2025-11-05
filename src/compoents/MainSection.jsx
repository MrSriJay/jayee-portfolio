import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const MainSection = () => {
  const fullName = "Jayanga Palihena"; // Correct spelling
  const description =
    "Skilled Software Engineer with 3+ years of experience in full-stack development, specializing in robust architecture, clean code, and user-centered web and application design using Python, Java, Java Spring, and PHP.";

  const [typedName, setTypedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const typeNext = () => {
      if (indexRef.current < fullName.length) {
        setTypedName(fullName.slice(0, indexRef.current + 1));
        indexRef.current += 1;
        timeoutRef.current = setTimeout(typeNext, 140);
      } else {
        setShowCursor(false);
      }
    };

    typeNext();

    return () => clearTimeout(timeoutRef.current); // Cleanup to prevent duplicate runs
  }, [fullName]);

  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I'm </span>
            <span className="text-primary">{typedName}</span>
            {showCursor && <span className="blinking-cursor">|</span>}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            {description}
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View my Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-muted-foreground text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
