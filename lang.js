const locales = ['en', 'es', 'hi', 'zh', 'ar'];

export const cases = locales;
export default locales[getRandomInt(0, locales.length)];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

