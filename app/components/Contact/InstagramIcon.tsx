"use client";

import React, { forwardRef } from 'react';
import type { SVGProps } from 'react';

interface InstagramIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  title?: string;
  titleId?: string;
}

export const InstagramIcon = forwardRef<SVGSVGElement, InstagramIconProps>(
  ({ className = "w-6 h-6", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
        <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
);

InstagramIcon.displayName = 'InstagramIcon';