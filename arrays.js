<<<<<<< HEAD
var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");
//var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  (array) = [(element), ...(array)];
=======
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  (array).unshift(element);
>>>>>>> feab8ff384555f6573db97d8907cc4d05f4f03fe
  return (array);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  (array).unshift(element);
   return (array);
}

function addElementToEndOfArray(array, element) {
  (array) = [...array, (element)];
  return (array);
}

function destructivelyAddElementToEndOfArray(array, element) {
=======
  (array) = [(element), ...(array)];
  return (array);
}

function addElementToEndOfArray(array, element) {
>>>>>>> feab8ff384555f6573db97d8907cc4d05f4f03fe
  (array).push(element);
  return (array);
}

<<<<<<< HEAD
function accessElementInArray(array, index) {
  return (array[(index)]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  (array).shift();
  return (array);
}

function removeElementFromBeginningOfArray(array) {
  return (array).slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  (array).pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return (array).slice(0, -1);
}


=======
function destructivelyAddElementToEndOfArray(array, element) {
  (array) = [...array, (element)];
  return (array);
}
>>>>>>> feab8ff384555f6573db97d8907cc4d05f4f03fe
