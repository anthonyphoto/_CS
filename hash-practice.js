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

// function sortString(str){
//     var arr = str.split('');
//     var tmp;
//     for(var i = 0; i < arr.length; i++){
//       for(var j = i + 1; j < arr.length; j++){
//         /* if ASCII code greater then swap the elements position*/
//         if(arr[i] > arr[j]){
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//     return arr.join('');
//   }

/* my solution o(n^2) */
function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
  }

function groupByAnagrams(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let key;
        for (let j = 0; j < arr[i].length; j++) {
            key = sortString(arr[i]);
        }

        const found = newArr.find(item => item.key === key);
        if (found) {
            found.arr.push(arr[i])
        }
        else {
            newArr.push({
                key,
                arr: [arr[i]]
            })
        } 

        console.log('--------------');
        console.log(newArr);
    }

    return newArr.map(item => item.arr);

} 
/* o(n) solution */ 
/* make use of mutable objects to create a one-pass */
function groupByAnagrams2(arr) {
    const ret = [], lookup = {};
    for (let word of arr) {
        const srt = word.split("").sort().join("");
        if (srt in lookup) lookup[srt].push(word);
        else ret.push(lookup[srt] = [word]);
    }
    return ret;
}

console.log(groupByAnagrams2(['bb', 'ac', 'east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));




