import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  type?: 'icon' | 'wordmark';
}

/**
 * Premium Theme-Adaptive Branding Logo for Ura e Gjuhës.
 * Supports:
 * - 'icon': A square, circular crest with a dual-style bridge.
 * - 'wordmark': The refined typographic URA span blending Shkodër's Mesi arches with Istanbul's Bosphorus suspension tower.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', size, type = 'icon' }) => {
  if (type === 'wordmark') {
    // Refined Typographic Horizontal URA Span
    return (
      <svg
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        style={size ? { height: size } : undefined}
      >
        {/* ================= LETTER U (Mesi Stone Arch Bridge) ================= */}
        {/* Left vertical stem */}
        <path d="M12 10 V23" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        {/* Right vertical stem */}
        <path d="M34 10 V23" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        {/* Outer stone arch curve */}
        <path d="M12 23 C12 33 34 33 34 23" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Inner stone arch curve */}
        <path d="M16 23 C16 29 30 29 30 23" stroke="var(--color-text-secondary)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Stone division lines */}
        <path d="M23 27 V29" stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <path d="M18.5 25.5 L17.5 27.5" stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <path d="M27.5 25.5 L28.5 27.5" stroke="var(--color-text-secondary)" strokeWidth="1.5" />

        {/* ================= LETTER R (Bridge Deck & Support) ================= */}
        {/* Left vertical stem */}
        <path d="M48 10 V30" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        {/* Curved loop */}
        <path d="M48 10 H60 C66 10 66 20 60 20 H48" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Diagonal support truss leg */}
        <path d="M57 20 L68 30" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        {/* Horizontal road deck element line */}
        <path d="M44 20 H72" stroke="var(--color-brand-accent)" strokeWidth="1.5" strokeDasharray="3 1.5" />

        {/* ================= LETTER A (Bosphorus Suspension Tower) ================= */}
        {/* Left tower leg */}
        <path d="M92.5 10 L82 30" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        {/* Right tower leg */}
        <path d="M92.5 10 L103 30" stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
        {/* Tower Crossbars */}
        <path d="M85.5 23 H99.5" stroke="var(--color-text-primary)" strokeWidth="2" />
        <path d="M89 16 H96" stroke="var(--color-text-primary)" strokeWidth="1.5" />
        {/* Saddle pinnacle cap */}
        <path d="M90.5 8 H94.5 V10 H90.5 Z" fill="var(--color-brand-accent)" />

        {/* ================= SUSPENSION CABLE LINE ================= */}
        {/* Sweeping cable stretching across the wordmark from A's peak to U's foundation */}
        <path
          d="M92.5 9 C68 12 40 15 12 23"
          stroke="var(--color-brand-accent)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Vertical hanger suspension wires */}
        <path d="M78 13.5 V20" stroke="var(--color-brand-accent)" strokeWidth="0.75" />
        <path d="M63 15 V20" stroke="var(--color-brand-accent)" strokeWidth="0.75" />
        <path d="M48 17 V20" stroke="var(--color-brand-accent)" strokeWidth="0.75" />
        <path d="M31 19.5 V22" stroke="var(--color-brand-accent)" strokeWidth="0.75" />
      </svg>
    );
  }

  // ================= DEFAULT: SQUARE BRAND CREST ICON =================
  const iconSize = size || 32;
  return (
    <img
      src="/logo_icon.png"
      alt="Ura Logo Icon"
      className={`inline-block object-contain rounded-xl select-none ${className}`}
      style={{ width: iconSize, height: iconSize }}
    />
  );
};
