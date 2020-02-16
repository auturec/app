export const getRandomElement = (items: any[]): any => {
  return items[Math.floor(Math.random() * items.length)];
};

export const getNRandomElements = (items: any[], n: number): any[] => {
  const copy = items.slice();
  // eslint-disable-next-line no-unused-vars
  copy.sort((_a, _b) => 0.5 - Math.random());
  return copy.slice(0, n);
};
