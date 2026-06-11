import type { SVGProps } from "react";

/** Small arrow used in nav menu items and CTA balloons (11x9). */
export function ArrowRightSmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.8008 4.39062L5.3125 8.78125L4.6875 8L8.57422 4.89062H0V3.89062H8.57422L4.6875 0.78125L5.3125 0L10.8008 4.39062Z" />
    </svg>
  );
}

/** Medium arrow used in CTA button rows (13x11). */
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 5.26855L6.41406 10.5371L5.80371 9.77344L10.8232 5.75781H0V4.78027H10.8242L5.80371 0.763672L6.41406 0L13 5.26855Z" />
    </svg>
  );
}

/** Chevron down used in carousel navigation (9x6). */
export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.5 6L-1.49748e-07 0.613418L0.800712 -3.58402e-07L4.5 4.42812L8.19929 -3.50002e-08L9 0.613419L4.5 6Z" />
    </svg>
  );
}

/** External link icon used inside VIEW ALL buttons. */
export function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 3h8v8" />
      <path d="M3 11l8-8" />
    </svg>
  );
}
