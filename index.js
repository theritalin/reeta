module.exports = {
  sum: (a, b) => a + b,

  toWei: (a) => a * 10 ** 18,

  wait: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};
