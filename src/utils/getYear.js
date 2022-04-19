export const getYear = (time) => {
  const date = new Date(time);
  const options = {
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
