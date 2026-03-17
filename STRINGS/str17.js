function uniqueCharacters(str) {
    let freq = {};

    // Count frequency
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Print characters that appear only once
    for (let ch in freq) {
        if (freq[ch] === 1) {
            console.log(ch);
        }
    }
}

uniqueCharacters("programming");
