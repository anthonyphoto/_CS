function mostCommon(str) {

    const lookup = {};
    let max = 0, max_char = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] in lookup) {
            lookup[str[i]]++;
        } else {
            lookup[str[i]] = 1;
            
        }
        if (lookup[str[i]] > max) {
                max = lookup[str[i]];
                max_char = str[i];
        }
    }

    console.log(lookup);
    console.log(Object.keys(lookup));


    return max_char;
}


console.log(mostCommon("ssief8e sss"));