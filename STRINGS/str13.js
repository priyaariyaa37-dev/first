function charFrequency(str) {
    let freq = {};   // Empty object

    for (let ch of str) {
        if (freq[ch]) {
            freq[ch]++;   // Increase count
        } else {
            freq[ch] = 1; // First time
        }
    }

    console.log(freq);
}

charFrequency("hello");
