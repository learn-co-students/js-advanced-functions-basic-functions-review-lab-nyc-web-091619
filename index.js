const saturdayFun = (thing = 'roller-skate') =>
  `This Saturday, I want to ${thing}!`;

const mondayWork = (thing = 'go to the office') =>
  `This Monday, I will ${thing}.`;

const wrapAdjective = (wrap = '*') => string =>
  `You are ${wrap}${string}${wrap}!`;

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const actionApplyer = (startInt, arr) =>
  arr.reduce((init, cb) => cb(init), startInt);
