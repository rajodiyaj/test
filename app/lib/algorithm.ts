export default (high: any, low: any, close: any) => {
  const average = (parseFloat(high) + parseFloat(low)) / 2;
  close = parseFloat(close);
  low = parseFloat(low);

  const tenP = close * 0.1;

  if (average > close) {
    return 1;
  } else if (average < low) {
    return 0;
  } else {
    return 2;
  }
};
