import tinycolor from 'tinycolor2';

// Recursively run to ensure that a valid colour is returned
// `rand` can sometimes return a string < 6 chars
export const getRandomColour = () => {
  const dec    = parseInt('ffffff', 16);
  const rand   = Math.floor(Math.random() * dec).toString(16);
  const colour = tinycolor(rand);

  return colour.isValid() ? colour : getRandomColour();
};

export const getBrightness = (colour) => colour.getBrightness();

