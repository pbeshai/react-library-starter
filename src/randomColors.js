/**
 * Generate an array of random colors
 *
 * @param {Number} numColors The number of colors to generate
 * @return {String[]} The colors array
 */
export default function randomColors(numColors) {
  const colors = [];
  for (let i = 0; i < numColors; i += 1) {
    const hex = `000000${Math.ceil(Math.random() * (255 * 255 * 255)).toString(16)}`.slice(-6);
    colors.push(`#${hex}`);
  }

  return colors;
}
