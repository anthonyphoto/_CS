// Write an algorithm to check whether any permutation of a string is a palindrome. A palindrome is a string that reads the same forwards and backwards: for example, "madam" or "racecar". Your algorithm needs to check if any permutation of the string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.

function isPalindrome(str) {
    const arr = new Array(26).fill(0);
    
    for (let i = 0; i < str.length; i++) {
        arr[str.charCodeAt(i) - 97]++;
    }
    
    return arr.filter(qty => qty % 2 === 1).length <= 1
}

// console.log(isPalindrome("racecar"));



// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

function groupByAnagrams(arr) {
    for (let i = 0; i < arr.length; i++) {
        let codeSum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            codeSum += arr[i];
        }
        console.log(codeSum);
    }

} 

console.log(groupByAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
