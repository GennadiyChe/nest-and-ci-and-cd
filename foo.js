process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
  if (index > 1) {
    for (const ch of val) {
      console.log('->>', ch);
    }
  }
});
