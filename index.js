let ages = [3, 9, 23, 64, 2, 8, 28, 93, 24];

let ages2 = (ages[ages.length - 1] - ages[0]);
console.log(ages2);

let ages3 = 0;
let med = 0;

for (i = 0; i < ages.length; i++) {
    ages3 = ages3 + ages[i];
    med = ages3 / (i + 1);
}

console.log(med);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameL = 0;
let avgNumLetters = 0;

for (i = 0; i < names.length; i++) {
    nameL = nameL + names[i].length;
    avgNumLetters = nameL / (i + 1);
}

console.log(avgNumLetters);

for (i = 0; i < names.length; i++) {
    names.concat(i + ", ");
}

console.log(names);

//You can access any last element in an array by using the array.length() method and subtracting 1.
//You can access any first element in an array but typing array(0); The first element is always 0 in the array.

nameLengths = [];

for (i = 0; i < names.length; i++) {
    nameLengths = nameLengths + ', ' + names[i].length;
}

console.log(nameLengths);

let sumLength = 0;
let sum = 0;

for (i = 0; i < nameLengths.length; i++) {
    sumLength = sumLength + nameLengths[i].length;
}

console.log(sumLength);

let multiWord = [];

function together(word, n) {
        
    multiWord = word.repeat(n);
        return multiWord.concat();
}

console.log(together('Hello', 3));

function combineName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}

console.log(combineName('Josh', 'Fox'));

let sum2 = 0;

function arrayOfNumbers(arr) {

    for (i = 0; i < arr.length; i++) {
        sum2 = sum2 + arr[i];
    }
    
    if (sum2 >= 100) {
        return "true";
    } else {
        return "false";
    }
 }

console.log(arrayOfNumbers(ages));

let newArr = 0;
let newArrAvg = 0;

function avgNumOfArray(arr) {
    for (i = 0; i < arr.length; i++) {
        newArr = newArr + arr[i];
        newArrAvg = newArr / (i + 1);
    }
    
    return newArrAvg;
}

console.log(avgNumOfArray(ages));

function doubleArrAvg(arr, arr2) {
    for (i = 0; i < arr.length; i++) {
        newArr = newArr + arr[i];
        newArrAvg = newArr / (i + 1);
    }

    for (i = 0; i < arr2.length; i++) {
        ages3 = ages3 + arr2[i];
        med = ages3 / (i + 1);
    }

    if (newArrAvg > med) {
        return "true";
    }
}

console.log(doubleArrAvg(ages, ages2));

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.5) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 20));

function zeroTo100() {
    for (i = 0; i < 100; i++) {
        console.log(i);
    }
    return 100;
}

console.log(zeroTo100());

//this loop is a easy access way to quickly count to 100 from 0 without needing to rewrite the loop every time. You can simply call this function and you will get your count.