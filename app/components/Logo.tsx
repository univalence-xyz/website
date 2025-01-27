export const Logo = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 200 200" 
    className={className}
  >
    {/* Base Glow */}
    <circle
      cx="100"
      cy="100"
      r="60"
      className="fill-blue-400/5 blur-[50px]"
    />

    {/* Outer Frame */}
    <path
      d="M100 25a75 75 0 1 1 0 150 75 75 0 0 1 0-150"
      className="stroke-blue-400/10 fill-none"
      strokeWidth="1.5"
    />

    {/* Main Geometry */}
    <g className="transform translate-[1px]">
      {/* Diamond Core */}
      <path
        d="M100 50 L150 100 100 150 50 100Z"
        className="fill-blue-500/5 stroke-blue-400/30"
        strokeWidth="1.2"
      />
      
      {/* Inner Circles */}
      <circle
        cx="100"
        cy="100"
        r="30"
        className="fill-none stroke-blue-400/20"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="100"
        r="15"
        className="fill-blue-400/10 stroke-blue-400/30"
        strokeWidth="1"
      />
      
      {/* Connection Nodes */}
      <g className="stroke-[0.3]">
        <line x1="100" y1="50" x2="100" y2="100" className="stroke-blue-400/20" />
        <line x1="150" y1="100" x2="100" y2="100" className="stroke-blue-400/20" />
        <line x1="100" y1="150" x2="100" y2="100" className="stroke-blue-400/20" />
        <line x1="50" y1="100" x2="100" y2="100" className="stroke-blue-400/20" />
      </g>

      {/* Central Element */}
      <g className="opacity-90">
        <circle
          cx="100"
          cy="100"
          r="4"
          className="fill-cyan-400/80"
        />
        <circle
          cx="100"
          cy="100"
          r="6"
          className="fill-none stroke-cyan-400/30"
          strokeWidth="0.8"
        />
      </g>
    </g>

    {/* Subtle Accents */}
    <path
      d="M85 85 L115 115 M85 115 L115 85"
      className="stroke-cyan-400/20"
      strokeWidth="0.5"
    />
  </svg>
); 