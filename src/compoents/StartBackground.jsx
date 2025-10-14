import { useEffect, useState } from "react";

export const StartBackground = () => {
  const [programmingElements, setProgrammingElements] = useState([]);
  const [metors, setMetors] = useState();

  useEffect(() => {
    generateProgrammingElements();
    generateMetors();

    const handleResize = () => {
      generateProgrammingElements();
      generateMetors();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateProgrammingElements = () => {
    const numberOfElements = Math.floor(window.innerWidth * window.innerHeight / 8000); // Adjust density here
    const newElements = [];
    const programmingSymbols = [
      "console.log", "print", "printf", "System.out", "</>", "@", "$", "=>", "function", "return", "<div>", "</div>", "if", "else", "{ }", "let", "const"
    ];

    for (let i = 0; i < numberOfElements; i++) {
      const randomSymbol = programmingSymbols[Math.floor(Math.random() * programmingSymbols.length)];
      const size = Math.random() * 1.5 + 0.5; // Adjust symbol size here to be smaller
      const x = Math.random() * 100; // Scatter horizontally
      const y = Math.random() * 100; // Scatter vertically
      const opacity = Math.random() * 0.1 + 0.3; // Lower opacity for a more muted effect
      const animationDuration = Math.random() * 4 + 2;

      newElements.push({
        id: i,
        size,
        x,
        y,
        opacity,
        animationDuration,
        symbol: randomSymbol
      });
    }

    setProgrammingElements(newElements);
  };

  const generateMetors = () => {
    const numberOfMetors = 4;
    const newMetors = [];
    for (let i = 0; i < numberOfMetors; i++) {
      newMetors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3
      });
    }
    setMetors(newMetors);
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none z-0">
      {programmingElements && programmingElements.map((element) => (
        <div
          key={element.id}
          className="programming-element animate-pulse-subtle"
          style={{
            fontSize: `${Math.random() * 8 + 4}px`, // Smaller text range (4px to 12px)
            left: `${element.x}%`, // Scatter horizontally
            top: `${element.y}%`, // Scatter vertically
            opacity: element.opacity, // Lower opacity for a muted look
            animationDuration: `${element.animationDuration}s`,
            position: 'absolute', // Absolute positioning
            whiteSpace: 'nowrap', // Prevent wrapping
            color: 'white', // White text color for contrast
            textShadow: '0 0 3px rgba(255, 255, 255, 0.5)', // Subtle glow effect
            filter: 'blur(2px)', // Apply blur effect to the text
          }}
        >
          {element.symbol}
        </div>
      ))}

      {metors && metors.map((metor) => (
        <div
          key={metor.id}
          className="meteor animate-meteor"
          style={{
            width: `${metor.size * 50}px`, // Adjust size scaling
            height: `${metor.size}px`,
            left: `${metor.x}%`,
            top: `${metor.y}%`,
            animationDelay: `${metor.delay}s`,
            animationDuration: `${metor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
