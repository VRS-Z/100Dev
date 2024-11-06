function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(array) {
    let total = 0;
    for (let number of array) {
      total += number;
    }
    return total;
  };
  