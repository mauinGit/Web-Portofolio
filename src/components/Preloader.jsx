import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`w-screen h-screen fixed inset-0 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* Animated Logo */}
      <div className="relative mb-6">
        <div
          className="w-16 h-16 rounded-full animate-ping absolute inset-0 opacity-20"
          style={{ backgroundColor: "var(--primary)" }}
        />
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center relative gradient-bg animate-pulse"
        >
          <span className="text-white text-2xl font-bold">MA</span>
        </div>
      </div>

      {/* Loading bar */}
      <div
        className="w-48 h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--glass-bg)" }}
      >
        <div
          className="h-full rounded-full gradient-bg"
          style={{
            animation: "loading-bar 1.8s ease-in-out forwards",
          }}
        />
      </div>

      <p
        className="mt-4 text-sm font-medium tracking-wider"
        style={{ color: "var(--text-secondary)" }}
      >
        Loading...
      </p>

      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
