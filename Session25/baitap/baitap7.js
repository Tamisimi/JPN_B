function words(str) {
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
}
console.log(words("hello WORLD"));
console.log(words("rIKKei acaDEMy"));
