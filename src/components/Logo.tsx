import React from 'react';

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Light Green U */}
        <path d="M 40 30 L 25 30 A 20 20 0 0 0 25 70 L 40 70" stroke="#9dcda9" />
        
        {/* Right Light Green U */}
        <path d="M 60 30 L 75 30 A 20 20 0 0 1 75 70 L 60 70" stroke="#9dcda9" />

        {/* Top Dark Green U */}
        <path d="M 30 40 L 30 25 A 20 20 0 0 1 70 25 L 70 40" stroke="#1d9129" />

        {/* Bottom Dark Green U */}
        <path d="M 30 60 L 30 75 A 20 20 0 0 0 70 75 L 70 60" stroke="#1d9129" />
      </g>
    </svg>
  );
}
