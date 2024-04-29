function darkenColor(color: string, percent: number): string {
  let r = parseInt(color.slice(1, 3), 16) as number;
  let g = parseInt(color.slice(3, 5), 16) as number;
  let b = parseInt(color.slice(5, 7), 16) as number;

  // Calculate darker color
  r = Math.floor((r * (100 - percent)) / 100);
  g = Math.floor((g * (100 - percent)) / 100);
  b = Math.floor((b * (100 - percent)) / 100);

  // Adjust colors to ensure visibility
  if (r < 50) r = 50;
  if (g < 50) g = 50;
  if (b < 50) b = 50;

  // Convert back to hex
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

export default darkenColor;
