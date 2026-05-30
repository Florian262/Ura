import React from 'react';

/**
 * Premium Academic Crest Vector Logo for Ura e Gjuhës.
 * Renders a crisp vector bridge connecting two sides, aligned with the 
 * professional "Balkan Slate & Olive" design specifications.
 */
export const Logo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Background Frame Circle - Muted Hairline style */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        stroke="#E9ECEF" 
        strokeWidth="2" 
        fill="#ffffff" 
      />

      {/* Main Bridge Arch Curve - Deep UI Ink (#1A1D20) */}
      <path
        d="M20 62 C 32 38, 68 38, 80 62"
        stroke="#1A1D20"
        strokeWidth="6"
        strokeLinecap="square"
        fill="none"
      />

      {/* Double Pillar supports (representing structural connection) */}
      <path
        d="M36 50 V 68"
        stroke="#565E64" /* Secondary Slate */
        strokeWidth="4"
        strokeLinecap="square"
      />
      <path
        d="M64 50 V 68"
        stroke="#3A5A40" /* Academic Olive */
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Pinnacle Star - Solid Olive Crown */}
      <polygon 
        points="50,30 52,36 58,36 53,40 55,46 50,42 45,46 47,40 42,36 48,36" 
        fill="#3A5A40" 
      />
    </svg>
  );
};
