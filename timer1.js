const getArgs = () => {
  const args = process.argv.slice(2);
  return args;
};

const alarmBeep = (arr) => {
  for (const item of arr) {
    if (item < 0 || isNaN(item) === true) {
    continue;
    }
    const interval = item * 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, interval);
  }
};

alarmBeep(getArgs()); 