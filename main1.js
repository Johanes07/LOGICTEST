
let myarr1 = [12,9,30,'A','M',99,82,'J','N','B'];

function compareNumbers(a, b) {

  if (typeof a === 'string' && typeof b === 'string') {
    if (a < b) return -1;
    else return 1;
  }
  // check for string vs num
  if (typeof a === 'string' && typeof b === 'number') {
    return -1;
  }
  // check for string vs num
  if (typeof a === 'number' && typeof b === 'string') {
    return ;
  }
  // check for string vs string
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) return -1;
    else return 1;
  }
  return 0;
}
myarr1.sort(compareNumbers);
console.log(myarr1);