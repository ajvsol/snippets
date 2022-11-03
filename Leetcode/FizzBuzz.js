// https://leetcode.com/problems/fizz-buzz/description/

// Given an integer n, return a string array answer (1-indexed) where:

//     answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//     answer[i] == "Fizz" if i is divisible by 3.
//     answer[i] == "Buzz" if i is divisible by 5.
//     answer[i] == i (as a string) if none of the above conditions are true.

function fizzbuzz(integer) {
    let answer = [];
    for (let i = 1; i < integer; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            answer.push('FizzBuzz')
        } else if (i % 3 === 0) {
            answer.push('Fizz') 
        } else if (i % 5 ===  0) {
            answer.push('Buzz') 
        } else {
            answer.push(`${i}`)
        }
    }
    return answer;
}

// Version that takes in an array of numbers
function FizzBuzzifier(array) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        console.log(`Loop number ${i}`)
        if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
            answer.push('FizzBuzz')
        } else if (array[i] % 3 === 0) {
            answer.push('Fizz') 
        } else if (array[i] % 5 === 0) {
            answer.push('Buzz') 
        } else {
            answer.push(array[i])
        }
    }
    console.log(`answer:`, answer);
    return answer;
}