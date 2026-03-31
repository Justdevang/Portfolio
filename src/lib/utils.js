/**
 * A basic replacement for the classic 'cn' utility.
 * Since clsx and tailwind-merge are not in package.json,
 * this function simple filters and joins non-falsy strings.
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
