// components/DenaryLogo.jsx

import FalconColorPalette from "./FalconTheme/FalconColorPalette";

export default function Logo({ size = 64, className = "" }) {
  const w = size;
  const h = size;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Denary logo"
    >
      {/* gold coin */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill={FalconColorPalette.primary}
        stroke={FalconColorPalette.primaryHover}
        strokeWidth="2"
      />

      {/* falcon head / D-shape (deep blue) */}
      <path
        d="M52 28
           C62 30, 68 40, 66 50
           C63 64, 52 70, 42 72
           C46 66, 48 58, 47 50
           C46 40, 50 34, 52 28
           Z"
        fill={FalconColorPalette.primary}
      />

      {/* beak highlight */}
      <path
        d="M66 46
           C68 44, 72 44, 74 46
           C73 47, 70 48, 66 46 Z"
        fill={FalconColorPalette.darkGreen}
        opacity="0.95"
      />

      {/* small eye */}
      <circle cx="54" cy="40" r="1.6" fill="#FFFFFF" opacity="0.95" />

      {/* D-letter stroke hint (a subtle ring notch) */}
      <path
        d="M60 25
           C78 34, 78 66, 60 75"
        stroke={FalconColorPalette.primary}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.14"
      />
    </svg>
  );
}
