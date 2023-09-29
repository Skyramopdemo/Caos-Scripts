/** AlreadSorted
 * 
 * @param {*} array 
 * @returns 
 */
function alreadSorted(array){
  return array;
}

/** VoidSort
 * 
 * @param {*} array 
 * @returns 
 */
function voidSort(array){
  return array = [0];
}

/** IntegerSort
 * 
 * @param {*} array 
 * @param {*} start 
 * @returns 
 */
function integerSort(array, start) {
  const n = [];
  for (let i = 0; i < array.length; i++) {
      n[i] = i + start;
  }
  return n;
}

/** CommunistSort
 * 
 * @param {*} array 
 * @returns 
 */
function communistSort(array){
  const sum = 0;
  const arr = [];
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  const med = sum / array.length;
  for (let i = 0; i < array.length; i++) {
      arr[i] = med;
  }
  return arr;
}

/**
 * 
 * @param {*} array 
 * @returns 
 */
function captalistSort(array) {
  const sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
      array[i] = 0;
  }
  array[0] = sum;
  return array;
}

/**
 * 
 * @param {*} size 
 * @param {*} minimun 
 * @returns 
 */
function randNumberArray(size, minimun = 0){
  const array = [];
  for (let i = 0; i < size; i++) {
      array[i] = Math.floor(Math.random() * (size - minimun) + minimun);
  }
  return array;
}