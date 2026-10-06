import { useEffect, useRef } from "react";

const STAGES = [
  { label: "AI", x: 0.04, y: 0.26 },
  { label: "Data", x: 0.045, y: 0.5 },
  { label: "Backend", x: 0.05, y: 0.76 },
  { label: "Cloud", x: 0.955, y: 0.62 },
  { label: "Applications", x: 0.96, y: 0.3 },
];

export const HeroNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    if (!canvas || !section) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let nodes = [];
    let edges = [];
    let packets = [];
    let pulses = [];
    let dust = [];
    let running = true;
    let frame = 0;

    const color = () =>
      document.documentElement.classList.contains("dark") ? "10, 132, 255" : "0, 122, 255";

    const linkDistance = (width) => (width < 760 ? 150 : 210);

    const reset = () => {
      const width = section.clientWidth;
      const height = section.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = STAGES.map((stage) => ({
        label: stage.label,
        stage: true,
        homeX: stage.x * width,
        homeY: stage.y * height,
        x: stage.x * width,
        y: stage.y * height,
        vx: 0,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
      }));

      const extras = width < 760 ? 7 : 14;
      for (let i = 0; i < extras; i += 1) {
        const edge = Math.random();
        const x =
          edge < 0.5
            ? 16 + Math.random() * width * 0.16
            : width - 16 - Math.random() * width * 0.16;
        const y = 28 + Math.random() * (height - 56);
        nodes.push({
          label: "",
          stage: false,
          homeX: x,
          homeY: y,
          x,
          y,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.12,
          phase: Math.random() * Math.PI * 2,
        });
      }

      edges = [];
      for (let i = 0; i < STAGES.length - 1; i += 1) {
        edges.push({ a: i, b: i + 1, pipeline: true });
      }

      const max = linkDistance(width);
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          if (i < STAGES.length && j === i + 1) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.hypot(dx, dy) < max) edges.push({ a: i, b: j, pipeline: false });
        }
      }

      packets = [];
      pulses = [];
      const dustCount = width < 760 ? 10 : 18;
      dust = Array.from({ length: dustCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 0.7,
        vx: (Math.random() - 0.5) * 0.1,
        vy: -0.04 - Math.random() * 0.06,
        a: 0.08 + Math.random() * 0.1,
      }));
    };

    const spawnPacket = () => {
      if (!edges.length || packets.length > 3) return;
      const pipeline = edges.filter((edge) => edge.pipeline);
      const pool = Math.random() < 0.65 && pipeline.length ? pipeline : edges;
      const edge = pool[Math.floor(Math.random() * pool.length)];
      packets.push({
        a: edge.a,
        b: edge.b,
        t: 0,
        speed: 0.0016 + Math.random() * 0.0018,
      });
    };

    const spawnPulse = () => {
      if (!nodes.length || pulses.length > 2) return;
      pulses.push({
        index: Math.floor(Math.random() * nodes.length),
        radius: 3,
        life: 1,
      });
    };

    const paint = (animate) => {
      const width = section.clientWidth;
      const height = section.clientHeight;
      ctx.clearRect(0, 0, width, height);
      const ink = color();

      dust.forEach((speck) => {
        ctx.beginPath();
        ctx.arc(speck.x, speck.y, speck.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ink}, ${speck.a})`;
        ctx.fill();
        if (!animate) return;
        speck.x += speck.vx;
        speck.y += speck.vy;
        if (speck.y < -4) speck.y = height + 4;
        if (speck.x < -4) speck.x = width + 4;
        if (speck.x > width + 4) speck.x = -4;
      });

      if (animate) {
        frame += 1;
        nodes.forEach((node) => {
          node.phase += 0.0035;
          if (node.stage) {
            node.x = node.homeX + Math.sin(node.phase) * 8;
            node.y = node.homeY + Math.cos(node.phase * 0.75) * 6;
          } else {
            node.x += node.vx;
            node.y += node.vy;
            if (node.x < 20 || node.x > width - 20) node.vx *= -1;
            if (node.y < 20 || node.y > height - 20) node.vy *= -1;
          }
        });
        if (frame % 170 === 0) spawnPacket();
        if (frame % 110 === 0) spawnPulse();
      }

      edges.forEach((edge) => {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        ctx.strokeStyle = `rgba(${ink}, ${edge.pipeline ? 0.22 : 0.1})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      pulses.forEach((pulse) => {
        const node = nodes[pulse.index];
        if (!node) return;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ink}, ${pulse.life * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        if (animate) {
          pulse.radius += 0.45;
          pulse.life -= 0.01;
        }
      });
      pulses = pulses.filter((pulse) => pulse.life > 0);

      packets.forEach((packet) => {
        const a = nodes[packet.a];
        const b = nodes[packet.b];
        if (!a || !b) return;
        const x = a.x + (b.x - a.x) * packet.t;
        const y = a.y + (b.y - a.y) * packet.t;
        ctx.fillStyle = `rgba(${ink}, 0.8)`;
        ctx.beginPath();
        ctx.arc(x, y, 2.1, 0, Math.PI * 2);
        ctx.fill();
        if (animate) packet.t += packet.speed;
      });
      packets = packets.filter((packet) => packet.t <= 1);

      ctx.font = "11px JetBrains Mono, ui-monospace, monospace";
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.stage ? 3 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ink}, ${node.stage ? 0.8 : 0.4})`;
        ctx.fill();
        if (node.label) {
          ctx.fillStyle = `rgba(${ink}, 0.55)`;
          const textWidth = ctx.measureText(node.label).width;
          const left = node.x > width * 0.7;
          ctx.fillText(node.label, left ? node.x - textWidth - 8 : node.x + 8, node.y - 8);
        }
      });
    };

    const loop = () => {
      if (!running) return;
      paint(true);
      window.requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      running = !document.hidden && !motion.matches;
      if (running) loop();
    };

    reset();
    if (motion.matches) paint(false);
    else loop();

    const observer = new ResizeObserver(reset);
    observer.observe(section);
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onVisibility);

    return () => {
      running = false;
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};
